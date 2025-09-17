'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MemeGallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Placeholder meme data - you'll replace with actual memes
  const memes = Array.from({ length: 24 }, (_, index) => ({
    id: index + 1,
    title: `Meme ${index + 1}`,
    image: `/meme-placeholder-${index + 1}.png`, // Replace with actual meme paths
    description: `Epic RateCuts meme #${index + 1}`
  }));

  // Split memes into rows for parallax effect
  const topRowMemes = memes.filter((_, index) => index % 2 === 0);
  const bottomRowMemes = memes.filter((_, index) => index % 2 === 1);

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

        {/* Parallax Meme Gallery */}
        <div className="space-y-8">
          {/* Top Row - Scrolls Right */}
          <motion.div
            className="flex gap-4"
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...topRowMemes, ...topRowMemes].map((meme, index) => (
              <motion.div
                key={`top-${index}`}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="flex-shrink-0 w-64 h-64 bg-black border-2 border-yellow-400/30 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setLightboxImage(meme.image)}
                style={{
                  boxShadow: '0 0 20px rgba(234, 179, 8, 0.2)'
                }}
              >
                {/* Placeholder Meme Content */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-400/10 to-red-500/10 group-hover:from-yellow-400/20 group-hover:to-red-500/20 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎭</div>
                    <p className="text-yellow-400 font-bold text-sm">{meme.title}</p>
                    <p className="text-gray-400 text-xs mt-1">{meme.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Row - Scrolls Left */}
          <motion.div
            className="flex gap-4"
            animate={{ x: [-1200, 0] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...bottomRowMemes, ...bottomRowMemes].map((meme, index) => (
              <motion.div
                key={`bottom-${index}`}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="flex-shrink-0 w-64 h-64 bg-black border-2 border-red-400/30 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setLightboxImage(meme.image)}
                style={{
                  boxShadow: '0 0 20px rgba(239, 68, 68, 0.2)'
                }}
              >
                {/* Placeholder Meme Content */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-400/10 to-pink-500/10 group-hover:from-red-400/20 group-hover:to-pink-500/20 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-2">⚔️</div>
                    <p className="text-red-400 font-bold text-sm">{meme.title}</p>
                    <p className="text-gray-400 text-xs mt-1">{meme.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gallery Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            Click any meme for fullscreen chaos • Gallery auto-scrolls with parallax effect
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
                {/* Placeholder fullscreen meme */}
                <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-yellow-400/20 to-red-500/20">
                  <div className="text-center text-white">
                    <div className="text-8xl mb-4">🎭</div>
                    <p className="text-2xl font-bold">FULLSCREEN MEME</p>
                    <p className="text-gray-400 mt-2">Epic chaos content here</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}