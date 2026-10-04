import { SITE_URL } from "@/lib/site";
import Link from "next/link";
import { theme } from "@/lib/theme";

export const metadata = {
  title: "Contacto y Cotizaciones | Ai Graphics",
  description:
    "Cuéntanos tu proyecto de uniformes, bordados, DTF, letreros o diseño web y te respondemos en menos de 24 horas.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function Contact() {
  return (
    <main className="brand-dots py-16 px-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
        <Link
          href="/"
          className="text-print-cyan-dark font-bold text-sm mb-6 inline-block hover:text-print-magenta-dark transition"
        >
          ← Volver al inicio
        </Link>

        <h1 className="font-display text-5xl font-bold text-print-dark mb-2 text-center uppercase">
          Pide tu <span className="text-print-magenta italic">cotización</span>
        </h1>
        <p className="text-gray-500 text-center mb-10 text-sm">
          Cuéntanos de tu proyecto y te respondemos en menos de 24 horas.
        </p>
        <p className="-mt-6 mb-10 text-center text-xs text-print-ink bg-print-yellow/30 border border-print-yellow rounded-xl px-4 py-3">
          📅 Nuestro taller funciona en casa: si quieres recoger tu pedido o ver
          muestras, avísanos antes por WhatsApp para coordinar tu visita.
        </p>

        <form
          action="https://formspree.io/f/mnjovdaa"
          method="POST"
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={theme.formLabel}>Nombre / Empresa</label>
              <input
                type="text"
                name="name"
                required
                className={theme.inputShared}
                placeholder="Juan Pérez"
              />
            </div>
            <div>
              <label className={theme.formLabel}>Teléfono</label>
              <input
                type="tel"
                name="phone"
                required
                className={theme.inputShared}
                placeholder="(305) 000-0000"
              />
            </div>
          </div>

          <div>
            <label className={theme.formLabel}>Correo electrónico</label>
            <input
              type="email"
              name="email"
              required
              className={theme.inputShared}
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div>
            <label className={theme.formLabel}>¿Qué necesitas?</label>
            <select name="service" className={theme.inputShared}>
              <option value="uniforms">
                Uniformes y bordado (polos, camisas, gorras)
              </option>
              <option value="dtf">Impresión DTF (camisetas, enguatadas)</option>
              <option value="signs">
                Letreros y gran formato (banners, vinil de vitrina)
              </option>
              <option value="vehicle">
                Rotulación de vehículos (letras, magnéticos, microperforado)
              </option>
              <option value="promo">
                Promocionales (tarjetas, flyers, tazas)
              </option>
              <option value="website">Diseño de páginas web</option>
              <option value="other">Otro / No estoy seguro</option>
            </select>
          </div>

          <div>
            <label className={theme.formLabel}>Detalles del proyecto</label>
            <textarea
              name="message"
              rows="4"
              required
              className={theme.inputShared}
              placeholder="Cantidades, tallas, colores o ideas que tengas en mente..."
            ></textarea>
          </div>

          <button type="submit" className={theme.btnPrimary}>
            Enviar solicitud
          </button>
        </form>
      </div>
    </main>
  );
}
