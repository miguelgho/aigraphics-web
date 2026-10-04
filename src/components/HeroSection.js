import Image from "next/image";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";

// Las dos líneas de negocio, presentadas como dos "pliegos" impresos.
const lines = [
  {
    key: "uniformes",
    number: "01",
    label: "Uniformes & Bordados",
    title: "Uniformes que identifican",
    image: "/trabajos/uniforme-escolar-escudo-bordado.webp",
    alt: "Escudo bordado en polo de uniforme escolar",
    items: ["Polos de trabajo", "Hi-Vis", "Gorras bordadas", "Escolares"],
    color: "bg-print-cyan",
    cta: "Quiero uniformes",
    href: "/productos?categoria=embroidery",
    msg: "Hola Ai Graphics, quiero cotizar uniformes para mi equipo.",
  },
  {
    key: "gran-formato",
    number: "02",
    label: "Gran Formato & Rotulación",
    title: "Letreros que se ven de lejos",
    image: "/trabajos/microperforado-auto.webp",
    alt: "Microperforado full color en el vidrio trasero de un auto",
    items: ["Banners", "Microperforado", "Vinil de vitrina", "Vehículos"],
    color: "bg-print-magenta",
    cta: "Quiero un letrero",
    href: "/productos?categoria=signs",
    msg: "Hola Ai Graphics, quiero cotizar un banner / rotulación.",
  },
];

const promises = [
  { title: "Rush 24–48 h", desc: "Producción normal en 3–5 días hábiles" },
  { title: "Sin mínimos", desc: "En uniformes, desde una sola pieza" },
  { title: "Te ayudamos", desc: "Con el diseño o vectorización de tu logo" },
  { title: "Local y nacional", desc: "Recogida en Homestead o envío a EE.UU." },
];

// Marcas de corte de imprenta en las esquinas de cada panel.
function CropMarks() {
  const mark = "absolute w-5 h-5 border-print-ink/40 pointer-events-none";
  return (
    <>
      <span className={`${mark} -top-3 -left-3 border-t-2 border-l-2`} />
      <span className={`${mark} -top-3 -right-3 border-t-2 border-r-2`} />
      <span className={`${mark} -bottom-3 -left-3 border-b-2 border-l-2`} />
      <span className={`${mark} -bottom-3 -right-3 border-b-2 border-r-2`} />
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="relative brand-dots overflow-hidden px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Titular */}
        <div className="text-center max-w-6xl mx-auto">
          <p className="inline-flex items-center gap-2 text-print-dark text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-print-magenta"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="6" />
              <path d="M12 2v20M2 12h20" />
            </svg>
            Taller de uniformes e impresión · Homestead & Miami
          </p>

          <h1 className="font-display font-bold uppercase leading-[0.95] mt-5 text-5xl sm:text-6xl lg:text-8xl">
            <span className="block text-print-ink">Vestimos tu equipo.</span>
            <span className="block text-print-magenta">
              Rotulamos tu negocio.
            </span>
            <span className="sr-only">
              {" "}
              Work uniforms, custom embroidery, DTF printing, banners and signs
              in Homestead, Kendall, Cutler Bay and Miami
            </span>
          </h1>

          <p className="text-print-dark text-base sm:text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
            Uniformes de trabajo y escolares, bordados, impresión DTF, banners,
            microperforado y rotulación de vehículos. Todo hecho en nuestro
            taller, con la imagen de tu marca.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <QuoteButton
              label="Empieza tu pedido"
              message="Hola Ai Graphics, me gustaría empezar un pedido."
              size="lg"
            />
            <a
              href="tel:3059705085"
              className="px-7 py-4 rounded-xl bg-print-ink text-white font-bold hover:bg-print-dark transition-all shadow-lg hover:scale-105"
            >
              📞 (305) 970-5085
            </a>
          </div>
        </div>

        {/* Los dos pliegos: Uniformes | Gran Formato */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 mt-14 px-3">
          {lines.map((line) => (
            <div key={line.key} className="relative">
              <CropMarks />
              <div className="group relative h-[380px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl bg-print-ink">
                <Image
                  src={line.image}
                  alt={line.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-print-ink via-print-ink/50 to-transparent" />

                <span
                  className={`brand-ribbon absolute top-5 left-0 text-lg ${line.color}`}
                >
                  {line.number} · {line.label}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                  <h2 className="font-display font-bold uppercase text-white text-3xl lg:text-4xl leading-tight">
                    {line.title}
                  </h2>
                  <ul className="flex flex-wrap gap-2 mt-4">
                    {line.items.map((item) => (
                      <li
                        key={item}
                        className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-semibold"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center gap-4 mt-5">
                    <QuoteButton
                      label={line.cta}
                      message={line.msg}
                      variant="white"
                    />
                    <Link
                      href={line.href}
                      className="text-white text-sm font-bold underline-offset-4 hover:underline"
                    >
                      Ver productos →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promesas del taller */}
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {promises.map((p, i) => (
            <li
              key={p.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center lg:text-left"
            >
              <p
                className={`font-display font-bold uppercase text-xl ${
                  i % 2 === 0
                    ? "text-print-magenta-dark"
                    : "text-print-cyan-dark"
                }`}
              >
                {p.title}
              </p>
              <p className="text-print-dark text-sm mt-1">{p.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Franja CMYK, como en una prueba de impresión */}
      <div className="absolute inset-x-0 bottom-0 flex h-2" aria-hidden="true">
        <span className="flex-1 bg-print-cyan" />
        <span className="flex-1 bg-print-magenta" />
        <span className="flex-1 bg-print-yellow" />
        <span className="flex-1 bg-print-ink" />
      </div>
    </section>
  );
}
