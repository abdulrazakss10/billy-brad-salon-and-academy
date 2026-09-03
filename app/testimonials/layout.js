import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { TESTIMONIALS } from "@/data/testimonials";

export const metadata = constructMetadata({
  title: "Client Reviews & Testimonials",
  description:
    "Read genuine reviews and testimonials from clients and academy students of Billy Brad Unisex Salon & Academy in Thuckalay and Nagercoil.",
  canonical: "/testimonials",
  keywords: [
    "Billy Brad Reviews",
    "Salon Reviews Thuckalay",
    "Nagercoil Salon Ratings",
    "Academy Student Reviews",
  ],
});

export default function TestimonialsLayout({ children }) {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Testimonials", url: "/testimonials" },
  ]);

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Billy Brad Unisex Salon & Academy",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: TESTIMONIALS.length.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating || "5",
        bestRating: "5",
      },
      reviewBody: t.content || t.review,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={reviewSchema} />
      {children}
    </>
  );
}
