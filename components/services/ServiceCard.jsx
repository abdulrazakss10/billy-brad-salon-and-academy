import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service }) {
  return (
    <Link href={`/services/${service.category}/${service.slug}`} className="group block h-full bg-white border border-[#e8e0d8] hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#faf8f5]">
        {service.image && (
          <Image
            src={service.image}
            alt={service.name}
            fill
            quality={90}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <div className="p-6 md:p-8 flex flex-col justify-between h-[calc(100%-75%)] min-h-[220px]">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#c9a86c] font-semibold">
              {service.category.replace('-', ' ')}
            </span>
            <span className="text-[11px] font-medium text-[#7a7a7a]">
              {service.duration}
            </span>
          </div>
          <h3 className="font-display text-xl font-bold text-[#1a1a1a] mb-3 leading-snug group-hover:text-[#c9a86c] transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>
            {service.name}
          </h3>
          <p className="text-[#5a5a5a] text-sm line-clamp-2 leading-relaxed">
            {service.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#f2ede6]">
          <span className="text-sm font-semibold text-[#1a1a1a]">
            {service.priceDisplay}
          </span>
          <div className="w-8 h-8 rounded-full bg-[#f2ede6] flex items-center justify-center text-[#1a1a1a] group-hover:bg-[#c9a86c] group-hover:text-white transition-colors duration-300">
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
}
