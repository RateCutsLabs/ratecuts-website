'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MemeGallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Actual meme data from artwork folder
  const memes = [
    {
      id: 1,
      title: "Debatte im Boxring",
      image: "/artwork/Debatte im Boxring_ RATE vs. CUT.png",
      description: "RATE vs CUT in intense debate"
    },
    {
      id: 2,
      title: "Energiesturm im Boxring",
      image: "/artwork/Energiesturm im Boxring.png",
      description: "Energy storm in the boxing ring"
    },
    {
      id: 3,
      title: "Kampf der Energie-Ikonen",
      image: "/artwork/Kampf der Energie-Ikonen.png",
      description: "Battle of energy icons"
    },
    {
      id: 4,
      title: "Kampf der Energieangriffe",
      image: "/artwork/Kampf der Energieangriffe.png",
      description: "Energy attack showdown"
    },
    {
      id: 5,
      title: "Kampf der Energien auf dem Powell Index",
      image: "/artwork/Kampf der Energien auf dem Powell Index.png",
      description: "Energy battle on Powell Index"
    },
    {
      id: 6,
      title: "Kampf der Energien im Boxring",
      image: "/artwork/Kampf der Energien im Boxring.png",
      description: "Energy fighters in boxing ring"
    },
    {
      id: 7,
      title: "Kampf der Titanen",
      image: "/artwork/Kampf der Titanen_ RATE vs CUT.png",
      description: "Battle of titans: RATE vs CUT"
    },
    {
      id: 8,
      title: "Kampf der kräftigen Kämpfer",
      image: "/artwork/Kampf der kräftigen Kämpfer.png",
      description: "Battle of powerful fighters"
    },
    {
      id: 9,
      title: "Konfrontation der Energien beim Powell Index",
      image: "/artwork/Konfrontation der Energien beim Powell Index.png",
      description: "Energy confrontation at Powell Index"
    },
    {
      id: 10,
      title: "Neon Boxkampf im digitalen Ring",
      image: "/artwork/Neon Boxkampf im digitalen Ring.png",
      description: "Neon boxing in digital ring"
    },
    {
      id: 11,
      title: "Powell Index und Entscheidungspunkte",
      image: "/artwork/Powell Index und Entscheidungspunkte.png",
      description: "Powell Index decision points"
    },
    {
      id: 12,
      title: "ChatGPT Image 1",
      image: "/artwork/ChatGPT Image 14. Sept. 2025, 09_55_43.png",
      description: "AI generated chaos"
    },
    {
      id: 13,
      title: "ChatGPT Image 2",
      image: "/artwork/ChatGPT Image 14. Sept. 2025, 09_55_53.png",
      description: "AI generated meme content"
    },
    {
      id: 14,
      title: "ChatGPT Image 3",
      image: "/artwork/ChatGPT Image 14. Sept. 2025, 09_56_08.png",
      description: "AI generated viral content"
    }
  ];

  // Split memes into two rows
  const topRowMemes = memes.slice(0, Math.ceil(memes.length / 2));
  const bottomRowMemes = memes.slice(Math.ceil(memes.length / 2));

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 gradient-text">
            MEME CHAOS UNLEASHED
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
            <span className="text-yellow-400 font-bold text-lg animate-pulse">VIRAL ARSENAL</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-4">
              RateCuts is a meme machine.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Every fight, every punch, every tweet → more content, more chaos.
            </p>
            <p className="text-lg md:text-xl text-yellow-400 font-bold mt-4">
              Cut ✂️ and Rate % live here as memes, stickers, and viral ammo.
            </p>
          </div>
        </motion.div>

        {/* Two Row Animated Meme Gallery */}
        <div className="space-y-8">
          {/* Top Row - Scrolls Right */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: [0, -((topRowMemes.length * 272) / 2)] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...topRowMemes, ...topRowMemes].map((meme, index) => (
                <motion.div
                  key={`top-${meme.id}-${index}`}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="flex-shrink-0 w-64 h-64 bg-black border-2 border-yellow-400/30 rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setLightboxImage(meme.image)}
                  style={{
                    boxShadow: '0 0 20px rgba(234, 179, 8, 0.2)'
                  }}
                >
                  {/* Actual Meme Image */}
                  <img 
                    src={meme.image}
                    alt={meme.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Row - Scrolls Left */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: [-((bottomRowMemes.length * 272) / 2), 0] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...bottomRowMemes, ...bottomRowMemes].map((meme, index) => (
                <motion.div
                  key={`bottom-${meme.id}-${index}`}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="flex-shrink-0 w-64 h-64 bg-black border-2 border-red-400/30 rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setLightboxImage(meme.image)}
                  style={{
                    boxShadow: '0 0 20px rgba(239, 68, 68, 0.2)'
                  }}
                >
                  {/* Actual Meme Image */}
                  <img 
                    src={meme.image}
                    alt={meme.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Gallery Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            Click any meme for fullscreen chaos
          </p>
        </motion.div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-red-400 transition-colors z-10"
              >
                ×
              </button>
              <div className="bg-black border-4 border-yellow-400 rounded-xl overflow-hidden"
                   style={{
                     boxShadow: '0 0 50px rgba(234, 179, 8, 0.5)'
                   }}>
                {/* Fullscreen Meme Image */}
                <img 
                  src={lightboxImage}
                  alt="Fullscreen meme"
                  className="w-full h-full object-contain max-h-[80vh]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}