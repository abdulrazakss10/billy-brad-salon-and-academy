import { COURSES } from '@/data/courses';
import CourseCard from '@/components/academy/CourseCard';
import SectionHeading from '@/components/common/SectionHeading';

export const metadata = {
  title: 'Our Courses | Billy Brad Academy',
  description: 'Explore our professional Hair, Skin, and Makeup courses at Billy Brad Academy.',
};

export default function CoursesPage() {
  return (
    <div className="pt-24 pb-20 bg-[#faf8f5] min-h-screen">
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
