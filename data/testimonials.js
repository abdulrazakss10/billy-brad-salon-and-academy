// ============================================================
// BILLY BRAD — Real Testimonials
// Only real client testimonials are included here.
// ============================================================

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Kalai KS Vani",
    quote:
      "Very good service, thank you! My 3-year-old's hair looks great.",
    service: "Kids Haircut",
    audience: "kids",
    tags: ["kids", "haircut"],
    rating: null, // No rating fabricated
    image: null,
  },
  {
    id: "t2",
    name: "Roveen Joe",
    quote:
      "This is the second time I have done my hair cut and beard trimmed here. They did a great job with reasonable price. The place is well maintained and neat.",
    service: "Haircut & Beard Trim",
    audience: "men",
    tags: ["men", "haircut", "beard"],
    rating: null,
    image: null,
  },
  {
    id: "t3",
    name: "Beena",
    quote:
      "I had a wonderful experience at Billy Brad Unisex salon. The service was excellent, the team was polite, and they really paid attention to every detail. My hair/skin feels amazing. Highly recommended.",
    service: "Salon Experience",
    audience: "women",
    tags: ["women", "hair", "skin", "experience"],
    rating: null,
    image: null,
  },
  {
    id: "t4",
    name: "Ovya Krishna",
    quote:
      "I had my haircut & hair colouring days back. I loved your professional services and hospitality. A Special thanks to Abinshika mam and kavya.",
    service: "Haircut & Hair Colouring",
    audience: "women",
    tags: ["women", "haircut", "color"],
    rating: null,
    image: null,
  },
];

export function getTestimonialsByTag(tag) {
  if (tag === "all") return TESTIMONIALS;
  return TESTIMONIALS.filter((t) => t.tags.includes(tag));
}
