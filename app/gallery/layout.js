import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata, getBreadcrumbSchema, SITE_URL } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Photo & Work Gallery",
  description:
    "Browse photos of hair transformations, skin treatments, bridal makeup looks, and academy live training sessions at Billy Brad Salon & Academy.",
  canonical: "/gallery",
  keywords: [
    "Salon Gallery",
    "Hair Transformations Photos",
    "Bridal Makeup Photos",
    "Billy Brad Salon Thuckalay Photos",
    "Nagercoil Salon Portfolio",
  ],
});

export default function GalleryLayout({ children }) {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Gallery", url: "/gallery" },
  ]);

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Billy Brad Salon & Academy Gallery",
    description: "Portfolio of hair styling, skin care, bridal makeup and academy training.",
    url: `${SITE_URL}/gallery`,
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={gallerySchema} />
      {children}
    </>
  );
}
