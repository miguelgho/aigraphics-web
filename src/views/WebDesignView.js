import Image from "next/image";
import QuoteButton from "@/components/QuoteButton";
import { pageMetadata } from "@/lib/i18n";

// Paquetes aprobados por Ai Graphics (ver la guía para cotizar por teléfono).
const copy = {
  en: {
    metaTitle: "Website Design in Homestead & Miami | Ai Graphics",
    metaDescription:
      "Websites for small businesses from $799. Launch promo: $399.99 for the first 5 clients. Design, local SEO, WhatsApp and Google Maps included.",
    kicker: "New service",
    title: "Website design",
    intro:
      "Fast, mobile-friendly websites built so your customers find you on Google and message you on WhatsApp. We make them with the same look as your uniforms and signs.",
    cta: "I want my website",
    ctaMsg: "Hi Ai Graphics, I'd like information about website design.",
    seePrices: "See pricing",
    desktopAlt: "Ai Graphics website on a computer",
    desktopShot: "/diseno-web/ejemplo-escritorio-en.webp",
    mobileShot: "/diseno-web/ejemplo-celular-en.webp",
    mobileAlt: "Ai Graphics website on a phone",
    promoTitle: "Launch promo: website for $399.99",
    promoText:
      "Presence package (regular price $799), only for the first 5 clients.",
    promoCta: "Reserve my spot",
    promoMsg: "Hi Ai Graphics, I'd like to reserve the $399.99 website promo.",
    pricingTitle: "Packages & pricing",
    recommended: "Recommended",
    first5: "First 5 clients",
    choose: "Choose",
    plans: [
      {
        name: "Presence",
        for: "To get online now",
        price: "$799",
        promo: "$399.99",
        features: [
          "1 page with up to 5 sections",
          "Mobile-friendly",
          "WhatsApp and call buttons",
          "Contact form and Google map",
          "Basic SEO and domain setup",
          "2 rounds of revisions",
        ],
        message:
          "Hi Ai Graphics, I'm interested in the Presence website package with the $399.99 promo.",
      },
      {
        name: "Business",
        for: "What most businesses need",
        price: "$1,499",
        featured: true,
        features: [
          "Up to 5 pages",
          "Gallery of your work or products",
          "Google Business Profile setup",
          "Google reviews on your site",
          "Local SEO (Homestead, Miami and your area)",
          "2 rounds of revisions",
        ],
        message:
          "Hi Ai Graphics, I'm interested in the Business website package.",
      },
      {
        name: "Custom",
        for: "Catalog, bookings or online store",
        price: "From $2,499",
        features: [
          "Everything in the Business package",
          "Product catalog",
          "Dashboard to upload your photos",
          "Bookings or online store",
          "Special features for your business",
        ],
        message: "Hi Ai Graphics, I need a custom website.",
      },
    ],
    maintenanceTitle: "Monthly maintenance",
    maintenanceText: "Optional. Your website always up to date and secure.",
    maintenance: [
      {
        name: "Basic",
        price: "$39 / mo",
        text: "Hosting, security certificate, backups, monitoring and 1 small change per month.",
      },
      {
        name: "Plus",
        price: "$79 / mo",
        text: "Everything in Basic, plus up to 1 hour of changes per month (photos, prices, promotions) and a traffic report.",
      },
    ],
    extrasTitle: "Extras",
    extras: [
      { item: "Additional page", price: "$150" },
      { item: "Copywriting", price: "$100" },
      { item: "Logo design", price: "$150 – $300" },
      { item: "Domain (in your name, at cost)", price: "$15 – $25 / yr" },
      { item: "Extra hours of changes", price: "$60 / hour" },
    ],
    comboTitle: "Complete Brand Combo:",
    comboText:
      "website + business cards + embroidered uniforms with your logo, with 10% off the total.",
    processTitle: "How we work",
    step: "Step",
    steps: [
      {
        title: "We talk",
        text: "Tell us about your business and what you want to achieve: more calls, sales or appointments.",
      },
      {
        title: "Deposit & content",
        text: "We start with a 50% deposit. You send us your logo, text and photos.",
      },
      {
        title: "Design & revisions",
        text: "We show you the website and make up to 2 rounds of revisions.",
      },
      {
        title: "Launch",
        text: "You pay the remaining 50% and we publish your website on your domain.",
      },
    ],
    examplesTitle: "Websites we've built",
    selfText:
      "The website you're looking at: catalog, portfolio, Google reviews and a dashboard to upload photos.",
    clientProject: "Client project",
    marthaAlt: "Martha Sol Studio website",
    marthaText:
      "Photography and video in Miami: an elegant site with portfolio, services and bookings.",
    visit: "Visit →",
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "Do I own the domain?",
        a: "Yes. We register it in your name and charge you at cost. If you ever leave, your domain goes with you.",
      },
      {
        q: "What do I need to get started?",
        a: "Your logo, a description of your services and photos of your work. If you don't have text or a logo, we can help (see extras).",
      },
      {
        q: "Do I have to pay for maintenance?",
        a: "It's not required, but we recommend it: it includes hosting, security and the month's changes.",
      },
      {
        q: "Can I combine it with uniforms or business cards?",
        a: "Yes. With the Complete Brand Combo (website + business cards + embroidered uniforms with your logo) you get 10% off the total.",
      },
    ],
    finalCta: "Let's talk about your website",
    finalMsg: "Hi Ai Graphics, I'd like a website for my business.",
  },
  es: {
    metaTitle: "Diseño de Páginas Web en Homestead y Miami | Ai Graphics",
    metaDescription:
      "Páginas web para negocios desde $799. Promo de lanzamiento: $399.99 para los primeros 5 clientes. Diseño, SEO local, WhatsApp y Google Maps incluidos.",
    kicker: "Nuevo servicio",
    title: "Diseño de páginas web",
    intro:
      "Páginas rápidas, adaptadas al celular y pensadas para que tus clientes te encuentren en Google y te escriban por WhatsApp. Las hacemos con la misma imagen de tus uniformes y letreros.",
    cta: "Quiero mi página web",
    ctaMsg:
      "Hola Ai Graphics, quiero información sobre el diseño de páginas web.",
    seePrices: "Ver precios",
    desktopAlt: "Página web de Ai Graphics en computadora",
    desktopShot: "/diseno-web/ejemplo-escritorio-es.webp",
    mobileShot: "/diseno-web/ejemplo-celular-es.webp",
    mobileAlt: "Página web de Ai Graphics en celular",
    promoTitle: "Promo de lanzamiento: página web a $399.99",
    promoText:
      "Paquete Presencia (precio normal $799), solo para los primeros 5 clientes.",
    promoCta: "Apartar mi lugar",
    promoMsg:
      "Hola Ai Graphics, quiero apartar la promo de página web de $399.99.",
    pricingTitle: "Paquetes y precios",
    recommended: "Recomendado",
    first5: "Primeros 5 clientes",
    choose: "Elegir",
    plans: [
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
    ],
    maintenanceTitle: "Mantenimiento mensual",
    maintenanceText: "Opcional. Tu página siempre al día y segura.",
    maintenance: [
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
    ],
    extrasTitle: "Extras",
    extras: [
      { item: "Página adicional", price: "$150" },
      { item: "Redacción de textos", price: "$100" },
      { item: "Diseño de logo", price: "$150 – $300" },
      { item: "Dominio (a tu nombre, al costo)", price: "$15 – $25 / año" },
      { item: "Horas extra de cambios", price: "$60 / hora" },
    ],
    comboTitle: "Combo Marca Completa:",
    comboText:
      "página web + tarjetas de presentación + uniformes bordados con tu logo, con 10% de descuento sobre el total.",
    processTitle: "Cómo trabajamos",
    step: "Paso",
    steps: [
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
    ],
    examplesTitle: "Páginas que hemos hecho",
    selfText:
      "La página que estás viendo: catálogo, portafolio, reseñas de Google y panel para subir fotos.",
    clientProject: "Proyecto de cliente",
    marthaAlt: "Página web de Martha Sol Studio",
    marthaText:
      "Fotografía y video en Miami: página elegante con portafolio, servicios y reservas.",
    visit: "Visitar →",
    faqTitle: "Preguntas frecuentes",
    faqs: [
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
    ],
    finalCta: "Hablemos de tu página",
    finalMsg: "Hola Ai Graphics, quiero una página web para mi negocio.",
  },
};

