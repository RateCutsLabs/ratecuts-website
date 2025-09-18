'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LogosMarquee() {
  const logos = [
    { src: '/sitelogos/dexscreenerlogo.webp', alt: 'DexScreener' },
    { src: '/sitelogos/dextools.webp', alt: 'DexTools' },
    { src: '/sitelogos/geckoterminal.webp', alt: 'GeckoTerminal' },
  ];

  return (
    <section className="py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-2">AS FEATURED ON</h3>
        </motion.div> */}

        <div className="relative">
          {/* Marquee container */}
          <div className="flex overflow-hidden">
            {/* First set of logos */}
            <motion.div
              className="flex shrink-0 gap-16 pr-16"
              animate={{ x: ['-100%', '0%'] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: 'linear' 
              }}
            >
              {logos.map((logo, index) => (
                <div key={`first-${index}`} className="flex items-center justify-center my-6">
                  <Image 
                    src={logo.src} 
                    alt={logo.alt}
                    width={120}
                    height={64}
                    className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    quality={70}
                  />
                </div>
              ))}
            </motion.div>

            {/* Duplicate set for seamless loop */}
            <motion.div
              className="flex shrink-0 gap-16 pr-16"
              animate={{ x: ['-100%', '0%'] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: 'linear' 
              }}
            >
              {logos.map((logo, index) => (
                <div key={`second-${index}`} className="flex items-center justify-center my-6">
                  <Image 
                    src={logo.src} 
                    alt={logo.alt}
                    width={120}
                    height={64}
                    className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    quality={70}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
