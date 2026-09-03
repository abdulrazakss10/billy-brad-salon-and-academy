import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Academy Admission Application",
  description:
    "Apply online for Hair, Skin & Makeup professional courses at Billy Brad Academy. Hands-on practical training with internship at Thuckalay & Nagercoil campuses.",
  canonical: "/admission",
  keywords: [
    "Academy Admission",
    "Beautician Course Application",
    "Makeup Course Admission",
    "Hair Course Thuckalay",
    "Nagercoil Beauty School",
  ],
});

const ADMISSION_FAQS = [
  {
    question: "What qualifications are required for Billy Brad Academy courses?",
    answer: "10th pass or above. No prior beauty or hair experience is required.",
  },
  {
    question: "Does Billy Brad Academy provide practical training and internship?",
    answer: "Yes, all courses include hands-on practical training on live models and real salon internship.",
  },
  {
    question: "Which campuses are available for courses?",
    answer: "Courses are conducted at our Thuckalay and Nagercoil campuses in Tamil Nadu.",
  },
];

export default function AdmissionLayout({ children }) {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Academy", url: "/academy" },
    { name: "Admission Application", url: "/admission" },
  ]);

  const faqSchema = getFAQSchema(ADMISSION_FAQS);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
