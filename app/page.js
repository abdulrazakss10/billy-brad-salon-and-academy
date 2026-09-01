import HeroSection from '@/components/home/HeroSection';
import BrandIntro from '@/components/home/BrandIntro';
import SignatureServices from '@/components/home/SignatureServices';
import BeforeAfterSection from '@/components/home/BeforeAfterSection';
import CommunitySection from '@/components/home/CommunitySection';
import BridalCampaign from '@/components/home/BridalCampaign';
import AcademyCampaign from '@/components/home/AcademyCampaign';
import LocationsSection from '@/components/home/LocationsSection';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
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
