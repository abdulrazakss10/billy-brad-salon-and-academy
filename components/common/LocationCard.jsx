import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import CTAButton from './CTAButton';
import { getTelLink } from '@/data/business';

export default function LocationCard({ branch }) {
  return (
    <div className="bg-white border border-[#e8e0d8] p-8 md:p-10 hover:shadow-lg transition-shadow duration-300">
      <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
        {branch.name}
      </h3>
      <p className="text-[10px] tracking-[0.2em] uppercase text-[#c9a86c] font-semibold mb-8">
        Billy Brad Salon & Academy
      </p>

      <div className="space-y-6 mb-10">
        <div className="flex gap-4">
          <MapPin size={18} className="text-[#c9a86c] flex-shrink-0 mt-0.5" />
          <div className="text-sm text-[#5a5a5a] leading-relaxed">
            <p className="font-medium text-[#1a1a1a] mb-1">{branch.address.line1}</p>
            <p>{branch.address.line2}</p>
            <p>{branch.address.line3}</p>
            {branch.address.line4 && <p>{branch.address.line4}</p>}
            <p>{branch.address.city}, {branch.address.state} {branch.address.pincode}</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Phone size={18} className="text-[#c9a86c] flex-shrink-0" />
          <a href={getTelLink(branch.phone)} className="text-sm text-[#5a5a5a] hover:text-[#c9a86c] transition-colors">
            {branch.phone}
          </a>
        </div>

        <div className="flex gap-4 items-center">
          <Clock size={18} className="text-[#c9a86c] flex-shrink-0" />
          <span className="text-sm text-[#5a5a5a]">{branch.hours}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <CTAButton href={branch.mapsLink} variant="outline" className="flex-1" icon={false}>
          <span className="flex items-center gap-2">
            <Navigation size={14} />
            Get Directions
          </span>
        </CTAButton>
        <CTAButton href="/book-appointment" variant="primary" className="flex-1">
          Book Here
        </CTAButton>
      </div>
    </div>
  );
}
