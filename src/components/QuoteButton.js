"use client";
import { useEffect, useRef, useState } from "react";
import { BUSINESS_HOURS } from "@/lib/site";

// Botón de cotización: abre una mini-ventana para elegir cómo contactarnos
// (llamada, mensaje de texto o WhatsApp). El "message" llega listo en el texto y en WhatsApp.
const PHONE = "13059705085";
const PHONE_DISPLAY = "(305) 970-5085";

const variants = {
  magenta:
    "bg-print-magenta text-white hover:bg-print-magenta-dark shadow-lg hover:scale-105",
  ink: "bg-print-ink text-white hover:bg-print-dark shadow-lg hover:scale-105",
  white: "bg-white text-print-ink hover:bg-print-yellow",
  outline:
    "bg-white text-print-cyan-dark border-2 border-print-cyan hover:bg-print-cyan hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-xs rounded-lg gap-1.5",
  md: "px-5 py-3 text-sm rounded-xl gap-2",
  lg: "px-7 py-4 text-base rounded-xl gap-2",
  xl: "px-9 py-5 text-lg rounded-2xl gap-2.5",
};

const copy = {
  en: {
    message: "Hi Ai Graphics, I'd like a free quote.",
    title: "Get a free quote",
    subtitle: "Choose how you'd like to reach us:",
    call: "Call",
    callHint: PHONE_DISPLAY,
    text: "Text",
    textHint: "Send us a text message",
    whatsapp: "WhatsApp",
    whatsappHint: "Chat with us on WhatsApp",
    form: "Prefer email? Fill out the quote form →",
    close: "Close",
  },
  es: {
    message: "Hola Ai Graphics, quiero una cotización gratis.",
    title: "Cotiza gratis",
    subtitle: "Elige cómo quieres contactarnos:",
    call: "Llamar",
    callHint: PHONE_DISPLAY,
    text: "Texto",
    textHint: "Envíanos un mensaje de texto",
    whatsapp: "WhatsApp",
    whatsappHint: "Escríbenos por WhatsApp",
    form: "¿Prefieres correo? Llena el formulario de cotización →",
    close: "Cerrar",
  },
};

export function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.6 2.33A7.85 7.85 0 0 0 8 0C3.63 0 .07 3.56.06 7.93c0 1.4.37 2.76 1.06 3.96L0 16l4.2-1.1a7.93 7.93 0 0 0 3.8.97h.01c4.36 0 7.92-3.56 7.93-7.93a7.9 7.9 0 0 0-2.33-5.6zM8 14.52a6.57 6.57 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.56 6.56 0 0 1-1-3.5 6.6 6.6 0 0 1 11.24-4.66 6.56 6.56 0 0 1 1.93 4.66A6.6 6.6 0 0 1 8 14.52zm3.61-4.93c-.2-.1-1.17-.58-1.35-.65-.18-.06-.32-.1-.45.1-.13.2-.51.65-.63.78-.11.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.58-.52-.98-1.17-1.1-1.37-.11-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.11.13-.2.2-.33.06-.13.03-.25-.02-.35-.05-.1-.44-1.07-.61-1.47-.16-.39-.33-.33-.45-.34h-.38a.73.73 0 0 0-.53.25c-.18.2-.69.68-.69 1.65s.71 1.92.81 2.05c.1.13 1.4 2.13 3.38 2.99.47.2.84.33 1.13.42.47.15.9.13 1.25.08.38-.06 1.17-.48 1.34-.94.16-.47.16-.86.11-.95-.05-.08-.18-.13-.38-.23z" />
    </svg>
  );
}

export function PhoneIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
    </svg>
  );
}

function ChatIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
      <path d="M8.5 11h7M8.5 14h4" />
    </svg>
  );
}

function ContactOption({ href, icon, color, title, hint, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      <span
        className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-white ${color}`}
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-bold text-print-ink">{title}</span>
        <span className="block text-sm text-gray-500">{hint}</span>
      </span>
      <span className="ml-auto text-gray-300 text-xl" aria-hidden="true">
        ›
      </span>
    </a>
  );
}

export default function QuoteButton({
  label,
  lang = "en",
  message,
  variant = "magenta",
  size = "md",
  className = "",
}) {
  const t = copy[lang];
  const text = message ?? t.message;
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);

  // Cerrar con Escape y llevar el foco a la ventana al abrirla.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    dialogRef.current?.querySelector("a")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const openChooser = () => {
    setOpen(true);
    if (typeof window.gtag === "function") {
      window.gtag("event", "quote_open", {
        button_label: label,
        language: lang,
      });
    }
  };

  const encoded = encodeURIComponent(text);
  const contactPath = lang === "en" ? "/contact" : "/es/contacto";

  return (
    <>
      <button
        type="button"
        onClick={openChooser}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`inline-flex items-center justify-center font-bold transition-all ${variants[variant]} ${sizes[size]} ${className}`}
      >
        <ChatIcon className={size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5"} />
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={() => setOpen(false)}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={t.title}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-md bg-support-light rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl text-left font-sans"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.close}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-800 text-2xl font-bold"
            >
              ✕
            </button>
            <p className="font-display font-bold uppercase text-3xl text-print-ink">
              {t.title}
            </p>
            <p className="text-sm text-gray-600 mt-1 mb-5">{t.subtitle}</p>

            <div className="space-y-3">
              <ContactOption
                href={`tel:+${PHONE}`}
                icon={<PhoneIcon className="w-5 h-5" />}
                color="bg-print-magenta"
                title={t.call}
                hint={t.callHint}
              />
              <ContactOption
                href={`sms:+${PHONE}?&body=${encoded}`}
                icon={<ChatIcon className="w-5 h-5" />}
                color="bg-print-cyan"
                title={t.text}
                hint={t.textHint}
              />
              <ContactOption
                href={`https://wa.me/${PHONE}?text=${encoded}`}
                icon={<WhatsAppIcon className="w-5 h-5" />}
                color="bg-[#25D366]"
                title={t.whatsapp}
                hint={t.whatsappHint}
                external
              />
            </div>

            <a
              href={contactPath}
              className="block text-center text-sm font-bold text-print-cyan-dark hover:underline mt-5"
            >
              {t.form}
            </a>
            <p className="text-center text-xs text-gray-500 mt-2">
              {BUSINESS_HOURS[lang]}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
