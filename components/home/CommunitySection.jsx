import ScrollReveal from '../common/ScrollReveal';
import { Heart, Scissors, Smile } from 'lucide-react';

const INITIATIVES = [
  {
    icon: Scissors,
    title: "Free Elderly Services",
    desc: "Free haircuts and shaves for elderly people who cannot easily visit the salon, because care has no age limit."
  },
  {
    icon: Smile,
    title: "₹99 Kids Haircut",
    desc: "Quality haircuts for children at just ₹99, ensuring great grooming is accessible to every family."
  },
  {
    icon: Heart,
    title: "Free Eyebrow Threading",
    desc: "Complimentary eyebrow threading for women as part of our commitment to community wellness."
  }
];

export default function CommunitySection() {
  return (
    <section className="py-20 md:py-32 bg-[#c9a86c] text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-5">
            <ScrollReveal direction="right">
              <span className="block text-[10px] tracking-[0.25em] uppercase text-[#1a1a1a]/80 font-bold mb-4">
                Giving Back
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                Beauty Rooted in Community
              </h2>
              <p className="text-[#1a1a1a]/80 text-sm md:text-base leading-relaxed">
                At Billy Brad, our mission goes beyond aesthetics. We believe in using our skills to uplift our community in Thuckalay and Nagercoil. These initiatives are our way of saying thank you and ensuring everyone has access to professional care.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid gap-6">
              {INITIATIVES.map((item, i) => (
                <ScrollReveal 
                  key={i} 
                  direction="up" 
                  delay={i * 100}
                  className="bg-[#faf8f5] p-6 md:p-8 flex gap-6 items-start hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-[#f2e8e0] rounded-full flex items-center justify-center flex-shrink-0 text-[#c9a86c]">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-[#5a5a5a] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
