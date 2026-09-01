import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function CourseCard({ course }) {
  return (
    <Link href={`/academy/${course.slug}`} className="group block h-full bg-white border border-[#e8e0d8] hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#faf8f5]">
        {course.image && (
          <Image
            src={course.image}
            alt={course.name}
            fill
            quality={90}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {course.isHighlighted && (
          <div className="absolute top-4 left-4 bg-[#c9a86c] text-[#1a1a1a] text-[9px] tracking-wider uppercase font-bold px-3 py-1">
            Flagship Program
          </div>
        )}
      </div>
      
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-3 leading-snug group-hover:text-[#c9a86c] transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>
          {course.name}
        </h3>
        <p className="text-[#5a5a5a] text-sm line-clamp-3 leading-relaxed mb-6 flex-1">
          {course.description}
        </p>
        
        <div className="mt-auto pt-6 border-t border-[#f2ede6] flex items-center justify-between">
          <span className="text-xs font-semibold text-[#1a1a1a] uppercase tracking-wider">
            View Details
          </span>
          <div className="w-8 h-8 rounded-full bg-[#f2ede6] flex items-center justify-center text-[#1a1a1a] group-hover:bg-[#c9a86c] group-hover:text-white transition-colors duration-300">
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
}
