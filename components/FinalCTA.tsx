'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Fight Arena Visual */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="aspect-video bg-gradient-to-br from-red-500/20 to-yellow-500/20 border-4 border-yellow-400 rounded-xl overflow-hidden"
                 style={{
                   boxShadow: '0 0 50px rgba(234, 179, 8, 0.3)'
                 }}>
              {/* Placeholder for Cut vs Rate in crowded fight-night arena */}
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 text-center">
                  <div className="flex justify-center items-center gap-8 mb-6">
                    <motion.div
                      animate={{ 
                        x: [0, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-8xl"
                    >
                      ✂️
                    </motion.div>
                    
                    <div className="text-6xl text-yellow-400">VS</div>
                    
                    <motion.div
                      animate={{ 
                        x: [0, 10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="text-8xl"
                    >
                      %🟡
                    </motion.div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-yellow-400 font-bold text-xl mb-2">FIGHT NIGHT ARENA</p>
                    <p className="text-white text-lg">Crowded with degens, chaos, and Powell Index twitching</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main CTA Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Pick a side. Join the fight.</span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-yellow-400 font-bold mb-8">
            Who controls the Powell Index?
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white font-bold text-xl px-10 py-5 rounded-xl transition-all duration-300"
            style={{
              boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)'
            }}
          >
            ENTER THE ARENA
            <div className="text-sm mt-1 opacity-80">
              (opens X Community Group → "The Cut Club")
            </div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold text-xl px-10 py-5 rounded-xl transition-all duration-300"
            style={{
              boxShadow: '0 0 30px rgba(234, 179, 8, 0.5)'
            }}
          >
            JOIN THE CHAOS
            <div className="text-sm mt-1 opacity-80">
              (opens official @RateCuts X account → follow + pinned post)
            </div>
          </motion.button>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center border-t border-yellow-400/30 pt-8"
        >
          <div className="mb-6">
            <p className="text-xl text-white mb-2">© 2025 RateCuts. All memes reserved.</p>
            <div className="flex justify-center items-center gap-4 text-lg">
              <a href="mailto:gm@ratecuts.fun" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                gm@ratecuts.fun
              </a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                @RateCuts on X
              </a>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-lg text-green-400 font-bold mb-2">
              Fair launch. No insider mint. Only chaos.
            </p>
          </div>
          
          <div className="text-yellow-400 italic text-lg font-bold">
            "Thank you for your attention to this matter." – Donald J. Trump
          </div>
        </motion.div>
      </div>
    </section>
  );
}