'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Visual */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
  
          <div className="relative max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
            <div className="aspect-video bg-gradient-to-br from-red-500/20 to-yellow-500/20 border-4 border-yellow-400 rounded-xl overflow-hidden"
                 style={{
                   boxShadow: '0 0 50px rgba(234, 179, 8, 0.3)'
                 }}>
           
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img 
                    src="/fight night.png"
                    alt="Fight Night Arena"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* Main CTA Text */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 whitespace-nowrap">
            <span className="gradient-text">Pick a side. Join the fight.</span>
          </h2>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-yellow-400 font-bold mb-6 sm:mb-8">
            Who controls the Powell Index?
          </p>
        </motion.div> */}

        {/* CTA Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white font-bold text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-xl transition-all duration-300 w-full sm:w-auto"
            style={{
              boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)'
            }}
          >
            ENTER THE ARENA
            <div className="text-xs sm:text-sm mt-1 opacity-80">
              (opens X Community Group → "The Cut Club")
            </div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-xl transition-all duration-300 w-full sm:w-auto"
            style={{
              boxShadow: '0 0 30px rgba(234, 179, 8, 0.5)'
            }}
          >
            JOIN THE CHAOS
            <div className="text-xs sm:text-sm mt-1 opacity-80">
              (opens official @RateCuts X account → follow + pinned post)
            </div>
          </motion.button>
        </motion.div> */}

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center border-t border-yellow-400/30 pt-6 sm:pt-8 px-4"
        >
          <div className="mb-4 sm:mb-6">
            <p className="text-lg sm:text-xl text-white mb-2">© 2025 RateCuts. All memes reserved.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-base sm:text-lg">
              <a href="mailto:gm@ratecuts.fun" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                gm@ratecuts.fun
              </a>
              <span className="text-gray-400 hidden sm:block">|</span>
              <a href="https://x.com/ratecuts_sol" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                @RateCuts on X
              </a>
            </div>
          </div>
          
          <div className="mb-4 sm:mb-6">
            <p className="text-base sm:text-lg text-green-400 font-bold mb-2">
              Fair launch. No insider mint. Only chaos.
            </p>
          </div>
          
          <div className="text-yellow-400 italic text-base sm:text-lg font-bold">
            "Thank you for your attention to this matter." – Donald J. Trump
          </div>
        </motion.div>
      </div>
    </section>
  );
}