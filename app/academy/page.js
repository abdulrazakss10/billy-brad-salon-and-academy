import { COURSES, getFeaturedCourses } from '@/data/courses';
import Image from 'next/image';
import { IMAGE_PATHS } from '@/lib/utils';
import SectionHeading from '@/components/common/SectionHeading';
import CourseCard from '@/components/academy/CourseCard';
import CTAButton from '@/components/common/CTAButton';
import ScrollReveal from '@/components/common/ScrollReveal';
import { CheckCircle2, GraduationCap, Briefcase, Star } from 'lucide-react';

export const metadata = {
  title: 'Billy Brad Academy | Professional Beauty Courses',
  description: 'Complete Hair, Skin & Makeup courses with hands-on training and internship in Thuckalay & Nagercoil.',
};

const FEATURES = [
  { icon: GraduationCap, title: 'Expert Faculty', desc: 'Learn from industry professionals with years of salon experience.' },
  { icon: CheckCircle2, title: 'Hands-on Practice', desc: 'Extensive practical training on live models, not just mannequins.' },
  { icon: Briefcase, title: 'Internship Included', desc: 'Real-world salon experience included as part of your curriculum.' },
  { icon: Star, title: 'Placement Assistance', desc: 'Career guidance and placement support after certification.' },
];

export default function AcademyPage() {
  const featuredCourses = getFeaturedCourses();

  return (
    <div>
      {/* Academy Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGE_PATHS.academy.hero}
            alt="Billy Brad Academy"
            fill
            quality={90}
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="block text-[10px] tracking-[0.3em] uppercase text-[#c9a86c] font-semibold mb-6">
            Billy Brad Academy
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Shape the Future<br />of Beauty.
          </h1>
          <p className="text-[#e8e0d8] max-w-2xl mx-auto mb-10 text-lg">
            Professional Hair, Skin & Makeup courses with hands-on training and guaranteed internships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton href="/academy/courses" variant="primary" className="bg-[#c9a86c] text-[#1a1a1a] hover:bg-white border-none">
              Explore Courses
            </CTAButton>
            <CTAButton href="/admission" variant="whiteOutline" icon={false}>
              Apply for Admission
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="The Advantage" title="Why Learn With Us" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {FEATURES.map((feat, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100} className="text-center p-6 bg-[#faf8f5]">
                <div className="w-12 h-12 mx-auto bg-[#c9a86c] text-white flex items-center justify-center rounded-full mb-6">
                  <feat.icon size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#1a1a1a] mb-3">{feat.title}</h3>
                <p className="text-sm text-[#5a5a5a]">{feat.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section-padding bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="block text-[10px] tracking-[0.25em] uppercase text-[#c9a86c] font-semibold mb-3">Our Programs</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'var(--font-playfair)' }}>
                Professional Courses
              </h2>
            </div>
            <CTAButton href="/academy/courses" variant="outline" icon={false}>
              View All Courses
            </CTAButton>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, i) => (
              <ScrollReveal key={course.id} direction="up" delay={i * 100}>
                <CourseCard course={course} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="py-24 bg-[#1a1a1a] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Start Your Journey Today
          </h2>
          <p className="text-[#9a9a9a] mb-10">Admissions are open for our upcoming batches in Thuckalay and Nagercoil.</p>
          <CTAButton href="/admission" variant="primary" className="bg-[#c9a86c] text-[#1a1a1a] hover:bg-white border-none">
            Apply Now
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
