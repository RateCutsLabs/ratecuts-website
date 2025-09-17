'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Twitter, Send, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const leftMenuItems = [
    { label: 'HOME', href: '/' },
    { label: 'COMING SOON', href: '/coming-soon' },
  ];

  const rightMenuItems = [
    { label: 'TWITTER', href: '#', icon: Twitter },
    { label: 'TELEGRAM', href: '#', icon: Send },
    { label: 'BUY', href: '#', icon: ExternalLink },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 relative transition-colors duration-300 ${isMenuOpen ? 'bg-black/95' : 'bg-transparent'}`}>
      <div className="w-full px-4 md:px-6 py-6 md:py-8 relative z-10">
        <div className="flex items-center justify-between relative">
          {/* Left Menu - Desktop */}
          <div className="hidden md:flex items-center gap-6 flex-1">
            {leftMenuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-sm font-black text-cyan-400 hover:text-yellow-400 transition-colors press-start animate-neon-flicker whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-yellow-400 hover:text-cyan-400 p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Center Logo */}
          <motion.div
            className="flex-shrink-0 mx-4 md:mx-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <a href="/" className="block text-center">
              <h1 className="text-lg md:text-xl lg:text-2xl font-black gradient-text animate-neon-flicker orbitron leading-tight">
                $RATECUTS
              </h1>
              {/* <div className="text-xs text-yellow-400 font-bold space-grotesk mt-1">
                MEME CHAOS
              </div> */}
            </a>
          </motion.div>

          {/* Right Menu - Desktop */}
          <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
            {rightMenuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center gap-2 text-sm font-black text-pink-400 hover:text-red-400 transition-colors press-start animate-neon-flicker whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Placeholder */}
          <div className="md:hidden flex-shrink-0 w-12"></div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pt-4 border-t border-yellow-400/50"
          >
            <div className="flex flex-col gap-4">
              {/* Mobile Left Menu */}
              <div className="space-y-3">
                {leftMenuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block text-sm font-black text-cyan-400 hover:text-yellow-400 transition-colors press-start"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              
              {/* Mobile Right Menu */}
              <div className="pt-3 border-t border-gray-700 space-y-3">
                {rightMenuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-2 text-sm font-black text-pink-400 hover:text-red-400 transition-colors press-start"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Gradient Bottom Border Effect - Hidden on mobile when menu is open, overlapped by black background */}
      <div className={`absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 md:gap-4 px-4 pb-2 md:pb-0 ${
        isMenuOpen ? 'md:flex hidden' : 'flex'
      }`}>
        <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32 md:max-w-64 lg:max-w-96 animate-pulse" />
        <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase space-grotesk animate-neon-flicker px-2 whitespace-nowrap">MEME CHAOS</span>
        <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32 md:max-w-64 lg:max-w-96 animate-pulse" />
      </div>
    </nav>
  );
}