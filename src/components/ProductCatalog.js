"use client";
import { useState } from "react";
import Image from "next/image";
import { categories, products } from "@/data/products";

export default function ProductCatalog({ trabajos = [] }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // Fotos subidas en /studio para este producto; si no hay, usamos las fijas.
  const galleryFor = (product) => {
    const subidas = trabajos
      .filter((t) => t.producto === product.id)
      .flatMap((t) => t.fotos);
    if (subidas.length > 0) return subidas;
    return product.gallery.map((src, index) => ({
      src,
      alt: `${product.name} ejemplo ${index + 1}`,
    }));
  };

  return (
    <section id="productos" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold uppercase text-print-cyan text-4xl md:text-5xl">
          Nuestros Productos y Servicios
        </h2>
        <span
          className="brand-swoosh w-48 max-w-full mx-auto mt-2 mb-4"
          aria-hidden="true"
        />
        <p className="text-gray-600 max-w-2xl mx-auto">
          Selecciona una categoría o haz clic en cualquier producto para ver
          fotos de trabajos realizados y cotizar al instante.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            aria-label={`Filtrar por ${cat.name}`}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${
              activeCategory === cat.id
                ? "bg-print-magenta text-white shadow-md scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer flex flex-col"
          >
            <div className="relative h-56 w-full overflow-hidden bg-gray-100">
              <Image
                src={product.coverImage}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-gray-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  🔍 Ver fotos de trabajos
                </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span
                  className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold text-white uppercase tracking-wider mb-2"
                  style={{ backgroundColor: product.color }}
                >
                  {product.tagline}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-2">
                <span className="text-xs font-bold text-print-cyan-dark group-hover:text-print-magenta-dark transition-colors">
                  Ver galería →
                </span>
                <a
                  href={`https://wa.me/13059705085?text=${encodeURIComponent(product.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Cotizar ${product.name} por WhatsApp`}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#25D366] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#1EBE5D] transition-colors shadow-sm"
                >
                  Cotizar WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              aria-label="Cerrar modal"
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-800 text-2xl font-bold"
            >
              ✕
            </button>

            <span
              className="inline-block px-3 py-1 rounded-md text-xs font-bold text-white uppercase tracking-wider mb-2"
              style={{ backgroundColor: selectedProduct.color }}
            >
              {selectedProduct.category.toUpperCase()}
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              {selectedProduct.name}
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              {selectedProduct.description}
            </p>

            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Muestras de Trabajos Anteriores:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {galleryFor(selectedProduct).map((foto) => (
                <div
                  key={foto.src}
                  className="relative h-44 rounded-xl overflow-hidden bg-gray-100 border border-gray-200"
                >
                  <Image
                    src={foto.thumb || foto.src}
                    alt={foto.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50"
              >
                Cerrar
              </button>
              <a
                href={`https://wa.me/13059705085?text=${encodeURIComponent(selectedProduct.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Cotizar ${selectedProduct.name} por WhatsApp`}
                className="px-6 py-2.5 rounded-xl bg-print-magenta text-white text-sm font-bold hover:bg-print-magenta-dark transition-all shadow-md text-center"
              >
                Cotizar este producto por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
