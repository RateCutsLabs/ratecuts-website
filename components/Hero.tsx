'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Zap, Flame } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden lightning-bg">
      {/* Chaotic Background Elements */}
      <div className="absolute inset-0">
        {/* Lightning Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-lightning" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-lightning" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl animate-lightning" />
        <div className="absolute top-10 right-40 w-64 h-64 bg-cyan-400/15 rounded-full blur-3xl animate-lightning" />
        <div className="absolute bottom-10 left-40 w-64 h-64 bg-green-400/15 rounded-full blur-3xl animate-lightning" />
        
        {/* Chaotic Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full opacity-80 ${
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
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Lightning Bolts */}
        {[...Array(8)].map((_, i) => (
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
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 3 + Math.random() * 5,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 press-start">
            <span className="chaos-text animate-neon-flicker">$RATECUTS</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32 animate-pulse" />
            <span className="text-yellow-400 text-sm font-bold tracking-wider uppercase press-start animate-neon-flicker">MEME CHAOS</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32 animate-pulse" />
          </div>
        </motion.div>

        {/* Character Showcase - Boxing Ring Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center items-center gap-16 mb-12"
        >
          {/* Rate Character - Yellow/Gold Fighter */}
          <motion.div
            className="relative group"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <div className="neon-card p-8 rounded-3xl chaos-glow group-hover:animate-chaos-pulse transition-all duration-500 relative">
              {/* Lightning Effects */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping" />
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-ping" />
              
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-3xl flex items-center justify-center mb-4 mx-auto relative overflow-hidden animate-chaos-bounce">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/50 to-transparent animate-pulse" />
                <span className="text-4xl font-bold text-black press-start relative z-10">%</span>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-300 rounded-full animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 press-start mb-2 animate-neon-flicker">RATE</h3>
              <p className="text-sm text-red-400 font-bold orbitron">BEARISH BEAST</p>
              <div className="mt-2 flex justify-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <Flame key={i} className="w-4 h-4 text-orange-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* VS Indicator - Chaotic */}
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative"
          >
            <div className="text-5xl font-black chaos-text press-start relative">
              VS
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-pink-500 rounded-full animate-ping" />
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
            </div>
          </motion.div>

          {/* Cut Character - Red/Orange Fighter */}
          <motion.div
            className="relative group"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="neon-card p-8 rounded-3xl chaos-glow group-hover:animate-chaos-pulse transition-all duration-500 relative">
              {/* Lightning Effects */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-500 rounded-full animate-ping" />
              
              <div className="w-32 h-32 bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center mb-4 mx-auto relative overflow-hidden animate-chaos-bounce">
                <div className="absolute inset-0 bg-gradient-to-br from-red-300/50 to-transparent animate-pulse" />
                <span className="text-4xl font-bold text-white press-start relative z-10">✂</span>
                <div className="absolute -top-1 -left-1 w-6 h-6 bg-pink-300 rounded-full animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-red-400 press-start mb-2 animate-neon-flicker">CUT</h3>
              <p className="text-sm text-green-400 font-bold orbitron">BULLISH WARRIOR</p>
              <div className="mt-2 flex justify-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <Zap key={i} className="w-4 h-4 text-cyan-400 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white orbitron mb-4">
            <span className="chaos-text">WHEN POWELL CUTS, WE MOON</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed orbitron">
            🚀 THE ULTIMATE MEME TOKEN CHAOS 🚀<br/>
            <span className="text-yellow-400 font-bold">ARCADE • MAYHEM • MOON MISSION</span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:from-yellow-300 hover:via-red-400 hover:to-pink-400 text-black font-black text-lg px-8 py-4 rounded-2xl shadow-lg chaos-glow transition-all duration-300 press-start animate-chaos-pulse"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            BUY CHAOS
          </Button>
          
          <Button
            size="lg"
            className="bg-transparent border-4 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-black text-lg px-8 py-4 rounded-2xl shadow-lg hover:chaos-glow transition-all duration-300 press-start animate-neon-flicker"
          >
            <Users className="mr-2 h-5 w-5" />
            JOIN MAYHEM
          </Button>
        </motion.div>

        {/* Chaotic Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: 'CHAOS CAP', value: '$420K', color: 'text-yellow-400', bg: 'from-yellow-400/20 to-orange-500/20' },
            { label: 'DEGENS', value: '6,969', color: 'text-red-400', bg: 'from-red-400/20 to-pink-500/20' },
            { label: 'MAYHEM VOL', value: '$1.2M', color: 'text-pink-400', bg: 'from-pink-400/20 to-purple-500/20' },
            { label: 'POWELL RAGE', value: 'MAX', color: 'text-green-400', bg: 'from-green-400/20 to-cyan-500/20' },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className={`neon-card p-4 rounded-xl text-center bg-gradient-to-br ${stat.bg} animate-chaos-pulse`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`text-2xl font-black ${stat.color} press-start animate-neon-flicker`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 mt-2 orbitron font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}