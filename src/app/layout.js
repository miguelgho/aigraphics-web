import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script"; // <-- Importamos el componente de Google

export const metadata = {
  title: "Ai Graphics | 360 Branding, Web Design & Custom Print in Miami",
  description:
    "Empowering brands with cutting-edge digital solutions, web development, custom embroidery, and premium printing services in Miami, FL. Create. Print. Shine.",
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
        {/* 🔥 Google Analytics 🔥 */}
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
      </head>
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
