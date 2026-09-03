import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Book Appointment",
  description:
    "Schedule your hair cut, hair coloring, skin facial, or bridal makeup appointment at Billy Brad Unisex Salon in Thuckalay or Nagercoil.",
  canonical: "/book-appointment",
  keywords: [
    "Book Salon Appointment",
    "Haircut Booking Thuckalay",
    "Beauty Salon Reservation Nagercoil",
    "Bridal Makeup Booking",
  ],
});

export default function BookAppointmentLayout({ children }) {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Book Appointment", url: "/book-appointment" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
