'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Tokenomics() {
  const [lineCoordinates, setLineCoordinates] = useState({
    supplyToCenter: { x1: 0, y1: 0, x2: 0, y2: 0 },
    launchToCenter: { x1: 0, y1: 0, x2: 0, y2: 0 },
    treasuryToCenter: { x1: 0, y1: 0, x2: 0, y2: 0 },
    communityToCenter: { x1: 0, y1: 0, x2: 0, y2: 0 },
    marketingToCenter: { x1: 0, y1: 0, x2: 0, y2: 0 }
  });
  
  const supplyRef = useRef<HTMLDivElement>(null);
  const launchRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const treasuryRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);
  const marketingRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLinePositions = () => {
      if (!supplyRef.current || !launchRef.current || !centerRef.current || 
          !treasuryRef.current || !communityRef.current || !marketingRef.current ||
          !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      
      const supplyRect = supplyRef.current.getBoundingClientRect();
      const launchRect = launchRef.current.getBoundingClientRect();
      const centerRect = centerRef.current.getBoundingClientRect();
      const treasuryRect = treasuryRef.current.getBoundingClientRect();
      const communityRect = communityRef.current.getBoundingClientRect();
      const marketingRect = marketingRef.current.getBoundingClientRect();

      // Calculate relative positions within the container
      const supplyX = supplyRect.left + supplyRect.width / 2 - containerRect.left;
      const supplyY = supplyRect.top + supplyRect.height / 2 - containerRect.top;
      
      const launchX = launchRect.left + launchRect.width / 2 - containerRect.left;
      const launchY = launchRect.top + launchRect.height / 2 - containerRect.top;
      
      const centerX = centerRect.left + centerRect.width / 2 - containerRect.left;
      const centerY = centerRect.top + centerRect.height / 2 - containerRect.top;
      
      const treasuryX = treasuryRect.left + treasuryRect.width / 2 - containerRect.left;
      const treasuryY = treasuryRect.top + treasuryRect.height / 2 - containerRect.top;
      
      const communityX = communityRect.left + communityRect.width / 2 - containerRect.left;
      const communityY = communityRect.top + communityRect.height / 2 - containerRect.top;
      
      const marketingX = marketingRect.left + marketingRect.width / 2 - containerRect.left;
      const marketingY = marketingRect.top + marketingRect.height / 2 - containerRect.top;

      setLineCoordinates({
        supplyToCenter: { x1: supplyX, y1: supplyY, x2: centerX, y2: centerY },
        launchToCenter: { x1: launchX, y1: launchY, x2: centerX, y2: centerY },
        treasuryToCenter: { x1: treasuryX, y1: treasuryY, x2: centerX, y2: centerY },
        communityToCenter: { x1: communityX, y1: communityY, x2: centerX, y2: centerY },
        marketingToCenter: { x1: marketingX, y1: marketingY, x2: centerX, y2: centerY }
      });
    };

    // Initial calculation
    updateLinePositions();
    
    // Update on resize and after a short delay to ensure rendering
    window.addEventListener('resize', updateLinePositions);
    // Also update after a short delay to handle initial render
    const timer = setTimeout(updateLinePositions, 100);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateLinePositions);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="tokenomics" className="relative py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-8 gradient-text whitespace-nowrap">
            TOKENOMICS
          </h2>
          
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-16 sm:max-w-24 animate-pulse"></div>
            <span className="text-yellow-400 font-bold text-sm sm:text-base animate-pulse">TOKEN SUPPLY</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-16 sm:max-w-24 animate-pulse"></div>
          </div>
        </motion.div>

        {/* Tokenomics Layout - With Reduced Gap and Connection Lines */}
        <div ref={containerRef} className="flex flex-col items-center space-y-6 mb-8 sm:mb-12 px-4 relative">
        
          {/* <svg 
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{ minHeight: '500px' }}
          >
           
            <line 
              x1={lineCoordinates.supplyToCenter.x1} 
              y1={lineCoordinates.supplyToCenter.y1} 
              x2={lineCoordinates.supplyToCenter.x2} 
              y2={lineCoordinates.supplyToCenter.y2} 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="2" 
              strokeDasharray="6,6"
            />
            <line 
              x1={lineCoordinates.launchToCenter.x1} 
              y1={lineCoordinates.launchToCenter.y1} 
              x2={lineCoordinates.launchToCenter.x2} 
              y2={lineCoordinates.launchToCenter.y2} 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="2" 
              strokeDasharray="6,6"
            />
            
          
            <line 
              x1={lineCoordinates.treasuryToCenter.x1} 
              y1={lineCoordinates.treasuryToCenter.y1} 
              x2={lineCoordinates.treasuryToCenter.x2} 
              y2={lineCoordinates.treasuryToCenter.y2} 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="2" 
              strokeDasharray="6,6"
            />
            <line 
              x1={lineCoordinates.communityToCenter.x1} 
              y1={lineCoordinates.communityToCenter.y1} 
              x2={lineCoordinates.communityToCenter.x2} 
              y2={lineCoordinates.communityToCenter.y2} 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="2" 
              strokeDasharray="6,6"
            />
            <line 
              x1={lineCoordinates.marketingToCenter.x1} 
              y1={lineCoordinates.marketingToCenter.y1} 
              x2={lineCoordinates.marketingToCenter.x2} 
              y2={lineCoordinates.marketingToCenter.y2} 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="2" 
              strokeDasharray="6,6"
            />
          </svg> */}

          <div className="flex justify-center w-full max-w-2xl gap-12 relative z-10">
            {/* Supply - Left */}
            <motion.div
              ref={supplyRef}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-36 h-36 rounded-full bg-gradient-to-br from-yellow-400/20 to-transparent border-2 border-gray-700 flex flex-col items-center justify-center text-center p-5 shadow-lg"
            >
              <div className="text-3xl font-black text-yellow-400">
                1B
              </div>
              <div className="text-gray-300 text-base uppercase tracking-wide mt-2">
                Supply
              </div>
            </motion.div>

            <motion.div
              ref={launchRef}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-36 h-36 rounded-full bg-gradient-to-br from-pink-500/20 to-transparent border-2 border-gray-700 flex flex-col items-center justify-center text-center p-5 shadow-lg"
            >
              <div className="text-xl font-black text-pink-500">
                Pinksale
              </div>
              <div className="text-gray-300 text-base uppercase tracking-wide mt-2">
                Launch
              </div>
            </motion.div>
          </div>

          {/* Central Token Allocation Image - Without Box */}
          <motion.div 
            ref={centerRef}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="my-0 relative z-10"
          >
            <Image 
              src="/token-alocation-new.png"
              alt="Token Allocation Chart"
              width={320}
              height={320}
              className="w-64 h-64 sm:w-80 sm:h-80 object-contain"
              loading="lazy"
              quality={75}
            />
          </motion.div>

        
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-8 sm:mb-16 px-4"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">
            70% pure chaos for the people.
          </p>
        </motion.div>
       
      </div>
    </section>
  );
}