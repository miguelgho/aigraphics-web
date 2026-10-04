import Link from "next/link";

// Las 4 líneas de servicio, tal como aparecen en el roll-up oficial.
const services = [
  {
    title: "Signs & Storefronts",
    href: "/productos?categoria=signs",
    subtitle: "Letreros y Gran Formato",
    color: "magenta",
    items: ["Banners", "Window Vinyl", "Microperforado", "Menús", "Stickers"],
    icon: <path d="M4 5h16v9H4zM7 14v5m10-5v5M4 19h16M8 8.5h8M8 11h5" />,
  },
  {
    title: "Uniforms & Embroidery",
    href: "/productos?categoria=embroidery",
    subtitle: "Uniformes y Bordados",
    color: "cyan",
    items: ["Polos", "Work Shirts", "Gorras", "Uniformes Escolares", "DTF"],
    icon: (
      <path d="M8 4 4 7l2 3 2-1v11h8V9l2 1 2-3-4-3c-.5 1.5-2 2.5-4 2.5S8.5 5.5 8 4z" />
    ),
  },
  {
    title: "Vehicle Graphics",
    href: "/productos/microperforado",
    subtitle: "Rotulación de Vehículos",
    color: "magenta",
    items: ["Lettering", "Door Decals", "Car Magnets", "Window Perforation"],
    icon: (
      <path d="M3 16v-4l2-5h10l4 5h2v4h-2m-12 0H3m4 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6 0h-2m2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 12h14" />
    ),
  },
  {
    title: "Marketing & Promo",
    href: "/productos?categoria=marketing",
    subtitle: "Artículos Promocionales",
    color: "cyan",
    items: [
      "Business Cards",
      "Flyers",
      "UV DTF Tumblers",
      "Tazas",
      "Drinkware",
    ],
    icon: <path d="M3 7h13v10H3zM16 10l5-2v10H8v-1M6 11h7M6 14h4" />,
  },
];

const colorClasses = {
  magenta: { bg: "bg-print-magenta", ring: "ring-print-magenta/25" },
  cyan: { bg: "bg-print-cyan", ring: "ring-print-cyan/25" },
};

export default function ServicesSection() {
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
        <p className="text-print-dark max-w-2xl mx-auto mt-5">
          Todo lo que tu negocio necesita para verse profesional, desde el
          uniforme de tu equipo hasta el letrero de tu local, en un solo lugar.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const c = colorClasses[service.color];
          return (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div
                className={`w-14 h-14 rounded-full ${c.bg} ring-4 ${c.ring} flex items-center justify-center text-white mb-5`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {service.icon}
                </svg>
              </div>
              <h3 className={`brand-ribbon ${c.bg} text-lg mb-1`}>
                {service.title}
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                {service.subtitle}
              </p>
              <ul className="space-y-1.5 text-print-dark text-sm">
                {service.items.map((item) => (
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
