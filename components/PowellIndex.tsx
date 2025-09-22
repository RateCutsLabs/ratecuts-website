'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import GaugeChart to prevent SSR issues
const GaugeChart = dynamic(() => import('react-gauge-chart'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-white font-black space-grotesk animate-pulse">LOADING...</div>
    </div>
  )
});

export default function PowellIndex() {
  const [displayValue, setDisplayValue] = useState(50);
  const [targetValue, setTargetValue] = useState(50);
  const [isComponentReady, setIsComponentReady] = useState(false);

  // Initialize component after mount to ensure proper loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComponentReady(true);
    }, 1000); // Wait 1 second before showing the component

    return () => clearTimeout(timer);
  }, []);

  // Animate the display value gradually to the target value (count up or down)
  useEffect(() => {
    if (!isComponentReady) return;
    
    let animationFrame: number;
    let startTime: number | null = null;
    const duration = 1500; // 1.5 seconds for the animation
    
    const animateValue = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease out function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      
      // Calculate the current value based on displayValue and targetValue
      const currentValue = Math.round(
        displayValue + (targetValue - displayValue) * easeOut
      );
      
      setDisplayValue(currentValue);
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animateValue);
      }
    };
    
    animationFrame = requestAnimationFrame(animateValue);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [targetValue, isComponentReady, displayValue]);

  // Auto-animate the gauge value for demo purposes
  useEffect(() => {
    if (!isComponentReady) return;
    
    const interval = setInterval(() => {
      const newValue = Math.random() * 100; // Random value between 0-100
      setTargetValue(newValue);
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, [isComponentReady]);

  const getGaugeColors = () => {
    if (displayValue < 33) return {
      text: 'text-red-400'
    };
    if (displayValue < 67) return {
      text: 'text-yellow-400'
    };
    return {
      text: 'text-green-400'
    };
  };

  const colors = getGaugeColors();

  // Show loading state until component is ready
  if (!isComponentReady) {
    return (
      <div className="relative flex flex-col items-center w-[180px] h-[126px] sm:w-[280px] sm:h-[196px] md:w-[400px] md:h-[280px] lg:w-[500px] lg:h-[350px]">
        {/* Powell Index Title */}
        <div className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-black text-white space-grotesk animate-pulse mb-2 sm:mb-3 md:mb-4 lg:mb-6" style={{textShadow: '0 0 8px rgba(255, 255, 255, 0.6)'}}>
          POWELL INDEX
        </div>
        
        {/* Loading Text Only */}
        <div className="flex items-center justify-center w-full flex-1">
          <div className="text-xs sm:text-sm md:text-lg lg:text-xl font-black text-white space-grotesk animate-pulse">
            LOADING...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center w-full">
      {/* Powell Index Title */}
      <div className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-black text-white space-grotesk animate-neon-flicker mb-2 sm:mb-3 md:mb-4 lg:mb-6" style={{textShadow: '0 0 8px rgba(255, 255, 255, 0.6)'}}>
        POWELL INDEX
      </div>
      
      {/* Circular Gauge Chart with Side Labels */}
      <div className="relative flex items-center justify-center w-[180px] h-[126px] sm:w-[280px] sm:h-[196px] md:w-[400px] md:h-[280px] lg:w-[500px] lg:h-[350px]">
        {/* Left Label - NO CUTS */}
        <div className="absolute left-[5px] sm:left-[17px] md:left-[24px] lg:left-[30px] bottom-[7px] sm:bottom-[11px] md:bottom-[16px] lg:bottom-[20px]">
          <div className="text-left">
            <div className="text-xs sm:text-sm md:text-xl lg:text-3xl text-center pb-6 sm:pb-8 md:pb-12 lg:pb-16 font-black text-white space-grotesk leading-tight" style={{textShadow: '0 0 8px rgba(255, 255, 255, 0.6)'}}>
              NO <br /> CUTS
            </div>
          </div>
        </div>
        
        {/* Gauge */}
        <div className="relative w-full h-full">
          <GaugeChart 
            id="powell-gauge"
            nrOfLevels={3}
            colors={[
              '#ef4444', // Red for bearish
              '#eab308', // Yellow for neutral  
              '#22c55e'  // Green for bullish
            ]}
            arcWidth={0.3}
            percent={displayValue / 100} // Use the animated display value
            textColor="#ffffff"
            needleColor="#ffffff"
            hideText={true}
            animDelay={0}
            animateDuration={50} // Very fast animation since we're handling it manually
            style={{ width: '100%', height: '100%' }}
          />
          {/* Custom center text that animates smoothly */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className={`text-lg sm:text-2xl md:text-4xl lg:text-6xl mt-10 sm:mt-14 md:mt-20 lg:mt-28 font-black ${colors.text} space-grotesk animate-neon-flicker`}>
              {displayValue}
            </div>
          </div>
        </div>
        
        {/* Right Label - CUT NOW */}
        <div className="absolute right-[5px] sm:right-[17px] md:right-[24px] lg:right-[30px] bottom-[7px] sm:bottom-[11px] md:bottom-[16px] lg:bottom-[20px]">
          <div className="text-right">
            <div className="text-xs sm:text-sm md:text-xl lg:text-3xl text-center pb-6 sm:pb-8  md:pb-12 lg:pb-16 font-black text-white space-grotesk leading-tight" style={{textShadow: '0 0 8px rgba(255, 255, 255, 0.6)'}}>
              CUT <br />  NOW
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}