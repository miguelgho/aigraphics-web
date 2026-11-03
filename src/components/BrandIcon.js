// Íconos del kit de marca (public/iconos). Se pintan con el color del texto (currentColor),
// así un mismo ícono sirve en blanco, magenta, cian, etc.
const files = {
  phone: "/iconos/phone.png",
  reviews: "/iconos/reviews.png",
  portfolio: "/iconos/portfolio.png",
  chat: "/iconos/chat.svg",
  check: "/iconos/check.svg",
  calendar: "/iconos/calendar.svg",
  clock: "/iconos/clock.svg",
  close: "/iconos/close.svg",
};

export default function BrandIcon({ name, className = "w-4 h-4" }) {
  const mask = `url(${files[name]}) center / contain no-repeat`;
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 bg-current align-[-0.15em] ${className}`}
      style={{ WebkitMask: mask, mask }}
    />
  );
}
