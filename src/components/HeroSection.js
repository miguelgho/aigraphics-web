import Image from "next/image";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";
import { categoryPath } from "@/lib/i18n";

// Las dos líneas de negocio, presentadas como dos "pliegos" impresos.
const lines = [
  {
    key: "uniformes",
    number: "01",
    image: "/trabajos/uniforme-escolar-escudo-bordado.webp",
    color: "bg-print-cyan",
    category: "embroidery",
    en: {
      label: "Uniforms & Embroidery",
      title: "Uniforms that stand out",
      alt: "Embroidered crest on a school uniform polo",
      items: ["Work polos", "Hi-Vis", "Embroidered hats", "School"],
      cta: "I need uniforms",
      msg: "Hi Ai Graphics, I'd like a quote for uniforms for my team.",
    },
    es: {
      label: "Uniformes & Bordados",
      title: "Uniformes que identifican",
      alt: "Escudo bordado en polo de uniforme escolar",
      items: ["Polos de trabajo", "Hi-Vis", "Gorras bordadas", "Escolares"],
      cta: "Quiero uniformes",
      msg: "Hola Ai Graphics, quiero cotizar uniformes para mi equipo.",
    },
  },
  {
    key: "gran-formato",
    number: "02",
    image: "/trabajos/microperforado-auto.webp",
    color: "bg-print-magenta",
    category: "signs",
    en: {
      label: "Large Format & Vehicle Graphics",
      title: "Signs you can see from afar",
      alt: "Full-color perforated film on a car's rear window",
      items: ["Banners", "Perforated film", "Window vinyl", "Vehicles"],
      cta: "I need a sign",
      msg: "Hi Ai Graphics, I'd like a quote for a banner / vehicle graphics.",
    },
    es: {
      label: "Gran Formato & Rotulación",
      title: "Letreros que se ven de lejos",
      alt: "Microperforado full color en el vidrio trasero de un auto",
      items: ["Banners", "Microperforado", "Vinil de vitrina", "Vehículos"],
      cta: "Quiero un letrero",
      msg: "Hola Ai Graphics, quiero cotizar un banner / rotulación.",
    },
  },
];

const copy = {
  en: {
    kicker: "Uniform & print shop · Homestead & Miami",
    line1: "Outfit your team.",
    line2: "Brand your business.",
    srOnly:
      "Work uniforms, custom embroidery, DTF printing, banners and signs in Homestead, Kendall, Cutler Bay and Miami",
    intro:
      "Work and school uniforms, embroidery, DTF printing, banners, perforated window film and vehicle graphics. All made in our own workshop, with your brand's look.",
    start: "Start your order",
    startMsg: "Hi Ai Graphics, I'd like to start an order.",
    seeProducts: "See products →",
    promises: [
      {
        title: "Rush 24–48 h",
        desc: "Standard production in 3–5 business days",
      },
      { title: "No minimums", desc: "On uniforms, starting at one piece" },
      { title: "We can help", desc: "With designing or vectorizing your logo" },
      {
        title: "Local & nationwide",
        desc: "Pickup by appointment in Homestead or shipping across the US",
      },
    ],
  },
  es: {
    kicker: "Taller de uniformes e impresión · Homestead & Miami",
    line1: "Vestimos tu equipo.",
    line2: "Rotulamos tu negocio.",
    srOnly:
      "Uniformes de trabajo, bordados, impresión DTF, banners y letreros en Homestead, Kendall, Cutler Bay y Miami",
    intro:
      "Uniformes de trabajo y escolares, bordados, impresión DTF, banners, microperforado y rotulación de vehículos. Todo hecho en nuestro taller, con la imagen de tu marca.",
    start: "Empieza tu pedido",
    startMsg: "Hola Ai Graphics, me gustaría empezar un pedido.",
    seeProducts: "Ver productos →",
    promises: [
      { title: "Rush 24–48 h", desc: "Producción normal en 3–5 días hábiles" },
      { title: "Sin mínimos", desc: "En uniformes, desde una sola pieza" },
      {
        title: "Te ayudamos",
        desc: "Con el diseño o vectorización de tu logo",
      },
      {
        title: "Local y nacional",
        desc: "Recogida con cita en Homestead o envío a EE.UU.",
      },
    ],
  },
};

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

export default function HeroSection({ lang = "en" }) {
  const t = copy[lang];
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
            {t.kicker}
          </p>

          <h1 className="font-display font-bold uppercase leading-[0.95] mt-5 text-5xl sm:text-6xl lg:text-8xl">
            <span className="block text-print-ink">{t.line1}</span>
            <span className="block text-print-magenta">{t.line2}</span>
            <span className="sr-only"> {t.srOnly}</span>
          </h1>

          <p className="text-print-dark text-base sm:text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
            {t.intro}
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <QuoteButton
              lang={lang}
              label={t.start}
              message={t.startMsg}
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
          {lines.map(({ [lang]: text, ...line }) => (
            <div key={line.key} className="relative">
              <CropMarks />
              <div className="group relative h-[380px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl bg-print-ink">
                <Image
                  src={line.image}
                  alt={text.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-print-ink via-print-ink/50 to-transparent" />

                <span
                  className={`brand-ribbon absolute top-5 left-0 text-lg ${line.color}`}
                >
                  {line.number} · {text.label}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                  <h2 className="font-display font-bold uppercase text-white text-3xl lg:text-4xl leading-tight">
                    {text.title}
                  </h2>
                  <ul className="flex flex-wrap gap-2 mt-4">
                    {text.items.map((item) => (
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
                      lang={lang}
                      label={text.cta}
                      message={text.msg}
                      variant="white"
                    />
                    <Link
                      href={categoryPath(line.category, lang)}
                      className="text-white text-sm font-bold underline-offset-4 hover:underline"
                    >
                      {t.seeProducts}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promesas del taller */}
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {t.promises.map((p, i) => (
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
