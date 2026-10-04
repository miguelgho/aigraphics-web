import Image from "next/image";
import QuoteButton from "@/components/QuoteButton";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Diseño de Páginas Web en Homestead y Miami | Ai Graphics",
  description:
    "Páginas web para negocios desde $799. Promo de lanzamiento: $399.99 para los primeros 5 clientes. Diseño, SEO local, WhatsApp y Google Maps incluidos.",
  alternates: { canonical: `${SITE_URL}/diseno-web` },
  openGraph: {
    title: "Diseño de Páginas Web | Ai Graphics",
    description:
      "Tu negocio en internet: páginas rápidas, adaptadas al celular y listas para Google.",
    images: ["/diseno-web/ejemplo-escritorio.webp"],
    locale: "es_US",
    type: "website",
  },
};

// Paquetes aprobados por Ai Graphics (ver la guía para cotizar por teléfono).
const plans = [
  {
    name: "Presencia",
    for: "Para estar en internet ya",
    price: "$799",
    promo: "$399.99",
    features: [
      "1 página con hasta 5 secciones",
      "Adaptada al celular",
      "Botón de WhatsApp y llamada",
      "Formulario de contacto y mapa de Google",
      "SEO básico y conexión de tu dominio",
      "2 rondas de cambios",
    ],
    message:
      "Hola Ai Graphics, me interesa el paquete web Presencia con la promo de $399.99.",
  },
  {
    name: "Negocio",
    for: "Lo que la mayoría necesita",
    price: "$1,499",
    featured: true,
    features: [
      "Hasta 5 páginas",
      "Galería de trabajos o productos",
      "Configuración de tu perfil de Google Business",
      "Reseñas de Google en tu página",
      "SEO local (Homestead, Miami y tu zona)",
      "2 rondas de cambios",
    ],
    message: "Hola Ai Graphics, me interesa el paquete web Negocio.",
  },
  {
    name: "A medida",
    for: "Catálogo, reservas o tienda",
    price: "Desde $2,499",
    features: [
      "Todo lo del paquete Negocio",
      "Catálogo de productos",
      "Panel para subir tus fotos",
      "Reservas o tienda en línea",
      "Funciones especiales para tu negocio",
    ],
    message: "Hola Ai Graphics, necesito una página web a medida.",
  },
];

const maintenance = [
  {
    name: "Básico",
    price: "$39 / mes",
    text: "Hosting, certificado de seguridad, respaldos, monitoreo y 1 cambio pequeño al mes.",
  },
  {
    name: "Plus",
    price: "$79 / mes",
    text: "Todo lo del Básico, más hasta 1 hora de cambios al mes (fotos, precios, promociones) y reporte de visitas.",
  },
];

const extras = [
  { item: "Página adicional", price: "$150" },
  { item: "Redacción de textos", price: "$100" },
  { item: "Diseño de logo", price: "$150 – $300" },
  { item: "Dominio (a tu nombre, al costo)", price: "$15 – $25 / año" },
  { item: "Horas extra de cambios", price: "$60 / hora" },
];

const steps = [
  {
    title: "Hablamos",
    text: "Nos cuentas de tu negocio y qué quieres lograr: más llamadas, ventas o citas.",
  },
  {
    title: "Anticipo y contenido",
    text: "Con el 50% de anticipo empezamos. Tú nos envías tu logo, textos y fotos.",
  },
  {
    title: "Diseño y cambios",
    text: "Te mostramos la página y hacemos hasta 2 rondas de cambios.",
  },
  {
    title: "Publicación",
    text: "Pagas el 50% restante y publicamos tu página con tu dominio.",
  },
];

const faqs = [
  {
    q: "¿El dominio es mío?",
    a: "Sí. Lo registramos a tu nombre y te lo cobramos al costo. Si un día te vas, tu dominio se va contigo.",
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Tu logo, una descripción de tus servicios y fotos de tu trabajo. Si no tienes textos o logo, te ayudamos (ver extras).",
  },
  {
    q: "¿Tengo que pagar mantenimiento?",
    a: "No es obligatorio, pero lo recomendamos: incluye el hosting, la seguridad y los cambios del mes.",
  },
  {
    q: "¿Puedo combinarlo con uniformes o tarjetas?",
    a: "Sí. Con el combo Marca Completa (página web + tarjetas de presentación + uniformes bordados con tu logo) te damos 10% de descuento sobre el total.",
  },
];

