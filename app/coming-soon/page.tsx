'use client';

import { motion } from 'framer-motion';
import PowellIndex from '@/components/PowellIndex';
import Image from 'next/image';

export default function ComingSoon() {
  return (
    <main className="min-h-screen flex items-start md:items-center justify-center overflow-hidden relative pt-8 md:pt-0 w-full max-w-full">
      <div className="relative z-10 text-center px-2 w-full mx-auto mt-8 md:mt-0 max-w-full overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 md:mb-8 lg:mb-16 relative max-w-full"
        >
          <h1 className="text-6xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-8xl font-black mb-4 md:mb-6 orbitron max-w-full">
            <span className="gradient-text animate-neon-flicker">$RATECUTS</span>
          </h1>
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-8 max-w-full">
            <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-8 md:max-w-16 lg:max-w-32 animate-pulse" />
            <span className="text-cyan-400 text-xs md:text-sm font-bold tracking-wider uppercase space-grotesk animate-neon-flicker">MEME CHAOS</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-8 md:max-w-16 lg:max-w-32 animate-pulse" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-row justify-center items-center gap-0 sm:gap-1 md:gap-0 mb-6 md:mb-16 px-2 sm:px-4 relative z-10 w-full max-w-full overflow-x-hidden"
        >
          {/* Rate Character */}
          <motion.div
            className="relative group flex flex-col items-center flex-shrink-0 order-1 sm:-mr-3 md:-mr-4 lg:-mr-8 max-w-full"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: [0, -15, 0] }}
            transition={{ 
              x: { duration: 1.5, ease: "easeOut" },
              opacity: { duration: 1.5, ease: "easeOut" },
              y: { duration: 5, repeat: Infinity, delay: 2 }
            }}
          >
            <motion.div 
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-[18rem] md:h-[18rem] lg:w-[24rem] lg:h-[24rem] xl:w-[28rem] xl:h-[28rem] flex items-center justify-center mb-2 relative max-w-full"
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
                className="w-full h-full max-w-full"
              >
                <Image
                  src="/rate-character-image.webp"
                  alt="Rate Character"
                  fill
                  className="object-contain max-w-full"
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
            className="relative flex flex-col items-center flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg order-2 sm:-mx-2 md:-mx-4 lg:-mx-8 z-10 max-w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Interactive Powell Index Gauge */}
            <div className="w-full flex items-center justify-center max-w-full">
              <PowellIndex />
            </div>
           
            <div className="text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl mt-4 md:mt-8  font-bold text-white orbitron animate-neon-flicker text-center px-4 max-w-full" style={{textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)'}}>
              ngmi if u leave now… chaos coming soon.
            </div>
          </motion.div>

          {/* Cut Character */}
          <motion.div
            className="relative group flex flex-col items-center flex-shrink-0 order-3 sm:-ml-3 md:-ml-4 lg:-ml-8 max-w-full"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: [0, -20, 0] }}
            transition={{ 
              x: { duration: 1.5, ease: "easeOut" },
              opacity: { duration: 1.5, ease: "easeOut" },
              y: { duration: 6, repeat: Infinity, delay: 2 }
            }}
          >
            <motion.div 
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-[18rem] md:h-[18rem] lg:w-[24rem] lg:h-[24rem] xl:w-[28rem] xl:h-[28rem] flex items-center justify-center mb-2 relative max-w-full"
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
                className="w-full h-full max-w-full"
              >
                <Image
                  src="/cut-character-image.webp"
                  alt="Cut Character"
                  fill
                  className="object-contain max-w-full"
                  loading="eager"
                  priority
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            </motion.div>
            <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-red-400 space-grotesk mb-1 animate-neon-flicker" style={{textShadow: '0 0 15px rgba(239, 68, 68, 0.9), 0 0 25px rgba(239, 68, 68, 0.7), 0 0 35px rgba(239, 68, 68, 0.5)'}}>Powell Puncher </h3>
          </motion.div>
        </motion.div>

        {/* TAGLINE AND COMING SOON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-8 md:mb-12 mt-8 md:mt-16 px-4 text-center max-w-full"
        >
          <h2 className="text-xl md:text-3xl lg:text-5xl font-black space-grotesk mb-4 md:mb-6 max-w-full">
            <span className="text-orange-400 animate-neon-flicker">CHAOS LOADING</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed inter font-bold mb-4 max-w-full">
            <span className="gradient-text">WHEN POWELL CUTS, WE MOON</span> 🚀
          </p>
          <p className="text-sm md:text-base text-red-400 mt-2 md:mt-4 orbitron animate-pulse max-w-full">
            THE ULTIMATE MEME CHAOS IS LOADING...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-6 md:mt-8 lg:mt-12 max-w-full"
        >
          <div className="neon-card mb-12 p-6 md:p-8 rounded-2xl w-full max-w-sm md:max-w-md mx-auto relative max-w-full">
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
            
            <h3 className="text-lg md:text-xl font-black text-orange-400 space-grotesk mb-4 md:mb-6 animate-neon-flicker text-center max-w-full">
              CHAOS METER
            </h3>
            <div className="w-full bg-gray-800 rounded-full h-4 md:h-5 mb-3 border-2 border-yellow-400/50 max-w-full">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full max-w-full"
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <p className="text-sm md:text-base text-gray-400 orbitron text-center max-w-full">MAXIMUM CHAOS INCOMING...</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}