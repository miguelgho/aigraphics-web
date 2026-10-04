"use client";
import { useState } from "react";
import Image from "next/image";
import { workCategories } from "@/data/workCategories";
import QuoteButton from "@/components/QuoteButton";

const ribbonBg = { magenta: "bg-print-magenta", cyan: "bg-print-cyan" };

export default function PortfolioGallery({ trabajos }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selected, setSelected] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Solo mostramos filtros de categorías que tienen trabajos.
  const categories = workCategories.filter((cat) =>
    trabajos.some((t) => t.categoria === cat.value),
  );
  const visible =
    activeCategory === "all"
      ? trabajos
      : trabajos.filter((t) => t.categoria === activeCategory);

  const open = (trabajo) => {
    setSelected(trabajo);
    setPhotoIndex(0);
  };
  const step = (delta) =>
    setPhotoIndex(
      (i) => (i + delta + selected.fotos.length) % selected.fotos.length,
    );

  return (
    <>
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {[{ value: "all", title: "Todos" }, ...categories].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${
                activeCategory === cat.value
                  ? "bg-print-magenta text-white shadow-md scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((trabajo) => {
          const cat = workCategories.find((c) => c.value === trabajo.categoria);
          const cover = trabajo.fotos[0];
          return (
            <button
              key={trabajo.id}
              onClick={() => open(trabajo)}
              className="group text-left bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                <Image
                  src={cover.thumb || cover.src}
                  alt={cover.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {trabajo.fotos.length > 1 && (
                  <span className="absolute top-3 right-3 bg-black/60 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    📷 {trabajo.fotos.length}
                  </span>
                )}
              </div>
              <div className="p-6">
                {cat && (
                  <span
                    className={`brand-ribbon text-base mb-3 ${ribbonBg[cat.color]}`}
                  >
                    {cat.title}
                  </span>
                )}
                <h2 className="font-display font-bold uppercase text-2xl text-print-dark leading-tight">
                  {trabajo.titulo}
                </h2>
                {trabajo.cliente && (
                  <p className="text-sm text-gray-500 mt-1">
                    {trabajo.cliente}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-4 sm:p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
              className="absolute top-3 right-4 z-10 text-gray-400 hover:text-gray-800 text-2xl font-bold"
            >
              ✕
            </button>

            <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={selected.fotos[photoIndex].src}
                alt={selected.fotos[photoIndex].alt}
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                className="object-contain"
              />
              {selected.fotos.length > 1 && (
                <>
                  <button
                    onClick={() => step(-1)}
                    aria-label="Foto anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-print-ink text-xl font-bold shadow"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => step(1)}
                    aria-label="Foto siguiente"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-print-ink text-xl font-bold shadow"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h3 className="font-display font-bold uppercase text-3xl text-print-dark">
                  {selected.titulo}
                </h3>
                {selected.descripcion && (
                  <p className="text-gray-600 text-sm mt-1 max-w-xl">
                    {selected.descripcion}
                  </p>
                )}
              </div>
              <QuoteButton
                label="Quiero algo similar"
                message={`Hola Ai Graphics, vi el trabajo "${selected.titulo}" en su página y quiero algo similar.`}
                className="shrink-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
