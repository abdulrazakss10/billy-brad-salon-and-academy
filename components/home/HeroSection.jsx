import Image from 'next/image';
import { IMAGE_PATHS } from '@/lib/utils';
import CTAButton from '../common/CTAButton';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGE_PATHS.hero.main}
          alt="Premium Salon Experience"
          fill
          quality={90}
          priority
          className="object-cover opacity-60 scale-105 transform origin-center animate-[subtleZoom_20s_ease-out_forwards]"
          sizes="100vw"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <span className="block text-[10px] tracking-[0.3em] uppercase text-[#c9a86c] font-semibold mb-6 animate-[fadeInUp_1s_ease-out_0.2s_both]">
          Billy Brad Unisex Salon & Academy
        </span>
        
        <h1 
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] animate-[fadeInUp_1s_ease-out_0.4s_both]"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Where Every Strand & <br className="hidden md:block" />
          <span className="italic font-light">Shade Shines</span>
        </h1>
        
        <p className="text-[#e8e0d8] text-sm md:text-base max-w-xl mx-auto mb-10 animate-[fadeInUp_1s_ease-out_0.6s_both]">
          Premium beauty and grooming for every family. Experience luxury salon services and professional academy training in Thuckalay and Nagercoil.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_1s_ease-out_0.8s_both]">
          <CTAButton href="/book-appointment" variant="primary" className="w-full sm:w-auto">
            Book an Appointment
          </CTAButton>
          <CTAButton href="/services" variant="whiteOutline" className="w-full sm:w-auto" icon={false}>
            Explore Services
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
