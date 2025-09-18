'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Zap, Flame } from 'lucide-react';

export default function LiveTicker() {
  const [price, setPrice] = useState(0.00042);
  const [volume, setVolume] = useState(1250000);
  const [marketCap, setMarketCap] = useState(420000);
  const [change24h, setChange24h] = useState(15.7);

  // Simulate chaotic price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prev => Math.max(0.000001, prev + (Math.random() - 0.5) * 0.00002));
      setVolume(prev => prev + Math.random() * 15000);
      setMarketCap(prev => Math.max(1000, prev + (Math.random() - 0.5) * 2000));
      setChange24h(prev => prev + (Math.random() - 0.5) * 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const tickerData = [
    { 
      label: 'Market Cap', 
      value: `$${(marketCap / 1000).toFixed(0)}K`, 
      color: 'text-yellow-400',
      icon: null,
      glow: 'shadow-yellow-400/50'
    },
    { 
      label: 'Holders', 
      value: '6,969', 
      color: 'text-green-400',
      icon: null,
      glow: 'shadow-green-400/50'
    },
    { 
      label: '24h Volume', 
      value: `$${(volume / 1000000).toFixed(1)}M`, 
      color: 'text-cyan-400',
      icon: Zap,
      glow: 'shadow-cyan-400/50'
    },
    { 
      label: 'Powell Rage', 
      value: 'MAX', 
      color: 'text-red-400',
      icon: Flame,
      glow: 'shadow-red-400/50'
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-[#0A0A0F] via-[#1A0A1A] to-[#0A0A0F] border-y-4 border-yellow-400/50 py-6 overflow-hidden">
      {/* Chaotic Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-red-500/5 to-pink-500/5" />
      
      {/* Lightning Effects */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`ticker-bolt-${i}`}
          className="absolute w-px bg-gradient-to-b from-yellow-400 via-white to-transparent opacity-60"
          style={{
            left: `${20 + i * 20}%`,
            top: '0',
            height: '100%',
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            repeatDelay: 5 + Math.random() * 3,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Scrolling Ticker */}
      <motion.div
        className="flex whitespace-nowrap relative z-10"
        animate={{ x: [0, -2400] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {/* Repeat ticker data multiple times for seamless loop */}
        {[...Array(5)].map((_, repeatIndex) => (
          <div key={repeatIndex} className="flex items-center">
            {tickerData.map((item, index) => (
              <div key={`${repeatIndex}-${index}`} className="flex items-center mx-6">
                <span className="font-black text-white text-sm mr-3 press-start animate-neon-flicker">
                  {item.label}:
                </span>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-lg bg-black/50 border border-current/30 ${item.glow} shadow-lg`}>
                  {item.icon && <item.icon className="h-4 w-4 animate-pulse" />}
                  <span className={`font-black text-sm ${item.color} press-start animate-pulse`}>
                    {item.value}
                  </span>
                </div>
                <div className="flex items-center mx-4">
                  <span className="text-yellow-400 mx-2 text-2xl animate-pulse">⚡</span>
                  <span className="text-red-400 mx-2 text-2xl animate-pulse">🔥</span>
                  <span className="text-pink-400 mx-2 text-2xl animate-pulse">💥</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0A0A0F] to-transparent pointer-events-none z-20" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0A0A0F] to-transparent pointer-events-none z-20" />
      
      {/* Corner Chaos Elements */}
      <div className="absolute top-2 left-4 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
      <div className="absolute top-2 right-4 w-3 h-3 bg-red-500 rounded-full animate-ping" />
      <div className="absolute bottom-2 left-4 w-3 h-3 bg-pink-500 rounded-full animate-ping" />
      <div className="absolute bottom-2 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
    </div>
  );
}