export const webDesignMetadata = (lang) =>
  pageMetadata("webDesign", lang, {
    title: copy[lang].metaTitle,
    description: copy[lang].metaDescription,
    image:
      lang === "en"
        ? "/diseno-web/ejemplo-escritorio-en.webp"
        : "/diseno-web/ejemplo-escritorio-es.webp",
  });

export default function WebDesignView({ lang }) {
  const t = copy[lang];
  return (
    <div className="brand-dots">
      {/* Encabezado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <p className="text-print-dark text-lg font-light italic tracking-[0.15em]">
            {t.kicker}
          </p>
          <h1 className="font-display font-bold uppercase text-print-cyan text-5xl md:text-7xl mt-2 leading-[1.05]">
            {t.title}
          </h1>
          <span
            className="brand-swoosh w-64 max-w-full mx-auto lg:mx-0 mt-3"
            aria-hidden="true"
          />
          <p className="text-print-dark text-lg leading-relaxed mt-6 max-w-xl mx-auto lg:mx-0">
            {t.intro}
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-8">
            <QuoteButton
              lang={lang}
              label={t.cta}
              message={t.ctaMsg}
              size="lg"
            />
            <a
              href="#precios"
              className="px-7 py-4 rounded-xl bg-white text-print-cyan-dark font-bold border-2 border-print-cyan hover:bg-print-cyan hover:text-white transition-all"
            >
              {t.seePrices}
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
                src={t.desktopShot}
                alt={t.desktopAlt}
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
                src={t.mobileShot}
                alt={t.mobileAlt}
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
              {t.promoTitle}
            </p>
            <p className="mt-1 text-white/90">{t.promoText}</p>
          </div>
          <QuoteButton
            lang={lang}
            label={t.promoCta}
            message={t.promoMsg}
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
            {t.pricingTitle}
          </h2>
          <span
            className="brand-swoosh w-48 max-w-full mx-auto mt-2"
            aria-hidden="true"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {t.plans.map((plan) => (
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
                  {t.recommended}
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
                      {t.first5}
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
                lang={lang}
                label={`${t.choose} ${plan.name}`}
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
              {t.maintenanceTitle}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{t.maintenanceText}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              {t.maintenance.map((m) => (
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
              {t.extrasTitle}
            </h3>
            <table className="w-full mt-4 text-sm">
              <tbody>
                {t.extras.map((e) => (
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
              <strong>{t.comboTitle}</strong> {t.comboText}
            </p>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold uppercase text-print-cyan text-4xl md:text-5xl">
              {t.processTitle}
            </h2>
            <span
              className="brand-swoosh w-48 max-w-full mx-auto mt-2"
              aria-hidden="true"
            />
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.steps.map((s, i) => (
              <li
                key={s.title}
                className="rounded-3xl p-6 border border-gray-100 shadow-sm"
              >
                <span
                  className={`brand-ribbon text-base ${
                    i % 2 === 0 ? "bg-print-magenta" : "bg-print-cyan"
                  }`}
                >
                  {t.step} {i + 1}
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
            {t.examplesTitle}
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
                src={t.desktopShot}
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
              <p className="text-sm text-print-dark mt-1">{t.selfText}</p>
            </div>
          </div>
          <a
            href="https://marthasolstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="relative aspect-[16/9] bg-gray-100">
              <Image
                src="/diseno-web/ejemplo-marthasol.webp"
                alt={t.marthaAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-6">
              <span className="brand-ribbon bg-print-magenta text-sm">
                {t.clientProject}
              </span>
              <p className="font-display font-bold uppercase text-2xl text-print-ink mt-3">
                Martha Sol Studio
              </p>
              <p className="text-sm text-print-dark mt-1">
                {t.marthaText}{" "}
                <span className="font-bold text-print-cyan-dark group-hover:underline">
                  {t.visit}
                </span>
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold uppercase text-print-cyan text-4xl md:text-5xl text-center">
            {t.faqTitle}
          </h2>
          <span
            className="brand-swoosh w-48 max-w-full mx-auto mt-2 mb-10"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.faqs.map((f) => (
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
              lang={lang}
              label={t.finalCta}
              message={t.finalMsg}
              variant="ink"
              size="lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
