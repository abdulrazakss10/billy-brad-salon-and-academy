import Image from 'next/image';
import SectionHeading from '@/components/common/SectionHeading';
import ScrollReveal from '@/components/common/ScrollReveal';
import JsonLd from '@/components/seo/JsonLd';
import { TEAM } from '@/data/team';
import { IMAGE_PATHS } from '@/lib/utils';
import { BUSINESS } from '@/data/business';
import { constructMetadata, getBreadcrumbSchema } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'About Us',
  description: 'Learn about the Billy Brad story, our community initiatives, free haircuts for elders, and our expert team in Thuckalay and Nagercoil.',
  canonical: '/about',
  keywords: ['Billy Brad Story', 'Thuckalay Salon Team', 'Nagercoil Salon Team', 'Community Initiatives', 'Free Elder Haircuts'],
});

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'About Us', url: '/about' },
  ]);

  return (
    <div className="pt-24 pb-20">
      <JsonLd data={breadcrumbSchema} />

      
      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="block text-[10px] tracking-[0.3em] uppercase text-[#c9a86c] font-semibold mb-6">
            Our Story
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            A Premium Family Salon,<br/>Made Affordable.
          </h1>
        </div>
      </section>

      {/* The Journey */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="right">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                From Thuckalay to Nagercoil
              </h2>
              <div className="space-y-6 text-[#5a5a5a] leading-relaxed">
                <p>
                  Our journey began with a simple vision: {BUSINESS.vision} We realized that while luxury salons existed, they were often out of reach for the average family. We wanted to bridge that gap.
                </p>
                <p>
                  Starting our first branch in Thuckalay, we focused on bringing premium techniques, top-tier products, and exceptional hygiene standards to a warm, family-friendly environment. The overwhelming support from our community allowed us to expand to our second location in Nagercoil.
                </p>
                <p>
                  Today, with over {BUSINESS.experience} years of experience, we operate both a thriving salon and a professional beauty academy, training the next generation of stylists and makeup artists.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" className="relative aspect-[4/5] bg-[#faf8f5]">
              <Image
                src={IMAGE_PATHS.salon.exteriorThuckalay}
                alt="Billy Brad Thuckalay Branch"
                fill
                quality={90}
                className="object-cover"
                // sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="section-padding bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            subtitle="Giving Back"
            title="Community First"
            description="Our success is rooted in the community. Here is how we try to make a difference every day."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Free Elderly Services",
                desc: "We offer free haircuts and shaves for elderly members of our community who cannot easily afford or access salon services."
              },
              {
                title: "₹99 Kids Haircut",
                desc: "We believe every child deserves to feel confident. Our ₹99 kids haircut initiative ensures grooming is affordable for families."
              },
              {
                title: "Free Eyebrow Threading",
                desc: "A complimentary service for women, providing a small touch of care and dignity."
              }
            ].map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100} className="bg-white p-8 border border-[#e8e0d8] text-center">
                <h3 className="font-display text-xl font-bold text-[#1a1a1a] mb-4">{item.title}</h3>
                <p className="text-sm text-[#5a5a5a] leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            subtitle="The Experts"
            title="Meet Our Team"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.id} direction="up" delay={i * 100} className="group">
                <div className="relative aspect-[3/4] mb-6 bg-[#faf8f5] overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      quality={90}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[#9a9a9a] text-sm uppercase tracking-wider">
                      Portrait
                    </div>
                  )}
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-1">{member.name}</h3>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#c9a86c] font-semibold mb-3">
                  {member.role}
                </div>
                <p className="text-sm text-[#5a5a5a] mb-4">{member.specialty}</p>
                <p className="text-sm text-[#7a7a7a] leading-relaxed">{member.bio}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
