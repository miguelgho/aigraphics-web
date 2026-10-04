import PortfolioGallery from "@/components/PortfolioGallery";
import { getTrabajos } from "@/sanity/trabajos";
import { pageMetadata } from "@/lib/i18n";

const copy = {
  en: {
    metaTitle: "Our Work: Uniforms, Embroidery & Signs | Ai Graphics",
    metaDescription:
      "Uniforms, embroidery, DTF printing, signs, perforated window film and vehicle graphics made by Ai Graphics in Homestead and Miami.",
    title: "Our Work",
    intro:
      "Uniforms, embroidery, signs, storefronts and vehicles we've made for businesses, schools and teams across South Florida.",
  },
  es: {
    metaTitle: "Portafolio de Trabajos | Ai Graphics",
    metaDescription:
      "Uniformes, bordados, impresión DTF, letreros, microperforado y rotulación de vehículos hechos por Ai Graphics en Homestead y Miami.",
    title: "Nuestros Trabajos",
    intro:
      "Uniformes, bordados, letreros, vitrinas y vehículos que hemos hecho para negocios, escuelas y equipos del sur de Florida.",
  },
};

export const portfolioMetadata = (lang) =>
  pageMetadata("portfolio", lang, {
    title: copy[lang].metaTitle,
    description: copy[lang].metaDescription,
  });

