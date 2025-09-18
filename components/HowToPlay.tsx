'use client';

import { motion } from 'framer-motion';
import { Sword, Shield, Trophy } from 'lucide-react';

export default function HowToPlay() {
  const steps = [
    {
      number: "01",
      title: "Pick Your Fighter",
      description: "Choose your side in the epic battle",
      detail: "CUT ✂️ (Rate Slasher) or RATE % (Rate Defender)",
      icon: <Sword size={32} className="text-white" />,
      color: "from-red-500 to-red-600",
      glowColor: "rgba(239, 68, 68, 0.5)",
      bgParticles: ["🔥", "⚡", "💥"]
    },
    {
      number: "02", 
      title: "Watch The Arena",
      description: "Powell Index becomes your battlefield",
      detail: "Every rate decision shifts the balance of power",
      icon: <Shield size={32} className="text-white" />,
      color: "from-red-500 to-red-600",
      glowColor: "rgba(239, 68, 68, 0.5)",
      bgParticles: ["🔥", "⚡", "💥"]
    },
    {
      number: "03",
      title: "Join The Chaos",
      description: "Meme, trade, and dominate...",
      detail: "Community powers the ultimate meme war",
      icon: <Trophy size={32} className="text-white" />,
      color: "from-red-500 to-red-600",
      glowColor: "rgba(239, 68, 68, 0.5)",
      bgParticles: ["🔥", "⚡", "💥"]
    }
  ];

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

        {/* Epic Game Steps */}
        <div className="relative">
          {/* Arena Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-yellow-900/10 to-blue-900/10 rounded-3xl blur-sm"></div>
          
          <div className="relative bg-black/30 backdrop-blur-sm border-2 border-yellow-400/50 rounded-3xl p-4 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.3, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className="relative overflow-hidden">
                    {/* Glowing background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-gray-900/80 rounded-2xl"></div>
                    <div 
                      className="absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"
                      style={{ backgroundColor: step.glowColor }}
                    ></div>
                    
                    <div className={`relative bg-gradient-to-br ${step.color} p-1 rounded-2xl`}>
                      <div className="bg-black/90 rounded-xl p-6 sm:p-8 text-center relative overflow-hidden">
                        
                        {/* Background particles */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          {step.bgParticles.map((particle, i) => (
                            <div 
                              key={i}
                              className={`absolute text-lg sm:text-2xl opacity-20 animate-pulse`}
                              style={{
                                top: `${20 + i * 25}%`,
                                left: `${10 + i * 30}%`,
                                animationDelay: `${i * 0.5}s`
                              }}
                            >
                              {particle}
                            </div>
                          ))}
                        </div>
                        
                        {/* Step Number Badge */}
                        <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4">
                          <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center border-4 border-black shadow-2xl`}>
                            <span className="text-black font-black text-lg sm:text-xl">
                              {step.number}
                            </span>
                          </div>
                        </div>

                        {/* Mega Icon */}
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="mb-4 sm:mb-6 relative z-10 flex justify-center"
                        >
                          <div className={`p-3 rounded-full bg-gradient-to-br ${step.color}`}>
                            {step.icon}
                          </div>
                        </motion.div>

                        {/* Content */}
                        <div className="relative z-10 space-y-3 sm:space-y-4">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-3 group-hover:text-yellow-400 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-base sm:text-lg text-gray-300 font-bold leading-relaxed">
                            {step.description}
                          </p>
                          <div className={`h-1 bg-gradient-to-r ${step.color} mx-auto w-12 sm:w-16 rounded-full opacity-60`}></div>
                          <p className="text-xs sm:text-sm text-gray-400 italic mt-3 sm:mt-4">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Epic Connecting Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-30">
                      <motion.div
                        animate={{ 
                          x: [0, 8, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-yellow-400 text-3xl sm:text-4xl drop-shadow-lg"
                        style={{
                          textShadow: '0 0 20px rgba(234, 179, 8, 0.8)'
                        }}
                      >
                        ➤
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Epic Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0, type: "spring" }}
          className="text-center mt-12 sm:mt-20 px-4"
        >
        
          <div className="relative inline-block">
        
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 blur-3xl opacity-40 animate-pulse scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-400 blur-xl opacity-60 animate-pulse"></div>
            
           
            <div className="absolute inset-0 border-4 border-yellow-400 rounded-3xl animate-ping opacity-30"></div>
            <div className="absolute inset-0 border-2 border-red-400 rounded-3xl animate-pulse"></div>
            
            <motion.button 
              whileHover={{ 
                scale: 1.15,
                rotateY: 10,
                rotateX: 5,
                y: -5
              }}
              whileTap={{ scale: 0.9 }}
              animate={{
                boxShadow: [
                  '0 0 50px rgba(234, 179, 8, 0.8), 0 0 100px rgba(239, 68, 68, 0.4)',
                  '0 0 80px rgba(239, 68, 68, 0.8), 0 0 120px rgba(34, 197, 94, 0.4)',
                  '0 0 50px rgba(234, 179, 8, 0.8), 0 0 100px rgba(239, 68, 68, 0.4)'
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity },
                scale: { type: "spring", stiffness: 400 }
              }}
              className="relative bg-gradient-to-r from-red-500 via-yellow-500 via-orange-500 to-red-600 text-black font-black text-xl md:text-3xl px-16 py-8 rounded-3xl border-4 border-yellow-400 shadow-2xl overflow-hidden group"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(255, 255, 255, 0.5)',
                background: 'linear-gradient(45deg, #ef4444, #f59e0b, #eab308, #ef4444)',
                backgroundSize: '300% 300%',
                animation: 'gradientShift 3s ease infinite'
              }}
            >
            
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
            
              <span className="relative flex items-center justify-center gap-4">
                <span className="text-2xl animate-bounce">⚔️</span>
                <span className="tracking-wider">ENTER THE BATTLE</span>
                <span className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>⚔️</span>
              </span>
              
           
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-2 left-4 text-yellow-300 text-sm animate-ping opacity-60">⚡</div>
                <div className="absolute bottom-2 right-4 text-red-300 text-sm animate-pulse opacity-60">🔥</div>
                <div className="absolute top-1/2 left-8 text-white text-xs animate-bounce opacity-40">⭐</div>
                <div className="absolute top-1/2 right-8 text-yellow-200 text-xs animate-pulse opacity-40">💥</div>
              </div>
            </motion.button>
          </div>
          
      
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-8"
          >
            <p className="text-yellow-400 text-xl font-black mb-2" style={{
              textShadow: '0 0 20px rgba(234, 179, 8, 0.8)'
            }}>
              🔥 THE ARENA AWAITS YOUR CHOICE 🔥
            </p>
            <p className="text-gray-400 text-lg font-bold">
              Choose wisely... The battle determines everything.
            </p>
          </motion.div>
        </motion.div> */}
        
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