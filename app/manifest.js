import { BUSINESS } from "@/data/business";

export default function manifest() {
  return {
    name: BUSINESS.name,
    short_name: BUSINESS.shortName,
    description: `${BUSINESS.salonPositioning} ${BUSINESS.academyPositioning}`,
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f5",
    theme_color: "#1a1a1a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
