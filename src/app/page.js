import HeroSlider from "@/components/HeroSlider";
import ProductCatalog from "@/components/ProductCatalog";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Interactivo con Slider */}
      <HeroSlider />

      {/* Catálogo de Productos estructurado en las 4 Categorías */}
      <ProductCatalog />

      {/* Reseñas de Google ocultas: el widget de localmarketingmanager.com devuelve 404.
          Para reactivarlo: importar ReviewsWidget y volver a poner <ReviewsWidget /> aquí. */}

      {/* Sección de Preguntas Frecuentes */}
      <FAQSection />
    </div>
  );
}
