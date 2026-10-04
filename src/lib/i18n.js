// Idiomas del sitio: inglés es el principal (sin prefijo) y español vive en /es.
import { SITE_URL } from "@/lib/site";

export const LANGS = ["en", "es"];

// Dirección de cada página en cada idioma.
export const ROUTES = {
  home: { en: "/", es: "/es" },
  products: { en: "/products", es: "/es/productos" },
  portfolio: { en: "/portfolio", es: "/es/portafolio" },
  workshop: { en: "/workshop", es: "/es/taller" },
  webDesign: { en: "/web-design", es: "/es/diseno-web" },
  contact: { en: "/contact", es: "/es/contacto" },
};

const CATEGORY_PARAM = { en: "category", es: "categoria" };

export const path = (page, lang) => ROUTES[page][lang];

export const categoryPath = (category, lang) =>
  `${ROUTES.products[lang]}?${CATEGORY_PARAM[lang]}=${category}`;

export const productPath = (product, lang) =>
  `${ROUTES.products[lang]}/${product.slugs[lang]}`;

export const faqsPath = (lang) => (lang === "en" ? "/#faqs" : "/es#faqs");

export const absoluteUrl = (p) => (p === "/" ? SITE_URL : `${SITE_URL}${p}`);

// Página equivalente en el otro idioma (para el botón EN / ES).
export function switchLanguagePath(pathname, products, to) {
  const from = to === "en" ? "es" : "en";
  for (const product of products) {
    if (pathname === productPath(product, from))
      return productPath(product, to);
  }
  for (const page of Object.values(ROUTES)) {
    if (pathname === page[from]) return page[to];
  }
  return ROUTES.home[to];
}

// Metadatos con canonical, versiones en ambos idiomas (hreflang) y Open Graph.
export function buildMetadata({ lang, paths, title, description, image }) {
  const url = absoluteUrl(paths[lang]);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "en-US": absoluteUrl(paths.en),
        "es-US": absoluteUrl(paths.es),
        "x-default": absoluteUrl(paths.en),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Ai Graphics",
      locale: lang === "en" ? "en_US" : "es_US",
      alternateLocale: lang === "en" ? "es_US" : "en_US",
      type: "website",
      images: image
        ? [image]
        : [
            {
              url: lang === "en" ? "/og-image.jpg" : "/og-image-es.jpg",
              width: 1200,
              height: 630,
              alt: "Ai Graphics",
            },
          ],
    },
    twitter: { card: "summary_large_image" },
  };
}

export const pageMetadata = (page, lang, fields) =>
  buildMetadata({ lang, paths: ROUTES[page], ...fields });
