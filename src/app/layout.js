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
    canonical: "https://aigraphicsfl.com/",
  },
  openGraph: {
    title: "Work Uniforms & Custom Embroidery in Homestead | Ai Graphics",
    description:
      "Work uniforms, school uniforms, custom embroidery, and printing in Homestead, FL.",
    url: "https://aigraphicsfl.com/",
    siteName: "Ai Graphics",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const officialSchema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: "Ai Graphics",
    description:
      "Ai Graphics is a Miami, FL uniform store and custom printing company specializing in branded workwear and professional apparel. We create custom uniforms, embroidered polos, hats, jackets, and team shirts with high-quality screen printing, DTF, and embroidery. Beyond uniforms, we produce custom stickers, indoor signs, vehicle graphics, and large-format signage to boost your brand visibility. Count on fast, friendly service, sharp design support, a low price guarantee, free worldwide delivery, and a 30-day online return policy—perfect for businesses, schools, and organizations.",
    url: "https://aigraphicsfl.com/",
    telephone: "+13059705085",
    image:
      "https://d17lvxud83eqj6.cloudfront.net/35e9bf10-60a7-423f-84ba-885da3ce45e2.png",
    logo: "https://d17lvxud83eqj6.cloudfront.net/35e9bf10-60a7-423f-84ba-885da3ce45e2.png",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Homestead",
      addressRegion: "FL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.4921341,
      longitude: -80.43674209999999,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "SUNDAY",
          "MONDAY",
          "TUESDAY",
          "WEDNESDAY",
          "THURSDAY",
          "FRIDAY",
          "SATURDAY",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    areaServed: [
      { "@type": "Place", name: "Homestead" },
      { "@type": "Place", name: "Kendall" },
      { "@type": "Place", name: "Cutler Bay" },
    ],
    sameAs: ["https://www.instagram.com/aigraphicsfl/"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: 34,
      bestRating: 5,
      worstRating: 5,
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sarahy Andino" },
        reviewBody:
          "Totalmente satisfecha con su trabajo mi pedido fue entregado justo a tiempo",
        reviewRating: { "@type": "Rating", ratingValue: 5 },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Yandry Abreu" },
        reviewBody:
          "Excelente atención de las personas y muy buena calidad en el servicio y producto. Lo recomiendo al 💯",
        reviewRating: { "@type": "Rating", ratingValue: 5 },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Esmery Lavadie" },
        reviewBody:
          "Super contenta con el trabajo son muy profesionales y amables atentos Excelente calidad en el bordado de nuestros uniformes quedé muy contenta",
        reviewRating: { "@type": "Rating", ratingValue: 5 },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Neira Dynasty Company" },
        reviewBody:
          "Super recomendado, el servicio, la calidad, la atención, todooo mi familia y yo quedamos altamente agradecidos!!!",
        reviewRating: { "@type": "Rating", ratingValue: 5 },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Patricia Gonzalez" },
        reviewBody:
          "If I could give them 10 starts I would. I can't begin to explain the level of service this company provides, outstanding. Great job! I wish you all the success in this world.",
        reviewRating: { "@type": "Rating", ratingValue: 5 },
      },
    ],
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(officialSchema) }}
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