export default function DisenoWeb() {
  return (
    <div className="brand-dots">
      {/* Encabezado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <p className="text-print-dark text-lg font-light italic tracking-[0.15em]">
            Nuevo servicio
          </p>
          <h1 className="font-display font-bold uppercase text-print-cyan text-5xl md:text-7xl mt-2 leading-[1.05]">
            Diseño de páginas web
          </h1>
          <span
            className="brand-swoosh w-64 max-w-full mx-auto lg:mx-0 mt-3"
            aria-hidden="true"
          />
          <p className="text-print-dark text-lg leading-relaxed mt-6 max-w-xl mx-auto lg:mx-0">
            Páginas rápidas, adaptadas al celular y pensadas para que tus
            clientes te encuentren en Google y te escriban por WhatsApp. Las
            hacemos con la misma imagen de tus uniformes y letreros.
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-8">
            <QuoteButton
              label="Quiero mi página web"
              message="Hola Ai Graphics, quiero información sobre el diseño de páginas web."
              size="lg"
            />
            <a
              href="#precios"
              className="px-7 py-4 rounded-xl bg-white text-print-cyan-dark font-bold border-2 border-print-cyan hover:bg-print-cyan hover:text-white transition-all"
            >
              Ver precios
            </a>
          </div>
        </div>

        {/* Ejemplo: esta misma página */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
              <span className="w-3 h-3 rounded-full bg-print-magenta" />
              <span className="w-3 h-3 rounded-full bg-print-yellow" />
              <span className="w-3 h-3 rounded-full bg-print-cyan" />
              <span className="ml-3 text-xs text-gray-500">
                aigraphicsfl.com
              </span>
            </div>
            <div className="relative aspect-[16/10]">
              <Image
                src="/diseno-web/ejemplo-escritorio.webp"
                alt="Página web de Ai Graphics en computadora"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="absolute -bottom-8 -right-2 sm:-right-6 w-28 sm:w-36 rounded-[1.6rem] overflow-hidden shadow-2xl border-[6px] border-print-ink bg-print-ink">
            <div className="relative aspect-[9/19]">
              <Image
                src="/diseno-web/ejemplo-celular.webp"
                alt="Página web de Ai Graphics en celular"
                fill
                sizes="150px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promo de lanzamiento */}
      <section className="px-4 sm:px-6 pt-8">
        <div className="max-w-7xl mx-auto bg-print-magenta text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="font-display font-bold uppercase text-2xl sm:text-3xl">
              Promo de lanzamiento: página web a $399.99
            </p>
            <p className="mt-1 text-white/90">
              Paquete Presencia (precio normal $799), solo para los primeros 5
              clientes.
            </p>
          </div>
          <QuoteButton
            label="Apartar mi lugar"
            message="Hola Ai Graphics, quiero apartar la promo de página web de $399.99."
            variant="white"
            size="lg"
            className="shrink-0"
          />
        </div>
      </section>

      {/* Paquetes */}
      <section
        id="precios"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 scroll-mt-24"
      >
        <div className="text-center mb-12">
          <h2 className="font-display font-bold uppercase text-print-cyan text-4xl md:text-5xl">
            Paquetes y precios
          </h2>
          <span
            className="brand-swoosh w-48 max-w-full mx-auto mt-2"
            aria-hidden="true"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-7 flex flex-col shadow-sm ${
                plan.featured
                  ? "border-4 border-print-cyan shadow-xl md:-translate-y-2"
                  : "border border-gray-100"
              }`}
            >
              {plan.featured && (
                <span className="brand-ribbon bg-print-cyan text-base absolute -top-4 left-6">
                  Recomendado
                </span>
              )}
              <h3 className="font-display font-bold uppercase text-3xl text-print-ink">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{plan.for}</p>
              <div className="mt-5">
                {plan.promo ? (
                  <>
                    <p className="text-gray-400 line-through text-lg">
                      {plan.price}
                    </p>
                    <p className="font-display font-bold text-5xl text-print-magenta">
                      {plan.promo}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-wider text-print-magenta-dark mt-1">
                      Primeros 5 clientes
                    </p>
                  </>
                ) : (
                  <p className="font-display font-bold text-5xl text-print-ink">
                    {plan.price}
                  </p>
                )}
              </div>
              <ul className="mt-6 space-y-2 text-sm text-print-dark flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-print-cyan-dark font-bold">✔</span>
                    {f}
                  </li>
                ))}
              </ul>
              <QuoteButton
                label={`Elegir ${plan.name}`}
                message={plan.message}
                variant={plan.featured ? "magenta" : "ink"}
                className="mt-7 w-full"
              />
            </div>
          ))}
        </div>

        {/* Mantenimiento y extras */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm">
            <h3 className="font-display font-bold uppercase text-2xl text-print-ink">
              Mantenimiento mensual
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Opcional. Tu página siempre al día y segura.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              {maintenance.map((m) => (
                <div key={m.name} className="rounded-2xl bg-support-light p-5">
                  <p className="font-display font-bold uppercase text-xl text-print-cyan-dark">
                    {m.name}
                  </p>
                  <p className="font-display font-bold text-3xl text-print-ink mt-1">
                    {m.price}
                  </p>
                  <p className="text-sm text-print-dark mt-2">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm">
            <h3 className="font-display font-bold uppercase text-2xl text-print-ink">
              Extras
            </h3>
            <table className="w-full mt-4 text-sm">
              <tbody>
                {extras.map((e) => (
                  <tr
                    key={e.item}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="py-3 text-print-dark">{e.item}</td>
                    <td className="py-3 text-right font-bold text-print-ink whitespace-nowrap">
                      {e.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-sm bg-print-yellow/25 rounded-xl p-3 text-print-ink">
              <strong>Combo Marca Completa:</strong> página web + tarjetas de
              presentación + uniformes bordados con tu logo, con 10% de
              descuento sobre el total.
            </p>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold uppercase text-print-cyan text-4xl md:text-5xl">
              Cómo trabajamos
            </h2>
            <span
              className="brand-swoosh w-48 max-w-full mx-auto mt-2"
              aria-hidden="true"
            />
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="rounded-3xl p-6 border border-gray-100 shadow-sm"
              >
                <span
                  className={`brand-ribbon text-base ${
                    i % 2 === 0 ? "bg-print-magenta" : "bg-print-cyan"
                  }`}
                >
                  Paso {i + 1}
                </span>
                <h3 className="font-display font-bold uppercase text-xl text-print-dark mt-4">
                  {s.title}
                </h3>
                <p className="text-sm text-print-dark mt-2 leading-relaxed">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ejemplos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold uppercase text-print-cyan text-4xl md:text-5xl">
            Páginas que hemos hecho
          </h2>
          <span
            className="brand-swoosh w-48 max-w-full mx-auto mt-2"
            aria-hidden="true"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="relative aspect-[16/9] bg-gray-100">
              <Image
                src="/diseno-web/ejemplo-escritorio.webp"
                alt="aigraphicsfl.com"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-6">
              <p className="font-display font-bold uppercase text-2xl text-print-ink">
                aigraphicsfl.com
              </p>
              <p className="text-sm text-print-dark mt-1">
                La página que estás viendo: catálogo, portafolio, reseñas de
                Google y panel para subir fotos.
              </p>
            </div>
          </div>
          <a
            href="https://marthasolstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-print-ink text-white rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all"
          >
            <div>
              <span className="brand-ribbon bg-print-magenta text-base">
                Proyecto de cliente
              </span>
              <p className="font-display font-bold uppercase text-4xl mt-6">
                Martha Sol Studio
              </p>
              <p className="text-gray-300 mt-2">marthasolstudio.com</p>
            </div>
            <p className="mt-10 font-bold text-print-yellow group-hover:underline">
              Visitar la página →
            </p>
          </a>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold uppercase text-print-cyan text-4xl md:text-5xl text-center">
            Preguntas frecuentes
          </h2>
          <span
            className="brand-swoosh w-48 max-w-full mx-auto mt-2 mb-10"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-3xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="font-bold text-print-ink">{f.q}</h3>
                <p className="text-sm text-print-dark mt-2 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <QuoteButton
              label="Hablemos de tu página"
              message="Hola Ai Graphics, quiero una página web para mi negocio."
              variant="ink"
              size="lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
