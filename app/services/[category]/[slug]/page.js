import { getServiceBySlug, getRelatedServices, SERVICES } from '@/data/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Clock, Info } from 'lucide-react';
import CTAButton from '@/components/common/CTAButton';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceGrid from '@/components/services/ServiceGrid';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: service.name,
    description: service.description,
  };
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    category: service.category,
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = getRelatedServices(service, 3);

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[10px] tracking-wider uppercase font-semibold text-[#7a7a7a]">
          <Link href="/services" className="hover:text-[#c9a86c] transition-colors">Services</Link>
          <span>/</span>
          <Link href={`/services/${service.category}`} className="hover:text-[#c9a86c] transition-colors">
            {service.category.replace('-', ' ')}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image */}
          <div>
            <div className="relative aspect-[4/5] bg-[#faf8f5] w-full sticky top-32">
              {service.image && (
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  quality={90}
                  className="object-cover"
                  priority
                  // sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
            </div>
          </div>

          {/* Details */}
          <div className="py-4">
            <span className="block text-[10px] tracking-[0.25em] uppercase text-[#c9a86c] font-semibold mb-4">
              {service.category.replace('-', ' ')}
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              {service.name}
            </h1>
            
            <p className="text-lg text-[#5a5a5a] leading-relaxed mb-8">
              {service.description}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 py-6 border-y border-[#e8e0d8] mb-10">
              <div className="flex items-center gap-2 text-sm text-[#1a1a1a] font-medium">
                <Clock size={18} className="text-[#c9a86c]" />
                {service.duration}
              </div>
              <div className="flex items-center gap-2 text-sm text-[#1a1a1a] font-medium">
                <Info size={18} className="text-[#c9a86c]" />
                For: {service.audience.join(', ')}
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mb-10 bg-[#faf8f5] p-6 md:p-8 border border-[#e8e0d8]">
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#1a1a1a] mb-6">
                Pricing Details
              </h3>
              
              {service.pricingType === 'consultation' && (
                <div className="text-xl font-medium text-[#1a1a1a]">{service.priceDisplay}</div>
              )}

              {service.pricingType === 'single' && service.prices && (
                <div className="flex items-end justify-between">
                  <span className="text-sm font-medium text-[#5a5a5a]">{service.prices[0].label}</span>
                  <span className="text-2xl font-bold text-[#1a1a1a]">{service.priceDisplay}</span>
                </div>
              )}

              {service.pricingType === 'size' && service.prices && (
                <div className="space-y-4">
                  {service.prices.map((p, i) => (
                    <div key={i} className="flex items-end justify-between border-b border-[#e8e0d8] pb-3 last:border-0 last:pb-0">
                      <span className="text-sm font-medium text-[#5a5a5a]">{p.label}</span>
                      <span className="text-lg font-bold text-[#1a1a1a]">₹{p.price}</span>
                    </div>
                  ))}
                </div>
              )}

              {service.pricingType === 'gendered' && service.prices && (
                <div className="space-y-4">
                  {service.prices.map((p, i) => (
                    <div key={i} className="flex items-end justify-between border-b border-[#e8e0d8] pb-3 last:border-0 last:pb-0">
                      <span className="text-sm font-medium text-[#5a5a5a]">{p.label}</span>
                      <span className="text-lg font-bold text-[#1a1a1a]">₹{p.price}</span>
                    </div>
                  ))}
                </div>
              )}

              {service.pricingType === 'per-sitting' && (
                <div className="text-xl font-medium text-[#1a1a1a]">{service.priceDisplay}</div>
              )}
              
              {service.pricingType === 'variants' && (
                <div className="text-xl font-medium text-[#1a1a1a]">{service.priceDisplay}</div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/book-appointment" variant="primary" fullWidth className="sm:w-auto">
                Book Appointment
              </CTAButton>
              <WhatsAppButton message={service.name} variant="outline" className="w-full sm:w-auto" />
            </div>

          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[#e8e0d8]">
            <SectionHeading
              subtitle="You May Also Like"
              title="Related Services"
              description="Explore more treatments that pair well with this one."
            />
            <div className="mt-12">
              <ServiceGrid services={relatedServices} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
