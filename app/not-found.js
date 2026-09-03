import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: '404 Page Not Found',
  description: 'The page you are looking for does not exist.',
  noIndex: true,
});

export default function NotFound() {

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="font-display text-[#c9a86c] text-8xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
        404
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
        Looks like this page took a different route.
      </h1>
      <p className="text-[#5a5a5a] mb-10 max-w-md mx-auto">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/" 
          className="px-8 py-3.5 bg-[#1a1a1a] text-white text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#c9a86c] transition-colors"
        >
          Back Home
        </Link>
        <Link 
          href="/services" 
          className="px-8 py-3.5 border border-[#1a1a1a] text-[#1a1a1a] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors"
        >
          Explore Services
        </Link>
      </div>
    </div>
  );
}
