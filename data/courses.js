// ============================================================
// BILLY BRAD ACADEMY — Course Data
// ============================================================

export const COURSES = [
  {
    id: "hair-course",
    slug: "hair-course",
    name: "Professional Hair Artistry",
    shortName: "Hair Artistry",
    description:
      "A comprehensive hands-on course covering all aspects of professional hair care — from foundational cuts to advanced coloring and chemical treatments. Designed for beginners and aspiring professionals.",
    duration: "Details available on enquiry",
    eligibility: "10th pass or above. No prior experience required.",
    certification: "Certificate in Professional Hair Artistry — Billy Brad Academy",
    image: "/images/academy/academy-hero.png",
    modules: [
      "Introduction to Hair Science & Scalp Care",
      "Haircut Techniques — Women, Men & Kids",
      "Hair Wash, Blow Dry & Setting",
      "Hair Coloring Fundamentals",
      "Advanced Color — Balayage, Highlights, Global Color",
      "Chemical Treatments — Smoothening, Rebonding, Keratin",
      "Hair Spa Treatments",
      "Hair Fall & Dandruff Treatments",
      "Client Communication & Consultation",
    ],
    practicalTraining: true,
    internship: true,
    placementAssistance: true,
    batchTimings: "Morning & Evening batches available. Details on enquiry.",
    featured: true,
  },
  {
    id: "skin-course",
    slug: "skin-course",
    name: "Advanced Skin & Beauty Therapy",
    shortName: "Skin Therapy",
    description:
      "In-depth skin care training covering facials, cleanup, de-tan, peel-off treatments and modern skin therapies. Learn from experienced practitioners with live client practice.",
    duration: "Details available on enquiry",
    eligibility: "10th pass or above. No prior experience required.",
    certification: "Certificate in Skin & Beauty Therapy — Billy Brad Academy",
    image: "/images/academy/academy-skin-training.png",
    modules: [
      "Skin Science & Skin Types",
      "Skin Analysis & Consultation",
      "Classic & Luxury Facials",
      "Cleanup Techniques",
      "De-Tan Treatments",
      "Peel-Off Masks & Advanced Skin Treatments",
      "Waxing & Threading",
      "Body Polishing & Scrubs",
      "Under Eye & Spot Treatments",
      "Hygiene & Safety Standards",
    ],
    practicalTraining: true,
    internship: true,
    placementAssistance: true,
    batchTimings: "Morning & Evening batches available. Details on enquiry.",
    featured: true,
  },
  {
    id: "makeup-course",
    slug: "makeup-course",
    name: "Professional Makeup Artistry",
    shortName: "Makeup Artistry",
    description:
      "Master the art of professional makeup — from everyday looks to bridal, HD and airbrush techniques. Includes live client practice and real bridal session experience.",
    duration: "Details available on enquiry",
    eligibility: "10th pass or above. No prior experience required.",
    certification: "Certificate in Professional Makeup Artistry — Billy Brad Academy",
    image: "/images/academy/academy-makeup-training.png",
    modules: [
      "Color Theory & Face Anatomy",
      "Tools & Product Knowledge",
      "Natural & Everyday Makeup",
      "Party & Event Makeup",
      "Engagement Makeup",
      "Bridal Makeup",
      "HD Makeup",
      "Airbrush Makeup",
      "Saree Draping",
      "Portfolio Building",
    ],
    practicalTraining: true,
    internship: true,
    placementAssistance: true,
    batchTimings: "Morning & Evening batches available. Details on enquiry.",
    featured: true,
  },
  {
    id: "complete-beauty-course",
    slug: "complete-beauty-course",
    name: "Complete Beauty & Wellness Course",
    shortName: "Complete Beauty",
    description:
      "Our flagship comprehensive program covering Hair, Skin and Makeup in one integrated course. The perfect foundation for a complete beauty career.",
    duration: "Details available on enquiry",
    eligibility: "10th pass or above. No prior experience required.",
    certification: "Diploma in Beauty & Wellness — Billy Brad Academy",
    image: "/images/academy/academy-campaign-banner.png",
    modules: [
      "All Hair Artistry modules",
      "All Skin Therapy modules",
      "All Makeup Artistry modules",
      "Business of Beauty",
      "Client Management",
      "Social Media for Beauty Professionals",
      "Live Bridal & Event Projects",
    ],
    practicalTraining: true,
    internship: true,
    placementAssistance: true,
    batchTimings: "Morning & Evening batches available. Details on enquiry.",
    featured: true,
    isHighlighted: true,
  },
];

export function getCourseBySlug(slug) {
  return COURSES.find((c) => c.slug === slug);
}

export function getFeaturedCourses() {
  return COURSES.filter((c) => c.featured);
}
