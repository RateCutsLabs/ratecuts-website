'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import GaugeChart to prevent SSR issues
const GaugeChart = dynamic(() => import('react-gauge-chart'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-80 h-80 border-4 border-gray-600 rounded-full animate-pulse"></div>
    </div>
  )
});

export default function PowellIndex() {
  const [indexValue, setIndexValue] = useState(50);
  const [isComponentReady, setIsComponentReady] = useState(false);

  // Initialize component after mount to ensure proper loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComponentReady(true);
    }, 1000); // Wait 1 second before showing the component

    return () => clearTimeout(timer);
  }, []);

  // Auto-animate the gauge value for demo purposes
  useEffect(() => {
    if (!isComponentReady) return;
    
    const interval = setInterval(() => {
      const newValue = Math.random() * 100; // Random value between 0-100 (full range)
      setIndexValue(newValue);
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, [isComponentReady]);

  const getGaugeColors = () => {
    if (indexValue < 33) return {
      text: 'text-red-400'
    };
    if (indexValue < 67) return {
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
      <div className="relative flex flex-col items-center" style={{ width: '500px', height: '400px' }}>
        <div className="text-3xl md:text-4xl font-black text-white space-grotesk animate-pulse mb-6">
          LOADING...
        </div>
        <div className="flex items-center justify-center" style={{ width: '500px', height: '350px' }}>
          <div className="w-80 h-80 border-4 border-gray-600 rounded-full animate-spin">
            <div className="w-full h-full border-t-4 border-yellow-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center">
      {/* Powell Index Title */}
      <div className="text-3xl md:text-4xl font-black text-white space-grotesk animate-neon-flicker mb-6" style={{textShadow: '0 0 8px rgba(255, 255, 255, 0.6)'}}>
        POWELL INDEX
      </div>
      
      {/* Circular Gauge Chart with Side Labels */}
      <div className="relative flex items-center justify-center">
        {/* Left Label - NO CUTS */}
        <div className="absolute left-[30px] bottom-[20px]">
          <div className="text-left">
            <div className="text-3xl text-center pb-16 font-black text-white space-grotesk leading-tight" style={{textShadow: '0 0 8px rgba(255, 255, 255, 0.6)'}}>
              NO <br /> CUTS
            </div>
            {/* <div className="text-xl font-black text-white space-grotesk leading-tight" style={{textShadow: '0 0 8px rgba(255, 255, 255, 0.6)'}}>
             
            </div> */}
          </div>
        </div>
        
        {/* Gauge */}
        <motion.div 
          className="flex justify-center"
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="relative" style={{ width: '500px', height: '350px' }}>
            <GaugeChart 
              id="powell-gauge"
              nrOfLevels={3}
              colors={[
                '#ef4444', // Red for bearish
                '#eab308', // Yellow for neutral  
                '#22c55e'  // Green for bullish
              ]}
              arcWidth={0.3}
              percent={indexValue / 100}
              textColor="#ffffff"
              needleColor="#ffffff"
              hideText={true}
              animDelay={0}
              animateDuration={1000}
              style={{ width: '500px', height: '350px' }}
            />
            {/* Custom center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className={`text-6xl mt-28 font-black ${colors.text} space-grotesk animate-neon-flicker`}>
                {Math.round(indexValue)}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Right Label - CUT NOW */}
        <div className="absolute right-[30px] bottom-[20px]">
          <div className="text-right">
            <div className="text-3xl text-center pb-16 font-black text-white space-grotesk leading-tight" style={{textShadow: '0 0 8px rgba(255, 255, 255, 0.6)'}}>
              CUT <br />  NOW
            </div>
            
            {/* <div className="text-xl font-black text-white space-grotesk leading-tight" style={{textShadow: '0 0 8px rgba(255, 255, 255, 0.6)'}}>
             
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}