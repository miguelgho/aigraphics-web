import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Work Uniforms Uniformes Homestead Kendall Cutler Bay | Ai Graphics",
  description:
    "Ai Graphics: work uniforms, school uniform store, construction workwear, custom uniform embroidery, enguatadas de trabajo, uniformes in Homestead, Kendall, Cutler Bay.",
  keywords: [
    "Work Uniforms",
    "School Uniform Store",
    "Construction Workwear",
    "Custom Uniform Embroidery",
    "Enguatadas de trabajo",
    "Uniformes Homestead",
    "DTF Printing Miami",
    "Signs and Banners",
  ],
  alternates: {
    canonical: "https://aigraphicsfl.com",
  },
  openGraph: {
    title: "Work Uniforms & Custom Embroidery in Homestead | Ai Graphics",
    description:
      "Work uniforms, school uniforms, custom embroidery, and printing in Homestead, FL.",
    url: "https://aigraphicsfl.com",
    siteName: "Ai Graphics",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  // Schema Estructurado (JSON-LD) para negocios locales (100% invisible para el usuario)
  const structuredSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ai Graphics LLC",
    image: "https://aigraphicsfl.com/logo.png",
    telephone: "+1-305-970-5085",
    email: "Sales@aigraphicsfl.com",
    url: "https://aigraphicsfl.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Homestead",
      addressRegion: "FL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.4687,
      longitude: -80.4776,
    },
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
      "Work Uniforms, School Uniform Store & Construction Workwear in Homestead | Custom Uniform Embroidery, Enguatadas de trabajo & Uniformes",
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
      ],
    },
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
