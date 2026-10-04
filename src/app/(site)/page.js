import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductCatalog from "@/components/ProductCatalog";
import GoogleReviews from "@/components/GoogleReviews";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { products } from "@/data/products";
import { getGoogleReviews } from "@/lib/googleReviews";

export default async function Home() {
  const reviews = await getGoogleReviews();

  return (
    <div className="space-y-12">
      {/* Hero: Uniformes | Gran Formato */}
      <HeroSection />

      {/* Las 4 líneas de servicio del roll-up */}
      <ServicesSection />

      {/* Productos destacados; el catálogo completo está en /productos */}
      <ProductCatalog
        products={products.filter((p) => p.featured)}
        title="Productos más pedidos"
        subtitle="Algunos de nuestros productos favoritos. Entra a cada uno para ver fotos de trabajos reales."
      >
        <div className="text-center mt-12">
          <Link
            href="/productos"
            className="inline-block px-7 py-4 rounded-xl bg-white text-print-cyan-dark font-bold border-2 border-print-cyan hover:bg-print-cyan hover:text-white transition-all"
          >
            Ver todos los productos →
          </Link>
        </div>
      </ProductCatalog>

      {/* Servicio nuevo: diseño de páginas web */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto bg-print-ink text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="brand-ribbon bg-print-magenta text-base">
              Nuevo servicio
            </span>
            <p className="font-display font-bold uppercase text-3xl sm:text-4xl mt-4">
              ¿Tu negocio necesita página web?
            </p>
            <p className="text-gray-300 mt-1">
              Diseñamos tu sitio con la misma imagen de tus uniformes y
              letreros. Promo de lanzamiento: $399.99 para los primeros 5
              clientes.
            </p>
          </div>
          <Link
            href="/diseno-web"
            className="shrink-0 px-7 py-4 rounded-xl bg-print-magenta text-white font-bold hover:bg-print-magenta-dark transition-all shadow-lg hover:scale-105"
          >
            Ver paquetes y precios →
          </Link>
        </div>
      </section>

      {/* Reseñas oficiales de Google (Places API) */}
      <GoogleReviews data={reviews} />

      {/* Sección de Preguntas Frecuentes */}
      <FAQSection />
    </div>
  );
}
