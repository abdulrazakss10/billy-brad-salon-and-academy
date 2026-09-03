import { SERVICE_CATEGORIES, SERVICES } from "@/data/services";
import { COURSES } from "@/data/courses";
import { SITE_URL } from "@/lib/seo";

export default function sitemap() {
  const currentDate = new Date().toISOString();

  // Static routes
  const staticRoutes = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/academy`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/academy/courses`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/admission`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/book-appointment`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/offers`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/testimonials`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Dynamic Service Category routes
  const categoryRoutes = SERVICE_CATEGORIES.map((category) => ({
    url: `${SITE_URL}/services/${category.id}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic Individual Service routes
  const serviceDetailRoutes = SERVICES.map((service) => ({
    url: `${SITE_URL}/services/${service.category}/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  // Dynamic Academy Course routes
  const courseRoutes = COURSES.map((course) => ({
    url: `${SITE_URL}/academy/${course.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...categoryRoutes, ...serviceDetailRoutes, ...courseRoutes];
}

