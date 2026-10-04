import { BUSINESS_HOURS } from "@/lib/site";
import Link from "next/link";
import { theme } from "@/lib/theme";
import { pageMetadata, path } from "@/lib/i18n";

const copy = {
  en: {
    metaTitle: "Contact & Quotes | Ai Graphics",
    metaDescription:
      "Tell us about your uniforms, embroidery, DTF, signs or website project and we'll reply within 24 hours.",
    back: "← Back to home",
    title1: "Get your",
    title2: "quote",
    intro:
      "Tell us about your project and we'll get back to you within 24 hours.",
    notice:
      "📅 Our workshop is home-based: if you'd like to pick up your order or see samples, message us on WhatsApp first to schedule your visit.",
    hours: "🕖 Hours:",
    name: "Name / Company",
    namePh: "John Smith",
    phone: "Phone",
    email: "Email",
    emailPh: "you@example.com",
    need: "What do you need?",
    options: [
      ["uniforms", "Uniforms & embroidery (polos, shirts, hats)"],
      ["dtf", "DTF printing (t-shirts, hoodies)"],
      ["signs", "Signs & large format (banners, window vinyl)"],
      ["vehicle", "Vehicle graphics (lettering, magnets, perforated film)"],
      ["promo", "Promotional products (business cards, flyers, mugs)"],
      ["website", "Website design"],
      ["other", "Other / Not sure"],
    ],
    details: "Project details",
    detailsPh: "Quantities, sizes, colors or any ideas you have in mind...",
    submit: "Send request",
  },
  es: {
    metaTitle: "Contacto y Cotizaciones | Ai Graphics",
    metaDescription:
      "Cuéntanos tu proyecto de uniformes, bordados, DTF, letreros o diseño web y te respondemos en menos de 24 horas.",
    back: "← Volver al inicio",
    title1: "Pide tu",
    title2: "cotización",
    intro: "Cuéntanos de tu proyecto y te respondemos en menos de 24 horas.",
    notice:
      "📅 Nuestro taller funciona en casa: si quieres recoger tu pedido o ver muestras, avísanos antes por WhatsApp para coordinar tu visita.",
    hours: "🕖 Horario:",
    name: "Nombre / Empresa",
    namePh: "Juan Pérez",
    phone: "Teléfono",
    email: "Correo electrónico",
    emailPh: "correo@ejemplo.com",
    need: "¿Qué necesitas?",
    options: [
      ["uniforms", "Uniformes y bordado (polos, camisas, gorras)"],
      ["dtf", "Impresión DTF (camisetas, enguatadas)"],
      ["signs", "Letreros y gran formato (banners, vinil de vitrina)"],
      [
        "vehicle",
        "Rotulación de vehículos (letras, magnéticos, microperforado)",
      ],
      ["promo", "Promocionales (tarjetas, flyers, tazas)"],
      ["website", "Diseño de páginas web"],
      ["other", "Otro / No estoy seguro"],
    ],
    details: "Detalles del proyecto",
    detailsPh: "Cantidades, tallas, colores o ideas que tengas en mente...",
    submit: "Enviar solicitud",
  },
};

export const contactMetadata = (lang) =>
  pageMetadata("contact", lang, {
    title: copy[lang].metaTitle,
    description: copy[lang].metaDescription,
  });

export default function ContactView({ lang }) {
  const t = copy[lang];
  return (
    <div className="brand-dots py-16 px-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
        <Link
          href={path("home", lang)}
          className="text-print-cyan-dark font-bold text-sm mb-6 inline-block hover:text-print-magenta-dark transition"
        >
          {t.back}
        </Link>

        <h1 className="font-display text-5xl font-bold text-print-dark mb-2 text-center uppercase">
          {t.title1}{" "}
          <span className="text-print-magenta italic">{t.title2}</span>
        </h1>
        <p className="text-gray-500 text-center mb-10 text-sm">{t.intro}</p>
        <p className="-mt-6 mb-10 text-center text-xs text-print-ink bg-print-yellow/30 border border-print-yellow rounded-xl px-4 py-3">
          {t.notice}
          <span className="block mt-1 font-bold">
            {t.hours} {BUSINESS_HOURS[lang]}
          </span>
        </p>

        <form
          action="https://formspree.io/f/mnjovdaa"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="language" value={lang} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={theme.formLabel}>{t.name}</label>
              <input
                type="text"
                name="name"
                required
                className={theme.inputShared}
                placeholder={t.namePh}
              />
            </div>
            <div>
              <label className={theme.formLabel}>{t.phone}</label>
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
            <label className={theme.formLabel}>{t.email}</label>
            <input
              type="email"
              name="email"
              required
              className={theme.inputShared}
              placeholder={t.emailPh}
            />
          </div>

          <div>
            <label className={theme.formLabel}>{t.need}</label>
            <select name="service" className={theme.inputShared}>
              {t.options.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={theme.formLabel}>{t.details}</label>
            <textarea
              name="message"
              rows="4"
              required
              className={theme.inputShared}
              placeholder={t.detailsPh}
            ></textarea>
          </div>

          <button type="submit" className={theme.btnPrimary}>
            {t.submit}
          </button>
        </form>
      </div>
    </div>
  );
}
