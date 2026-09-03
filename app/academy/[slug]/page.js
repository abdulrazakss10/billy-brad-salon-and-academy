import { COURSES, getCourseBySlug } from '@/data/courses';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Clock, GraduationCap, CheckCircle2 } from 'lucide-react';
import CTAButton from '@/components/common/CTAButton';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata, getBreadcrumbSchema, getCourseSchema } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return constructMetadata({ title: 'Course Not Found', noIndex: true });
  
  return constructMetadata({
    title: `${course.name} Course`,
    description: course.description,
    canonical: `/academy/${slug}`,
    image: course.image,
    keywords: [course.name, `${course.name} Thuckalay`, `${course.name} Nagercoil`, 'Beauty Certification'],
  });
}

export function generateStaticParams() {
  return COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Academy', url: '/academy' },
    { name: 'Courses', url: '/academy/courses' },
    { name: course.name, url: `/academy/${slug}` },
  ]);

  const courseSchema = getCourseSchema(course);

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={courseSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/academy/courses" className="inline-flex items-center text-[10px] tracking-wider uppercase font-semibold text-[#7a7a7a] hover:text-[#c9a86c] transition-colors">
            <ChevronLeft size={14} className="mr-1" />
            Back to All Courses
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              {course.name}
            </h1>
            
            <p className="text-lg text-[#5a5a5a] leading-relaxed mb-10">
              {course.description}
            </p>

            <div className="relative aspect-video w-full mb-12 bg-[#faf8f5]">
              {course.image && (
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  quality={90}
                  priority
                  className="object-cover"
                  // sizes="(max-width: 1024px) 100vw, 66vw"
                />
              )}
            </div>

            {/* Curriculum */}
            <div className="mb-12">
              <h2 className="font-display text-3xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Curriculum & Modules
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.modules.map((module, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-[#faf8f5] border border-[#e8e0d8]">
                    <CheckCircle2 size={18} className="text-[#c9a86c] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#1a1a1a]">{module}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar / Info */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-[#faf8f5] p-8 border border-[#e8e0d8]">
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#1a1a1a] mb-6 border-b border-[#e8e0d8] pb-4">
                Course Details
              </h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] mb-1">
                    <Clock size={16} className="text-[#c9a86c]" />
                    Duration
                  </div>
                  <p className="text-sm text-[#5a5a5a] pl-6">{course.duration}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] mb-1">
                    <GraduationCap size={16} className="text-[#c9a86c]" />
                    Eligibility
                  </div>
                  <p className="text-sm text-[#5a5a5a] pl-6">{course.eligibility}</p>
                </div>

                <div className="border-t border-[#e8e0d8] pt-4">
                  <div className="text-xs font-semibold text-[#1a1a1a] mb-2 uppercase tracking-wider">Features</div>
                  <ul className="space-y-2">
                    {course.practicalTraining && <li className="text-sm text-[#5a5a5a] flex items-center gap-2"><CheckCircle2 size={14} className="text-[#c9a86c]"/> Hands-on Practice</li>}
                    {course.internship && <li className="text-sm text-[#5a5a5a] flex items-center gap-2"><CheckCircle2 size={14} className="text-[#c9a86c]"/> Internship Included</li>}
                    {course.placementAssistance && <li className="text-sm text-[#5a5a5a] flex items-center gap-2"><CheckCircle2 size={14} className="text-[#c9a86c]"/> Placement Assistance</li>}
                  </ul>
                </div>
                
                <div className="border-t border-[#e8e0d8] pt-4">
                  <div className="text-xs font-semibold text-[#1a1a1a] mb-2 uppercase tracking-wider">Batches</div>
                  <p className="text-sm text-[#5a5a5a]">{course.batchTimings}</p>
                </div>
              </div>

              <CTAButton href={`/admission?course=${course.id}`} variant="primary" fullWidth>
                Apply for Admission
              </CTAButton>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
