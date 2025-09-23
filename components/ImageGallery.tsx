// components/ImageGallery.tsx
'use client';

import { useMemo, useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Download, Link as LinkIcon, Copy, Grid, List } from 'lucide-react';
import Image from 'next/image';
import { memes } from '@/lib/memes';

type Item = { id: number; src: string; title?: string };

export default function ImageGallery() {
  const [active, setActive] = useState<Item | null>(null);
  const [mounted, setMounted] = useState(false);
  const [displayedImages, setDisplayedImages] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [gridView, setGridView] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement | null>(null);
  
  const ITEMS_PER_PAGE = 20;

  // Use images from MemeGallery
  // Use images from MemeGallery
  const items: Item[] = useMemo(
    () =>
      memes
        .slice()
        .sort((a, b) => a.id - b.id)
        .map((m) => ({ id: m.id, src: m.image, title: m.title })),
    []
  );

  // Load more images function
  const loadMoreImages = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, items.length);
      const newImages = items.slice(startIndex, endIndex);

      // Always append the next sequential batch
      setDisplayedImages(prev => [...prev, ...newImages]);

      if (endIndex >= items.length) {
        setHasMore(false);
      } else {
        setCurrentPage(prev => prev + 1);
      }
      
      setIsLoading(false);
    }, 500);
  }, [currentPage, items, isLoading, hasMore]);

  // Initial load
  useEffect(() => {
    loadMoreImages();
  }, []);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreImages();
        }
      },
      { threshold: 0.1 }
    );
    
    if (loadingRef.current) {
      observerRef.current.observe(loadingRef.current);
    }
    
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [loadMoreImages, hasMore, isLoading]);

  // Handle mounting for SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle body scroll when popup is open
  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [active]);

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {}
  };

  const copyImage = async (url: string) => {
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      const blob = await res.blob();
      // @ts-ignore ClipboardItem may not exist in TS lib
      await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
    } catch {
      window.open(url, '_blank');
    }
  };

  const downloadImage = (url: string, name = 'image') => {
    const a = document.createElement('a');
    a.href = url;
    const ext = url.split('.').pop()?.split('?')[0] || 'png';
    a.download = `${(name || 'image').replace(/\s+/g, '_')}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Popup component that will be rendered via portal
  const PopupModal = () => {
    if (!mounted || !active) return null;

    return createPortal(
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={() => setActive(null)}
        style={{ 
          zIndex: 999999,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        <div
          className="border border-gray-800 relative max-w-2xl w-full rounded-xl overflow-hidden shadow-2xl flex flex-col bg-black"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button floating top-right */}
          <button
            onClick={() => setActive(null)}
            className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/80 hover:bg-black/90 text-white flex items-center justify-center z-50 cursor-pointer"
            aria-label="Close"
            style={{ zIndex: 50 }}
          >
            ×
          </button>

          {/* Image */}
          <div className="relative w-full h-[70vh] bg-black">
            <Image
              src={active.src}
              alt={active.title || 'selected'}
              fill
              className="object-cover"
              priority
              quality={85}
            />
          </div>

          {/* Buttons at bottom */}
          <div className="flex items-center justify-center gap-3 p-4 bg-black/90">
            <button
              onClick={copyUrl}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/90 hover:bg-white text-black text-sm font-semibold cursor-pointer"
            >
              <LinkIcon size={18} />
              Copy URL
            </button>
            <button
              onClick={() => copyImage(active.src)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/90 hover:bg-white text-black text-sm font-semibold cursor-pointer"
            >
              <Copy size={18} />
              Copy Image
            </button>
            <button
              onClick={() => downloadImage(active.src, active.title)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/90 hover:bg-white text-black text-sm font-semibold cursor-pointer"
            >
              <Download size={18} />
              Download
            </button>
          </div>
        </div>
      </motion.div>,
      document.body
    );
  };

  return (
    <section id="meme-gallery" className="relative py-12 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          {/* <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-6 gradient-text">
            IMAGES
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
            <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 max-w-24 animate-pulse" />
            <span className="text-yellow-400 font-bold text-sm sm:text-base animate-pulse">CURATED CHAOS</span>
            <div className="h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent flex-1 max-w-24 animate-pulse" />
          </div> */}
          
          {/* Header with view toggle */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-left">
              <h3 className="text-white font-semibold text-lg">AI Generated Memes</h3>
              <p className="text-gray-400 text-sm">Curated collection of viral content</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setGridView(true)}
                className={`p-2 rounded-md ${gridView ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setGridView(false)}
                className={`p-2 rounded-md ${!gridView ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Grid Layout */}
        {gridView ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {displayedImages.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm cursor-pointer group"
                onClick={() => setActive(item)}
              >
                <Image
                  src={item.src}
                  alt={item.title || 'gallery image'}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  quality={70}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        ) : (
          /* List Layout */
          <div className="space-y-3">
            {displayedImages.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm cursor-pointer group hover:bg-black/60 transition-colors"
                onClick={() => setActive(item)}
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-lg flex-shrink-0">
                  <Image
                    src={item.src}
                    alt={item.title || 'gallery image'}
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={70}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold truncate">{item.title}</h3>
                  <p className="text-gray-400 text-sm">AI Generated Content</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
          </div>
        )}

        {/* End of content indicator */}
        {!hasMore && displayedImages.length > 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400">You've reached the end of the gallery</p>
          </div>
        )}

        {/* Intersection observer target */}
        <div ref={loadingRef} className="h-4" />

        <PopupModal />
      </div>
    </section>
  );
}