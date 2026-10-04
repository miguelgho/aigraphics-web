"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/QuoteButton";

// Menú "Servicios": Diseño Web va primero porque es el servicio nuevo.
const services = [
  {
    href: "/diseno-web",
    title: "Diseño de Páginas Web",
    desc: "Tu negocio en internet, listo para Google",
    isNew: true,
  },
  {
    href: "/productos?categoria=embroidery",
    title: "Uniformes y Bordados",
    desc: "Polos, gorras y uniformes escolares",
  },
  {
    href: "/productos?categoria=dtf",
    title: "Impresión DTF",
    desc: "Camisetas, franelas y enguatadas",
  },
  {
    href: "/productos?categoria=signs",
    title: "Letreros y Gran Formato",
    desc: "Banners, roll-ups, vinil y coroplast",
  },
  {
    href: "/productos/microperforado",
    title: "Rotulación de Vehículos",
    desc: "Microperforado y letras para tu auto",
  },
  {
    href: "/productos?categoria=marketing",
    title: "Promocionales",
    desc: "Stickers, tarjetas, flyers y tazas",
  },
];

const links = [
  { href: "/portfolio", label: "Portafolio" },
  { href: "/taller", label: "Taller" },
  { href: "/#faqs", label: "FAQs" },
  { href: "/contact", label: "Contacto" },
];

function NewBadge() {
  return (
    <span className="ml-2 inline-block px-2 py-0.5 rounded-full bg-print-magenta text-white text-[10px] font-bold uppercase tracking-wider align-middle">
      Nuevo
    </span>
  );
}

function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4z" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownRef = useRef(null);

  // Cerrar el menú de Servicios con Escape o al hacer clic fuera.
  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e) => e.key === "Escape" && setServicesOpen(false);
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [servicesOpen]);

  const closeAll = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const linkClass =
    "text-sm font-semibold text-gray-700 hover:text-print-magenta-dark transition-colors whitespace-nowrap";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-4 border-print-magenta shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group" onClick={closeAll}>
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

          <nav className="hidden lg:flex items-center gap-7">
            {/* Servicios: abre al pasar el mouse o al hacer clic */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((o) => !o)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={`${linkClass} inline-flex items-center gap-1 py-7`}
              >
                Servicios
                <Chevron open={servicesOpen} />
              </button>

              {servicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full -mt-2 w-[22rem] bg-white rounded-2xl shadow-2xl border border-gray-100 p-2">
                  <ul>
                    {services.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          onClick={closeAll}
                          className={`block rounded-xl px-4 py-3 transition-colors ${
                            s.isNew
                              ? "bg-print-magenta/5 hover:bg-print-magenta/10"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <span className="font-bold text-sm text-print-ink">
                            {s.title}
                            {s.isNew && <NewBadge />}
                          </span>
                          <span className="block text-xs text-gray-500 mt-0.5">
                            {s.desc}
                          </span>
                        </Link>
                        {s.isNew && (
                          <div className="my-1 border-t border-gray-100" />
                        )}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/productos"
                    onClick={closeAll}
                    className="mt-1 block rounded-xl px-4 py-3 text-sm font-bold text-print-cyan-dark hover:bg-gray-50"
                  >
                    Ver todos los productos →
                  </Link>
                </div>
              )}
            </div>

            {links.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:3059705085"
              className="hidden xl:flex items-center gap-2 text-sm font-bold text-print-ink hover:text-print-magenta-dark transition-colors whitespace-nowrap"
            >
              <span>📞</span> (305) 970-5085
            </a>
            <a
              href="https://wa.me/13059705085?text=Hola%20Ai%20Graphics,%20me%20gustaría%20solicitar%20una%20cotización."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-print-magenta text-white text-xs font-bold hover:bg-print-magenta-dark transition-all shadow-sm whitespace-nowrap"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              Pide tu cotización
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:3059705085"
              className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 text-xs font-bold"
            >
              📞 Llamar
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
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

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
          <Link
            href="/"
            onClick={closeAll}
            className="block text-sm font-semibold text-gray-800 py-3 border-b border-gray-100"
          >
            Inicio
          </Link>

          <button
            type="button"
            onClick={() => setMobileServicesOpen((o) => !o)}
            aria-expanded={mobileServicesOpen}
            className="w-full flex items-center justify-between text-sm font-semibold text-gray-800 py-3 border-b border-gray-100"
          >
            Servicios
            <Chevron open={mobileServicesOpen} />
          </button>
          {mobileServicesOpen && (
            <ul className="py-2 pl-3 border-b border-gray-100">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    onClick={closeAll}
                    className="block py-2 text-sm text-gray-700"
                  >
                    {s.title}
                    {s.isNew && <NewBadge />}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/productos"
                  onClick={closeAll}
                  className="block py-2 text-sm font-bold text-print-cyan-dark"
                >
                  Ver todos los productos →
                </Link>
              </li>
            </ul>
          )}

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeAll}
              className="block text-sm font-semibold text-gray-800 py-3 border-b border-gray-100"
            >
              {l.href === "/taller"
                ? "Nuestro Taller"
                : l.href === "/#faqs"
                  ? "Preguntas Frecuentes"
                  : l.label}
            </Link>
          ))}

          <a
            href="https://wa.me/13059705085?text=Hola%20Ai%20Graphics,%20deseo%20una%20cotización."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-print-magenta text-white text-xs font-bold shadow-md"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            Escríbenos por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
