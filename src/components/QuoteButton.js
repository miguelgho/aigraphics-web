// Botón de pedido/cotización que abre WhatsApp con un mensaje listo.
// El texto cambia según la sección para no repetir "Cotizar por WhatsApp" en todo el sitio.
const PHONE = "13059705085";

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

export default function QuoteButton({
  label,
  message = "Hola Ai Graphics, me gustaría hacer un pedido.",
  variant = "magenta",
  size = "md",
  className = "",
}) {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (abre WhatsApp)`}
      className={`inline-flex items-center justify-center font-bold transition-all ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <WhatsAppIcon className={size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} />
      {label}
    </a>
  );
}