// Trabajos reales de Ai Graphics (sin nombres de clientes). Se muestran después de los subidos en /studio.
const trabajosDeEjemplo = [
  {
    id: "uniforme-escolar",
    categoria: "embroidery",
    titulo: {
      en: "School uniform with embroidered crest",
      es: "Uniforme escolar con escudo bordado",
    },
    descripcion: {
      en: "Embroidered crest on school uniform polos.",
      es: "Escudo bordado en polos de uniforme escolar.",
    },
    fotos: ["/trabajos/uniforme-escolar-escudo-bordado.webp"],
  },
  {
    id: "microperforado-auto",
    categoria: "vehicles",
    titulo: {
      en: "Perforated film on a car window",
      es: "Microperforado en vidrio de auto",
    },
    descripcion: {
      en: "Full-color perforated film on the rear window, installed by our team.",
      es: "Microperforado full color en el vidrio trasero, instalado por nuestro equipo.",
    },
    fotos: [
      "/trabajos/microperforado-auto.webp",
      "/trabajos/instalacion-microperforado.webp",
    ],
  },
  {
    id: "polos-gorras-equipo",
    categoria: "dtf",
    titulo: {
      en: "Matching work polos and hats",
      es: "Polos de trabajo y gorras a juego",
    },
    descripcion: {
      en: "Polos with a full-color DTF logo and embroidered hats for the whole crew.",
      es: "Polos con logo full color en DTF y gorras bordadas para todo el equipo.",
    },
    fotos: [
      "/trabajos/polo-amarillo-dtf.webp",
      "/trabajos/gorras-trucker-bordadas.webp",
    ],
  },
  {
    id: "polo-corporativo",
    categoria: "embroidery",
    titulo: { en: "Embroidered company polo", es: "Polo corporativo bordado" },
    descripcion: {
      en: "Black polo with a logo embroidered on the chest.",
      es: "Polo negro con logo bordado en el pecho.",
    },
    fotos: ["/trabajos/polo-corporativo-bordado.webp"],
  },
  {
    id: "roll-up",
    categoria: "signs",
    titulo: { en: "Retractable roll-up stand", es: "Roll-up retráctil" },
    descripcion: {
      en: "Point-of-sale roll-up stand printed in high resolution.",
      es: "Roll-up para punto de venta, impreso en alta resolución.",
    },
    fotos: ["/trabajos/roll-up-retractil.webp"],
  },
  {
    id: "polo-dtf",
    categoria: "dtf",
    titulo: { en: "Full-color work polo", es: "Polo de trabajo full color" },
    descripcion: {
      en: "Work polos with a full-color DTF logo.",
      es: "Polos de trabajo con logo full color en DTF.",
    },
    fotos: ["/trabajos/polo-trabajo-dtf.webp"],
  },
  {
    id: "gorra-bordada",
    categoria: "embroidery",
    titulo: { en: "Hat with embroidered logo", es: "Gorra con logo bordado" },
    descripcion: {
      en: "Hats with a raised embroidered logo.",
      es: "Gorras con logo bordado en relieve.",
    },
    fotos: ["/trabajos/gorra-bordada.webp"],
  },
  {
    id: "banner",
    categoria: "signs",
    titulo: { en: "Large-format banner", es: "Banner de gran formato" },
    descripcion: {
      en: "High-resolution printed banner for display.",
      es: "Banner impreso en alta resolución para exhibición.",
    },
    fotos: ["/trabajos/banner-gran-formato.webp"],
  },
  {
    id: "roll-up-stickers",
    categoria: "signs",
    titulo: {
      en: "Matching roll-up and stickers",
      es: "Roll-up y stickers a juego",
    },
    descripcion: {
      en: "Roll-up stand and die-cut stickers with the same brand look.",
      es: "Roll-up y stickers troquelados con la misma imagen de marca.",
    },
    fotos: [
      "/trabajos/roll-up-producto.webp",
      "/trabajos/stickers-troquelados.webp",
    ],
  },
  {
    id: "camisetas-equipo",
    categoria: "dtf",
    titulo: {
      en: "T-shirts for a work crew",
      es: "Camisetas para equipo de trabajo",
    },
    descripcion: {
      en: "T-shirts and polos with logo and phone number for the team.",
      es: "Camisetas y polos con logo y teléfono para el equipo.",
    },
    fotos: ["/trabajos/camiseta-equipo-dtf.webp"],
  },
  {
    id: "polo-gris",
    categoria: "embroidery",
    titulo: { en: "Embroidered service polo", es: "Polo bordado de servicio" },
    descripcion: {
      en: "Embroidered polos for a technical service crew.",
      es: "Polos bordados para equipo de servicio técnico.",
    },
    fotos: ["/trabajos/polo-gris-bordado.webp"],
  },
  {
    id: "coroplast",
    categoria: "signs",
    titulo: { en: "Coroplast yard signs", es: "Letreros en coroplast" },
    descripcion: {
      en: "“For Sale” coroplast signs with UV protection.",
      es: "Letreros “For Sale” en coroplast con protección UV.",
    },
    fotos: ["/trabajos/letreros-coroplast.webp"],
  },
  {
    id: "a-frame",
    categoria: "signs",
    titulo: { en: "A-frame sign", es: "Letrero A-frame" },
    descripcion: {
      en: "Freestanding A-frame sign for a business entrance.",
      es: "Letrero de pie tipo A-frame para la entrada del negocio.",
    },
    fotos: ["/trabajos/letrero-a-frame.webp"],
  },
  {
    id: "senior-class",
    categoria: "dtf",
    titulo: {
      en: "Senior graduation set",
      es: "Conjunto de graduación Senior",
    },
    descripcion: {
      en: "Custom skirt and pants for graduation.",
      es: "Falda y pantalón personalizados para graduación.",
    },
    fotos: [
      "/trabajos/senior-class-graduacion.webp",
      "/trabajos/senior-falda.webp",
    ],
  },
  {
    id: "delantales",
    categoria: "misc",
    titulo: { en: "Aprons and chef hats", es: "Delantales y gorros de chef" },
    descripcion: {
      en: "Aprons, chef hats and polos with the business logo.",
      es: "Delantales, gorros de chef y polos con el logo del negocio.",
    },
    fotos: [
      "/trabajos/delantales-personalizados.webp",
      "/trabajos/delantal-gorro-chef.webp",
    ],
  },
  {
    id: "drinkware",
    categoria: "marketing",
    titulo: {
      en: "Custom mugs and glasses",
      es: "Tazas y copas personalizadas",
    },
    descripcion: {
      en: "Mugs and glasses with custom designs in UV DTF and sublimation.",
      es: "Tazas y copas con diseños personalizados en UV DTF y sublimación.",
    },
    fotos: [
      "/trabajos/tazas-sublimadas.webp",
      "/trabajos/taza-cristal-personalizada.webp",
      "/trabajos/copas-personalizadas.webp",
    ],
  },
];

const sampleJobs = (lang) =>
  trabajosDeEjemplo.map((t) => ({
    id: t.id,
    categoria: t.categoria,
    titulo: t.titulo[lang],
    descripcion: t.descripcion[lang],
    fotos: t.fotos.map((src) => ({ src, alt: t.titulo[lang] })),
  }));

export default async function PortfolioView({ lang }) {
  const t = copy[lang];
  const subidos = await getTrabajos(lang);
  const trabajos = [...subidos, ...sampleJobs(lang)];

  return (
    <div className="brand-dots min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10 text-center">
        <p className="text-print-dark text-lg font-light italic tracking-[0.15em]">
          Create. Print. Shine.
        </p>
        <h1 className="font-display font-bold uppercase text-print-cyan text-5xl md:text-7xl mt-2">
          {t.title}
        </h1>
        <span
          className="brand-swoosh w-64 max-w-full mx-auto mt-3"
          aria-hidden="true"
        />
        <p className="text-print-dark max-w-2xl mx-auto mt-5">{t.intro}</p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <PortfolioGallery trabajos={trabajos} lang={lang} />
      </section>
    </div>
  );
}
