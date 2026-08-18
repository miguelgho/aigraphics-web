"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Lado Izquierdo: Logotipo Oficial */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 w-44 sm:w-52">
              <Image
                src="/logo.png"
                alt="Ai Graphics Logo"
                fill
                sizes="(max-width: 640px) 176px, 208px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Centro: Enlaces de Navegación (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-semibold text-gray-700 hover:text-[#E04B9A] transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="#productos"
              className="text-sm font-semibold text-gray-700 hover:text-[#E04B9A] transition-colors"
            >
              Productos & Servicios
            </Link>
            <Link
              href="#faqs"
              className="text-sm font-semibold text-gray-700 hover:text-[#E04B9A] transition-colors"
            >
              Preguntas Frecuentes
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-gray-700 hover:text-[#E04B9A] transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* Lado Derecho: Teléfono y Botón de Cotización */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:3059705085"
              className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#2B2E35] hover:text-[#E04B9A] transition-colors"
            >
              <span>📞</span> (305) 970-5085
            </a>
            <a
              href="https://wa.me/13059705085?text=Hola%20Ai%20Graphics,%20me%20gustaría%20solicitar%20una%20cotización."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#E04B9A] text-white text-xs font-bold hover:bg-[#c93f87] transition-all shadow-sm"
            >
              💬 Cotizar
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:3059705085"
              className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 text-xs font-bold"
            >
              📞 Llamar
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              aria-label="Abrir menú"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable en Móvil */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-gray-800 py-2 border-b border-gray-50"
          >
            Inicio
          </Link>
          <Link
            href="#productos"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-gray-800 py-2 border-b border-gray-50"
          >
            Productos & Servicios
          </Link>
          <Link
            href="#faqs"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-gray-800 py-2 border-b border-gray-50"
          >
            Preguntas Frecuentes
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-gray-800 py-2 border-b border-gray-50"
          >
            Contacto
          </Link>
          <a
            href="https://wa.me/13059705085?text=Hola%20Ai%20Graphics,%20deseo%20una%20cotización."
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-2.5 rounded-xl bg-[#E04B9A] text-white text-xs font-bold shadow-md"
          >
            💬 Cotizar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
