'use client';

import './globals.css';
import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';

const metadata: Metadata = {
  title: '$RATECUTS - When Powell Cuts, We Moon',
  description: 'The ultimate meme token for rate cut enthusiasts. Join the arcade revolution!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [animationIcons, setAnimationIcons] = useState<string[]>([]);

  useEffect(() => {
    // Generate random icons after component mounts to avoid SSR mismatch
    const icons = ['✂️', '%'];
    const randomIcons = Array.from({ length: 30 }, () => 
      icons[Math.floor(Math.random() * icons.length)]
    );
    setAnimationIcons(randomIcons);
  }, []);

  return (
    <html lang="en">
      <body className="inter relative min-h-screen" style={{WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontVariantLigatures: 'none'}}>
        {/* Global Chaotic Background */}
        <div className="fixed inset-0 lightning-bg overflow-hidden pointer-events-none">
          <div className="absolute top-10 md:top-20 left-10 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-yellow-400/20 rounded-full blur-3xl animate-lightning" />
          <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-red-500/20 rounded-full blur-3xl animate-lightning" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-pink-500/15 rounded-full blur-3xl animate-lightning" />
          <div className="absolute top-5 md:top-10 right-20 md:right-40 w-32 h-32 md:w-64 md:h-64 bg-cyan-400/15 rounded-full blur-3xl animate-lightning" />
          <div className="absolute bottom-5 md:bottom-10 left-20 md:left-40 w-32 h-32 md:w-64 md:h-64 bg-green-400/15 rounded-full blur-3xl animate-lightning" />
          
          {animationIcons.map((icon, i) => (
            <motion.div
              key={i}
              className={`absolute text-sm md:text-lg opacity-40 ${
                i % 5 === 0 ? 'text-yellow-400' :
                i % 5 === 1 ? 'text-red-500' :
                i % 5 === 2 ? 'text-pink-500' :
                i % 5 === 3 ? 'text-cyan-400' : 'text-green-400'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {icon}
            </motion.div>
          ))}

          {[...Array(12)].map((_, i) => (
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
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 2 + Math.random() * 4,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
        
        {/* Navigation */}
        <Navigation />
        
        {/* Content - added mb-2 to ensure divider visibility */}
        <div className="relative z-10 mb-2">
          {children}
        </div>
      </body>
    </html>
  );
}
