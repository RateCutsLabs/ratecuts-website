'use client';

import { motion } from 'framer-motion';

export default function LoreSection() {
  return (
    <section id="lore-section" className="relative py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16 relative"
        >
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
            <div className="absolute top-10 right-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-0 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-8 relative z-10 gradient-text whitespace-nowrap">
            ⚡ The Narrative ⚡
          </h2>
          
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent flex-1 max-w-16 sm:max-w-24 animate-pulse"></div>
            <span className="text-yellow-400 font-bold text-sm sm:text-base animate-pulse">BATTLE ORIGINS</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1 max-w-16 sm:max-w-24 animate-pulse"></div>
          </div>
        </motion.div>

        {/* Main Lore Content - Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-stretch mb-12 sm:mb-20">
          {/* Left Side - Narrative Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex"
          >
            {/* All Narrative Content in Rounded Box */}
            <div className="bg-gradient-to-br from-black/80 to-gray-900/80 border-4 border-yellow-400 rounded-xl p-4 sm:p-6 shadow-2xl backdrop-blur-sm max-w-md mx-auto flex flex-col justify-center flex-1" style={{
              boxShadow: '0 0 30px rgba(234, 179, 8, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.5)'
            }}>
              {/* Main Story - All Center Aligned */}
              <div className="text-center space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl text-yellow-400 font-bold" style={{
                  textShadow: '0 0 10px rgba(234, 179, 8, 0.8)'
                }}>
                  Welcome to $RATECUTS
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-blue-300 font-semibold">
                  Where memes fight harder than traders.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-300">
                  Cut ✂️ slashes for lower rates & green chaos.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-300">
                  Rate % 🟡 defends the red, coping for dear life.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-300">
                  The Powell Index is the stage,
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-300">
                  the needle is the judge and the crowd screams for blood.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Lore Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex"
          >
            {/* Main Lore Image Display */}
            <div className="relative w-full rounded-xl overflow-hidden bg-black border-4 border-yellow-400 flex flex-col flex-1">
              {/* Lore Image */}
              <div className="relative">
                <img 
                  src="/lore-image.png"
                  alt="The Narrative Battlefield"
                  className="w-full h-auto object-contain"
                />
                
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none"></div>
                
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 text-yellow-400 text-xl sm:text-2xl animate-pulse">⚡</div>
                <div className="absolute top-2 right-2 text-red-400 text-xl sm:text-2xl animate-bounce">🔥</div>
                <div className="absolute bottom-2 left-2 text-blue-400 text-xl sm:text-2xl animate-ping">💎</div>
                <div className="absolute bottom-2 right-2 text-green-400 text-xl sm:text-2xl animate-pulse">⚔️</div>
              </div>

              {/* Image Caption */}
              <div className="flex justify-center py-2 sm:py-3 gap-2 bg-black/20">
                <span className="text-xs sm:text-sm text-yellow-400 font-bold bg-yellow-400/10 px-2 py-1 sm:px-3 sm:py-1 rounded-full border border-yellow-400/30">
                  THE BATTLEFIELD AWAITS
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
}