// ============================================================
// BILLY BRAD — Team Data
// Replace placeholder bios with real team information.
// ============================================================

export const TEAM = [
  {
    id: "founder",
    name: "Billy Brad Founder",
    role: "Founder & Lead Stylist",
    specialty: "Hair Artistry & Salon Management",
    bio: "With over 3 years of experience building Billy Brad into a beloved family salon brand across Thuckalay and Nagercoil, our founder is committed to making premium beauty accessible to every family.",
    image: "/images/team/TEAM.png",
    // Replace above name/bio with actual founder details
  },
  {
    id: "abinshika",
    name: "Abinshika",
    role: "Senior Stylist",
    specialty: "Hair Coloring & Styling",
    bio: "Abinshika brings exceptional skill in hair color and transformation. Praised by clients for her attention to detail and warm hospitality.",
    image: null, // Replace with actual image path
  },
  {
    id: "kavya",
    name: "Kavya",
    role: "Beauty Specialist",
    specialty: "Makeup & Skin Care",
    bio: "Kavya's passion for beauty and skin science makes every client's experience exceptional. Known for her precision makeup and gentle skin care.",
    image: null, // Replace with actual image path
  },
];

export function getTeamMemberById(id) {
  return TEAM.find((m) => m.id === id);
}
