'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LogosMarquee() {
  const logos = [
    { src: '/sitelogos/dextools.webp', alt: 'DexTools', url: 'https://www.dextools.io' },
    { src: '/sitelogos/dexscreenerlogo.webp', alt: 'DexScreener', url: 'https://dexscreener.com' },
    { src: '/sitelogos/geckoterminal.webp', alt: 'GeckoTerminal', url: 'https://www.geckoterminal.com' },
    { src: '/sitelogos/dexview_logo.png', alt: 'DexView', url: 'https://www.dexview.com' },
  ];

  return (
    <section className="py-12 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-2">FEATURED ON</h3>
        </motion.div>

        <div className="relative">
          {/* Marquee container with fixed width */}
          <div className="flex overflow-hidden" style={{ maxWidth: '650px', margin: '0 auto' }}>
            {/* Combined set of logos for continuous animation */}
            <motion.div
              className="flex shrink-0 gap-14"
              animate={{ x: [-((110 + 56) * logos.length), 0] }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: 'linear'
              }}
            >
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div key={`first-${index}`} className="flex items-center justify-center my-6">
                  <a href={logo.url} target="_blank" rel="noopener noreferrer" className="block">
                    <Image 
                      src={logo.src} 
                      alt={logo.alt}
                      width={110}
                      height={55}
                      className="h-11 md:h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      loading="eager"
                      quality={70}
                    />
                  </a>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div key={`second-${index}`} className="flex items-center justify-center my-6">
                  <a href={logo.url} target="_blank" rel="noopener noreferrer" className="block">
                    <Image 
                      src={logo.src} 
                      alt={logo.alt}
                      width={110}
                      height={55}
                      className="h-11 md:h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      loading="eager"
                      quality={70}
                    />
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}