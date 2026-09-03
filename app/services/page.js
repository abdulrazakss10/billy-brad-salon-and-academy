import { SERVICES, SERVICE_CATEGORIES } from '@/data/services';
import ServiceGrid from '@/components/services/ServiceGrid';
import SectionHeading from '@/components/common/SectionHeading';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata, getBreadcrumbSchema, SITE_URL } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Salon Services',
  description: 'Explore our complete range of hair styling, skin treatments, bridal makeup, nail art, and grooming services in Thuckalay and Nagercoil.',
  canonical: '/services',
  keywords: ['Haircuts', 'Hair Coloring', 'Facials', 'Bridal Makeup', 'Smoothening', 'Keratin Treatment', 'Thuckalay Salon', 'Nagercoil Salon'],
});

export default function ServicesPage() {
  const featuredServices = SERVICES.filter(s => s.featured).slice(0, 6);
  
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Services', url: '/services' },
  ]);

  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Billy Brad Salon Services",
    description: "Full list of professional hair, skin, makeup and grooming services offered.",
    itemListElement: SERVICE_CATEGORIES.map((cat, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${cat.label} Services`,
      url: `${SITE_URL}/services/${cat.id}`,
    })),
  };

  return (
    <div className="pt-24 pb-16">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceCatalogSchema} />

      {/* Header */}
      <div className="bg-[#1a1a1a] text-white py-20 px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
          Our Services
        </h1>
        <p className="text-[#e8e0d8] max-w-2xl mx-auto">
          Beauty, grooming and transformation designed around you. Explore our full catalogue below.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Categories Quick Links */}
        <div className="mb-20">
          <SectionHeading subtitle="Catalogue" title="Browse by Category" />
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
            {SERVICE_CATEGORIES.map(cat => (
              <Link 
                key={cat.id} 
                href={`/services/${cat.id}`}
                className="px-6 py-3 bg-white border border-[#e8e0d8] text-[11px] tracking-wider uppercase font-semibold text-[#1a1a1a] hover:border-[#c9a86c] hover:text-[#c9a86c] transition-colors shadow-sm"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Showcase */}
        <div>
          <SectionHeading subtitle="Highlights" title="Featured Services" />
          <ServiceGrid services={featuredServices} />
        </div>
      </div>
    </div>
  );
}
