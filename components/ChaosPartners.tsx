'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ChaosPartners() {
  const partners = [
    { src: '/sitelogos/pinksale-logo.png', alt: 'Pinksale', url: 'https://www.pinksale.finance/' },
    { src: '/sitelogos/dexview_logo.png', alt: 'DexView', url: 'https://www.dexview.com' },
  ];

  return (
    <section className="py-8 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
        <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-2">CHAOS PARTNERS</h3>
        </motion.div>

        <div className="relative">
          {/* Static logos container with flex layout */}
          <div className="flex justify-center items-center gap-16 flex-wrap">
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block">
                  <Image 
                    src={partner.src} 
                    alt={partner.alt}
                    width={140}
                    height={70}
                    className="h-14 md:h-16 object-contain transition-all duration-300"
                    loading="eager"
                    quality={75}
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}