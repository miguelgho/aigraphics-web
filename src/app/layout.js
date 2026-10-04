import { Oswald, Sora } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import { googleReviewsLinks } from "@/lib/googleReviews";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Uniformes, Bordados y Gran Formato en Homestead y Miami | Ai Graphics",
  description:
    "Uniformes de trabajo y escolares, bordado, camisetas DTF, banners, microperforado y rotulación de vehículos en Homestead y Miami. Work uniforms & signs.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Ai Graphics | Uniformes, Bordados y Gran Formato",
    description:
      "Vestimos tu equipo y rotulamos tu negocio: uniformes, bordado, DTF, banners y rotulación en Homestead y Miami.",
    url: SITE_URL,
    siteName: "Ai Graphics",
    locale: "es_US",
    type: "website",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Ai Graphics" },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  const structuredSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ai Graphics LLC",
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/logo.png`,
    telephone: "+1-305-970-5085",
    email: "Sales@aigraphicsfl.com",
    url: SITE_URL,
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
    description:
      "Taller de uniformes, bordado, impresión DTF, gran formato y rotulación de vehículos en Homestead, FL. Work uniforms, embroidery, DTF printing and signs.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Personalización y Uniformes",
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
            name: "Diseño de sitios web",
          },
        },
      ],
    },
  };

  return (
    <html lang="es" className={`${sora.variable} ${oswald.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
        />
      </head>
      <body className="bg-white text-print-ink font-sans">{children}</body>
    </html>
  );
}
