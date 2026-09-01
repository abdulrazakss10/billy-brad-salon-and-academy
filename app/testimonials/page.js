'use client';

import { useState } from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import ScrollReveal from '@/components/common/ScrollReveal';
import { TESTIMONIALS } from '@/data/testimonials';
import { Quote } from 'lucide-react';

const FILTERS = [
  { id: 'all', label: 'All Reviews' },
  { id: 'women', label: 'Women' },
  { id: 'men', label: 'Men' },
  { id: 'kids', label: 'Kids' },
];

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredTestimonials = activeFilter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.tags.includes(activeFilter));

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          subtitle="Real Words"
          title="Client Testimonials"
          description="Read what our clients have to say about their experience at Billy Brad Salon."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {FILTERS.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2.5 text-[10px] tracking-wider uppercase font-semibold transition-colors duration-300 ${
                activeFilter === f.id
                  ? 'bg-[#1a1a1a] text-white'
                  : 'bg-[#faf8f5] text-[#7a7a7a] hover:bg-[#e8e0d8] hover:text-[#1a1a1a]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {filteredTestimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} direction="up" delay={(index % 2) * 100}>
              <div className="bg-[#faf8f5] p-8 md:p-10 break-inside-avoid border border-[#e8e0d8]">
                <Quote size={32} className="text-[#c9a86c]/30 mb-6" />
                <p className="text-lg md:text-xl text-[#1a1a1a] leading-relaxed mb-8 italic" style={{ fontFamily: 'var(--font-playfair)' }}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#e8e0d8] rounded-full flex items-center justify-center text-[#7a7a7a] font-bold text-lg font-display">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#1a1a1a]">{testimonial.name}</div>
                    <div className="text-[10px] tracking-wider uppercase text-[#c9a86c] font-semibold mt-0.5">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filteredTestimonials.length === 0 && (
          <div className="text-center py-20 text-[#7a7a7a]">
            No testimonials found for this category yet.
          </div>
        )}

      </div>
    </div>
  );
}
