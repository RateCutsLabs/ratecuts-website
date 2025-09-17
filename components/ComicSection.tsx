'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ComicSection() {
  const [currentPage, setCurrentPage] = useState(0);
  
  const comicPages = [
    {
      title: "Page 1",
      description: "Cut searches for the mystical SolanaBalls to wish for RateCuts",
      image: "/Page 1.png"
    },
    {
      title: "Page 2",
      description: "Rate blocks him: \"High rates must remain.\"",
      image: "/Page 2.png"
    },
    {
      title: "Page 3", 
      description: "First epic clash begins between Cut and Rate",
      image: "/Page 3.png"
    },
    {
      title: "Page 4",
      description: "Epic battle continues... To be continued in Part 2",
      image: "/Page 4.png"
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % comicPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + comicPages.length) % comicPages.length);
  };

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 gradient-text">
            The SolanaBalls Saga Begins…
          </h2>
          
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute top-20 right-20 w-1 h-1 bg-red-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-10 left-20 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-20 right-10 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl text-yellow-400 mb-4 font-bold tracking-wide" style={{
                textShadow: '0 0 10px rgba(251, 191, 36, 0.8), 0 0 20px rgba(251, 191, 36, 0.6), 0 0 30px rgba(251, 191, 36, 0.4)'
              }}>
                ⭐ Legends tell of 7 SolanaBalls… ⭐
              </p>
              
              <p className="text-xl md:text-2xl text-blue-300 mb-4 font-semibold" style={{
                textShadow: '0 0 8px rgba(147, 197, 253, 0.7)'
              }}>
                Whoever gathers them can wish for RateCuts.
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl">✂️</span>
                <p className="text-xl md:text-2xl text-red-400 font-bold" style={{
                  textShadow: '0 0 8px rgba(248, 113, 113, 0.7)'
                }}>
                  Cut is on the hunt.
                </p>
                <span className="text-2xl animate-bounce">⚡</span>
              </div>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-2xl">%</span>
                <p className="text-xl md:text-2xl text-orange-400 font-bold" style={{
                  textShadow: '0 0 8px rgba(251, 146, 60, 0.7)'
                }}>
                  Rate will stop at nothing to keep rates high.
                </p>
                <span className="text-2xl animate-pulse">🔥</span>
              </div>
              
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 blur-sm opacity-50 animate-pulse"></div>
                <p className="relative text-2xl md:text-3xl font-black tracking-wider" style={{
                  background: 'linear-gradient(45deg, #ef4444, #f59e0b, #ef4444)',
                  backgroundSize: '200% 200%',
                  animation: 'gradient 2s ease infinite',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px rgba(239, 68, 68, 0.8)'
                }}>
                  ⚔️ THE BATTLE BEGINS HERE ⚔️
                </p>
              </div>
            </div>
          </div>
          
          {/* Add keyframe animation */}
          <style jsx>{`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
        </motion.div>

        {/* Comic Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Comic Display */}
          <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden bg-black border-4 border-yellow-400">
            {/* Comic Page Image */}
            <div className="w-full relative">
              <img 
                src={comicPages[currentPage].image}
                alt={comicPages[currentPage].title}
                className="w-full h-auto object-contain"
              />
              
              {/* Page Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-xl font-bold text-white mb-1">{comicPages[currentPage].title}</h3>
                <p className="text-gray-300 text-sm">{comicPages[currentPage].description}</p>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevPage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={nextPage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {comicPages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'bg-yellow-400 shadow-lg' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Current Page Info */}
          <div className="text-center mt-4">
            <span className="text-gray-400 text-sm">
              {currentPage + 1} / {comicPages.length}
            </span>
          </div>
        </motion.div>

        {/* Teaser for Part 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-gradient-to-r from-red-500 to-yellow-500 p-1 rounded-xl">
            <div className="bg-black px-6 py-3 rounded-lg">
              <p className="text-xl font-bold text-white">
                To be continued... <span className="text-yellow-400">Part 2 coming soon.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}