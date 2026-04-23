import Image from "next/image";
import { theme } from "@/lib/theme";

const projects = [
  {
    title: "TechFlow Ecosystem",
    category: "Digital Solutions",
    desc: "Custom Web Design",
    color: "border-print-cyan",
    image: "/website.webp",
  },
  {
    title: "Iron Legacy Apparel",
    category: "Creative Print",
    desc: "Sublimation Apparel and Promotional Swag",
    color: "border-print-magenta",
    image: "/shirt-print.jpg",
  },
  {
    title: "Urban Bites Branding",
    category: "Complete Branding",
    desc: "Logo - Company Identity",
    color: "border-print-yellow",
    image: "/branding.webp",
  },
  {
    title: "Custom Window Print",
    category: "Custom Window Print",
    desc: "Complete Window Design",
    color: "border-print-dark",
    image: "/window.webp",
  },
  {
    title: "Summit Teamwear",
    category: "Apparel & Embroidery",
    desc: "Premium embroidered shirts, hats, and custom uniforms to elevate your brand.",
    color: "border-print-cyan",
    image: "/embroidery.webp",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* CABECERA */}
      <section className={theme.portfolioHeader}>
        <h1 className={theme.portfolioTitle}>
          Our <span className="text-print-magenta italic">Work</span>
        </h1>
        <p className={theme.portfolioSub}>
          From cutting-edge digital solutions to high-quality physical prints.
          <span className="block text-print-cyan font-bold mt-2">
            Create. Print. Shine.
          </span>
        </p>
      </section>

      {/* GRILLA DE PROYECTOS */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className={theme.projectCard}>
              {/* CONTENEDOR DE LA IMAGEN */}
              <div
                className={`${theme.projectImgBox} ${project.color} relative`}
              >
                <Image
                  src={project.image}
                  alt={`Ai Graphics Project: ${project.title} - ${project.category}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`${theme.projectImage} object-cover`}
                  priority={index < 2}
                />
              </div>

              {/* TEXTOS */}
              <div className="mt-8 px-2">
                <span className={theme.projectCategory}>
                  {project.category}
                </span>
                <h3 className={theme.projectHeading}>{project.title}</h3>
                <p className={theme.projectMeta}>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
