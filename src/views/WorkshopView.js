import { BUSINESS_HOURS } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";
import { pageMetadata, path } from "@/lib/i18n";

// Fotos reales del taller; los textos cambian según el idioma.
const stepPhotos = [
  [{ src: "/taller/diseno-en-computadora.webp" }],
  [{ src: "/taller/bordado-en-proceso.webp" }],
  [
    { src: "/taller/impresion-dtf.webp" },
    { src: "/taller/impresora-gran-formato.webp" },
  ],
  [
    { src: "/taller/aplicacion-dtf.webp" },
    { src: "/taller/laminado-banner.webp" },
  ],
  [
    { src: "/taller/instalacion-vinil-auto.webp" },
    { src: "/taller/pedidos-listos.webp" },
  ],
];

const machinePhotos = [
  "/taller/maquina-bordado.webp",
  "/taller/impresion-dtf.webp",
  "/taller/impresora-gran-formato.webp",
  "/taller/prensa-termica.webp",
];

const copy = {
  en: {
    metaTitle:
      "Our Workshop | Embroidery, DTF & Large Format in Homestead | Ai Graphics",
    metaDescription:
      "Meet the Ai Graphics workshop in Homestead: computerized embroidery, DTF printing, large-format printing and vinyl and perforated film installation, all in-house.",
    kicker: "Made in Homestead",
    title: "Our Workshop",
    intro:
      "Every uniform, banner and vehicle graphic comes off our own machines. That's how we control quality, colors and turnaround from start to finish, with no middlemen.",
    notice:
      "📅 Our workshop is home-based: if you'd like to pick up your order or see samples, message us on WhatsApp first to schedule your visit.",
    hours: "🕖 Hours:",
    heroAlt:
      "Ai Graphics workshop with the embroidery machine and finished apparel",
    talk: "Let's talk about your project",
    talkMsg:
      "Hi Ai Graphics, I saw your workshop on the website and I'd like to place an order.",
    seeWork: "See our work",
    howTitle: "How we work",
    step: "Step",
    steps: [
      {
        title: "Design",
        text: "We prepare your artwork for production: we adapt or vectorize your logo and get it ready to embroider or print with crisp colors.",
        alts: ["Preparing designs on the computer"],
      },
      {
        title: "Embroidery",
        text: "Our multi-needle computerized embroidery machine stitches detailed, textured logos on polos, hats and uniforms, piece by piece.",
        alts: ["Computerized embroidery machine stitching a logo"],
      },
      {
        title: "Printing",
        text: "We print full-color DTF transfers for apparel, plus banners, vinyl and perforated film on our large-format printer.",
        alts: [
          "Printing DTF transfers",
          "Large-format printer printing stickers",
        ],
      },
      {
        title: "Finishing",
        text: "We heat-press every transfer and laminate prints so they stand up to the sun, rain and Florida weather.",
        alts: [
          "Lining up a DTF transfer on a t-shirt",
          "Laminating a printed banner",
        ],
      },
      {
        title: "Installation & delivery",
        text: "We install vinyl and perforated film on your storefront or vehicle and hand you your finished order: pick it up at the workshop by appointment or we ship it to you.",
        alts: [
          "Installing perforated film on a car window",
          "Embroidered polo order ready for delivery",
        ],
      },
    ],
    machinesTitle: "Our machines",
    machines: [
      {
        title: "Computerized embroidery",
        text: "Ricoma multi-needle embroidery machine for logos on polos, hats and uniforms.",
      },
      {
        title: "DTF printing",
        text: "Full-color transfers for cotton, polyester, dry-fit and blends.",
      },
      {
        title: "Large format",
        text: "Roland printer for banners, vinyl, stickers and perforated film.",
      },
      {
        title: "Heat press",
        text: "Precise transfer application with controlled temperature and pressure.",
      },
    ],
    facts: [
      { value: "3–5 days", label: "Standard production (business days)" },
      { value: "24–48 h", label: "Rush orders" },
      { value: "No minimums", label: "On uniforms, starting at one piece" },
      {
        value: "Local & nationwide",
        label: "Pickup by appointment in Homestead or shipping across the US",
      },
    ],
    projectTitle: "Have a project in mind?",
    projectCta: "Message us today",
    projectMsg: "Hi Ai Graphics, I have a project and I'd like a price.",
  },
  es: {
    metaTitle:
      "Nuestro Taller | Bordado, DTF y Gran Formato en Homestead | Ai Graphics",
    metaDescription:
      "Conoce el taller de Ai Graphics en Homestead: bordado computarizado, impresión DTF, gran formato e instalación de vinil y microperforado, todo en casa.",
    kicker: "Hecho en Homestead",
    title: "Nuestro Taller",
    intro:
      "Cada uniforme, banner y rotulación sale de nuestras propias máquinas. Así cuidamos la calidad, los colores y los tiempos de entrega de principio a fin, sin intermediarios.",
    notice:
      "📅 Nuestro taller funciona en casa: si quieres recoger tu pedido o ver muestras, avísanos antes por WhatsApp para coordinar tu visita.",
    hours: "🕖 Horario:",
    heroAlt: "Taller de Ai Graphics con la bordadora y prendas listas",
    talk: "Hablemos de tu proyecto",
    talkMsg:
      "Hola Ai Graphics, vi su taller en la página y quiero hacer un pedido.",
    seeWork: "Ver trabajos",
    howTitle: "Cómo trabajamos",
    step: "Paso",
    steps: [
      {
        title: "Diseño",
        text: "Preparamos tu arte para producción: adaptamos o vectorizamos tu logo y lo dejamos listo para bordar o imprimir con colores nítidos.",
        alts: ["Preparación de diseños en la computadora"],
      },
      {
        title: "Bordado",
        text: "Nuestra bordadora computarizada multiaguja borda logos con detalle y relieve en polos, gorras y uniformes, pieza por pieza.",
        alts: ["Bordadora computarizada bordando un logo"],
      },
      {
        title: "Impresión",
        text: "Imprimimos transfers DTF a todo color para prendas, y banners, vinil y microperforado en nuestra impresora de gran formato.",
        alts: [
          "Impresión de transfers DTF",
          "Impresora de gran formato imprimiendo stickers",
        ],
      },
      {
        title: "Acabado",
        text: "Aplicamos cada transfer con prensa térmica y laminamos los impresos para que resistan el sol, el agua y el clima de Florida.",
        alts: [
          "Alineando un transfer DTF sobre una camiseta",
          "Laminado de un banner impreso",
        ],
      },
      {
        title: "Instalación y entrega",
        text: "Instalamos vinil y microperforado en tu local o vehículo, y te entregamos tu pedido listo: recógelo en el taller con cita previa o te lo enviamos.",
        alts: [
          "Instalación de microperforado en el vidrio de un auto",
          "Pedido de polos bordados listo para entregar",
        ],
      },
    ],
    machinesTitle: "Nuestras máquinas",
    machines: [
      {
        title: "Bordado computarizado",
        text: "Bordadora Ricoma multiaguja para logos en polos, gorras y uniformes.",
      },
      {
        title: "Impresión DTF",
        text: "Transfers full color para algodón, poliéster, dry-fit y mezclas.",
      },
      {
        title: "Gran formato",
        text: "Impresora Roland para banners, vinil, stickers y microperforado.",
      },
      {
        title: "Prensa térmica",
        text: "Aplicación precisa de transfers con temperatura y presión controladas.",
      },
    ],
    facts: [
      { value: "3–5 días", label: "Producción normal (hábiles)" },
      { value: "24–48 h", label: "Órdenes urgentes (Rush)" },
      { value: "Sin mínimos", label: "En uniformes, desde una pieza" },
      {
        value: "Local y nacional",
        label: "Recogida con cita en Homestead o envío a EE.UU.",
      },
    ],
    projectTitle: "¿Tienes un proyecto en mente?",
    projectCta: "Escríbenos hoy",
    projectMsg: "Hola Ai Graphics, tengo un proyecto y quiero saber el precio.",
  },
};

