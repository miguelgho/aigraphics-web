import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <Image
          src="/logo.png"
          alt="Ai Graphics Logo"
          width={150}
          height={45}
          className="h-10 w-auto mb-6 opacity-50 hover:opacity-100 transition"
        />
        <p className="text-print-dark font-bold tracking-[0.3em] uppercase text-[10px] mb-8">
          Create. Print. Shine.
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-gray-400 font-semibold text-sm mb-12 text-center">
          <a
            href="mailto:sales@aigraphicsfl.com"
            className="hover:text-print-magenta transition"
          >
            sales@aigraphicsfl.com
          </a>
          <a
            href="tel:+13059705085"
            className="hover:text-print-cyan transition"
          >
            (305) 970-5085
          </a>
          <span className="cursor-default">Miami, FL</span>
        </div>
        <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest">
          © 2026 Ai Graphics LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
