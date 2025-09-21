'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TheFighters() {
  return (
    <section id="the-fighters" className="relative py-12 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Title and Divider */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black mb-4 sm:mb-8 gradient-text"
          >
            THE FIGHTERS
          </motion.h2>
          
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-16 sm:max-w-24 animate-pulse"></div>
            <span className="text-yellow-400 font-bold text-sm sm:text-base animate-pulse">BATTLE ARENA</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-16 sm:max-w-24 animate-pulse"></div>
          </div>
        </div>

        {/* Epic background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-4 h-4 bg-red-400 rounded-full animate-ping"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 left-20 w-3.5 h-3.5 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-purple-400 rounded-full animate-bounce opacity-30"></div>
        </div>

        {/* Fighter Arena */}
        <div className="relative">
          {/* Battle Arena Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-yellow-900/20 to-blue-900/20 rounded-3xl blur-sm"></div>

          <div className="relative bg-black/40 backdrop-blur-sm border-4 border-yellow-400 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              {/* CUT Character - Left Fighter */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                {/* Fighter Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-red-700/30 rounded-2xl border-2 border-red-500/50 backdrop-blur-sm"></div>
                
                {/* Fighter Content */}
                <div className="relative z-10 p-6">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-50"></div>
                      <Image 
                        src="/fight-cut.webp"
                        alt="Cut Fighter"
                        width={320}
                        height={320}
                        className="w-64 h-64 md:w-72 md:h-72 mx-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300 relative z-10"
                        loading="lazy"
                        quality={75}
                      />
                    </div>
                    
                    {/* <h3 className="text-2xl md:text-3xl font-black text-red-400 mb-2">
                      CUT
                    </h3> */}
                    <p className="text-red-200 text-center text-sm md:text-base mb-4">
                      The Fed&apos;s scalpel, slicing through market stability with precision rate cuts.
                    </p>
                    
                    <div className="w-full border-t border-red-500/30 my-3"></div>
                    
                    <div className="space-y-2 w-full">
                      <div className="flex justify-between">
                        <span className="text-red-300 font-bold">Power:</span>
                        <span className="text-white font-bold">Rate Cuts</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-red-300 font-bold">Style:</span>
                        <span className="text-white font-bold">Aggressive</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-red-300 font-bold">Impact:</span>
                        <span className="text-white font-bold">High Volatility</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* VS Separator & Powell Index */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col items-center justify-center relative"
              >
                {/* Epic VS */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 blur-xl opacity-50 animate-pulse"></div>
                  <div className="relative text-6xl md:text-8xl font-black gradient-text">
                    VS
                  </div>
                </div>

                {/* Powell Index Arena */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 border-3 border-yellow-400 rounded-xl p-6 text-center backdrop-blur-sm">
                    <Image 
                      src="/Powell-Index.webp"
                      alt="Powell Index"
                      width={320}
                      height={320}
                      className="w-64 h-64 md:w-72 md:h-72 mx-auto object-contain mb-4 drop-shadow-2xl"
                      loading="lazy"
                      quality={75}
                    />
                    <h4 className="text-2xl md:text-3xl font-black text-yellow-400 mb-2">
                      POWELL INDEX
                    </h4>
                    <p className="text-yellow-200 text-sm font-bold">
                      THE ARENA
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* RATE Character - Right Fighter */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                {/* Fighter Card Background - Changed from blue to yellow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/50 to-yellow-700/30 rounded-2xl border-2 border-yellow-500/50 backdrop-blur-sm"></div>
                
                {/* Fighter Content */}
                <div className="relative z-10 p-6">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-yellow-500 rounded-full blur-md opacity-50"></div>
                      <Image 
                        src="/fight-rate.webp"
                        alt="Rate Fighter"
                        width={320}
                        height={320}
                        className="w-64 h-64 md:w-72 md:h-72 mx-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300 relative z-10"
                        loading="lazy"
                        quality={75}
                      />
                    </div>
                    
                    {/* <h3 className="text-2xl md:text-3xl font-black text-yellow-400 mb-2">
                      RATE
                    </h3> */}
                    <p className="text-yellow-200 text-center text-sm md:text-base mb-4">
                      The market&apos;s shield, defending against chaos with strategic rate adjustments.
                    </p>
                    
                    <div className="w-full border-t border-yellow-500/30 my-3"></div>
                    
                    <div className="space-y-2 w-full">
                      <div className="flex justify-between">
                        <span className="text-yellow-300 font-bold">Power:</span>
                        <span className="text-white font-bold">Market Stability</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-yellow-300 font-bold">Style:</span>
                        <span className="text-white font-bold">Defensive</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-yellow-300 font-bold">Impact:</span>
                        <span className="text-white font-bold">Controlled Growth</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}