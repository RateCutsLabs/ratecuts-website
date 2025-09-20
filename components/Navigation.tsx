'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Send, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

// Custom X Logo Component
const XLogo = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className="h-4 w-4"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const desktopMenuItems = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#lore-section' },
    // { label: 'THE FIGHT', href: '#fighting-clip' },
    { label: 'COMIC', href: '#comic-section' },
    { label: 'TOKENOMICS', href: '#tokenomics', icon: XLogo },
    // { label: 'HOW TO BUY', href: '#how-to-buy' },
    // { label: 'TOKENOMICS', href: '#tokenomics' },
    // { label: 'ROADMAP', href: '#roadmap' },
    // { label: 'FAQ', href: '#faq' },
  ];

  const mobileMenuItems = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#lore-section' },
    // { label: 'THE FIGHT', href: '#fighting-clip' },
    { label: 'COMIC', href: '#comic-section' },
    { label: 'HOW TO BUY', href: '#how-to-buy' },
    // { label: 'HOW TO PLAY', href: '#how-to-play' },
    { label: 'TOKENOMICS', href: '#tokenomics' },
    // { label: 'THE FIGHTERS', href: '#the-fighters' },
    // { label: 'VISION', href: '#vision' },
    { label: 'GALLERY', href: '#meme-gallery' },
    { label: 'ROADMAP', href: '#roadmap' },
    // { label: 'FAQ', href: '#faq' },
    { label: 'COMMUNITY', href: 'https://x.com/i/communities/1964799556366868890' },
    // { label: 'JOIN', href: '#final-cta' },
  ];

  const rightMenuItems = [
    // { label: 'TWITTER', href: 'https://x.com/ratecuts_sol', icon: XLogo },
    // { label: 'TELEGRAM', href: 'https://t.me/RateCuts', icon: Send },
    // { label: 'BUY', href: 'https://pump.fun/coin/JbW2LnWdSmWR2APPcaN5tN5NiDHAzUzX73mtwMRpump', icon: ExternalLink },
    { label: 'GALLERY', href: '#meme-gallery' },
     { label: 'HOW TO BUY', href: '#how-to-buy' , icon: XLogo },
    
    { label: 'ROADMAP', href: '#roadmap' , icon: XLogo},
     { label: 'COMMUNITY', href: 'https://x.com/i/communities/1964799556366868890' },
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
    <nav className={`relative z-50 transition-colors duration-300 ${isMenuOpen ? 'bg-black/95' : 'bg-transparent  mt-4'}`} style={{WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', fontVariantLigatures: 'none'}}>
      {/* Adjusted padding for navigation height - change these values to modify height */}
      <div className="w-full px-0 md:px-6 py-3 md:py-6 sm:my-6 lg:my-[-20px] lg:py-0 relative z-10 ">
        <div className="flex items-center justify-between relativemy-6">
          {/* Left Menu - Desktop */}
          <div className="hidden md:flex items-center mt-[-80px] gap-4 lg:gap-6  flex-1 justify-center">
            {desktopMenuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-sm lg:text-base font-black text-yellow-400 hover:text-cyan-400 transition-colors system-font animate-neon-flicker whitespace-nowrap"
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
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 z-30">
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <a href="/" className="block text-center">
                <Image 
                  src="/new-ratecut-logo.png" 
                  alt="$RATECUTS Logo" 
                  width={500}
                  height={500}
                  className={`h-28 md:h-52 lg:h-48 mx-auto object-contain mt-4 ${isMenuOpen ? 'hidden' : 'block'}`}
                  style={{WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale'}}
                  loading="eager"
                  priority
                  quality={80}
                />
              </a>
            </motion.div>
          </div>
          
          <motion.div
            className="hidden md:flex flex-shrink-0 mx-4 md:mx-6 relative z-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <a href="/" className="block text-center">
              {/* Adjusted logo height - change these values to modify logo size */}
              <Image 
                src="/new-ratecut-logo.png" 
                alt="$RATECUTS Logo" 
                width={500}
                height={500}
                className="h-28 md:h-52 lg:h-48 mx-auto object-contain"
                style={{WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale'}}
                loading="eager"
                priority
                quality={80}
              />
            </a>
          </motion.div>

          {/* Right Menu - Desktop */}
          <div className="hidden md:flex  mt-[-80px] items-center gap-3 lg:gap-4 flex-1 justify-center">
            {rightMenuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1 text-sm font-black text-yellow-400 hover:text-cyan-400 transition-colors system-font animate-neon-flicker whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <item.icon className="h-4 w-4" /> */}
                <span className="hidden lg:inline">{item.label}</span>
                <span className="lg:hidden">{item.label.charAt(0)}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Placeholder */}
          <div className="md:hidden flex-shrink-0 w-12"></div>
        </div>
      </div>
      
      {/* Gradient Bottom Border Effect with gap for logo */}
      {/* Adjusted divider position - change this value to move divider vertically */}
      <div className={`absolute lg:mt-[-80px]  md:mt-[-80px] left-0 right-0 flex items-center justify-center ${isMenuOpen ? 'hidden' : 'block'}`}>
        {/* Left side of divider - reduced width to create gap */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-yellow-400 flex-1 max-w-[45%] animate-pulse" />
        {/* Center gap - matches logo width */}
        <div className="w-32 md:w-48 lg:w-58 flex-shrink-0"></div>
        {/* Right side of divider - reduced width to create gap */}
        <div className="h-0.5 bg-gradient-to-l from-transparent via-yellow-400 to-yellow-400 flex-1 max-w-[45%] animate-pulse" />
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4  pt-4 border-t border-yellow-400/50"
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
                  className="block text-base font-black text-yellow-400 hover:text-cyan-400 transition-colors system-font py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            {/* Mobile Right Menu */}
            {/* <div className="pt-3 border-t border-gray-700 space-y-2">
              {rightMenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-base font-black text-pink-400 hover:text-red-400 transition-colors system-font py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  
                  {item.label}
                </a>
              ))}
            </div> */}
          </div>
        </motion.div>
      )}
    </nav>
  );
}