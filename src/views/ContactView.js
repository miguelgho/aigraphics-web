import { BUSINESS_HOURS } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/QuoteButton";
import Link from "next/link";
import { theme } from "@/lib/theme";
import BrandIcon from "@/components/BrandIcon";
import { pageMetadata, path } from "@/lib/i18n";

const copy = {
  en: {
    metaTitle: "Contact Us & Get a Free Quote in Homestead | Ai Graphics",
    metaDescription:
      "Tell us about your uniforms, embroidery, DTF, signs or website project and we'll reply within 24 hours.",
    back: "← Back to home",
    title1: "Get your",
    title2: "quote",
    intro:
      "The fastest way: message us on WhatsApp, call or text. We reply the same day.",
    quickMessage: "Hi Ai Graphics, I'd like a free quote.",
    whatsapp: "WhatsApp",
    whatsappHint: "Fastest reply",
    call: "Call",
    callHint: "Talk to us now",
    text: "Text",
    textHint: "Send a text message",
    orForm: "or fill out the form",
    formIntro: "We'll get back to you within 24 hours.",
    emailOptional: "Email (optional)",
    notice:
      "Our workshop is home-based: if you'd like to pick up your order or see samples, contact us first (call, text or WhatsApp) to schedule your visit.",
    hours: "Hours:",
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
    metaTitle: "Contacto y Cotización Gratis en Homestead | Ai Graphics",
    metaDescription:
      "Cuéntanos tu proyecto de uniformes, bordados, DTF, letreros o diseño web y te respondemos en menos de 24 horas.",
    back: "← Volver al inicio",
    title1: "Pide tu",
    title2: "cotización",
    intro:
      "Lo más rápido: escríbenos por WhatsApp, llámanos o mándanos un texto. Respondemos el mismo día.",
    quickMessage: "Hola Ai Graphics, quiero una cotización gratis.",
    whatsapp: "WhatsApp",
    whatsappHint: "Respuesta más rápida",
    call: "Llamar",
    callHint: "Habla con nosotros",
    text: "Texto",
    textHint: "Envíanos un mensaje",
    orForm: "o llena el formulario",
    formIntro: "Te respondemos en menos de 24 horas.",
    emailOptional: "Correo electrónico (opcional)",
    notice:
      "Nuestro taller funciona en casa: si quieres recoger tu pedido o ver muestras, avísanos antes (llamada, texto o WhatsApp) para coordinar tu visita.",
    hours: "Horario:",
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

function ContactTile({ href, color, icon, title, hint, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`flex flex-col items-center justify-center text-center rounded-2xl px-2 py-5 sm:py-6 text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all ${color}`}
    >
      {icon}
      <span className="font-bold text-base sm:text-lg mt-2">{title}</span>
      <span className="text-[11px] sm:text-xs text-white/85 leading-tight mt-0.5">
        {hint}
      </span>
    </a>
  );
}

export default function ContactView({ lang }) {
  const t = copy[lang];
  const message = encodeURIComponent(t.quickMessage);
  return (
    <div className="brand-dots py-8 sm:py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-5 sm:p-10 rounded-3xl shadow-sm border border-gray-100">
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
        <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">
          {t.intro}
        </p>

        {/* Contacto directo primero: es lo que más usan los clientes */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <ContactTile
            href={`https://wa.me/13059705085?text=${message}`}
            color="bg-[#25D366]"
            icon={<WhatsAppIcon className="w-8 h-8" />}
            title={t.whatsapp}
            hint={t.whatsappHint}
            external
          />
          <ContactTile
            href="tel:+13059705085"
            color="bg-print-magenta"
            icon={<PhoneIcon className="w-8 h-8" />}
            title={t.call}
            hint={t.callHint}
          />
          <ContactTile
            href={`sms:+13059705085?&body=${message}`}
            color="bg-print-cyan"
            icon={<BrandIcon name="chat" className="w-8 h-8" />}
            title={t.text}
            hint={t.textHint}
          />
        </div>

        <p className="mb-10 text-center text-xs text-print-ink bg-print-yellow/30 border border-print-yellow rounded-xl px-4 py-3">
          <BrandIcon
            name="calendar"
            className="w-4 h-4 mr-1.5 text-print-magenta-dark"
          />
          {t.notice}
          <span className="block mt-1 font-bold">
            <BrandIcon
              name="clock"
              className="w-4 h-4 mr-1.5 text-print-magenta-dark"
            />
            {t.hours} {BUSINESS_HOURS[lang]}
          </span>
        </p>

        <div className="flex items-center gap-4 mb-2" aria-hidden="true">
          <span className="h-px flex-1 bg-gray-200" />
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
            {t.orForm}
          </span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>
        <h2 className="sr-only">{t.orForm}</h2>
        <p className="text-center text-gray-500 text-sm mb-6">{t.formIntro}</p>

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
            <label className={theme.formLabel}>{t.emailOptional}</label>
            <input
              type="email"
              name="email"
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
