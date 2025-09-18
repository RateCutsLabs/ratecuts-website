'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Twitter, Send, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const desktopMenuItems = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#lore-section' },
    // { label: 'THE FIGHT', href: '#fighting-clip' },
    { label: 'COMIC', href: '#comic-section' },
    { label: 'HOW TO BUY', href: '#how-to-buy' },
    { label: 'TOKENOMICS', href: '#tokenomics' },
    // { label: 'ROADMAP', href: '#roadmap' },
    // { label: 'FAQ', href: '#faq' },
  ];

  const mobileMenuItems = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#lore-section' },
    { label: 'THE FIGHT', href: '#fighting-clip' },
    { label: 'COMIC', href: '#comic-section' },
    { label: 'HOW TO BUY', href: '#how-to-buy' },
    { label: 'HOW TO PLAY', href: '#how-to-play' },
    { label: 'TOKENOMICS', href: '#tokenomics' },
    { label: 'THE FIGHTERS', href: '#the-fighters' },
    { label: 'VISION', href: '#vision' },
    { label: 'GALLERY', href: '#meme-gallery' },
    { label: 'ROADMAP', href: '#roadmap' },
    { label: 'FAQ', href: '#faq' },
    { label: 'COMMUNITY', href: 'https://x.com/i/communities/1964799556366868890' },
    { label: 'JOIN', href: '#final-cta' },
  ];

  const rightMenuItems = [
    { label: 'TWITTER', href: 'https://x.com/ratecuts_sol', icon: Twitter },
    { label: 'TELEGRAM', href: 'https://t.me/RateCuts', icon: Send },
    { label: 'BUY', href: 'https://pump.fun/coin/JbW2LnWdSmWR2APPcaN5tN5NiDHAzUzX73mtwMRpump', icon: ExternalLink },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    // Don't prevent default for external links
    if (href.startsWith('http') || href.startsWith('https') || href.startsWith('mailto') || href.startsWith('tel')) {
      return;
    }
    
    e.preventDefault();
    
    // Handle home link specially
    if (href === '#hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      return;
    }
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    // Added higher z-index to ensure divider visibility
    <nav className={`relative z-50 transition-colors duration-300 ${isMenuOpen ? 'bg-black/95' : 'bg-transparent'}`} style={{WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontVariantLigatures: 'none'}}>
      <div className="w-full px-4 md:px-6 py-2 md:py-4 sm:my-4 lg:py-2 relative z-10">
        <div className="flex items-center justify-between relative">
          {/* Left Menu - Desktop */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-1">
            {desktopMenuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-sm lg:text-base font-black text-cyan-400 hover:text-yellow-400 transition-colors press-start animate-neon-flicker whitespace-nowrap"
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
              className="text-yellow-400 hover:text-cyan-400 p-1"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Center Logo */}
          <motion.div
            className="flex-shrink-0 mx-4 md:mx-6 relative z-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <a href="/" className="block text-center">
              <Image 
                src="/logo.png" 
                alt="$RATECUTS Logo" 
                width={200}
                height={200}
                className="h-12 md:h-20 lg:h-20 mx-auto object-contain"
                style={{WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale'}}
                loading="eager"
                priority
              />
            </a>
          </motion.div>

          {/* Right Menu - Desktop */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 flex-1 justify-end">
            {rightMenuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1 text-sm font-black text-pink-400 hover:text-red-400 transition-colors press-start animate-neon-flicker whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden lg:inline">{item.label}</span>
                <span className="lg:hidden">{item.label.charAt(0)}</span>
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
            <div className="flex flex-col gap-3">
              {/* Mobile Left Menu */}
              <div className="space-y-2">
                {mobileMenuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      // For external links, open in new tab and close menu
                      if (item.href.startsWith('http')) {
                        window.open(item.href, '_blank');
                        setIsMenuOpen(false);
                        return;
                      }
                      handleScroll(e, item.href);
                    }}
                    className="block text-base font-black text-cyan-400 hover:text-yellow-400 transition-colors press-start py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              
              {/* Mobile Right Menu */}
              <div className="pt-3 border-t border-gray-700 space-y-2">
                {rightMenuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 text-base font-black text-pink-400 hover:text-red-400 transition-colors press-start py-2"
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
      
      {/* Gradient Bottom Border Effect with gap for logo */}
      <div className={`absolute bottom-0 left-0 right-0 flex items-center justify-center z-20 ${
        isMenuOpen ? 'md:flex hidden' : 'flex'
      }`}>
        {/* Left side of divider - reduced width to create gap */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-yellow-400 flex-1 max-w-[40%] animate-pulse" />
        {/* Right side of divider - reduced width to create gap */}
        <div className="h-0.5 bg-gradient-to-l from-transparent via-yellow-400 to-yellow-400 flex-1 max-w-[40%] animate-pulse" />
      </div>
    </nav>
  );
}