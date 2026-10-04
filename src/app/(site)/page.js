import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductCatalog from "@/components/ProductCatalog";
import GoogleReviews from "@/components/GoogleReviews";
import FAQSection from "@/components/FAQSection";
import { getTrabajos } from "@/sanity/trabajos";
import { getGoogleReviews } from "@/lib/googleReviews";

export default async function Home() {
  const [trabajos, reviews] = await Promise.all([
    getTrabajos(),
    getGoogleReviews(),
  ]);

  return (
    <div className="space-y-12">
      {/* Hero: Uniformes | Gran Formato */}
      <HeroSection />

      {/* Las 4 líneas de servicio del roll-up */}
      <ServicesSection />

      {/* Catálogo de Productos estructurado en las 4 Categorías */}
      <ProductCatalog trabajos={trabajos} />

      {/* Reseñas oficiales de Google (Places API) */}
      <GoogleReviews data={reviews} />

      {/* Sección de Preguntas Frecuentes */}
      <FAQSection />
    </div>
  );
}
