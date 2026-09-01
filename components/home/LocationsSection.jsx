import ScrollReveal from '../common/ScrollReveal';
import SectionHeading from '../common/SectionHeading';
import LocationCard from '../common/LocationCard';
import { BRANCHES } from '@/data/branches';

export default function LocationsSection() {
  return (
    <section className="section-padding bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading 
            subtitle="Visit Us"
            title="Our Locations"
            description="Experience premium salon services and academy training at our two exclusive branches in Tamil Nadu."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-12">
          {BRANCHES.map((branch, index) => (
            <ScrollReveal key={branch.id} direction="up" delay={index * 150}>
              <LocationCard branch={branch} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