export const workshopMetadata = (lang) =>
  pageMetadata("workshop", lang, {
    title: copy[lang].metaTitle,
    description: copy[lang].metaDescription,
  });

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

export default function WorkshopView({ lang }) {
  const t = copy[lang];
  const steps = t.steps.map((step, i) => ({
    ...step,
    photos: stepPhotos[i].map((p, j) => ({ ...p, alt: step.alts[j] })),
  }));
  const machines = t.machines.map((m, i) => ({ ...m, src: machinePhotos[i] }));

  return (
    <div className="brand-dots">
      {/* Encabezado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <p className="text-print-dark text-lg font-light italic tracking-[0.15em]">
            {t.kicker}
          </p>
          <h1 className="font-display font-bold uppercase text-print-cyan text-5xl md:text-7xl mt-2">
            {t.title}
          </h1>
          <span
            className="brand-swoosh w-64 max-w-full mx-auto lg:mx-0 mt-3"
            aria-hidden="true"
          />
          <p className="text-print-dark text-lg leading-relaxed mt-6 max-w-xl mx-auto lg:mx-0">
            {t.intro}
          </p>
          <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-sm text-print-ink bg-print-yellow/30 border border-print-yellow rounded-xl px-4 py-3">
            {t.notice}
            <span className="block mt-1 font-bold">
              {t.hours} {BUSINESS_HOURS[lang]}
            </span>
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-8">
            <QuoteButton
              lang={lang}
              label={t.talk}
              message={t.talkMsg}
              size="lg"
            />
            <Link
              href={path("portfolio", lang)}
              className="px-7 py-4 rounded-xl bg-white text-print-cyan-dark font-bold border-2 border-print-cyan hover:bg-print-cyan hover:text-white transition-all"
            >
              {t.seeWork}
            </Link>
          </div>
        </div>
        <div className="relative mx-3">
          <CropMarks />
          <div className="relative aspect-[6/5] rounded-2xl overflow-hidden shadow-2xl bg-print-ink">
            <Image
              src="/taller/taller-bordadora.webp"
              alt={t.heroAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold uppercase text-print-cyan text-4xl md:text-5xl">
              {t.howTitle}
            </h2>
            <span
              className="brand-swoosh w-48 max-w-full mx-auto mt-2"
              aria-hidden="true"
            />
          </div>

          <ol className="space-y-16">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <span
                    className={`brand-ribbon text-lg ${
                      i % 2 === 0 ? "bg-print-magenta" : "bg-print-cyan"
                    }`}
                  >
                    {t.step} {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display font-bold uppercase text-print-dark text-3xl md:text-4xl mt-4">
                    {step.title}
                  </h3>
                  <p className="text-print-dark leading-relaxed mt-3 max-w-lg">
                    {step.text}
                  </p>
                </div>
                <div
                  className={`grid gap-4 ${
                    step.photos.length > 1 ? "grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {step.photos.map((photo) => (
                    <div
                      key={photo.src}
                      className={`relative rounded-2xl overflow-hidden shadow-lg bg-gray-100 ${
                        step.photos.length > 1 ? "aspect-[3/4]" : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Máquinas */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold uppercase text-print-cyan text-4xl md:text-5xl">
              {t.machinesTitle}
            </h2>
            <span
              className="brand-swoosh w-48 max-w-full mx-auto mt-2"
              aria-hidden="true"
            />
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {machines.map((m, i) => (
              <li
                key={m.title}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <div className="relative aspect-[4/3] bg-gray-100">
                  <Image
                    src={m.src}
                    alt={m.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3
                    className={`font-display font-bold uppercase text-xl ${
                      i % 2 === 0
                        ? "text-print-magenta-dark"
                        : "text-print-cyan-dark"
                    }`}
                  >
                    {m.title}
                  </h3>
                  <p className="text-print-dark text-sm mt-1">{m.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tiempos y llamada a la acción */}
      <section className="bg-print-ink text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {t.facts.map((f) => (
              <li key={f.value}>
                <p className="font-display font-bold uppercase text-3xl md:text-4xl text-print-yellow">
                  {f.value}
                </p>
                <p className="text-gray-300 text-sm mt-1">{f.label}</p>
              </li>
            ))}
          </ul>
          <div className="text-center mt-12">
            <p className="font-display font-bold uppercase text-3xl md:text-4xl">
              {t.projectTitle}
            </p>
            <QuoteButton
              lang={lang}
              label={t.projectCta}
              message={t.projectMsg}
              size="lg"
              className="mt-6"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
