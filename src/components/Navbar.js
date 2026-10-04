"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/QuoteButton";
import { getProducts } from "@/data/products";
import {
  categoryPath,
  faqsPath,
  path,
  productPath,
  switchLanguagePath,
} from "@/lib/i18n";

const copy = {
  en: {
    services: "Services",
    newBadge: "New",
    allProducts: "See all products →",
    cta: "Get a quote",
    ctaMsg: "Hi Ai Graphics, I'd like to request a quote.",
    call: "📞 Call",
    home: "Home",
    whatsapp: "Message us on WhatsApp",
    whatsappMsg: "Hi Ai Graphics, I'd like a quote.",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    logoAlt: "Ai Graphics logo",
    switchLabel: "Ver esta página en español",
    menu: [
      {
        page: "webDesign",
        title: "Website Design",
        desc: "Your business online, ready for Google",
        isNew: true,
      },
      {
        category: "embroidery",
        title: "Uniforms & Embroidery",
        desc: "Polos, hats and school uniforms",
      },
      {
        category: "dtf",
        title: "DTF Printing",
        desc: "T-shirts, long sleeves and hoodies",
      },
      {
        category: "signs",
        title: "Signs & Large Format",
        desc: "Banners, roll-ups, vinyl and coroplast",
      },
      {
        product: "signs-microperforado",
        title: "Vehicle Graphics",
        desc: "Perforated film and lettering for your car",
      },
      {
        category: "marketing",
        title: "Promotional Products",
        desc: "Stickers, business cards, flyers and mugs",
      },
    ],
    links: [
      { page: "portfolio", label: "Portfolio" },
      { page: "workshop", label: "Workshop", long: "Our Workshop" },
      { faqs: true, label: "FAQs", long: "Frequently Asked Questions" },
      { page: "contact", label: "Contact" },
    ],
  },
  es: {
    services: "Servicios",
    newBadge: "Nuevo",
    allProducts: "Ver todos los productos →",
    cta: "Pide tu cotización",
    ctaMsg: "Hola Ai Graphics, me gustaría solicitar una cotización.",
    call: "📞 Llamar",
    home: "Inicio",
    whatsapp: "Escríbenos por WhatsApp",
    whatsappMsg: "Hola Ai Graphics, deseo una cotización.",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    logoAlt: "Logo de Ai Graphics",
    switchLabel: "View this page in English",
    menu: [
      {
        page: "webDesign",
        title: "Diseño de Páginas Web",
        desc: "Tu negocio en internet, listo para Google",
        isNew: true,
      },
      {
        category: "embroidery",
        title: "Uniformes y Bordados",
        desc: "Polos, gorras y uniformes escolares",
      },
      {
        category: "dtf",
        title: "Impresión DTF",
        desc: "Camisetas, franelas y enguatadas",
      },
      {
        category: "signs",
        title: "Letreros y Gran Formato",
        desc: "Banners, roll-ups, vinil y coroplast",
      },
      {
        product: "signs-microperforado",
        title: "Rotulación de Vehículos",
        desc: "Microperforado y letras para tu auto",
      },
      {
        category: "marketing",
        title: "Promocionales",
        desc: "Stickers, tarjetas, flyers y tazas",
      },
    ],
    links: [
      { page: "portfolio", label: "Portafolio" },
      { page: "workshop", label: "Taller", long: "Nuestro Taller" },
      { faqs: true, label: "FAQs", long: "Preguntas Frecuentes" },
      { page: "contact", label: "Contacto" },
    ],
  },
};

const whatsappHref = (msg) =>
  `https://wa.me/13059705085?text=${encodeURIComponent(msg)}`;

// Botón EN / ES: lleva a la misma página en el otro idioma.
function LanguageSwitch({ lang, label, className = "" }) {
  const pathname = usePathname();
  const other = lang === "en" ? "es" : "en";
  const href = switchLanguagePath(pathname, getProducts(lang), other);
  return (
    <a
      href={href}
      hrefLang={other}
      aria-label={label}
      title={label}
      className={`inline-flex items-center rounded-full border border-gray-200 bg-white p-0.5 text-xs font-bold shadow-sm hover:border-print-magenta transition-colors ${className}`}
    >
      {["en", "es"].map((l) => (
        <span
          key={l}
          className={`px-2.5 py-1 rounded-full uppercase ${
            l === lang ? "bg-print-ink text-white" : "text-gray-500"
          }`}
        >
          {l}
        </span>
      ))}
    </a>
  );
}

function NewBadge({ label }) {
  return (
    <span className="ml-2 inline-block px-2 py-0.5 rounded-full bg-print-magenta text-white text-[10px] font-bold uppercase tracking-wider align-middle">
      {label}
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

export default function Navbar({ lang = "en" }) {
  const t = copy[lang];
  const products = getProducts(lang);
  const menuHref = ({ page, category, product }) =>
    page
      ? path(page, lang)
      : category
        ? categoryPath(category, lang)
        : productPath(
            products.find((p) => p.id === product),
            lang,
          );
  const services = t.menu.map((s) => ({ ...s, href: menuHref(s) }));
  const links = t.links.map((l) => ({
    ...l,
    href: l.faqs ? faqsPath(lang) : path(l.page, lang),
  }));

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
          <Link
            href={path("home", lang)}
            className="flex items-center group"
            onClick={closeAll}
          >
            <div className="relative h-12 w-44 sm:w-52">
              <Image
                src="/logo.png"
                alt={t.logoAlt}
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
                {t.services}
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
                            {s.isNew && <NewBadge label={t.newBadge} />}
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
                    href={path("products", lang)}
                    onClick={closeAll}
                    className="mt-1 block rounded-xl px-4 py-3 text-sm font-bold text-print-cyan-dark hover:bg-gray-50"
                  >
                    {t.allProducts}
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
            <LanguageSwitch lang={lang} label={t.switchLabel} />
            <a
              href="tel:3059705085"
              className="hidden xl:flex items-center gap-2 text-sm font-bold text-print-ink hover:text-print-magenta-dark transition-colors whitespace-nowrap"
            >
              <span>📞</span> (305) 970-5085
            </a>
            <a
              href={whatsappHref(t.ctaMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-print-magenta text-white text-xs font-bold hover:bg-print-magenta-dark transition-all shadow-sm whitespace-nowrap"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              {t.cta}
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitch
              lang={lang}
              label={t.switchLabel}
              className="sm:hidden"
            />
            <a
              href="tel:3059705085"
              className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 text-xs font-bold"
            >
              {t.call}
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              aria-label={isOpen ? t.closeMenu : t.openMenu}
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
            href={path("home", lang)}
            onClick={closeAll}
            className="block text-sm font-semibold text-gray-800 py-3 border-b border-gray-100"
          >
            {t.home}
          </Link>

          <button
            type="button"
            onClick={() => setMobileServicesOpen((o) => !o)}
            aria-expanded={mobileServicesOpen}
            className="w-full flex items-center justify-between text-sm font-semibold text-gray-800 py-3 border-b border-gray-100"
          >
            {t.services}
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
                    {s.isNew && <NewBadge label={t.newBadge} />}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={path("products", lang)}
                  onClick={closeAll}
                  className="block py-2 text-sm font-bold text-print-cyan-dark"
                >
                  {t.allProducts}
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
              {l.long || l.label}
            </Link>
          ))}

          <a
            href={whatsappHref(t.whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-print-magenta text-white text-xs font-bold shadow-md"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            {t.whatsapp}
          </a>
        </div>
      )}
    </header>
  );
}
