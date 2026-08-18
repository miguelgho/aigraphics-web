import HeroSlider from "@/components/HeroSlider";
import ProductCatalog from "@/components/ProductCatalog";
import ReviewsWidget from "@/components/ReviewsWidget";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Interactivo con Slider */}
      <HeroSlider />

      {/* Catálogo de Productos y Galería */}
      <ProductCatalog />

      {/* Widget Oficial de Reseñas de Google */}
      <ReviewsWidget />

      {/* Sección de Preguntas Frecuentes */}
      <FAQSection />
    </div>
  );
}
