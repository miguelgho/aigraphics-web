import { products } from "@/data/products";
import { SITE_URL } from "@/lib/site";

// Se genera solo: incluye cada página de producto para Google y Google Ads.
export default function sitemap() {
  const now = new Date();
  const pages = [
    { path: "", priority: 1.0 },
    { path: "/productos", priority: 0.9 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/taller", priority: 0.7 },
    { path: "/diseno-web", priority: 0.8 },
    { path: "/contact", priority: 0.5 },
  ];
  return [
    ...pages.map(({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      priority,
    })),
    ...products.map((p) => ({
      url: `${SITE_URL}/productos/${p.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}
