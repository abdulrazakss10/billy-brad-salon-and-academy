// ============================================================
// BILLY BRAD — Gallery Data
// Replace image paths with real client images.
// ============================================================

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "hair", label: "Hair" },
  { id: "makeup", label: "Makeup" },
  { id: "bridal", label: "Bridal" },
  { id: "salon", label: "Salon" },
  { id: "kids", label: "Kids" },
  { id: "academy", label: "Academy" },
  { id: "before-after", label: "Before & After" },
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    category: "hair",
    image: "/images/gallery/gallery-hair.png",
    alt: "Professional hair transformation at Billy Brad Salon",
    title: "Hair Transformation",
  },
  {
    id: "g2",
    category: "makeup",
    image: "/images/gallery/gallery-makeup-1.png",
    alt: "Bridal makeup by Billy Brad",
    title: "Bridal Makeup",
  },
  {
    id: "g3",
    category: "academy",
    image: "/images/gallery/gallery-academy.png",
    alt: "Students training at Billy Brad Academy",
    title: "Academy Training",
  },
  {
    id: "g4",
    category: "bridal",
    image: "/images/bridal/bridal-hero.png",
    alt: "Bridal look by Billy Brad",
    title: "Bridal Look",
  },
  {
    id: "g5",
    category: "salon",
    image: "/images/salon/salon-interior-1.png",
    alt: "Billy Brad Salon interior",
    title: "Salon Interior",
  },
  {
    id: "g6",
    category: "kids",
    image: "/images/kids/kids-happy-customer.png",
    alt: "Happy young customer at Billy Brad",
    title: "Happy Little Customer",
  },
  {
    id: "g7",
    category: "before-after",
    image: "/images/before-after/hair-before-after-1.png",
    alt: "Hair transformation before and after",
    title: "Hair Before & After",
  },
  {
    id: "g8",
    category: "before-after",
    image: "/images/before-after/skin-before-after-1.png",
    alt: "Skin transformation before and after",
    title: "Skin Before & After",
  },
];

export function getGalleryByCategory(category) {
  if (category === "all") return GALLERY_ITEMS;
  return GALLERY_ITEMS.filter((g) => g.category === category);
}
