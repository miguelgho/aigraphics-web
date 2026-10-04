import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Analytics from "@/components/Analytics";
import { oswald, sora } from "@/lib/fonts";
import { SITE_URL } from "@/lib/site";
import { absoluteUrl, pageMetadata, path } from "@/lib/i18n";
import { googleReviewsLinks } from "@/lib/googleReviews";

const copy = {
  en: {
    title: "Uniforms, Embroidery & Signs in Homestead and Miami | Ai Graphics",
    description:
      "Work and school uniforms, embroidery, DTF t-shirts, banners, perforated window film and vehicle graphics in Homestead and Miami, FL.",
    schemaDescription:
      "Uniform, embroidery, DTF printing, large-format and vehicle graphics shop in Homestead, FL. Uniformes, bordados, impresión DTF y letreros.",
    catalogName: "Custom Uniforms & Printing Services",
    webDesignService: "Website Design",
  },
  es: {
    title:
      "Uniformes, Bordados y Gran Formato en Homestead y Miami | Ai Graphics",
    description:
      "Uniformes de trabajo y escolares, bordado, camisetas DTF, banners, microperforado y rotulación de vehículos en Homestead y Miami.",
    schemaDescription:
      "Taller de uniformes, bordado, impresión DTF, gran formato y rotulación de vehículos en Homestead, FL. Work uniforms, embroidery, DTF printing and signs.",
    catalogName: "Servicios de Personalización y Uniformes",
    webDesignService: "Diseño de sitios web",
  },
};

// Metadatos base de cada idioma (las páginas de inicio usan estos mismos).
export const rootMetadata = (lang) => ({
  metadataBase: new URL(SITE_URL),
  ...pageMetadata("home", lang, {
    title: copy[lang].title,
    description: copy[lang].description,
  }),
});

// Estructura común (<html>, menú, pie de página) para el sitio en inglés y en español.
export default function SiteRoot({ lang, children }) {
  const t = copy[lang];
  const structuredSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ai Graphics LLC",
    image: `${SITE_URL}${lang === "en" ? "/og-image.jpg" : "/og-image-es.jpg"}`,
    logo: `${SITE_URL}/logo.png`,
    telephone: "+1-305-970-5085",
    email: "Sales@aigraphicsfl.com",
    url: absoluteUrl(path("home", lang)),
    priceRange: "$$",
    hasMap: googleReviewsLinks.maps,
    sameAs: [
      "https://www.instagram.com/aigraphicsfl",
      "https://www.tiktok.com/@aigraphicsfl",
      googleReviewsLinks.maps,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Homestead",
      addressRegion: "FL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.5092,
      longitude: -80.4074,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Homestead",
      },
      {
        "@type": "City",
        name: "Kendall",
      },
      {
        "@type": "City",
        name: "Cutler Bay",
      },
      {
        "@type": "City",
        name: "Miami",
      },
    ],
    description: t.schemaDescription,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t.catalogName,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Uniform Embroidery",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "DTF T-Shirt Printing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Window Microperforado & Signs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: t.webDesignService,
          },
        },
      ],
    },
  };

  return (
    <html lang={lang} className={`${sora.variable} ${oswald.variable}`}>
      <body className="bg-white text-print-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
        />
        <div className="flex flex-col min-h-screen">
          <Navbar lang={lang} />
          <main className="flex-grow">{children}</main>
          <Footer lang={lang} />
          <WhatsAppButton lang={lang} />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
