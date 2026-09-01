// ============================================================
// BILLY BRAD UNISEX SALON & ACADEMY — Business Data
// Update this file to reflect any business information changes.
// ============================================================

export const BUSINESS = {
  name: "Billy Brad Unisex Salon & Academy",
  shortName: "Billy Brad",
  tagline: "Where Every Strand & Shade Shines",
  salonPositioning: "A Premium Family Salon, Made Affordable.",
  academyPositioning: "Complete Hair, Skin & Makeup Course with Hands-On Training & Internship",
  experience: "3+",
  founded: "2021",

  mission:
    "To provide exceptional salon services with expert care, affordable pricing, and a heartfelt commitment to our clients and community.",
  vision:
    "To make premium beauty and grooming accessible to every family while inspiring confidence in every individual.",

  contact: {
    phone: "9944885552",
    phoneFormatted: "+91 99448 85552",
    whatsapp: "9944885552",
    email: "billybrad@gmail.com",
  },

  hours: {
    weekdays: "9:00 AM – 9:00 PM",
    weekends: "9:00 AM – 9:00 PM",
    display: "Open Daily: 9:00 AM – 9:00 PM",
  },

  social: {
    facebook: "https://www.facebook.com/share/1HjN76KAVf/",
    instagramThuckalay: "https://www.instagram.com/billybrad_salon_thuckalay",
    instagramNagercoil: "https://www.instagram.com/billybrad_salon_nagercoil",
  },

  services: ["Hair", "Skin", "Makeup", "Nails", "Bridal", "Groom", "Kids"],
  highlights: ["3+ Years Experience", "Two Locations", "Salon + Academy", "Hair • Skin • Makeup"],
};

export const WHATSAPP_BASE_URL = "https://wa.me/91";

// Since this site has no backend, every "call to action" (tel link) uses the
// full E.164 format (+91XXXXXXXXXX) so the device dialer opens reliably
// regardless of the visitor's own country/locale settings.
export function getTelLink(phone = BUSINESS.contact.phone) {
  const digits = String(phone).replace(/\D/g, "");
  return `tel:+91${digits}`;
}

export function getWhatsAppLink(message = "") {
  const encoded = encodeURIComponent(message || "Hi Billy Brad, I'd like to enquire about your services.");
  return `${WHATSAPP_BASE_URL}${BUSINESS.contact.whatsapp}?text=${encoded}`;
}

export function getServiceWhatsAppLink(serviceName) {
  const message = `Hi Billy Brad, I'd like to enquire about ${serviceName}. Could you please share more details?`;
  return getWhatsAppLink(message);
}

export function getBookingWhatsAppLink({ branch, service, date, time, name, phone, message: notes } = {}) {
  let message = "Hi Billy Brad, I'd like to request an appointment.";
  if (branch) message += `\nBranch: ${branch}`;
  if (service) message += `\nService: ${service}`;
  if (date) message += `\nPreferred Date: ${date}`;
  if (time) message += `\nPreferred Time: ${time}`;
  if (name) message += `\nName: ${name}`;
  if (phone) message += `\nPhone: ${phone}`;
  if (notes) message += `\nNotes: ${notes}`;
  return getWhatsAppLink(message);
}

export function getContactWhatsAppLink({ name, phone, email, message: notes } = {}) {
  let message = "Hi Billy Brad, I have an inquiry.";
  if (name) message += `\nName: ${name}`;
  if (phone) message += `\nPhone: ${phone}`;
  if (email) message += `\nEmail: ${email}`;
  if (notes) message += `\nMessage: ${notes}`;
  return getWhatsAppLink(message);
}

export function getAdmissionWhatsAppLink({
  course,
  branch,
  firstName,
  lastName,
  phone,
  email,
  dob,
  education,
  batchPreference,
  message: notes,
} = {}) {
  let message = "Hi Billy Brad Academy, I'd like to apply for admission.";
  if (course) message += `\nCourse: ${course}`;
  if (branch) message += `\nPreferred Campus: ${branch}`;
  const fullName = [firstName, lastName].filter(Boolean).join(" ");
  if (fullName) message += `\nName: ${fullName}`;
  if (phone) message += `\nPhone: ${phone}`;
  if (email) message += `\nEmail: ${email}`;
  if (dob) message += `\nDate of Birth: ${dob}`;
  if (education) message += `\nQualification: ${education}`;
  if (batchPreference) message += `\nBatch Preference: ${batchPreference}`;
  if (notes) message += `\nMessage: ${notes}`;
  return getWhatsAppLink(message);
}
