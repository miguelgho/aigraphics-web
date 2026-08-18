"use client";
import { useEffect, useState, useRef } from "react";

export default function ReviewsWidget() {
  const containerRef = useRef(null);
  const [iframeSrc, setIframeSrc] = useState(
    "https://www.localmarketingmanager.com/api/reviews/ai-graphics-review-widget?pageSize=3",
  );

  useEffect(() => {
    function getPageSizeForWidth(width) {
      if (width < 450) return 1;
      if (width < 675) return 2;
      if (width < 918) return 3;
      if (width < 1144) return 4;
      return 5;
    }

    function updateSrc() {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        if (width > 0) {
          const pageSize = getPageSizeForWidth(width);
          setIframeSrc(
            `https://www.localmarketingmanager.com/api/reviews/ai-graphics-review-widget?pageSize=${pageSize}`,
          );
        }
      }
    }

    updateSrc();
    window.addEventListener("resize", updateSrc);
    return () => window.removeEventListener("resize", updateSrc);
  }, []);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-wider mb-2">
          ⭐ Google Reviews
        </span>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Opiniones de Nuestros Clientes
        </h2>
        <p className="text-gray-600 text-sm max-w-xl mx-auto">
          Clientes satisfechos con nuestros uniformes, bordados, franelas y
          rotulación en Homestead y Miami.
        </p>
      </div>

      {/* Contenedor sin scrollbar */}
      <div
        id="reviewsWidgetContainer"
        ref={containerRef}
        className="w-full bg-white rounded-3xl p-2 sm:p-4 shadow-sm border border-gray-100 overflow-hidden flex items-center justify-center"
      >
        <iframe
          id="reviewsWidget"
          src={iframeSrc}
          scrolling="no"
          style={{
            width: "100%",
            border: "none",
            height: "380px",
            minHeight: "380px",
            overflow: "hidden",
          }}
          title="Ai Graphics Google Reviews Widget"
        />
      </div>
    </section>
  );
}
