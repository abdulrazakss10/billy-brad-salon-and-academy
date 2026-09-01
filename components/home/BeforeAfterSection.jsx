import ScrollReveal from '../common/ScrollReveal';
import BeforeAfterSlider from '../common/BeforeAfterSlider';
import SectionHeading from '../common/SectionHeading';
import { IMAGE_PATHS } from '@/lib/utils';
import CTAButton from '../common/CTAButton';

export default function BeforeAfterSection() {
  return (
    <section className="section-padding bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading 
            subtitle="Transformations"
            title="See the Difference"
            description="Real results from our expert stylists and therapists. Swipe to see the transformations."
            light={true}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-12">
          {/* Hair Transformation */}
          <ScrollReveal direction="up" delay={100}>
            <div className="space-y-6">
              <BeforeAfterSlider 
                beforeImage={IMAGE_PATHS.beforeAfter.hair1Before}
                afterImage={IMAGE_PATHS.beforeAfter.hair1After} // Using same placeholder for now
              />
              <div>
                <h3 className="font-display text-2xl font-bold mb-2 text-[#c9a86c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Hair Color & Styling
                </h3>
                <p className="text-[#9a9a9a] text-sm leading-relaxed mb-4">
                  Expert balayage and color correction delivering vibrant, healthy-looking results without compromising hair integrity.
                </p>
                <CTAButton href="/services/hair" variant="whiteOutline" icon={false}>Explore Hair Services</CTAButton>
              </div>
            </div>
          </ScrollReveal>

          {/* Skin Transformation */}
          <ScrollReveal direction="up" delay={200}>
            <div className="space-y-6">
              <BeforeAfterSlider 
                beforeImage={IMAGE_PATHS.beforeAfter.skin1Before}
                afterImage={IMAGE_PATHS.beforeAfter.skin1After}
              />
              <div>
                <h3 className="font-display text-2xl font-bold mb-2 text-[#c9a86c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Advanced Skin Care
                </h3>
                <p className="text-[#9a9a9a] text-sm leading-relaxed mb-4">
                  Signature facial treatments targeting pigmentation and uneven texture for a luminous, flawless glow.
                </p>
                <CTAButton href="/services/skin" variant="whiteOutline" icon={false}>Explore Skin Services</CTAButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
