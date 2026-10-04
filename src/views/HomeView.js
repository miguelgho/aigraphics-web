import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductCatalog from "@/components/ProductCatalog";
import GoogleReviews from "@/components/GoogleReviews";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { getProducts } from "@/data/products";
import { getGoogleReviews } from "@/lib/googleReviews";
import { path } from "@/lib/i18n";

const copy = {
  en: {
    featuredTitle: "Most popular products",
    featuredSubtitle:
      "A few of our favorites. Open any product to see photos of real jobs.",
    allProducts: "See all products →",
    newService: "New service",
    webTitle: "Does your business need a website?",
    webText:
      "We design your site with the same look as your uniforms and signs. Launch promo: $399.99 for the first 5 clients.",
    webCta: "See packages and pricing →",
  },
  es: {
    featuredTitle: "Productos más pedidos",
    featuredSubtitle:
      "Algunos de nuestros productos favoritos. Entra a cada uno para ver fotos de trabajos reales.",
    allProducts: "Ver todos los productos →",
    newService: "Nuevo servicio",
    webTitle: "¿Tu negocio necesita página web?",
    webText:
      "Diseñamos tu sitio con la misma imagen de tus uniformes y letreros. Promo de lanzamiento: $399.99 para los primeros 5 clientes.",
    webCta: "Ver paquetes y precios →",
  },
};

export default async function HomeView({ lang }) {
  const t = copy[lang];
  const reviews = await getGoogleReviews(lang);

  return (
    <div className="space-y-12">
      {/* Hero: Uniformes | Gran Formato */}
      <HeroSection lang={lang} />

      {/* Las 4 líneas de servicio del roll-up */}
      <ServicesSection lang={lang} />

      {/* Productos destacados; el catálogo completo está en su propia página */}
      <ProductCatalog
        lang={lang}
        products={getProducts(lang).filter((p) => p.featured)}
        title={t.featuredTitle}
        subtitle={t.featuredSubtitle}
      >
        <div className="text-center mt-12">
          <Link
            href={path("products", lang)}
            className="inline-block px-7 py-4 rounded-xl bg-white text-print-cyan-dark font-bold border-2 border-print-cyan hover:bg-print-cyan hover:text-white transition-all"
          >
            {t.allProducts}
          </Link>
        </div>
      </ProductCatalog>

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

      {/* Reseñas oficiales de Google (Places API) */}
      <GoogleReviews data={reviews} lang={lang} />

      {/* Sección de Preguntas Frecuentes */}
      <FAQSection lang={lang} />
    </div>
  );
}
