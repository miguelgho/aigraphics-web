import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Ai Graphics | 360 Branding, Web Design & Custom Print in South Florida",
  description:
    "Empowering brands with cutting-edge digital solutions, web development, custom embroidery, and premium printing services in South Florida. Create. Print. Shine.",
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
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
