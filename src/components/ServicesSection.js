import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/data/products";
import { categoryPath, productPath } from "@/lib/i18n";

// Las 4 líneas de servicio, tal como aparecen en el roll-up oficial (títulos en inglés en ambos idiomas).
const services = [
  {
    title: "Signs & Storefronts",
    icon: "/iconos/signs.webp",
    link: { category: "signs" },
    subtitle: { en: "Signs and Large Format", es: "Letreros y Gran Formato" },
    color: "magenta",
    items: {
      en: ["Banners", "Window Vinyl", "Perforated Film", "Menus", "Stickers"],
      es: ["Banners", "Window Vinyl", "Microperforado", "Menús", "Stickers"],
    },
  },
  {
    title: "Uniforms & Embroidery",
    icon: "/iconos/uniforms.webp",
    link: { category: "embroidery" },
    subtitle: { en: "Uniforms and Embroidery", es: "Uniformes y Bordados" },
    color: "cyan",
    items: {
      en: ["Polos", "Work Shirts", "Hats", "School Uniforms", "DTF"],
      es: ["Polos", "Work Shirts", "Gorras", "Uniformes Escolares", "DTF"],
    },
  },
  {
    title: "Vehicle Graphics",
    icon: "/iconos/vehicle.webp",
    link: { product: "signs-microperforado" },
    subtitle: { en: "Car and Truck Lettering", es: "Rotulación de Vehículos" },
    color: "magenta",
    items: {
      en: ["Lettering", "Door Decals", "Car Magnets", "Window Perforation"],
      es: ["Lettering", "Door Decals", "Car Magnets", "Window Perforation"],
    },
  },
  {
    title: "Marketing & Promo",
    icon: "/iconos/marketing.webp",
    link: { category: "marketing" },
    subtitle: { en: "Promotional Products", es: "Artículos Promocionales" },
    color: "cyan",
    items: {
      en: ["Business Cards", "Flyers", "UV DTF Tumblers", "Mugs", "Drinkware"],
      es: ["Business Cards", "Flyers", "UV DTF Tumblers", "Tazas", "Drinkware"],
    },
  },
];

const intro = {
  en: "Everything your business needs to look professional, from your team's uniforms to your storefront sign, all in one place.",
  es: "Todo lo que tu negocio necesita para verse profesional, desde el uniforme de tu equipo hasta el letrero de tu local, en un solo lugar.",
};

const colorClasses = {
  magenta: { bg: "bg-print-magenta", ring: "ring-print-magenta/25" },
  cyan: { bg: "bg-print-cyan", ring: "ring-print-cyan/25" },
};

export default function ServicesSection({ lang = "en" }) {
  const hrefFor = ({ category, product }) =>
    category
      ? categoryPath(category, lang)
      : productPath(
          getProducts(lang).find((p) => p.id === product),
          lang,
        );

  return (
    <section id="servicios" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold uppercase text-print-cyan text-4xl md:text-5xl">
          Custom Branding & Signs
        </h2>
        <span
          className="brand-swoosh w-64 max-w-full mx-auto mt-3"
          aria-hidden="true"
        />
        <p className="text-print-dark max-w-2xl mx-auto mt-5">{intro[lang]}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const c = colorClasses[service.color];
          return (
            <Link
              key={service.title}
              href={hrefFor(service.link)}
              className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <Image
                src={service.icon}
                alt=""
                width={56}
                height={56}
                className="w-14 h-14 rounded-2xl mb-5 shadow-sm"
              />
              <h3 className={`brand-ribbon ${c.bg} text-lg mb-1`}>
                {service.title}
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                {service.subtitle[lang]}
              </p>
              <ul className="space-y-1.5 text-print-dark text-sm">
                {service.items[lang].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${c.bg}`}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
