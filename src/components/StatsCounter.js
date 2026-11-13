"use client";
import { useEffect, useRef, useState } from "react";

// Contador con los números reales del negocio. Cuando la sección aparece en pantalla,
// cada número sube desde 0 hasta su valor, uno tras otro.
const copy = {
  en: {
    title: "Real numbers from our workshop",
    labels: {
      customers: "Customers served",
      orders: "Orders completed",
      garments: "Garments customized",
      printUnits: "Printed pieces",
    },
  },
  es: {
    title: "Números reales de nuestro taller",
    labels: {
      customers: "Clientes atendidos",
      orders: "Pedidos realizados",
      garments: "Prendas personalizadas",
      printUnits: "Piezas impresas",
    },
  },
};

const KEYS = ["customers", "orders", "garments", "printUnits"];
const DURATION = 1600; // ms que tarda cada número en subir
const STAGGER = 450; // ms entre un número y el siguiente
const COLORS = [
  "text-print-magenta",
  "text-print-cyan",
  "text-print-yellow",
  "text-white",
];

const easeOut = (x) => 1 - Math.pow(1 - x, 3);

export default function StatsCounter({ stats, lang = "en" }) {
  const t = copy[lang];
  const ref = useRef(null);
  const [values, setValues] = useState(stats);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame;
    const animate = () => {
      const start = performance.now();
      const tick = (now) => {
        const next = {};
        let done = true;
        KEYS.forEach((key, i) => {
          const p = Math.min(Math.max((now - start - i * STAGGER) / DURATION, 0), 1);
          if (p < 1) done = false;
          next[key] = Math.round(stats[key] * easeOut(p));
        });
        setValues(next);
        if (!done) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    // Empieza en cuanto la sección asoma por abajo de la pantalla.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        setValues(Object.fromEntries(KEYS.map((k) => [k, 0])));
        animate();
      }
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [stats]);

  const locale = lang === "en" ? "en-US" : "es-US";

  return (
    <section ref={ref} className="px-4">
      <div className="max-w-7xl mx-auto bg-print-ink rounded-3xl px-6 py-10 sm:py-12">
        <h2 className="text-center text-white/80 text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
          {t.title}
        </h2>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 mt-8">
          {KEYS.map((key, i) => (
            <div key={key} className="flex flex-col-reverse text-center">
              <dt className="text-gray-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1">
                {t.labels[key]}
              </dt>
              <dd
                className={`font-display font-bold text-4xl sm:text-5xl lg:text-6xl tabular-nums ${COLORS[i]}`}
              >
                {values[key].toLocaleString(locale)}+
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
