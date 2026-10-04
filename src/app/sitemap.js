import { getProducts } from "@/data/products";
import { ROUTES, absoluteUrl, productPath } from "@/lib/i18n";

// Se genera solo: cada página en inglés y en español, enlazadas entre sí (hreflang).
const priorities = {
  home: 1.0,
  products: 0.9,
  portfolio: 0.8,
  workshop: 0.7,
  webDesign: 0.8,
  contact: 0.5,
};

export default function sitemap() {
  const now = new Date();
  const entry = (paths, priority) =>
    ["en", "es"].map((lang) => ({
      url: absoluteUrl(paths[lang]),
      lastModified: now,
      priority:
        lang === "en" ? priority : Math.round((priority - 0.1) * 10) / 10,
      alternates: {
        languages: {
          "en-US": absoluteUrl(paths.en),
          "es-US": absoluteUrl(paths.es),
        },
      },
    }));

  return [
    ...Object.entries(priorities).flatMap(([page, priority]) =>
      entry(ROUTES[page], priority),
    ),
    ...getProducts("en").flatMap((product) =>
      entry(
        { en: productPath(product, "en"), es: productPath(product, "es") },
        0.8,
      ),
    ),
  ];
}
