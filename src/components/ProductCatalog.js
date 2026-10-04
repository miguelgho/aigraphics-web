"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/data/products";
import { productPath } from "@/lib/i18n";

const copy = {
  en: { filterBy: "Filter by", details: "See details and photos →" },
  es: { filterBy: "Filtrar por", details: "Ver detalles y fotos →" },
};

// Tarjetas de productos que llevan a la página de cada producto.
// En la página principal se usa con los destacados y sin filtros; en el catálogo con todos.
export default function ProductCatalog({
  products,
  lang = "en",
  title,
  subtitle,
  showFilter = false,
  initialCategory = "all",
  headingLevel = "h2",
  children,
}) {
  const Heading = headingLevel;
  const t = copy[lang];
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="productos" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <Heading className="font-display font-bold uppercase text-print-cyan text-4xl md:text-5xl">
          {title}
        </Heading>
        <span
          className="brand-swoosh w-48 max-w-full mx-auto mt-2 mb-4"
          aria-hidden="true"
        />
        {subtitle && (
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>

      {showFilter && (
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {getCategories(lang).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              aria-label={`${t.filterBy} ${cat.name}`}
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
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={productPath(product, lang)}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
          >
            <div className="relative h-56 w-full overflow-hidden bg-gray-100">
              <Image
                src={product.coverImage}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
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

              <span className="pt-4 border-t border-gray-100 mt-2 text-sm font-bold text-print-cyan-dark group-hover:text-print-magenta-dark transition-colors">
                {t.details}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {children}
    </section>
  );
}
