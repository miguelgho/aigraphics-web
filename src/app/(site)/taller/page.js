import { BUSINESS_HOURS, SITE_URL } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";

export const metadata = {
  alternates: { canonical: `${SITE_URL}/taller` },
  title:
    "Nuestro Taller | Bordado, DTF y Gran Formato en Homestead | Ai Graphics",
  description:
    "Conoce el taller de Ai Graphics en Homestead: bordado computarizado, impresión DTF, gran formato e instalación de vinil y microperforado, todo en casa.",
};

// Pasos del proceso, cada uno con fotos reales del taller.
const steps = [
  {
    title: "Diseño",
    text: "Preparamos tu arte para producción: adaptamos o vectorizamos tu logo y lo dejamos listo para bordar o imprimir con colores nítidos.",
    photos: [
      {
        src: "/taller/diseno-en-computadora.webp",
        alt: "Preparación de diseños en la computadora",
      },
    ],
  },
  {
    title: "Bordado",
    text: "Nuestra bordadora computarizada multiaguja borda logos con detalle y relieve en polos, gorras y uniformes, pieza por pieza.",
    photos: [
      {
        src: "/taller/bordado-en-proceso.webp",
        alt: "Bordadora computarizada bordando un logo",
      },
    ],
  },
  {
    title: "Impresión",
    text: "Imprimimos transfers DTF a todo color para prendas, y banners, vinil y microperforado en nuestra impresora de gran formato.",
    photos: [
      { src: "/taller/impresion-dtf.webp", alt: "Impresión de transfers DTF" },
      {
        src: "/taller/impresora-gran-formato.webp",
        alt: "Impresora de gran formato imprimiendo stickers",
      },
    ],
  },
  {
    title: "Acabado",
    text: "Aplicamos cada transfer con prensa térmica y laminamos los impresos para que resistan el sol, el agua y el clima de Florida.",
    photos: [
      {
        src: "/taller/aplicacion-dtf.webp",
        alt: "Alineando un transfer DTF sobre una camiseta",
      },
      {
        src: "/taller/laminado-banner.webp",
        alt: "Laminado de un banner impreso",
      },
    ],
  },
  {
    title: "Instalación y entrega",
    text: "Instalamos vinil y microperforado en tu local o vehículo, y te entregamos tu pedido listo: recógelo en el taller con cita previa o te lo enviamos.",
    photos: [
      {
        src: "/taller/instalacion-vinil-auto.webp",
        alt: "Instalación de microperforado en el vidrio de un auto",
      },
      {
        src: "/taller/pedidos-listos.webp",
        alt: "Pedido de polos bordados listo para entregar",
      },
    ],
  },
];

const machines = [
  {
    title: "Bordado computarizado",
    text: "Bordadora Ricoma multiaguja para logos en polos, gorras y uniformes.",
    src: "/taller/maquina-bordado.webp",
  },
  {
    title: "Impresión DTF",
    text: "Transfers full color para algodón, poliéster, dry-fit y mezclas.",
    src: "/taller/impresion-dtf.webp",
  },
  {
    title: "Gran formato",
    text: "Impresora Roland para banners, vinil, stickers y microperforado.",
    src: "/taller/impresora-gran-formato.webp",
  },
  {
    title: "Prensa térmica",
    text: "Aplicación precisa de transfers con temperatura y presión controladas.",
    src: "/taller/prensa-termica.webp",
  },
];

const facts = [
  { value: "3–5 días", label: "Producción normal (hábiles)" },
  { value: "24–48 h", label: "Órdenes urgentes (Rush)" },
  { value: "Sin mínimos", label: "En uniformes, desde una pieza" },
  {
    value: "Local y nacional",
    label: "Recogida con cita en Homestead o envío a EE.UU.",
  },
];

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

export default function Taller() {
  return (
    <div className="brand-dots">
      {/* Encabezado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <p className="text-print-dark text-lg font-light italic tracking-[0.15em]">
            Hecho en Homestead
          </p>
          <h1 className="font-display font-bold uppercase text-print-cyan text-5xl md:text-7xl mt-2">
            Nuestro Taller
          </h1>
          <span
            className="brand-swoosh w-64 max-w-full mx-auto lg:mx-0 mt-3"
            aria-hidden="true"
          />
          <p className="text-print-dark text-lg leading-relaxed mt-6 max-w-xl mx-auto lg:mx-0">
            Cada uniforme, banner y rotulación sale de nuestras propias
            máquinas. Así cuidamos la calidad, los colores y los tiempos de
            entrega de principio a fin, sin intermediarios.
          </p>
          <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-sm text-print-ink bg-print-yellow/30 border border-print-yellow rounded-xl px-4 py-3">
            📅 Nuestro taller funciona en casa: si quieres recoger tu pedido o
            ver muestras, avísanos antes por WhatsApp para coordinar tu visita.
            <span className="block mt-1 font-bold">
              🕖 Horario: {BUSINESS_HOURS}
            </span>
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-8">
            <QuoteButton
              label="Hablemos de tu proyecto"
              message="Hola Ai Graphics, vi su taller en la página y quiero hacer un pedido."
              size="lg"
            />
            <Link
              href="/portfolio"
              className="px-7 py-4 rounded-xl bg-white text-print-cyan-dark font-bold border-2 border-print-cyan hover:bg-print-cyan hover:text-white transition-all"
            >
              Ver trabajos
            </Link>
          </div>
        </div>
        <div className="relative mx-3">
          <CropMarks />
          <div className="relative aspect-[6/5] rounded-2xl overflow-hidden shadow-2xl bg-print-ink">
            <Image
              src="/taller/taller-bordadora.webp"
              alt="Taller de Ai Graphics con la bordadora y prendas listas"
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
              Cómo trabajamos
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
                    Paso {String(i + 1).padStart(2, "0")}
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
              Nuestras máquinas
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
            {facts.map((f) => (
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
              ¿Tienes un proyecto en mente?
            </p>
            <QuoteButton
              label="Escríbenos hoy"
              message="Hola Ai Graphics, tengo un proyecto y quiero saber el precio."
              size="lg"
              className="mt-6"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
