import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price) {
  if (price === null || price === undefined) return "Price on consultation";
  if (price === 0) return "Complimentary";
  return `₹${price.toLocaleString("en-IN")}`;
}

export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function truncate(str, length = 120) {
  if (!str) return "";
  if (str.length <= length) return str;
  return str.substring(0, length).trim() + "…";
}

// Image path helper — centralises all image references
export const IMAGE_PATHS = {
  hero: {
    main: "/images/hero/hero-main.png",
  },
  categories: {
    hair: "/images/categories/category-hair.png",
    skin: "/images/categories/category-skin.png",
    makeup: "/images/categories/category-makeup.png",
    nails: "/images/categories/category-nails.png",
    groom: "/images/categories/category-groom.png",
    bridal: "/images/categories/category-bridal.png",
    kids: "/images/categories/category-kids.png",
    waxing: "/images/categories/category-waxing.png",
    threading: "/images/categories/category-threading.png",
    facial: "/images/categories/category-facial.png",
    massage: "/images/categories/category-massage.png",
  },
  salon: {
    interior1: "/images/salon/salon-interior-1.png",
    exteriorThuckalay: "/images/salon/salon-exterior-thuckalay.png",
    exteriorNagercoil: "/images/salon/salon-exterior-nagercoil.png",
  },
  bridal: {
    hero: "/images/bridal/bridal-hero.png",
    banner: "/images/bridal/bridal-campaign-banner.png",
  },
  academy: {
    hero: "/images/academy/academy-hero.png",
    banner: "/images/academy/academy-campaign-banner.png",
  },
  beforeAfter: {
    // hair1: "/images/before-after/hair-before-after-1.png",
    // skin1: "/images/before-after/skin-before-after-1.png",
    hair1Before: "/images/before-after/hair-before-1.png",
    hair1After: "/images/before-after/hair-after-1.png",
    skin1Before: "/images/before-after/skin-before-2.png",
    skin1After: "/images/before-after/skin-after-2.png",
  },
  groom: {
    hero: "/images/groom/groom-hero.png",
  },
  kids: {
    happyCustomer: "/images/kids/kids-happy-customer.png",
  },
  team: {
    founder: "/images/team/TEAM.png",
  },
  gallery: {
    hair1: "/images/gallery/gallery-hair.png",
    makeup1: "/images/gallery/gallery-makeup-1.png",
    academy1: "/images/gallery/gallery-academy.png",
  },
  og: "/images/MICS.png",
};
