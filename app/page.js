import HeroSection from '@/components/home/HeroSection';
import BrandIntro from '@/components/home/BrandIntro';
import SignatureServices from '@/components/home/SignatureServices';
import BeforeAfterSection from '@/components/home/BeforeAfterSection';
import CommunitySection from '@/components/home/CommunitySection';
import BridalCampaign from '@/components/home/BridalCampaign';
import AcademyCampaign from '@/components/home/AcademyCampaign';
import LocationsSection from '@/components/home/LocationsSection';
import FinalCTA from '@/components/home/FinalCTA';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata, SITE_URL } from '@/lib/seo';
import { BUSINESS } from '@/data/business';

export const metadata = constructMetadata({
  title: `${BUSINESS.name} | Premium Family Salon & Academy`,
  description: `${BUSINESS.salonPositioning} ${BUSINESS.academyPositioning}. Serving Thuckalay & Nagercoil. Top rated hair, skin, makeup, and bridal services.`,
  canonical: '/',
});

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: BUSINESS.name,
    url: SITE_URL,
    image: `${SITE_URL}/images/MICS.png`,
    description: BUSINESS.mission,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "450",
    },
    priceRange: "₹₹",
  };

  return (
    <>
      <JsonLd data={homeSchema} />
      <HeroSection />
      <BrandIntro />
      <SignatureServices />
      <BeforeAfterSection />
      <CommunitySection />
      <BridalCampaign />
      <AcademyCampaign />
      <LocationsSection />
      <FinalCTA />
    </>
  );
}

