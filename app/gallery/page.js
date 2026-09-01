'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '@/data/gallery';
import SectionHeading from '@/components/common/SectionHeading';
import ScrollReveal from '@/components/common/ScrollReveal';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex(prev => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };
  
  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex(prev => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          subtitle="Portfolio"
          title="Our Gallery"
          description="A visual journey of our transformations, salon space, and academy."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {GALLERY_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-[10px] tracking-wider uppercase font-semibold transition-colors duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#1a1a1a] text-white'
                  : 'bg-[#faf8f5] text-[#7a7a7a] hover:bg-[#e8e0d8] hover:text-[#1a1a1a]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delay={(index % 3) * 100}>
              <div 
                className="relative overflow-hidden group cursor-pointer break-inside-avoid bg-[#faf8f5]"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={600}
                  height={800}
                  // fill
                  quality={90}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-[10px] tracking-[0.2em] uppercase font-semibold border border-white/30 px-4 py-2 backdrop-blur-sm">
                    View
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-[#7a7a7a]">
            No images found in this category.
          </div>
        )}

      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors z-50">
            <X size={32} />
          </button>
          
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-50 bg-black/20 rounded-full">
            <ChevronLeft size={36} />
          </button>
          
          <div className="relative w-[90vw] h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].alt}
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-50 bg-black/20 rounded-full">
            <ChevronRight size={36} />
          </button>
          
          <div className="absolute bottom-6 left-0 right-0 text-center text-white/70 text-sm font-medium">
            {lightboxIndex + 1} / {filteredItems.length}
          </div>
        </div>
      )}
    </div>
  );
}
