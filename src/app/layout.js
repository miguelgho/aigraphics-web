import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Ai Graphics | 360 Branding, Web Design & Custom Print",
  description:
    "Empowering brands with cutting-edge digital solutions, web development, custom embroidery, and premium printing services in Miami, FL. Create. Print. Shine.",
  verification: {
    google: "FHXirp4AumEwutWy97OPupLPVuckTDJBUxeGUgUZUEY",
  },
  keywords: [
    "branding miami",
    "web design florida",
    "custom embroidery",
    "sublimation printing",
    "promotional swag",
    "Ai Graphics",
    "digital solutions",
  ],
  openGraph: {
    title: "Ai Graphics | 360 Branding Solutions",
    description:
      "From digital innovation to physical quality. We elevate your brand.",
    url: "https://www.aigraphicsfl.com",
    siteName: "Ai Graphics",
    images: [
      {
        url: "https://www.aigraphicsfl.com/embroidery.jpg",
        width: 1200,
        height: 630,
        alt: "Ai Graphics - Custom Embroidery and Branding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sora.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-72KGPBRDY2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-72KGPBRDY2');
          `}
        </Script>

        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Ai Graphics",
              "url": "https://www.aigraphicsfl.com",
              "telephone": "+1-305-970-5085",
              "email": "sales@aigraphicsfl.com",
              "description": "360 Branding, Web Design & Custom Print agency in South Florida. Create. Print. Shine.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Miami",
                "addressRegion": "FL",
                "addressCountry": "US"
              }
            }
          `}
        </Script>
      </head>
      <body className="font-sans">
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
