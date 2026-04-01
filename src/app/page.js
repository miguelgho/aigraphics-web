import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      {/* HEADER PROFESIONAL */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black italic tracking-tighter text-print-dark">
            AI <span className="text-print-magenta">GRAPHICS</span>
            <span className="text-[10px] block not-italic font-bold text-print-cyan -mt-2 uppercase tracking-widest">
              360 Solutions
            </span>
          </div>

          <a
            href="tel:+13059705085"
            className="hidden sm:flex items-center gap-2 bg-print-dark text-white px-5 py-2 rounded-full font-bold hover:bg-print-magenta transition text-sm shadow-lg"
          >
            <span>📞</span> (305) 970-5085
          </a>
        </div>
      </nav>

      {/* SECCIÓN PRINCIPAL (HERO) */}
      <header className="relative py-24 px-6 overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black text-print-dark mb-6 tracking-tight leading-none">
            FROM <span className="text-print-magenta italic">DIGITAL</span>{" "}
            <br />
            TO <span className="text-print-cyan">PRINTED.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-10 font-light">
            Soluciones completas de branding en Florida. Camisetas
            personalizadas, vinilos para ventanas y artículos promocionales con{" "}
            <span className="text-print-dark font-bold underline decoration-print-yellow decoration-4">
              calidad Roland.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="mailto:info@aigraphicsfl.com"
              className="w-full sm:w-auto bg-print-dark text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition shadow-2xl active:scale-95"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:+13059705085"
              className="sm:hidden text-print-magenta font-black text-xl py-4"
            >
              Call: (305) 970-5085
            </a>
          </div>
        </div>

        {/* Decoración de fondo (Cian y Magenta) */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-print-cyan/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-print-magenta/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </header>

      {/* SECCIÓN DE "LO QUE HACEMOS" */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-print-magenta transition">
            <div className="text-4xl mb-4 text-print-magenta">👕</div>
            <h3 className="text-2xl font-bold mb-2 uppercase">
              Custom Apparel
            </h3>
            <p className="text-gray-500 text-sm italic mb-4">
              Shirts, hats, and hoodies.
            </p>
            <p className="text-gray-600">
              Impresión de alta durabilidad para tu marca o evento personal.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-print-cyan transition">
            <div className="text-4xl mb-4 text-print-cyan">🪟</div>
            <h3 className="text-2xl font-bold mb-2 uppercase">
              Window Graphics
            </h3>
            <p className="text-gray-500 text-sm italic mb-4">
              Business signage & decals.
            </p>
            <p className="text-gray-600">
              Rotulación profesional para que tu negocio destaque en Florida.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-print-yellow transition">
            <div className="text-4xl mb-4 text-print-yellow">🖋️</div>
            <h3 className="text-2xl font-bold mb-2 uppercase">Promo SWAG</h3>
            <p className="text-gray-500 text-sm italic mb-4">
              Cups, pens, and branding.
            </p>
            <p className="text-gray-600">
              Todo lo que necesitas para promocionar tu marca en un solo lugar.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-print-dark text-white text-center">
        <p className="text-xl font-black mb-2 tracking-tighter italic">
          AI GRAPHICS, LLC
        </p>
        <p className="text-gray-400 text-sm">
          Serving South Florida | Local Business
        </p>
        <div className="mt-6 flex justify-center gap-6 text-print-cyan font-bold text-sm">
          <span>info@aigraphicsfl.com</span>
          <span className="text-gray-600">|</span>
          <span>(305) 970-5085</span>
        </div>
      </footer>
    </main>
  );
}
