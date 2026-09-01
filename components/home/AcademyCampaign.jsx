import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../common/ScrollReveal';
import CTAButton from '../common/CTAButton';
import { IMAGE_PATHS } from '@/lib/utils';

export default function AcademyCampaign() {
  return (
    <section className="py-0 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image Half */}
        <div className="relative h-[50vh] lg:h-auto min-h-[400px]">
          <Image
            src={IMAGE_PATHS.academy.hero}
            alt="Billy Brad Academy Training"
            fill
            quality={90}
            className="object-cover"
            // sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content Half */}
        <div className="flex items-center bg-[#faf8f5] p-10 md:p-16 lg:p-24">
          <ScrollReveal direction="up" className="max-w-xl">
            <span className="block text-[10px] tracking-[0.25em] uppercase text-[#c9a86c] font-semibold mb-4">
              Billy Brad Academy
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6 leading-[1.1]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Learn. Create.<br/>Transform.
            </h2>
            <p className="text-[#5a5a5a] text-sm md:text-base leading-relaxed mb-8">
              Launch your career in beauty with our comprehensive Hair, Skin & Makeup courses. We offer hands-on training, live client practice, internship opportunities, and placement assistance.
            </p>
            
            <ul className="space-y-3 mb-10">
              {['Professional Hair Artistry', 'Advanced Skin & Beauty Therapy', 'Professional Makeup Artistry', 'Complete Beauty & Wellness Course'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#1a1a1a] font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c9a86c]" />
                  {item}
                </li>
              ))}
            </ul>

            <CTAButton href="/academy" variant="primary">
              Join the Academy
            </CTAButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
