import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RouteProgressBar from "@/components/common/RouteProgressBar";
import JsonLd from "@/components/seo/JsonLd";
import { BUSINESS } from "@/data/business";
import { SITE_URL, getLocalBusinessSchema, getAcademyOrganizationSchema } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} | ${BUSINESS.tagline}`,
    template: `%s | ${BUSINESS.shortName}`,
  },
  description: `${BUSINESS.name} — ${BUSINESS.salonPositioning} ${BUSINESS.academyPositioning}. Serving Thuckalay & Nagercoil, Tamil Nadu.`,
  keywords: [
    "Billy Brad",
    "Unisex Salon",
    "Beauty Salon Thuckalay",
    "Hair Salon Nagercoil",
    "Bridal Makeup",
    "Beauty Academy",
    "Hair Course",
    "Skin Care",
    "Tamil Nadu Salon",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${BUSINESS.name} | ${BUSINESS.tagline}`,
    description: `${BUSINESS.salonPositioning} Premium beauty & grooming in Thuckalay & Nagercoil.`,
    url: SITE_URL,
    siteName: BUSINESS.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/MICS.png", width: 1200, height: 630, alt: BUSINESS.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS.name,
    description: BUSINESS.tagline,
    images: ["/images/MICS.png"],
  },
};

export default function RootLayout({ children }) {
  const localBusinessSchema = getLocalBusinessSchema();
  const academySchema = getAcademyOrganizationSchema();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}
    >
      <head>
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={academySchema} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#faf8f5] text-[#1a1a1a] antialiased">
        <RouteProgressBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

