import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';
import SectionHeading from '../common/SectionHeading';
import { IMAGE_PATHS } from '@/lib/utils';

const SERVICES = [
  { id: 'hair', title: 'Hair Artistry', desc: 'Precision cuts, color & treatments.', img: IMAGE_PATHS.categories.hair, span: 'col-span-1 md:col-span-2 row-span-2' },
  { id: 'skin', title: 'Skin & Facial', desc: 'Glow-restoring therapies.', img: IMAGE_PATHS.categories.skin, span: 'col-span-1 row-span-1' },
  { id: 'bridal', title: 'Bridal', desc: 'Your perfect wedding look.', img: IMAGE_PATHS.categories.bridal, span: 'col-span-1 row-span-1' },
  { id: 'makeup', title: 'Makeup', desc: 'Flawless event styling.', img: IMAGE_PATHS.categories.makeup, span: 'col-span-1 md:col-span-2 row-span-1' },
  { id: 'groom', title: 'Groom', desc: 'Sharp men\'s grooming.', img: IMAGE_PATHS.categories.groom, span: 'col-span-1 row-span-1' },
  { id: 'kids', title: 'Kids', desc: 'Gentle styles for little ones.', img: IMAGE_PATHS.categories.kids, span: 'col-span-1 row-span-1' },
];

export default function SignatureServices() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading 
            subtitle="Our Expertise"
            title="Signature Services"
            description="A comprehensive suite of premium beauty and grooming services designed to elevate your everyday."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[240px] gap-4 md:gap-6 mt-12">
          {SERVICES.map((service, index) => (
            <ScrollReveal 
              key={service.id} 
              className={`relative group overflow-hidden bg-[#faf8f5] ${service.span}`}
              delay={index * 100}
            >
              <Link href={`/services/${service.id}`} className="block w-full h-full">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  quality={90}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  // sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 flex items-end justify-between text-white">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {service.desc}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
