import Image from 'next/image';
import SectionHeading from '@/components/common/SectionHeading';
import ScrollReveal from '@/components/common/ScrollReveal';
import CTAButton from '@/components/common/CTAButton';
import JsonLd from '@/components/seo/JsonLd';
import { OFFERS, MEMBERSHIP_PLANS } from '@/data/offers';
import { CheckCircle2 } from 'lucide-react';
import { constructMetadata, getBreadcrumbSchema, SITE_URL } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Offers & Packages',
  description: 'Explore exclusive salon offers, seasonal discount packages, and VIP membership plans at Billy Brad Salon in Thuckalay and Nagercoil.',
  canonical: '/offers',
  keywords: ['Salon Offers Thuckalay', 'Salon Packages Nagercoil', 'Haircut Offers', 'Bridal Packages', 'Billy Brad Memberships'],
});

export default function OffersPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Offers', url: '/offers' },
  ]);

  const offersSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Billy Brad Special Offers & Packages",
    itemListElement: OFFERS.map((offer, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: offer.title,
      description: offer.description,
    })),
  };

  return (
    <div className="pt-24 pb-20 bg-[#faf8f5] min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={offersSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          subtitle="Special Offers"
          title="Packages & Memberships"
          description="Exclusive beauty packages and membership plans designed to give you the best value for premium care."
        />

        {/* Current Offers */}
        <div className="mt-12 space-y-12">
          {OFFERS.map((offer, index) => (
            <ScrollReveal key={offer.id} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className="bg-white border border-[#e8e0d8] flex flex-col md:flex-row overflow-hidden group">
                <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto bg-[#f2ede6]">
                  {offer.image && (
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      quality={90}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  {offer.badge && (
                    <div className="absolute top-4 left-4 bg-[#1a1a1a] text-white text-[9px] tracking-wider uppercase font-bold px-3 py-1">
                      {offer.badge}
                    </div>
                  )}
                </div>
                <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="font-display text-3xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {offer.title}
                  </h3>
                  <p className="text-[#5a5a5a] text-base leading-relaxed mb-8">
                    {offer.description}
                  </p>
                  <div>
                    <CTAButton href="/book-appointment" variant={offer.isCommunity ? 'primary' : 'outline'}>
                      {offer.cta}
                    </CTAButton>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Memberships */}
        <div className="mt-24">
          <SectionHeading subtitle="Join the Club" title="Membership Plans" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {MEMBERSHIP_PLANS.map((plan, i) => (
              <ScrollReveal key={plan.id} direction="up" delay={i * 100}>
                <div className="bg-white border border-[#e8e0d8] p-8 md:p-10 h-full flex flex-col hover:border-[#c9a86c] transition-colors duration-300">
                  <h3 className="font-display text-3xl font-bold text-[#1a1a1a] mb-2">{plan.name}</h3>
                  <p className="text-[#7a7a7a] text-sm mb-8 pb-8 border-b border-[#e8e0d8]">{plan.description}</p>
                  
                  <div className="flex-1">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-[#c9a86c] mt-0.5 flex-shrink-0" />
                          <span className="text-[#5a5a5a] text-sm">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="text-sm font-semibold text-[#1a1a1a] mb-6">{plan.priceDisplay}</div>
                    <CTAButton href="/contact" variant="primary" fullWidth>Enquire Now</CTAButton>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
