'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Share2, BarChart3, Zap, Flame } from 'lucide-react';

export default function PowellIndex() {
  const [indexValue, setIndexValue] = useState(50);
  const [isAnimating, setIsAnimating] = useState(false);

  const pushUp = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const newValue = Math.min(100, indexValue + Math.random() * 20 + 10);
    setIndexValue(newValue);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const pushDown = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const newValue = Math.max(0, indexValue - Math.random() * 20 - 10);
    setIndexValue(newValue);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const getGaugeColors = () => {
    if (indexValue < 30) return {
      gradient: 'from-red-500 via-orange-500 to-yellow-500',
      glow: 'shadow-red-500/50',
      text: 'text-red-400'
    };
    if (indexValue < 70) return {
      gradient: 'from-yellow-500 via-orange-500 to-pink-500',
      glow: 'shadow-yellow-500/50',
      text: 'text-yellow-400'
    };
    return {
      gradient: 'from-green-500 via-cyan-500 to-blue-500',
      glow: 'shadow-green-500/50',
      text: 'text-green-400'
    };
  };

  const getMoodText = () => {
    if (indexValue < 30) return 'BEARISH CHAOS';
    if (indexValue < 70) return 'NEUTRAL MAYHEM';
    return 'BULLISH MOON';
  };

  const colors = getGaugeColors();

  return (
    <section className="py-24 lightning-bg relative overflow-hidden">
      {/* Chaotic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-40 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-lightning" />
        <div className="absolute bottom-40 right-40 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-lightning" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-lightning" />
        
        {/* Lightning Bolts */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`bolt-${i}`}
            className="absolute w-1 bg-gradient-to-b from-yellow-400 via-white to-transparent opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              height: `${30 + Math.random() * 60}px`,
              transform: `rotate(${Math.random() * 40 - 20}deg)`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 4 + Math.random() * 6,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <BarChart3 className="h-8 w-8 text-yellow-400 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-black chaos-text press-start animate-neon-flicker">
              POWELL INDEX
            </h2>
            <BarChart3 className="h-8 w-8 text-red-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed orbitron font-bold">
            🥊 WATCH RATE VS CUT BATTLE FOR CHAOS SUPREMACY! 🥊<br/>
            <span className="text-yellow-400">THE HIGHER THE INDEX, THE MORE WE MOON!</span>
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Gauge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="neon-card p-8 rounded-3xl mb-12 chaos-glow relative overflow-hidden"
          >
            {/* Chaotic Header */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-500 rounded-full animate-ping" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-ping" />

            <div className="text-center mb-8">
              <motion.div
                className="text-8xl font-black mb-4 press-start"
                animate={{ 
                  scale: isAnimating ? [1, 1.2, 1] : 1,
                  rotate: isAnimating ? [0, 5, -5, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <span className={`chaos-text ${colors.text} animate-neon-flicker`}>
                  {Math.round(indexValue)}
                </span>
              </motion.div>
              <div className={`text-2xl font-black ${colors.text} press-start animate-pulse`}>
                {getMoodText()}
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < Math.floor(indexValue / 20) ? 'bg-yellow-400' : 'bg-gray-600'
                    }`}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ 
                      duration: 0.5, 
                      repeat: Infinity, 
                      delay: i * 0.1,
                      repeatDelay: 2 
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Chaotic Gauge */}
            <div className="relative w-full h-8 bg-gray-900 rounded-full overflow-hidden mb-8 border-2 border-yellow-400/50">
              <motion.div
                className={`h-full bg-gradient-to-r ${colors.gradient} ${colors.glow} shadow-2xl relative`}
                initial={{ width: '50%' }}
                animate={{ width: `${indexValue}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />
                {/* Lightning effect on the gauge */}
                <motion.div
                  className="absolute right-0 top-0 w-1 h-full bg-white"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 2 }}
                />
              </motion.div>
              
              <div className="absolute inset-0 flex justify-between items-center px-4">
                <span className="text-xs text-gray-400 font-bold press-start">0</span>
                <span className="text-xs text-gray-400 font-bold press-start">50</span>
                <span className="text-xs text-gray-400 font-bold press-start">100</span>
              </div>
            </div>

            <div className="flex justify-between text-sm font-bold press-start">
              <span className="text-red-400 animate-pulse">BEARISH</span>
              <span className="text-yellow-400 animate-pulse">CHAOS</span>
              <span className="text-green-400 animate-pulse">BULLISH</span>
            </div>
          </motion.div>

          {/* Fighter Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Rate Fighter */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="neon-card p-6 rounded-2xl text-center group hover:chaos-glow transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -top-1 -left-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
              
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-3xl flex items-center justify-center mb-4 mx-auto group-hover:animate-chaos-bounce transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/50 to-transparent animate-pulse rounded-3xl" />
                <span className="text-3xl press-start relative z-10">%</span>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-300 rounded-full animate-bounce" />
              </div>
              <h3 className="text-3xl font-black text-yellow-400 mb-2 press-start animate-neon-flicker">RATE</h3>
              <p className="text-red-400 mb-6 font-bold orbitron">BEARISH DESTROYER</p>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(3)].map((_, i) => (
                  <Flame key={i} className="w-5 h-5 text-orange-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
              <Button
                onClick={pushDown}
                disabled={isAnimating}
                className="w-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:from-red-400 hover:via-orange-400 hover:to-yellow-400 text-black font-black py-4 rounded-xl transition-all duration-300 press-start chaos-glow"
              >
                <TrendingDown className="mr-2 h-5 w-5" />
                RATE SMASH
              </Button>
            </motion.div>

            {/* Cut Fighter */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="neon-card p-6 rounded-2xl text-center group hover:chaos-glow transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-500 rounded-full animate-ping" />
              
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center mb-4 mx-auto group-hover:animate-chaos-bounce transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-300/50 to-transparent animate-pulse rounded-3xl" />
                <span className="text-3xl press-start relative z-10">✂</span>
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-pink-300 rounded-full animate-bounce" />
              </div>
              <h3 className="text-3xl font-black text-red-400 mb-2 press-start animate-neon-flicker">CUT</h3>
              <p className="text-green-400 mb-6 font-bold orbitron">BULLISH CHAMPION</p>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(3)].map((_, i) => (
                  <Zap key={i} className="w-5 h-5 text-cyan-400 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                ))}
              </div>
              <Button
                onClick={pushUp}
                disabled={isAnimating}
                className="w-full bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 hover:from-green-400 hover:via-cyan-400 hover:to-blue-400 text-black font-black py-4 rounded-xl transition-all duration-300 press-start chaos-glow"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                CUT POWER
              </Button>
            </motion.div>
          </div>

          {/* Share Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center"
          >
            <Button
              className="bg-transparent border-4 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-black font-black px-8 py-4 rounded-xl transition-all duration-300 press-start animate-neon-flicker chaos-glow"
            >
              <Share2 className="mr-2 h-5 w-5" />
              SHARE CHAOS
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}