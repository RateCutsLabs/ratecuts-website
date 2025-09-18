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
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
            <span className="text-cyan-400 font-bold text-lg animate-pulse">EPIC STORY</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-24 animate-pulse"></div>
          </div>
        </motion.div>

        {/* Comic Layout - Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Comic Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex"
          >
            {/* Main Comic Display */}
            <div className="relative w-full max-w-md mx-auto rounded-xl overflow-hidden bg-black border-4 border-yellow-400 flex flex-col flex-1">
              {/* Comic Page Image */}
              <div className="relative">
                <img 
                  src={comicPages[currentPage].image}
                  alt={comicPages[currentPage].title}
                  className="w-full h-auto object-contain"
                />
                
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

              {/* Page Indicators */}
              <div className="flex justify-center py-3 gap-2 bg-black/20">
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
            </div>
          </motion.div>

          {/* Right Side - Story Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex"
          >
            {/* All Story Content in Rounded Box */}
            <div className="bg-gradient-to-br from-black/80 to-gray-900/80 border-4 border-yellow-400 rounded-xl p-6 shadow-2xl backdrop-blur-sm max-w-md mx-auto flex flex-col justify-center flex-1" style={{
              boxShadow: '0 0 30px rgba(234, 179, 8, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.5)'
            }}>
              {/* Main Story */}
              <div className="text-center space-y-4 mb-8">
                <p className="text-xl md:text-2xl text-yellow-400 font-bold" style={{
                  textShadow: '0 0 10px rgba(234, 179, 8, 0.8)'
                }}>
                  Legends tell of 7 SolanaBalls...
                </p>
                
                <p className="text-lg md:text-xl text-blue-300 font-semibold">
                  Whoever gathers them can wish for RateCuts.
                </p>
              </div>

              {/* Characters */}
              <div className="text-center space-y-3 mb-8">
                <p className="text-lg md:text-xl text-red-400 font-bold">
                  Cut is on the hunt.
                </p>
                
                <p className="text-lg md:text-xl text-orange-400 font-bold">
                  Rate will stop at nothing to keep rates high.
                </p>
              </div>

              {/* Battle Text */}
              <div className="text-center mb-8">
                <p className="text-xl md:text-2xl font-black text-white" style={{
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
                }}>
                  THE BATTLE BEGINS HERE
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
                <div className="mx-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-32"></div>
              </div>

              {/* Current Page Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">{comicPages[currentPage].title}</h3>
                <p className="text-gray-300 mb-3">{comicPages[currentPage].description}</p>
                <span className="text-yellow-400 font-bold text-sm bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/30">
                  Page {currentPage + 1} / {comicPages.length}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

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