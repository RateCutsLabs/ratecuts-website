'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HowToPlay() {
  return (
    <section id="how-to-play" className="relative py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-20 relative"
        >
          {/* Background chaos effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-5 left-1/4 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
            <div className="absolute top-10 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-5 left-1/3 w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></div>
          </div>
          
          <motion.h2 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-8 relative z-10 whitespace-nowrap"
          >
            <span className="inline-block gradient-text">
              UFC - ULTIMATE FED CUTS
            </span>
          </motion.h2>
          
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent flex-1 max-w-16 sm:max-w-24 animate-pulse"></div>
            <span className="text-yellow-400 font-bold text-sm sm:text-base animate-pulse">GAME RULES</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-16 sm:max-w-24 animate-pulse"></div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto font-bold px-4">
            ⚡ Enter the arena. Choose your fighter. Let chaos begin. ⚡
          </p>
        </motion.div>

        {/* UFC Image - Small, without effects or border */}
        <div className="flex justify-center">
          <Image
            src="/ufcimage.png"
            alt="UFC Fight"
            width={400}
            height={300}
            className="w-full max-w-md h-auto"
          />
        </div>

        {/* CSS Animation */}
        <style jsx>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </div>
    </section>
  );
}