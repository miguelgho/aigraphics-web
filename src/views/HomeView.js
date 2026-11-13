import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductCatalog from "@/components/ProductCatalog";
import GoogleReviews from "@/components/GoogleReviews";
import FAQSection from "@/components/FAQSection";
import StatsCounter from "@/components/StatsCounter";
import QuoteButton from "@/components/QuoteButton";
import Link from "next/link";
import { getProducts } from "@/data/products";
import { getGoogleReviews } from "@/lib/googleReviews";
import { getSiteStats } from "@/lib/siteStats";
import { path } from "@/lib/i18n";

// Los más vendidos (ventas de Square y del sistema de pedidos, 2026), en este orden.
const BEST_SELLERS = [
  "performance-shirts",
  "dtf-tshirts",
  "embroidery-polos",
  "dtf-polos",
  "embroidery-caps",
  "marketing-stickers",
];

const copy = {
  en: {
    featuredTitle: "Our best sellers",
    featuredSubtitle:
      "What businesses in Homestead and Miami order the most. Tap any product to see real jobs.",
    allProducts: "See all products →",
    newService: "New service",
    webTitle: "Does your business need a website?",
    webText:
      "We design your site with the same look as your uniforms and signs. Launch promo: $399.99 for the first 5 clients.",
    webCta: "See packages and pricing →",
    ctaTitle: "Ready to start your order?",
    ctaText:
      "Send us your logo and quantities, and we'll get back to you with your quote.",
    ctaButton: "Get a Free Quote",
    orCall: "or call",
  },
  es: {
    featuredTitle: "Lo más pedido",
    featuredSubtitle:
      "Lo que más piden los negocios de Homestead y Miami. Toca cualquier producto para ver trabajos reales.",
    allProducts: "Ver todos los productos →",
    newService: "Nuevo servicio",
    webTitle: "¿Tu negocio necesita página web?",
    webText:
      "Diseñamos tu sitio con la misma imagen de tus uniformes y letreros. Promo de lanzamiento: $399.99 para los primeros 5 clientes.",
    webCta: "Ver paquetes y precios →",
    ctaTitle: "¿Listo para tu pedido?",
    ctaText:
      "Envíanos tu logo y las cantidades, y te respondemos con tu cotización.",
    ctaButton: "Cotiza gratis",
    orCall: "o llama al",
  },
};

export default async function HomeView({ lang }) {
  const t = copy[lang];
  const [reviews, stats] = await Promise.all([
    getGoogleReviews(lang),
    getSiteStats(),
  ]);
  const products = getProducts(lang);
  const bestSellers = BEST_SELLERS.map((id) =>
    products.find((p) => p.id === id),
  ).filter(Boolean);

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Hero: Uniformes | Gran Formato */}
      <HeroSection lang={lang} />

      {/* Lo más vendido, justo después de la portada */}
      <ProductCatalog
        lang={lang}
        products={bestSellers}
        title={t.featuredTitle}
        subtitle={t.featuredSubtitle}
        compact
      >
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href={path("products", lang)}
            className="inline-block px-7 py-4 rounded-xl bg-white text-print-cyan-dark font-bold border-2 border-print-cyan hover:bg-print-cyan hover:text-white transition-all"
          >
            {t.allProducts}
          </Link>
        </div>
      </ProductCatalog>

      {/* Números reales del taller (suben solos con cada pedido nuevo) */}
      <StatsCounter stats={stats} lang={lang} />

      {/* Reseñas oficiales de Google (Places API) */}
      <GoogleReviews data={reviews} lang={lang} />

      {/* Las 4 líneas de servicio del roll-up, en versión corta */}
      <ServicesSection lang={lang} />

      {/* Servicio nuevo: diseño de páginas web */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto bg-print-ink text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="brand-ribbon bg-print-magenta text-base">
              {t.newService}
            </span>
            <p className="font-display font-bold uppercase text-3xl sm:text-4xl mt-4">
              {t.webTitle}
            </p>
            <p className="text-gray-300 mt-1">{t.webText}</p>
          </div>
          <Link
            href={path("webDesign", lang)}
            className="shrink-0 px-7 py-4 rounded-xl bg-print-magenta text-white font-bold hover:bg-print-magenta-dark transition-all shadow-lg hover:scale-105"
          >
            {t.webCta}
          </Link>
        </div>
      </section>

      {/* Preguntas frecuentes (se abren al tocarlas) */}
      <FAQSection lang={lang} />

      {/* Cierre: último llamado a cotizar */}
      <section className="px-4 pb-6">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl border border-gray-100 shadow-sm px-6 py-10">
          <p className="font-display font-bold uppercase text-print-ink text-3xl sm:text-5xl">
            {t.ctaTitle}
          </p>
          <p className="text-print-dark mt-3 max-w-xl mx-auto">{t.ctaText}</p>
          <div className="flex flex-col items-center gap-3 mt-7">
            <QuoteButton lang={lang} label={t.ctaButton} size="xl" />
            <p className="text-print-dark text-sm">
              {t.orCall}{" "}
              <a
                href="tel:+13059705085"
                className="font-bold text-print-ink underline underline-offset-4 decoration-print-magenta hover:text-print-magenta-dark"
              >
                (305) 970-5085
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
