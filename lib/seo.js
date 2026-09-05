import { BUSINESS } from "@/data/business";
import { BRANCHES } from "@/data/branches";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://billybradsalon.com";

/**
 * Generates JSON-LD schema for Billy Brad Local Businesses (Thuckalay & Nagercoil branches)
 */
export function getLocalBusinessSchema() {
  return BRANCHES.map((branch) => ({
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "HairSalon"],
    "@id": `${SITE_URL}/#branch-${branch.id}`,
    name: branch.fullName,
    image: `${SITE_URL}${branch.image}`,
    url: SITE_URL,
    telephone: `+91${branch.phone}`,
    priceRange: "₹₹",
    description: branch.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${branch.address.line1}, ${branch.address.line2}${branch.address.line3 ? ', ' + branch.address.line3 : ''}`,
      addressLocality: branch.address.city,
      addressRegion: branch.address.state,
      postalCode: branch.address.pincode,
      addressCountry: "IN",
    },
    geo: branch.id === "thuckalay"
      ? {
          "@type": "GeoCoordinates",
          latitude: "8.2505",
          longitude: "77.3308",
        }
      : {
          "@type": "GeoCoordinates",
          latitude: "8.1833",
          longitude: "77.4119",
        },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.instagramThuckalay,
      BUSINESS.social.instagramNagercoil,
    ].filter(Boolean),
  }));
}

/**
 * Generates JSON-LD Educational Organization Schema for Billy Brad Academy
 */
export function getAcademyOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: `${BUSINESS.name} — Academy`,
    url: `${SITE_URL}/academy`,
    logo: `${SITE_URL}/images/MICS.png`,
    description: BUSINESS.academyPositioning,
    telephone: `+91${BUSINESS.contact.phone}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Thuckalay & Nagercoil",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.instagramThuckalay,
      BUSINESS.social.instagramNagercoil,
    ].filter(Boolean),
  };
}

/**
 * Generates JSON-LD schema for a specific course
 */
export function getCourseSchema(course) {
  if (!course) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: `${BUSINESS.name} Academy`,
      sameAs: `${SITE_URL}/academy`,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "OnSite",
      duration: course.duration,
      courseWorkload: "Hands-on Practical Training & Internship",
    },
    educationalCredentialAwarded: course.certification,
  };
}

/**
 * Generates JSON-LD BreadcrumbList schema
 */
export function getBreadcrumbSchema(items = []) {
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

/**
 * Generates JSON-LD FAQPage schema
 */
export function getFAQSchema(faqs = []) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question || faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer || faq.a,
      },
    })),
  };
}

/**
 * Helper to build metadata dynamic configuration
 */
export function constructMetadata({
  title,
  description,
  image = "/images/MICS.png",
  canonical,
  noIndex = false,
  keywords = [],
}) {
  const fullTitle = title
    ? `${title} | ${BUSINESS.shortName}`
    : `${BUSINESS.name} | ${BUSINESS.tagline}`;
  
  const fullDescription =
    description ||
    `${BUSINESS.name} — ${BUSINESS.salonPositioning} ${BUSINESS.academyPositioning}. Serving Thuckalay & Nagercoil.`;

  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [
      "Billy Brad",
      "Unisex Salon",
      "Beauty Salon Thuckalay",
      "Hair Salon Nagercoil",
      "Bridal Makeup Tamil Nadu",
      "Beauty Academy Thuckalay",
      "Hair Care Course",
      "Skin Care Course",
      "Makeup Academy Nagercoil",
      ...keywords,
    ],
    authors: [{ name: BUSINESS.name }],
    creator: BUSINESS.name,
    publisher: BUSINESS.name,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: canonicalUrl,
      siteName: BUSINESS.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || BUSINESS.name,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [imageUrl],
    },
  };
}
