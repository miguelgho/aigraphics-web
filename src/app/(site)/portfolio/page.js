import { SITE_URL } from "@/lib/site";
import PortfolioGallery from "@/components/PortfolioGallery";
import { getTrabajos } from "@/sanity/trabajos";

export const metadata = {
  alternates: { canonical: `${SITE_URL}/portfolio` },
  title: "Portafolio de Trabajos | Ai Graphics",
  description:
    "Uniformes, bordados, impresión DTF, letreros, microperforado y rotulación de vehículos hechos por Ai Graphics en Homestead y Miami.",
};

// Trabajos reales de Ai Graphics (sin nombres de clientes). Se muestran mientras no haya trabajos subidos en /studio.
const trabajosDeEjemplo = [
  {
    id: "uniforme-escolar",
    titulo: "Uniforme escolar con escudo bordado",
    categoria: "embroidery",
    descripcion: "Escudo bordado en polos de uniforme escolar.",
    fotos: [
      {
        src: "/trabajos/uniforme-escolar-escudo-bordado.webp",
        alt: "Uniforme escolar con escudo bordado",
      },
    ],
  },
  {
    id: "microperforado-auto",
    titulo: "Microperforado en vidrio de auto",
    categoria: "vehicles",
    descripcion:
      "Microperforado full color en el vidrio trasero, instalado por nuestro equipo.",
    fotos: [
      {
        src: "/trabajos/microperforado-auto.webp",
        alt: "Microperforado en vidrio de auto",
      },
      {
        src: "/trabajos/instalacion-microperforado.webp",
        alt: "Microperforado en vidrio de auto",
      },
    ],
  },
  {
    id: "polos-gorras-equipo",
    titulo: "Polos de trabajo y gorras a juego",
    categoria: "dtf",
    descripcion:
      "Polos con logo full color en DTF y gorras bordadas para todo el equipo.",
    fotos: [
      {
        src: "/trabajos/polo-amarillo-dtf.webp",
        alt: "Polos de trabajo y gorras a juego",
      },
      {
        src: "/trabajos/gorras-trucker-bordadas.webp",
        alt: "Polos de trabajo y gorras a juego",
      },
    ],
  },
  {
    id: "polo-corporativo",
    titulo: "Polo corporativo bordado",
    categoria: "embroidery",
    descripcion: "Polo negro con logo bordado en el pecho.",
    fotos: [
      {
        src: "/trabajos/polo-corporativo-bordado.webp",
        alt: "Polo corporativo bordado",
      },
    ],
  },
  {
    id: "roll-up",
    titulo: "Roll-up retráctil",
    categoria: "signs",
    descripcion: "Roll-up para punto de venta, impreso en alta resolución.",
    fotos: [
      { src: "/trabajos/roll-up-retractil.webp", alt: "Roll-up retráctil" },
    ],
  },
  {
    id: "polo-dtf",
    titulo: "Polo de trabajo full color",
    categoria: "dtf",
    descripcion: "Polos de trabajo con logo full color en DTF.",
    fotos: [
      {
        src: "/trabajos/polo-trabajo-dtf.webp",
        alt: "Polo de trabajo full color",
      },
    ],
  },
  {
    id: "gorra-bordada",
    titulo: "Gorra con logo bordado",
    categoria: "embroidery",
    descripcion: "Gorras con logo bordado en relieve.",
    fotos: [
      { src: "/trabajos/gorra-bordada.webp", alt: "Gorra con logo bordado" },
    ],
  },
  {
    id: "banner",
    titulo: "Banner de gran formato",
    categoria: "signs",
    descripcion: "Banner impreso en alta resolución para exhibición.",
    fotos: [
      {
        src: "/trabajos/banner-gran-formato.webp",
        alt: "Banner de gran formato",
      },
    ],
  },
  {
    id: "roll-up-stickers",
    titulo: "Roll-up y stickers a juego",
    categoria: "signs",
    descripcion: "Roll-up y stickers troquelados con la misma imagen de marca.",
    fotos: [
      {
        src: "/trabajos/roll-up-producto.webp",
        alt: "Roll-up y stickers a juego",
      },
      {
        src: "/trabajos/stickers-troquelados.webp",
        alt: "Roll-up y stickers a juego",
      },
    ],
  },
  {
    id: "camisetas-equipo",
    titulo: "Camisetas para equipo de trabajo",
    categoria: "dtf",
    descripcion: "Camisetas y polos con logo y teléfono para el equipo.",
    fotos: [
      {
        src: "/trabajos/camiseta-equipo-dtf.webp",
        alt: "Camisetas para equipo de trabajo",
      },
    ],
  },
  {
    id: "polo-gris",
    titulo: "Polo bordado de servicio",
    categoria: "embroidery",
    descripcion: "Polos bordados para equipo de servicio técnico.",
    fotos: [
      {
        src: "/trabajos/polo-gris-bordado.webp",
        alt: "Polo bordado de servicio",
      },
    ],
  },
  {
    id: "coroplast",
    titulo: "Letreros en coroplast",
    categoria: "signs",
    descripcion: "Letreros “For Sale” en coroplast con protección UV.",
    fotos: [
      {
        src: "/trabajos/letreros-coroplast.webp",
        alt: "Letreros en coroplast",
      },
    ],
  },
  {
    id: "a-frame",
    titulo: "Letrero A-frame",
    categoria: "signs",
    descripcion: "Letrero de pie tipo A-frame para la entrada del negocio.",
    fotos: [{ src: "/trabajos/letrero-a-frame.webp", alt: "Letrero A-frame" }],
  },
  {
    id: "senior-class",
    titulo: "Conjunto de graduación Senior",
    categoria: "dtf",
    descripcion: "Falda y pantalón personalizados para graduación.",
    fotos: [
      {
        src: "/trabajos/senior-class-graduacion.webp",
        alt: "Conjunto de graduación Senior",
      },
      {
        src: "/trabajos/senior-falda.webp",
        alt: "Conjunto de graduación Senior",
      },
    ],
  },
  {
    id: "delantales",
    titulo: "Delantales y gorros de chef",
    categoria: "misc",
    descripcion: "Delantales, gorros de chef y polos con el logo del negocio.",
    fotos: [
      {
        src: "/trabajos/delantales-personalizados.webp",
        alt: "Delantales y gorros de chef",
      },
      {
        src: "/trabajos/delantal-gorro-chef.webp",
        alt: "Delantales y gorros de chef",
      },
    ],
  },
  {
    id: "drinkware",
    titulo: "Tazas y copas personalizadas",
    categoria: "marketing",
    descripcion:
      "Tazas y copas con diseños personalizados en UV DTF y sublimación.",
    fotos: [
      {
        src: "/trabajos/tazas-sublimadas.webp",
        alt: "Tazas y copas personalizadas",
      },
      {
        src: "/trabajos/taza-cristal-personalizada.webp",
        alt: "Tazas y copas personalizadas",
      },
      {
        src: "/trabajos/copas-personalizadas.webp",
        alt: "Tazas y copas personalizadas",
      },
    ],
  },
];

export default async function Portfolio() {
  const subidos = await getTrabajos();
  const trabajos = subidos.length > 0 ? subidos : trabajosDeEjemplo;

  return (
    <div className="brand-dots min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10 text-center">
        <p className="text-print-dark text-lg font-light italic tracking-[0.15em]">
          Create. Print. Shine.
        </p>
        <h1 className="font-display font-bold uppercase text-print-cyan text-5xl md:text-7xl mt-2">
          Nuestros Trabajos
        </h1>
        <span
          className="brand-swoosh w-64 max-w-full mx-auto mt-3"
          aria-hidden="true"
        />
        <p className="text-print-dark max-w-2xl mx-auto mt-5">
          Uniformes, bordados, letreros, vitrinas y vehículos que hemos hecho
          para negocios, escuelas y equipos del sur de Florida.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <PortfolioGallery trabajos={trabajos} />
      </section>
    </div>
  );
}
