import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex justify-between items-center font-sans">
      <Link href="/" className="hover:opacity-80 transition shrink-0">
        <Image
          src="/logo.png"
          alt="Ai Graphics Logo"
          width={200}
          height={60}
          className="h-8 md:h-14 w-auto"
          priority
        />
      </Link>

      <div className="flex gap-3 md:gap-8 items-center">
        <Link
          href="/portfolio"
          className="font-bold text-print-dark hover:text-print-cyan transition tracking-tight text-sm md:text-base"
        >
          Portfolio
        </Link>

        <a
          href="tel:+13059705085"
          className="bg-print-dark text-white px-4 py-2 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm hover:bg-print-magenta transition shadow-md whitespace-nowrap"
        >
          305-970-5085
        </a>
      </div>
    </nav>
  );
}
