import HeroSlider from "@/components/HeroSlider";
import ProductCatalog from "@/components/ProductCatalog";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Interactivo con Slider */}
      <HeroSlider />

      {/* Catálogo de Productos y Galería */}
      <ProductCatalog />

      {/* Contenedor para Reseñas */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Opiniones de Nuestros Clientes
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Calificación 5 estrellas en Google
          </p>
          <div
            id="google-reviews-widget"
            className="min-h-[100px] flex items-center justify-center text-gray-400 text-xs"
          >
            [Widget de Reseñas de Google]
          </div>
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <FAQSection />
    </div>
  );
}
