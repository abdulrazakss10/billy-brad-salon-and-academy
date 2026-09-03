import SectionHeading from '@/components/common/SectionHeading';
import LocationCard from '@/components/common/LocationCard';
import { BRANCHES } from '@/data/branches';
import ScrollReveal from '@/components/common/ScrollReveal';
import InquiryForm from '@/components/contact/InquiryForm';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata, getBreadcrumbSchema } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Billy Brad Salon & Academy. Find directions, phone numbers, and WhatsApp links for our Thuckalay and Nagercoil branches.',
  canonical: '/contact',
  keywords: ['Contact Billy Brad', 'Thuckalay Salon Location', 'Nagercoil Salon Address', 'Billy Brad Phone Number'],
});

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Contact Us', url: '/contact' },
  ]);

  return (
    <div className="pt-24 pb-20 bg-[#faf8f5] min-h-screen">
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          subtitle="Get in Touch"
          title="Contact Us"
          description="We would love to hear from you. Visit our salons or reach out to us via phone or WhatsApp."
        />

        {/* Branch Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-12 mb-20">
          {BRANCHES.map((branch, index) => (
            <ScrollReveal key={branch.id} direction="up" delay={index * 150}>
              <LocationCard branch={branch} />
            </ScrollReveal>
          ))}
        </div>

        {/* General Inquiry Form — submits directly to WhatsApp */}
        <ScrollReveal direction="up" className="max-w-3xl mx-auto bg-white p-8 md:p-12 border border-[#e8e0d8]">
          <h2 className="font-display text-3xl font-bold text-[#1a1a1a] mb-8 text-center" style={{ fontFamily: 'var(--font-playfair)' }}>
            Send an Inquiry
          </h2>
          <InquiryForm />
        </ScrollReveal>

      </div>
    </div>
  );
}
