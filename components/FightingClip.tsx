'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FightingClip() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black mb-12 gradient-text"
        >
          THE FIGHT
        </motion.h2>
        
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
          <span className="text-yellow-400 font-bold text-lg animate-pulse">LIVE ACTION</span>
          <div className="h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
        </div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto rounded-xl overflow-hidden"
          style={{
            boxShadow: '0 0 50px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Fighting clip video */}
          <div className="aspect-video bg-black relative">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/fight-video.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* CTA Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={() => setIsLightboxOpen(true)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                style={{boxShadow: '0 0 30px rgba(239, 68, 68, 0.7)'}}
              >
                WATCH THE FIGHT
              </button>
            </div>
          </div>
        </motion.div>

        {/* Emotional Hook Text */}
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mt-8 font-mono"
          style={{
            textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
          }}
        >
          Emotional hook: visitors instantly feel the chaos.
        </motion.p> */}

        {/* Lightbox Modal */}
        {isLightboxOpen && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div className="relative max-w-5xl w-full">
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-red-400 transition-colors"
              >
                ×
              </button>
              <div className="aspect-video bg-black rounded-xl overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  poster="/placeholder-video-poster.jpg"
                >
                  <source src="/fight-video.MP4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}