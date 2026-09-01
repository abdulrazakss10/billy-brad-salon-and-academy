// ============================================================
// BILLY BRAD — Branch Data
// Update addresses, maps links, and Instagram handles here.
// ============================================================

export const BRANCHES = [
  {
    id: "thuckalay",
    name: "Thuckalay",
    fullName: "Billy Brad Unisex Salon & Academy — Thuckalay",
    address: {
      line1: "Deeras Mall",
      line2: "Manali Rd",
      line3: "Opp. to Royal Enfield Showroom",
      city: "Thuckalay",
      state: "Tamil Nadu",
      pincode: "629175",
    },
    addressSingle: "Deeras Mall, Manali Rd, Opp. Royal Enfield Showroom, Thuckalay, Tamil Nadu 629175",
    phone: "9944885552",
    whatsapp: "9944885552",
    email: "billybrad@gmail.com",
    hours: "9:00 AM – 9:00 PM",
    instagram: "https://www.instagram.com/billybrad_salon_thuckalay",
    // Searches Google Maps for the exact business listing by name + address
    // so the pin lands on Billy Brad itself, not just the general area.
    // For a pixel-perfect pin, replace this with your branch's "Share" link
    // copied from its Google Business Profile (Google Maps app > Share).
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("Billy Brad Unisex Salon & Academy, Deeras Mall, Manali Rd, Thuckalay, Tamil Nadu 629175"),
    image: "/images/salon/salon-exterior-thuckalay.png",
    description: "Our original home — serving Thuckalay and surrounding areas with premium beauty and grooming.",
  },
  {
    id: "nagercoil",
    name: "Nagercoil",
    fullName: "Billy Brad Unisex Salon & Academy — Nagercoil",
    address: {
      line1: "Basement / Ground Floor",
      line2: "Of Unlimited Showroom",
      line3: "Kottar-Parvathipuram Rd, Opp. Thilagaram Nursing Home",
      line4: "Paalpanai",
      city: "Nagercoil",
      state: "Tamil Nadu",
      pincode: "629003",
    },
    addressSingle: "Basement/GF, Unlimited Showroom, Kottar-Parvathipuram Rd, Paalpanai, Nagercoil, Tamil Nadu 629003",
    phone: "9944885552",
    whatsapp: "9944885552",
    email: "billybrad@gmail.com",
    hours: "9:00 AM – 9:00 PM",
    instagram: "https://www.instagram.com/billybrad_salon_nagercoil",
    // Searches Google Maps for the exact business listing by name + address
    // so the pin lands on Billy Brad itself, not just the general area.
    // For a pixel-perfect pin, replace this with your branch's "Share" link
    // copied from its Google Business Profile (Google Maps app > Share).
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(
        "Billy Brad Unisex Salon & Academy, Unlimited Showroom, Kottar-Parvathipuram Rd, Paalpanai, Nagercoil, Tamil Nadu 629003"
      ),
    image: "/images/salon/salon-exterior-nagercoil.png",
    description: "Our second location — bringing the Billy Brad experience to Nagercoil and the city community.",
  },
];

export function getBranch(id) {
  return BRANCHES.find((b) => b.id === id) || BRANCHES[0];
}
