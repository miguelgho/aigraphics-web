import Link from "next/link";
import { theme } from "@/lib/theme";

const servicesData = [
  {
    title: "Digital Solutions",
    desc: "Web development and software solutions to help businesses establish a strong online presence.",
    borderColor: "border-print-cyan",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop", // Foto temporal de código/laptop
  },
  {
    title: "Creative Print",
    desc: "High-quality custom printing and apparel design, bringing your brand's identity to life.",
    borderColor: "border-print-magenta",
    image:
      "https://images.unsplash.com/photo-1626785773985-9441113b2c21?q=80&w=600&auto=format&fit=crop", // Foto temporal de impresión/ropa
  },
  {
    title: "Full Branding",
    desc: "End-to-end branding services that ensure your business stands out with a professional identity.",
    borderColor: "border-print-yellow",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop", // Foto temporal de diseño/branding
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <header className={`${theme.section} text-center max-w-5xl mx-auto`}>
        <h2 className={theme.labelCyan}>Create. Print. Shine.</h2>
        <h1 className={theme.mainHeading}>
          Bridging Digital Innovation <br />
          <span className="text-print-magenta italic">
            and Physical Quality
          </span>
        </h1>
        <p className={`${theme.paragraph} mb-10 max-w-2xl mx-auto`}>
          Empowering brands with 360-degree creative solutions, enhancing brand
          identity from start to finish.
        </p>
        <Link href="/contact" className={theme.btnPrimary}>
          Start Your Project
        </Link>
      </header>

      <section className="bg-support-light/30 py-20 px-6">
        <div
          className={`${theme.container} grid grid-cols-1 md:grid-cols-3 gap-8`}
        >
          {servicesData.map((service, index) => (
            <div key={index} className={`${theme.card} ${service.borderColor}`}>
              <img
                src={service.image}
                alt={service.title}
                className={theme.serviceImage}
              />
              <h3 className={theme.cardTitle}>{service.title}</h3>
              <p className={theme.cardDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={theme.section}>
        <div className={theme.container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className={theme.imageWrapper}>
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop"
                  alt="Ai Graphics Process"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className={theme.imageBackdrop}></div>
            </div>

            <div className="space-y-10 text-left">
              <div>
                <h2 className={theme.labelCyan}>Our Mission</h2>
                <p className="text-3xl md:text-4xl font-black text-print-dark leading-tight italic">
                  "Bridging Digital Innovation and Physical Quality, Empowering
                  Brands with Creative Solutions."
                </p>
              </div>
              <div className="pt-10 border-t border-gray-100">
                <h2 className={theme.labelMagenta}>Our Vision</h2>
                <h3 className="text-2xl font-bold text-print-dark mb-4 tracking-tight">
                  Driven by Creativity
                </h3>
                <p className={theme.paragraph}>
                  Empowering small businesses through strategic design for
                  seamless brand experiences. We focus on 360-degree branding
                  solutions that enhance your brand identity from start to
                  finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
