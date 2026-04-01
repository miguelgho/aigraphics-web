// src/app/contact/page.js
export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
        {/* BOTÓN PARA VOLVER AL INICIO */}
        <a
          href="/"
          className="text-print-cyan font-bold text-sm mb-6 inline-block hover:text-print-magenta transition"
        >
          ← Volver al inicio
        </a>

        <h1 className="text-4xl font-black text-print-dark mb-2 text-center">
          GET A <span className="text-print-magenta italic">QUOTE</span>
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Cuéntanos sobre tu proyecto y te responderemos en 24 horas.
        </p>

        {/* FORMULARIO */}
        <form
          action="https://formspree.io/f/mnjovdaa"
          method="POST"
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Nombre completo o Empresa
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-print-cyan focus:ring-1 focus:ring-print-cyan"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-print-cyan focus:ring-1 focus:ring-print-cyan"
                placeholder="(305) 000-0000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-print-cyan focus:ring-1 focus:ring-print-cyan"
              placeholder="email@ejemplo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              ¿Qué servicio necesitas?
            </label>
            <select
              name="service"
              className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:border-print-cyan focus:ring-1 focus:ring-print-cyan"
            >
              <option value="web_design">Página Web / E-commerce</option>
              <option value="logo_branding">Diseño de Logo y Marca</option>
              <option value="apparel">
                Custom Apparel (Camisetas, Gorras)
              </option>
              <option value="windows">Window Graphics (Rótulos)</option>
              <option value="swag">Promotional SWAG (Branding)</option>
              <option value="full_360">
                Paquete Completo 360 (Digital + Impresión)
              </option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Detalles del Proyecto
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-print-cyan focus:ring-1 focus:ring-print-cyan"
              placeholder="Cantidades, medidas, colores o ideas que tengas en mente..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-print-dark text-white font-bold text-lg py-4 rounded-xl hover:bg-print-magenta transition shadow-lg"
          >
            Enviar Solicitud
          </button>
        </form>
      </div>
    </main>
  );
}
