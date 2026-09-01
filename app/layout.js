import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RouteProgressBar from "@/components/common/RouteProgressBar";
import { BUSINESS } from "@/data/business";

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
  title: {
    default: `${BUSINESS.name} | ${BUSINESS.tagline}`,
    template: `%s | ${BUSINESS.shortName}`,
  },
  description: `${BUSINESS.name} — ${BUSINESS.salonPositioning} ${BUSINESS.academyPositioning}. Serving Thuckalay & Nagercoil, Tamil Nadu.`,
  keywords: [
    "Billy Brad",
    "Unisex Salon",
    "Beauty Salon",
    "Thuckalay",
    "Nagercoil",
    "Hair Salon",
    "Makeup",
    "Bridal Makeup",
    "Beauty Academy",
    "Hair Course",
    "Skin Care",
    "Tamil Nadu",
  ],
  openGraph: {
    title: `${BUSINESS.name} | ${BUSINESS.tagline}`,
    description: `${BUSINESS.salonPositioning} Premium beauty & grooming in Thuckalay & Nagercoil.`,
    type: "website",
    images: [{ url: "/images/MICS.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS.name,
    description: BUSINESS.tagline,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#faf8f5] text-[#1a1a1a] antialiased">
        <RouteProgressBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
