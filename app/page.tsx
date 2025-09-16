'use client';

import { motion } from 'framer-motion';
import PowellIndex from '@/components/PowellIndex';

export default function Home() {
  return (
    <main className="min-h-screen lightning-bg flex items-start md:items-center justify-center overflow-hidden relative pt-8 md:pt-0">
      <div className="absolute inset-0">
        <div className="absolute top-10 md:top-20 left-10 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-yellow-400/20 rounded-full blur-3xl animate-lightning" />
        <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-red-500/20 rounded-full blur-3xl animate-lightning" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-pink-500/15 rounded-full blur-3xl animate-lightning" />
        <div className="absolute top-5 md:top-10 right-20 md:right-40 w-32 h-32 md:w-64 md:h-64 bg-cyan-400/15 rounded-full blur-3xl animate-lightning" />
        <div className="absolute bottom-5 md:bottom-10 left-20 md:left-40 w-32 h-32 md:w-64 md:h-64 bg-green-400/15 rounded-full blur-3xl animate-lightning" />
        
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 md:w-2 md:h-2 rounded-full opacity-80 ${
              i % 5 === 0 ? 'bg-yellow-400' :
              i % 5 === 1 ? 'bg-red-500' :
              i % 5 === 2 ? 'bg-pink-500' :
              i % 5 === 3 ? 'bg-cyan-400' : 'bg-green-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`lightning-${i}`}
            className="absolute w-1 bg-gradient-to-b from-yellow-400 via-white to-transparent opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              height: `${50 + Math.random() * 100}px`,
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 2 + Math.random() * 4,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-2 w-full mx-auto mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 md:mb-8 lg:mb-16 relative"
        >
          <h1 className="text-2xl mt-4 md:text-4xl lg:text-6xl xl:text-8xl font-black mb-4 md:mb-6 orbitron">
            <span className="gradient-text animate-neon-flicker">$RATECUTS</span>
          </h1>
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-8 md:max-w-16 lg:max-w-32 animate-pulse" />
            <span className="text-cyan-400 text-xs md:text-sm font-bold tracking-wider uppercase space-grotesk animate-neon-flicker">MEME CHAOS</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-8 md:max-w-16 lg:max-w-32 animate-pulse" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-center items-center gap-0 mb-6 md:mb-16 px-4 relative z-10 w-full"
        >
          {/* Rate Character */}
          <motion.div
            className="relative group flex flex-col items-center flex-shrink-0 -mr-8 md:-mr-16 lg:-mr-20"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: [0, -15, 0] }}
            transition={{ 
              x: { duration: 1.5, ease: "easeOut" },
              opacity: { duration: 1.5, ease: "easeOut" },
              y: { duration: 5, repeat: Infinity, delay: 2 }
            }}
          >
            <motion.div 
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] flex items-center justify-center mb-2 md:mb-4 relative"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <motion.img
                src="/rate-character-image.png"
                alt="Rate Character"
                className="w-full h-full object-contain"
                animate={{
                  opacity: [0.8, 1, 0.8],
                  filter: [
                    'drop-shadow(0 0 20px rgba(255, 20, 147, 0.3))',
                    'drop-shadow(0 0 40px rgba(255, 20, 147, 0.6))',
                    'drop-shadow(0 0 20px rgba(255, 20, 147, 0.3))'
                  ]
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            </motion.div>
            <h3 className="text-lg md:text-xl font-bold text-yellow-400 inter mb-1 animate-neon-flicker" style={{textShadow: '0 0 10px rgba(234, 179, 8, 0.8), 0 0 20px rgba(234, 179, 8, 0.6), 0 0 30px rgba(234, 179, 8, 0.4)'}}>Rate Riser</h3>
            {/* <p className="text-xs md:text-sm text-red-400 orbitron font-bold">BEARISH BEAST</p> */}
          </motion.div>

          {/* POWELL INDEX - CENTER AND MASSIVE */}
          <motion.div
            className="relative flex flex-col items-center flex-1 max-w-2xl -mx-8 md:-mx-16 lg:-mx-20 z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Interactive Powell Index Gauge */}
            <div className="w-full max-w-md mx-auto mb-4 min-h-[350px] flex items-center justify-center">
              <PowellIndex />
            </div>
           
            <div className="text-md md:text-lg lg:text-2xl mt-20 font-bold text-white orbitron animate-neon-flicker" style={{textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)'}}>
            
              ngmi if u leave now… chaos coming soon.
            </div>
          </motion.div>

          {/* Cut Character */}
          <motion.div
            className="relative group flex flex-col items-center flex-shrink-0 -ml-8 md:-ml-16 lg:-ml-20"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: [0, -20, 0] }}
            transition={{ 
              x: { duration: 1.5, ease: "easeOut" },
              opacity: { duration: 1.5, ease: "easeOut" },
              y: { duration: 6, repeat: Infinity, delay: 2 }
            }}
          >
            <motion.div 
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] flex items-center justify-center mb-2 md:mb-4 relative"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <motion.img
                src="/cut-character-image.png"
                alt="Cut Character"
                className="w-full h-full object-contain"
                animate={{
                  opacity: [0.8, 1, 0.8],
                  filter: [
                    'drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))',
                    'drop-shadow(0 0 40px rgba(0, 255, 255, 0.6))',
                    'drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))'
                  ]
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            </motion.div>
            <h3 className="text-lg md:text-xl font-bold text-red-400 space-grotesk mb-1 animate-neon-flicker" style={{textShadow: '0 0 10px rgba(239, 68, 68, 0.8), 0 0 20px rgba(239, 68, 68, 0.6), 0 0 30px rgba(239, 68, 68, 0.4)'}}>Powell Puncher </h3>
            {/* <p className="text-xs md:text-sm text-green-400 orbitron font-bold">BULLISH WARRIOR</p> */}
          </motion.div>
        </motion.div>

        {/* TAGLINE AND COMING SOON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-8 md:mb-12"
        >
          {/* <div className="text-lg md:text-2xl lg:text-3xl font-bold text-green-400 orbitron animate-neon-flicker mb-4" style={{textShadow: '0 0 5px #4ade80, 0 0 10px #4ade80'}}>
            COMING SOON
          </div> */}
          {/* <p className="text-xl md:text-2xl lg:text-3xl font-black text-pink-400 press-start animate-neon-flicker mb-4">
            ngmi if u leave now… chaos coming soon.
          </p> */}
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black space-grotesk mb-4 md:mb-6">
            <span className="text-orange-400 animate-neon-flicker">CHAOS LOADING</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed inter font-bold">
            <span className="gradient-text">WHEN POWELL CUTS, WE MOON</span> 🚀
          </p>
          <p className="text-sm md:text-lg text-red-400 mt-2 md:mt-4 orbitron animate-pulse">
            THE ULTIMATE MEME CHAOS IS LOADING...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center items-center gap-2 md:gap-4"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                i % 5 === 0 ? 'bg-yellow-400' :
                i % 5 === 1 ? 'bg-red-500' :
                i % 5 === 2 ? 'bg-pink-500' :
                i % 5 === 3 ? 'bg-cyan-400' : 'bg-green-400'
              }`}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 1, 0.3],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-6 md:mt-8 lg:mt-12"
        >
          <div className="neon-card mb-12 p-4 md:p-6 rounded-2xl max-w-sm md:max-w-md mx-auto relative">
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
            
            <h3 className="text-base md:text-lg font-black text-orange-400 space-grotesk mb-2 md:mb-4 animate-neon-flicker">
              CHAOS METER
            </h3>
            <div className="w-full bg-gray-800 rounded-full h-3 md:h-4 mb-2 border-2 border-yellow-400/50">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full"
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <p className="text-xs md:text-sm text-gray-400 orbitron">MAXIMUM CHAOS INCOMING...</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}