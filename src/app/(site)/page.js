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

      {/* Reseñas oficiales de Google (Places API) */}
      <GoogleReviews data={reviews} />

      {/* Sección de Preguntas Frecuentes */}
      <FAQSection />
    </div>
  );
}
