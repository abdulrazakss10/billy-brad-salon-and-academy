import Image from 'next/image';
import ScrollReveal from '../common/ScrollReveal';
import { IMAGE_PATHS } from '@/lib/utils';
import { BUSINESS } from '@/data/business';

export default function BrandIntro() {
  return (
    <section className="section-padding bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <ScrollReveal direction="up">
              <span className="block text-[10px] tracking-[0.25em] uppercase text-[#c9a86c] font-semibold mb-4">
                Our Philosophy
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                {BUSINESS.salonPositioning}
              </h2>
              
              <div className="space-y-6 text-[#5a5a5a] leading-relaxed">
                <p>
                  At Billy Brad, we believe that luxury doesn't have to be inaccessible. Our spaces in Thuckalay and Nagercoil are designed to provide a premium, relaxing environment where every member of the family can receive expert care.
                </p>
                <p>
                  From transformative hair coloring to soothing skin therapies and impeccable bridal makeup, our experienced professionals use only top-tier products to ensure you leave looking and feeling your absolute best.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-10 pt-10 border-t border-[#e8e0d8]">
                <div>
                  <div className="font-display text-3xl text-[#1a1a1a] mb-1">{BUSINESS.experience}</div>
                  <div className="text-[10px] tracking-wider uppercase text-[#7a7a7a] font-semibold">Years Experience</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-[#1a1a1a] mb-1">2</div>
                  <div className="text-[10px] tracking-wider uppercase text-[#7a7a7a] font-semibold">Premium Locations</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <ScrollReveal direction="left" className="relative">
              {/* Decorative accent */}
              <div className="absolute -inset-4 md:-inset-6 border border-[#c9a86c] z-0 hidden md:block" />
              
              <div className="relative aspect-[4/5] z-10 img-hover-scale bg-[#f2ede6]">
                <Image
                  src={IMAGE_PATHS.salon.interior1}
                  alt="Billy Brad Salon Interior"
                  fill
                  quality={90}
                  className="object-cover"
                  // sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
