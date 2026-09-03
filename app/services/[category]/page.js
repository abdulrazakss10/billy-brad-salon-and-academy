import { getServicesByCategory, SERVICE_CATEGORIES } from '@/data/services';
import ServiceGrid from '@/components/services/ServiceGrid';
import JsonLd from '@/components/seo/JsonLd';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { constructMetadata, getBreadcrumbSchema, SITE_URL } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { category: catId } = await params;
  const category = SERVICE_CATEGORIES.find(c => c.id === catId);
  if (!category) return constructMetadata({ title: 'Category Not Found', noIndex: true });
  
  return constructMetadata({
    title: `${category.label} Services`,
    description: `Explore our premium ${category.label.toLowerCase()} services and treatments at Billy Brad Unisex Salon in Thuckalay and Nagercoil.`,
    canonical: `/services/${catId}`,
    keywords: [`${category.label} services`, `${category.label} salon Thuckalay`, `${category.label} Nagercoil`],
  });
}

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((category) => ({
    category: category.id,
  }));
}

export default async function CategoryPage({ params }) {
  const { category: catId } = await params;
  const category = SERVICE_CATEGORIES.find(c => c.id === catId);
  if (!category) notFound();

  const services = getServicesByCategory(catId);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Services', url: '/services' },
    { name: `${category.label} Services`, url: `/services/${catId}` },
  ]);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${category.label} Services — Billy Brad Salon`,
    itemListElement: services.map((service, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: service.name,
      description: service.description,
    })),
  };

  return (
    <div className="pt-24 pb-20 bg-[#faf8f5] min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link href="/services" className="inline-flex items-center text-[10px] tracking-wider uppercase font-semibold text-[#7a7a7a] hover:text-[#c9a86c] transition-colors">
            <ChevronLeft size={14} className="mr-1" />
            Back to All Services
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            {category.label} Services
          </h1>
          <p className="text-[#5a5a5a] max-w-2xl">
            Browse our curated selection of {category.label.toLowerCase()} treatments and services.
          </p>
        </div>

        <ServiceGrid services={services} />

      </div>
    </div>
  );
}

