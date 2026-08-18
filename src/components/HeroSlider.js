"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image:
      "https://lh3.googleusercontent.com/d/1NE-OYOVOJbU-aEZHlyM8BlBPEwK7q0mE",
    tag: "Bordados Profesionales en Gorras",
    desc: "Bordado plano y 3D Puff en todo tipo de estilos y marcas",
  },
  {
    image:
      "https://lh3.googleusercontent.com/d/1gAWsTeoVUVuTw-b92B3vzDALZfV5Z1IP",
    tag: "Uniformes de Trabajo & Construcción",
    desc: "Polos, ropa de alta visibilidad y prendas industriales",
  },
  {
    image:
      "https://lh3.googleusercontent.com/d/15QfmlELfgqtR1ktWexMSA6h-_BaOcGIs",
    tag: "Impresión Textil DTF",
    desc: "Estampados a todo color de alta durabilidad en todo tipo de telas",
  },
  {
    image:
      "https://lh3.googleusercontent.com/d/1367t_4WaLnVSuiUN3tQeB1ppV4Pc6Z3l",
    tag: "Uniformes Escolares & Senior Class",
    desc: "Prendas personalizadas para colegios y graduaciones",
  },
  {
    image:
      "https://lh3.googleusercontent.com/d/1EDap3Ddp7z4wMcUS8Z5uK5j7xEJkkdhi",
    tag: "Tazas y Artículos Promocionales",
    desc: "Sublimación y detalles personalizados para empresas y eventos",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#1E2024] via-[#2B2E35] to-[#16171A] text-white py-14 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Lado Izquierdo */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#68C9D8] text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/10">
            ✨ Create. Print. Shine.
          </div>

          <h1 className="sr-only">
            Work Uniforms, School Uniform Store & Construction Workwear in
            Homestead | Custom Uniform Embroidery, Enguatadas de trabajo &
            Uniformes
          </h1>

          <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Custom Work Uniforms, Embroidery & DTF Printing in{" "}
            <span className="bg-gradient-to-r from-[#E04B9A] via-[#F4D30D] to-[#68C9D8] bg-clip-text text-transparent">
              Homestead & Miami
            </span>
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Tu tienda y taller local especializado en uniformes de trabajo,
            gorras bordadas, camisetas DTF, rotulación y letreros para empresas
            y escuelas.
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
            <a
              href="https://wa.me/13059705085?text=Hola%20Ai%20Graphics,%20me%20gustaría%20solicitar%20una%20cotización."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar cotización por WhatsApp"
              className="px-6 py-3.5 rounded-xl bg-[#E04B9A] text-white font-bold text-sm hover:bg-[#c93f87] transition-all shadow-lg hover:scale-105"
            >
              💬 Cotizar WhatsApp
            </a>
            <a
              href="tel:3059705085"
              aria-label="Llamar a Ai Graphics al 305-970-5085"
              className="px-6 py-3.5 rounded-xl bg-[#15803D] text-white font-bold text-sm hover:bg-[#166534] transition-all shadow-lg hover:scale-105"
            >
              📞 Llamar (305) 970-5085
            </a>
            <a
              href="#productos"
              aria-label="Ir al catálogo de productos"
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all backdrop-blur-sm"
            >
              Ver Catálogo ↓
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-2 text-center lg:text-left">
            <div>
              <p className="text-[#F4D30D] font-bold text-xs sm:text-sm">
                ⚡ Rush Orders
              </p>
              <p className="text-gray-400 text-[11px]">Listos en 24–48 hrs</p>
            </div>
            <div>
              <p className="text-[#68C9D8] font-bold text-xs sm:text-sm">
                ⭐ Calidad
              </p>
              <p className="text-gray-400 text-[11px]">
                Bordado e impresión HD
              </p>
            </div>
            <div>
              <p className="text-[#E04B9A] font-bold text-xs sm:text-sm">
                📍 Taller Local
              </p>
              <p className="text-gray-400 text-[11px]">Homestead & Miami</p>
            </div>
          </div>
        </div>

        {/* Lado Derecho */}
        <div className="lg:col-span-6 relative">
          <div className="relative h-[320px] sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.tag}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <span className="inline-block px-3 py-1 rounded-lg bg-[#E04B9A] text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
                    {slide.tag}
                  </span>
                  <p className="text-white text-sm sm:text-base font-semibold drop-shadow">
                    {slide.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Puntos accesibles con aria-label */}
            <div className="absolute bottom-6 right-6 z-30 flex gap-2">
              {slides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Ver diapositiva ${idx + 1}: ${slide.tag}`}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === current
                      ? "bg-[#F4D30D] w-7"
                      : "bg-white/70 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
