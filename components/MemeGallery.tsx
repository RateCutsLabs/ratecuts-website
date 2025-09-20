'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Share2 } from 'lucide-react';
import Image from 'next/image';

export default function MemeGallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Updated meme data from Meme Section Website folder
  const memes = [
    {
      id: 1,
      title: "AI Generated Meme 1",
      image: "/Meme Section Website/ChatGPT Image 10. Sept. 2025, 11_21_07.webp",
      description: "AI generated chaos"
    },
    {
      id: 2,
      title: "AI Generated Meme 2",
      image: "/Meme Section Website/ChatGPT Image 10. Sept. 2025, 11_29_46.webp",
      description: "AI generated meme content"
    },
    {
      id: 3,
      title: "AI Generated Meme 3",
      image: "/Meme Section Website/ChatGPT Image 14. Sept. 2025, 09_50_54.webp",
      description: "AI generated viral content"
    },
    {
      id: 4,
      title: "AI Generated Meme 4",
      image: "/Meme Section Website/ChatGPT Image 14. Sept. 2025, 09_54_09.webp",
      description: "AI generated meme"
    },
    {
      id: 5,
      title: "AI Generated Meme 5",
      image: "/Meme Section Website/ChatGPT Image 14. Sept. 2025, 09_54_12.webp",
      description: "AI generated content"
    },
    {
      id: 6,
      title: "AI Generated Meme 6",
      image: "/Meme Section Website/ChatGPT Image 14. Sept. 2025, 09_55_43.webp",
      description: "AI generated chaos"
    },
    {
      id: 7,
      title: "AI Generated Meme 7",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_49_25.webp",
      description: "AI generated meme"
    },
    {
      id: 8,
      title: "AI Generated Meme 8",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_49_34.webp",
      description: "AI generated content"
    },
    {
      id: 9,
      title: "AI Generated Meme 9",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_49_40.webp",
      description: "AI generated viral content"
    },
    {
      id: 10,
      title: "AI Generated Meme 10",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_49_45.webp",
      description: "AI generated meme"
    },
    {
      id: 11,
      title: "AI Generated Meme 11",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_49_56.webp",
      description: "AI generated chaos"
    },
    {
      id: 12,
      title: "AI Generated Meme 12",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_50_12.webp",
      description: "AI generated content"
    },
    {
      id: 13,
      title: "AI Generated Meme 13",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_50_46.webp",
      description: "AI generated meme"
    },
    {
      id: 14,
      title: "AI Generated Meme 14",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_53_48.webp",
      description: "AI generated viral content"
    },
    {
      id: 15,
      title: "AI Generated Meme 15",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_54_54.webp",
      description: "AI generated chaos"
    },
    {
      id: 16,
      title: "AI Generated Meme 16",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_55_34.webp",
      description: "AI generated content"
    },
    {
      id: 17,
      title: "AI Generated Meme 17",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_56_26.webp",
      description: "AI generated meme"
    },
    {
      id: 18,
      title: "AI Generated Meme 18",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_56_31.webp",
      description: "AI generated viral content"
    },
    {
      id: 19,
      title: "AI Generated Meme 19",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_56_35.webp",
      description: "AI generated chaos"
    },
    {
      id: 20,
      title: "AI Generated Meme 20",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_56_42.webp",
      description: "AI generated content"
    },
    {
      id: 21,
      title: "AI Generated Meme 21",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_57_43.webp",
      description: "AI generated meme"
    },
    {
      id: 22,
      title: "AI Generated Meme 22",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_57_52.webp",
      description: "AI generated viral content"
    },
    {
      id: 23,
      title: "AI Generated Meme 23",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_58_48.webp",
      description: "AI generated chaos"
    },
    {
      id: 24,
      title: "AI Generated Meme 24",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_59_10.webp",
      description: "AI generated content"
    },
    {
      id: 25,
      title: "AI Generated Meme 25",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_59_13.webp",
      description: "AI generated meme"
    },
    {
      id: 26,
      title: "AI Generated Meme 26",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 19_59_43.webp",
      description: "AI generated viral content"
    },
    {
      id: 27,
      title: "AI Generated Meme 27",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 20_00_09.webp",
      description: "AI generated chaos"
    },
    {
      id: 28,
      title: "AI Generated Meme 28",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 20_01_29.webp",
      description: "AI generated content"
    },
    {
      id: 29,
      title: "AI Generated Meme 29",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 20_01_36.webp",
      description: "AI generated meme"
    },
    {
      id: 30,
      title: "AI Generated Meme 30",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 20_01_42.webp",
      description: "AI generated viral content"
    },
    {
      id: 31,
      title: "AI Generated Meme 31",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 20_02_52.webp",
      description: "AI generated chaos"
    },
    {
      id: 32,
      title: "AI Generated Meme 32",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 20_03_19.webp",
      description: "AI generated content"
    },
    {
      id: 33,
      title: "AI Generated Meme 33",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 20_03_22.webp",
      description: "AI generated meme"
    },
    {
      id: 34,
      title: "AI Generated Meme 34",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 20_03_33.webp",
      description: "AI generated viral content"
    },
    {
      id: 35,
      title: "AI Generated Meme 35",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 20_03_52.webp",
      description: "AI generated chaos"
    },
    {
      id: 36,
      title: "AI Generated Meme 36",
      image: "/Meme Section Website/ChatGPT Image 8. Sept. 2025, 22_18_13.webp",
      description: "AI generated content"
    },
    {
      id: 37,
      title: "Energy Battle on Powell Index",
      image: "/Meme Section Website/Kampf der Energien auf dem Powell Index.webp",
      description: "Energy battle on Powell Index"
    },
    {
      id: 38,
      title: "Energy Fighters in Boxing Ring",
      image: "/Meme Section Website/Kampf der Energien im Boxring.webp",
      description: "Energy fighters in boxing ring"
    },
    {
      id: 39,
      title: "Battle of Powerful Fighters",
      image: "/Meme Section Website/Kampf der kräftigen Kämpfer.webp",
      description: "Battle of powerful fighters"
    },
    {
      id: 40,
      title: "Powell Index Decision Points",
      image: "/Meme Section Website/Powell Index und Entscheidungspunkte.webp",
      description: "Powell Index decision points"
    }
  ];

  // Split memes into two rows
  const topRowMemes = memes.slice(0, Math.ceil(memes.length / 2));
  const bottomRowMemes = memes.slice(Math.ceil(memes.length / 2));

  // Function to download image
  const downloadImage = (imageUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title.replace(/\s+/g, '_')}_ratecuts_meme.webp`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to share image
  const shareImage = async (imageUrl: string, title: string) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          text: `Check out this $RATECUTS meme: ${title}`,
          url: window.location.href
        });
      } else {
        // Fallback: copy link to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      // Fallback: copy link to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (copyError) {
        console.error('Error copying link:', copyError);
        alert('Could not share or copy link. Please try again.');
      }
    }
  };

  return (
    <section id="meme-gallery" className="relative py-12 sm:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-8 gradient-text whitespace-nowrap">
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

        {/* Mobile-Friendly Animated Meme Gallery */}
        <div className="space-y-6 md:space-y-8">
          {/* Top Row - Scrolls Right */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6 w-max"
              animate={{ x: [0, -((topRowMemes.length * 200) / 2)] }}
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
                  className="flex-shrink-0 w-40 h-40 md:w-64 md:h-64 bg-black border-2 border-yellow-400/30 rounded-xl overflow-hidden cursor-pointer group relative"
                  onClick={() => setLightboxImage(meme.image)}
                  style={{
                    boxShadow: '0 0 15px rgba(234, 179, 8, 0.2)'
                  }}
                >
                  {/* Actual Meme Image */}
                  <Image 
                    src={meme.image}
                    alt={meme.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    quality={70}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Row - Scrolls Left */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6 w-max"
              animate={{ x: [-((bottomRowMemes.length * 200) / 2), 0] }}
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
                  className="flex-shrink-0 w-40 h-40 md:w-64 md:h-64 bg-black border-2 border-red-400/30 rounded-xl overflow-hidden cursor-pointer group relative"
                  onClick={() => setLightboxImage(meme.image)}
                  style={{
                    boxShadow: '0 0 15px rgba(239, 68, 68, 0.2)'
                  }}
                >
                  {/* Actual Meme Image */}
                  <Image 
                    src={meme.image}
                    alt={meme.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    quality={70}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
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
            <div className="relative w-full max-w-4xl">
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
                <Image 
                  src={lightboxImage}
                  alt="Fullscreen meme"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain max-h-[70vh]"
                  loading="lazy"
                  quality={80}
                />
              </div>
              {/* Action Buttons - responsive layout for mobile */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const meme = memes.find(m => m.image === lightboxImage);
                    if (meme) {
                      downloadImage(lightboxImage, meme.title);
                    }
                  }}
                  className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  <Download size={20} />
                  <span>Download</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const meme = memes.find(m => m.image === lightboxImage);
                    if (meme) {
                      shareImage(lightboxImage, meme.title);
                    }
                  }}
                  className="flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}