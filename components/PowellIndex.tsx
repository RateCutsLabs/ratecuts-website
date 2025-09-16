'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GaugeChart from 'react-gauge-chart';

export default function PowellIndex() {
  const [indexValue, setIndexValue] = useState(50);

  // Auto-animate the gauge value for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      const newValue = 30 + Math.random() * 40; // Random value between 30-70
      setIndexValue(newValue);
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const getGaugeColors = () => {
    if (indexValue < 30) return {
      text: 'text-red-400'
    };
    if (indexValue < 70) return {
      text: 'text-yellow-400'
    };
    return {
      text: 'text-green-400'
    };
  };

  const colors = getGaugeColors();

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
          <div className="relative">
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