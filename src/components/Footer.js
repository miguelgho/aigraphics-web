import Link from "next/link";

export default function Footer() {
  return (
    <footer className="font-sans text-white">
      {/* Franja de contacto, igual que el pie del roll-up */}
      <div className="bg-print-ink py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <a
            href="tel:+13059705085"
            className="flex items-center gap-4 group"
            aria-label="Llamar al 305-970-5085"
          >
            <span className="w-14 h-14 rounded-full bg-print-magenta flex items-center justify-center ring-4 ring-white/15">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
              </svg>
            </span>
            <span className="font-display font-bold italic text-4xl sm:text-5xl tracking-wide group-hover:text-print-magenta transition-colors">
              305-970-5085
            </span>
          </a>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-gray-300">
            <Link href="/#servicios" className="hover:text-white">
              Servicios
            </Link>
            <Link href="/#productos" className="hover:text-white">
              Productos
            </Link>
            <Link href="/portfolio" className="hover:text-white">
              Portafolio
            </Link>
            <Link href="/taller" className="hover:text-white">
              Taller
            </Link>
            <Link href="/#faqs" className="hover:text-white">
              FAQs
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contacto
            </Link>
          </nav>
        </div>
      </div>

      <div className="bg-print-magenta py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-x-10 gap-y-1 font-display font-bold italic text-xl sm:text-2xl">
          <span>aigraphicsfl.com</span>
          <a
            href="mailto:Sales@aigraphicsfl.com"
            className="text-base sm:text-lg not-italic font-sans font-semibold hover:underline"
          >
            Sales@aigraphicsfl.com
          </a>
        </div>
      </div>

      <div className="bg-print-ink py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/aigraphicsfl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @aigraphicsfl"
              className="w-9 h-9 rounded-full bg-print-magenta flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@aigraphicsfl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok @aigraphicsfl"
              className="w-9 h-9 rounded-full bg-print-cyan flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16.5 3a4.5 4.5 0 0 0 4 4v3a7.4 7.4 0 0 1-4-1.2V15a6 6 0 1 1-6-6h.5v3.1a3 3 0 1 0 2.5 2.9V3z" />
              </svg>
            </a>
            <span className="font-display font-semibold italic text-lg">
              @aigraphicsfl
            </span>
          </div>

          <p className="text-sm text-gray-300">
            <span className="font-bold text-white">Ai Graphics LLC</span> ·
            Homestead / Miami, FL · Create. Print. Shine.
          </p>

          <p className="text-gray-400 text-xs font-semibold">
            © {new Date().getFullYear()} AI GRAPHICS LLC. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
