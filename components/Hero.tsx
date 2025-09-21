'use client';

import { motion } from 'framer-motion';
import PowellIndex from '@/components/PowellIndex';
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    // Removed pt-20 and md:pt-24 since navigation is no longer fixed
    <section id="hero" className="relative flex items-start md:items-center justify-center overflow-hidden pt-8 md:pt-0 pb-0">
      <div className="relative z-10 text-center px-2 w-full mx-auto mt-8 md:mt-0">
        {/* Main Title - Matching Coming Soon Style */}
        {/* <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 md:mb-8 lg:mb-16 relative"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 orbitron whitespace-nowrap">
            <span className="gradient-text animate-neon-flicker">$RATECUTS</span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-8 md:max-w-16 lg:max-w-32 animate-pulse" />
            <span className="text-cyan-400 text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase space-grotesk animate-neon-flicker">EPIC BATTLE</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-8 md:max-w-16 lg:max-w-32 animate-pulse" />
          </div>
        </motion.div> */}

        {/* Character Showcase with Powell Index - Matching Coming Soon Page */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          // Reduced bottom margin from mb-4 sm:mb-6 md:mb-16 to mb-2 sm:mb-3 md:mb-8
          className="flex flex-row justify-center items-center gap-0 sm:gap-1 md:gap-0 mb-2 sm:mb-3 md:mb-8 px-2 sm:px-4 relative z-10 w-full"
        >
          {/* Rate Character */}
          <motion.div
            className="relative group flex flex-col items-center flex-shrink-0 order-1 sm:-mr-3 md:-mr-4 lg:-mr-8"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: [0, -15, 0] }}
            transition={{ 
              x: { duration: 1.5, ease: "easeOut" },
              opacity: { duration: 1.5, ease: "easeOut" },
              y: { duration: 5, repeat: Infinity, delay: 2 }
            }}
          >
            <motion.div
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-[18rem] md:h-[18rem] lg:w-[24rem] lg:h-[24rem] xl:w-[28rem] xl:h-[28rem] flex items-center justify-center mb-2 relative"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <motion.div
                  animate={{
                    opacity: [0.8, 1, 0.8],
                    filter: [
                      'drop-shadow(0 0 20px rgba(255, 20, 147, 0.3))',
                      'drop-shadow(0 0 40px rgba(255, 20, 147, 0.6))',
                      'drop-shadow(0 0 20px rgba(255, 20, 147, 0.3))'
                    ]
                  }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="w-full h-full"
                >
                  <Image
                    src="/rate-character-image.webp"
                    alt="Rate Character"
                    fill
                    className="object-contain"
                    loading="eager"
                    priority
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              </motion.div>
            <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-yellow-400 inter mb-1 animate-neon-flicker" style={{textShadow: '0 0 15px rgba(234, 179, 8, 0.9), 0 0 25px rgba(234, 179, 8, 0.7), 0 0 35px rgba(234, 179, 8, 0.5)'}}>Rate Riser</h3>
          </motion.div>

          {/* POWELL INDEX - CENTER AND MASSIVE */}
          <motion.div
            className="relative flex flex-col items-center flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg order-2 sm:-mx-2 md:-mx-4 lg:-mx-8 z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Interactive Powell Index Gauge */}
            <div className="w-full lg:mt-2 flex items-center justify-center">
              <PowellIndex />
            </div>
          </motion.div>

          {/* Cut Character */}
          <motion.div
            className="relative group flex flex-col items-center flex-shrink-0 order-3 sm:-ml-3 md:-ml-4 lg:-ml-8"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: [0, -20, 0] }}
            transition={{ 
              x: { duration: 1.5, ease: "easeOut" },
              opacity: { duration: 1.5, ease: "easeOut" },
              y: { duration: 6, repeat: Infinity, delay: 2 }
            }}
          >
            <motion.div 
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-[18rem] md:h-[18rem] lg:w-[24rem] lg:h-[24rem] xl:w-[28rem] xl:h-[28rem] flex items-center justify-center mb-2 relative"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <motion.div
                animate={{
                  opacity: [0.8, 1, 0.8],
                  filter: [
                    'drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))',
                    'drop-shadow(0 0 40px rgba(0, 255, 255, 0.6))',
                    'drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))'
                  ]
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-full h-full"
              >
                <Image
                  src="/cut-character-image.webp"
                  alt="Cut Character"
                  fill
                  className="object-contain"
                  loading="eager"
                  priority
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            </motion.div>
            <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-red-400 space-grotesk mb-1 animate-neon-flicker" style={{textShadow: '0 0 15px rgba(239, 68, 68, 0.9), 0 0 25px rgba(239, 68, 68, 0.7), 0 0 35px rgba(239, 68, 68, 0.5)'}}>Powell Puncher</h3>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center sm:mt-4 pb-4 sm:pb-6"
        >
          <p 
            className="text-white text-sm md:text-base lg:text-2xl font-mono tracking-wide"
            style={{
              textShadow: `
                0 0 10px rgba(255, 255, 255, 0.8),
                0 0 20px rgba(255, 255, 255, 0.6),
                0 0 30px rgba(255, 255, 255, 0.4)
              `
            }}
          >
            Cut slashes. Rate defends. The Index decides.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-row gap-4 justify-center items-center mt-6 mb-6 sm:mt-8 flex-wrap w-full"
        >
          <button 
            onClick={togglePopup}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base flex items-center justify-center cursor-pointer"
            style={{boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)'}}
          >
            Buy Now
          </button>
          <a href="https://x.com/i/communities/1964799556366868890" target="_blank" rel="noopener noreferrer" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base flex items-center justify-center" style={{boxShadow: '0 0 20px rgba(234, 179, 8, 0.5)'}}>
            Join Community
          </a>
        </motion.div>

        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] p-4">
            <div className="bg-gray-900 border-2 border-pink-500 rounded-xl p-6 sm:p-8 max-w-md w-full relative z-[10000]">
              <button 
                onClick={togglePopup}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
              >
                &times;
              </button>
              
              <h3 className="text-xl sm:text-2xl font-bold text-pink-500 mb-4 text-center">
                Presale Information
              </h3>
              
              <p className="text-gray-300 text-center mb-6">
                The Powell Index is loading...<br />
                <span className="text-yellow-400 font-bold">Rate %</span> vs <span className="text-red-400 font-bold">Cut ✂️</span> battle begins soon!<br />
                <span className="text-pink-400 animate-pulse">Join the chaos at launch!</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
                <a
                  href="https://docs.pinksale.finance/investing/how-to-buy-a-presale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-all text-center"
                >
                  How to buy a Presale on Pinksale

                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}