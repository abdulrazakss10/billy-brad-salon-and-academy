import Image from 'next/image';
import ScrollReveal from '../common/ScrollReveal';
import CTAButton from '../common/CTAButton';
import { IMAGE_PATHS } from '@/lib/utils';

export default function BridalCampaign() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGE_PATHS.bridal.banner}
          alt="Premium Bridal Experience"
          fill
          quality={90}
          className="object-cover opacity-70"
          // sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        <ScrollReveal direction="up">
          <span className="block text-[10px] tracking-[0.3em] uppercase text-[#c9a86c] font-semibold mb-6">
            The Bridal Experience
          </span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
            Your Perfect Day,<br />Flawlessly Executed.
          </h2>
          
          <p className="text-[#e8e0d8] text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            From pre-bridal skin rituals to the final touch of HD airbrush makeup, our specialists curate a bespoke beauty journey ensuring you radiate confidence on your most important day.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/services/bridal" variant="white">
              Explore Bridal Packages
            </CTAButton>
            <CTAButton href="/book-appointment" variant="whiteOutline" icon={false}>
              Book Consultation
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
