import type { MetadataRoute } from "next";

const BASE_URL = "https://hi-ve.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/showroom",
    "/methode",
    "/tarifs",
    "/audit-gratuit",
    "/demo/atelier-morel",
    "/demo/cabinet-lyria",
    "/demo/maison-aveline",
    "/mentions-legales",
    "/politique-confidentialite",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route.startsWith("/demo")
      ? "monthly"
      : route === ""
        ? "weekly"
        : "monthly",
    priority: route === "" ? 1 : route.startsWith("/demo") ? 0.7 : 0.8,
  }));
}
