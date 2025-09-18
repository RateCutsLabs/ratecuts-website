'use client';

import { motion } from 'framer-motion';

export default function VisionSection() {
  const visionPoints = [
    {
      title: "Memes + macro = the perfect storm.",
      detail: "When economic chaos meets internet culture",
      icon: "🌪️",
      color: "from-blue-500 to-purple-600",
      glowColor: "rgba(59, 130, 246, 0.5)",
      particles: ["⚡", "💥", "🌀"]
    },
    {
      title: "CUT ✂️ & RATE % aren't just logos, they're warriors.",
      detail: "Characters in a fight everyone already knows",
      icon: "⚔️",
      color: "from-red-500 to-orange-500",
      glowColor: "rgba(239, 68, 68, 0.5)",
      particles: ["🔥", "✂️", "%"]
    },
    {
      title: "Every staredown, every transformation is viral.",
      detail: "Built for maximum meme potential",
      icon: "📱",
      color: "from-green-500 to-teal-500",
      glowColor: "rgba(34, 197, 94, 0.5)",
      particles: ["🚀", "💫", "🌟"]
    },
    {
      title: "At the core: chaos, culture, and the Cut Club.",
      detail: "A community that thrives on epic battles",
      icon: "🎭",
      color: "from-yellow-500 to-red-500",
      glowColor: "rgba(234, 179, 8, 0.5)",
      particles: ["🏆", "👑", "⭐"]
    }
  ];

  return (
    <section id="vision" className="relative py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Epic Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          {/* Background chaos effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-5 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute top-10 right-1/3 w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-5 left-1/3 w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></div>
          </div>
          
          <motion.h2 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-5xl md:text-7xl font-black mb-8 relative z-10"
          >
            <span className="gradient-text">
              🔮 THE VISION 🔮
            </span>
          </motion.h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
            <span className="text-cyan-400 font-bold text-lg animate-pulse">PROPHECY</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
          </div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-black text-yellow-400 mb-8"
            style={{
              textShadow: '0 0 30px rgba(234, 179, 8, 0.8), 0 0 60px rgba(234, 179, 8, 0.4)'
            }}
          >
            ⚡ Where Macros Meet Memes ⚡
          </motion.h3>
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32 animate-pulse"></div>
            <span className="text-red-400 font-bold text-lg animate-bounce">💥</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent flex-1 max-w-32 animate-pulse"></div>
          </div>
        </motion.div>

        {/* Epic Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <div className="max-w-5xl mx-auto relative">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-red-500/10 to-blue-500/10 blur-xl rounded-xl"></div>
            
            <div className="relative z-10">
              <p className="text-xl md:text-3xl text-gray-300 leading-relaxed mb-8 font-bold">
                <span className="text-yellow-400 font-black text-2xl md:text-4xl" style={{
                  textShadow: '0 0 20px rgba(234, 179, 8, 0.8)'
                }}>
                  2025 is all about Powell & rate cuts.
                </span>
                <br className="mb-4" />
                Every trader, every degen is watching. 
                <span className="text-red-400 font-black">
                  RateCuts turns that obsession into an epic meme battle.
                </span>
              </p>
              
              {/* Epic "Why it hits" box */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 blur-sm opacity-30 animate-pulse"></div>
                
                <div className="relative bg-gradient-to-r from-yellow-500 to-red-500 p-1 rounded-2xl">
                  <div className="bg-black/90 rounded-xl p-8">
                    <h4 className="text-3xl md:text-4xl font-black text-white mb-6" style={{
                      textShadow: '0 0 30px rgba(255, 255, 255, 0.8)'
                    }}>
                      🔥 THIS IS WHY IT HITS 🔥
                    </h4>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Epic Vision Points Arena */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          {/* Arena container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Arena background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-yellow-900/10 to-blue-900/10 rounded-3xl blur-sm"></div>
            
            <div className="relative bg-black/40 backdrop-blur-sm border-4 border-yellow-400/50 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="relative group"
                  >
                    {/* Card glow effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"
                      style={{ backgroundColor: point.glowColor }}
                    ></div>
                    
                    <div className={`relative bg-gradient-to-br ${point.color} p-1 rounded-2xl`}>
                      <div className="bg-black/90 rounded-xl p-8 relative overflow-hidden">
                        
                        {/* Background particles */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          {point.particles.map((particle, i) => (
                            <div 
                              key={i}
                              className="absolute text-2xl opacity-20 animate-pulse"
                              style={{
                                top: `${15 + i * 25}%`,
                                right: `${10 + i * 20}%`,
                                animationDelay: `${i * 0.7}s`
                              }}
                            >
                              {particle}
                            </div>
                          ))}
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                          {/* Mega icon */}
                          <div className="flex items-start gap-6">
                            <motion.div 
                              animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, -10, 0]
                              }}
                              transition={{ duration: 4, repeat: Infinity }}
                              className="text-6xl flex-shrink-0"
                            >
                              {point.icon}
                            </motion.div>
                            
                            <div className="space-y-3">
                              <h4 className="text-xl md:text-2xl font-black text-white leading-tight group-hover:text-yellow-400 transition-colors">
                                {point.title}
                              </h4>
                              <p className="text-gray-400 text-sm md:text-base italic">
                                {point.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Corner decoration */}
                        <div className="absolute bottom-2 right-2 text-yellow-400 text-lg animate-pulse opacity-40">✨</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Epic Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
          className="text-center"
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Epic glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 blur-2xl opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-400 blur-xl opacity-40 animate-pulse"></div>
            
            {/* Outer border animation
            <div className="absolute inset-0 border-4 border-yellow-400 rounded-2xl animate-pulse opacity-60"></div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-r from-red-500/30 to-yellow-500/30 border-4 border-yellow-400 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
            >
              <div className="space-y-6">
                <p className="text-2xl md:text-4xl font-black text-white mb-6" style={{
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.4)'
                }}>
                  👉 RateCuts is a story everyone already understands.
                </p>
                
                <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto w-48 animate-pulse"></div>
                
                <div className="bg-black/50 rounded-xl p-6 border border-yellow-400/50">
                  <p className="text-yellow-400 italic text-xl md:text-2xl font-bold" style={{
                    textShadow: '0 0 20px rgba(234, 179, 8, 0.8)'
                  }}>
                    "Thank you for your attention to this matter." 
                    <br />
                    <span className="text-lg md:text-xl text-gray-300">– Donald J. Trump</span>
                  </p>
                </div>
                
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl"
                >
                  🇺🇸
                </motion.div>
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}