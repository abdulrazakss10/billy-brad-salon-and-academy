import { COURSES } from '@/data/courses';
import CourseCard from '@/components/academy/CourseCard';
import SectionHeading from '@/components/common/SectionHeading';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata, getBreadcrumbSchema, SITE_URL } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Professional Beauty Courses',
  description: 'Explore all professional Hair, Skin, Makeup, and Cosmetology courses offered at Billy Brad Academy with certifications and internship.',
  canonical: '/academy/courses',
  keywords: ['Hair Course', 'Skin Therapy Course', 'Makeup Artistry Course', 'Cosmetology Diploma'],
});

export default function CoursesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Academy', url: '/academy' },
    { name: 'Courses', url: '/academy/courses' },
  ]);

  const courseListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Billy Brad Academy Professional Courses",
    itemListElement: COURSES.map((course, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: course.name,
      url: `${SITE_URL}/academy/${course.slug}`,
      description: course.description,
    })),
  };

  return (
    <div className="pt-24 pb-20 bg-[#faf8f5] min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={courseListSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <span className="block text-[10px] tracking-[0.25em] uppercase text-[#c9a86c] font-semibold mb-4">
            Curriculum
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Professional Courses
          </h1>
          <p className="text-[#5a5a5a] max-w-2xl mx-auto">
            Choose from our comprehensive training programs designed to launch your career in the beauty industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </div>
    </div>
  );
}

