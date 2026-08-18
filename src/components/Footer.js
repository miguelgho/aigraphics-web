import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-200 font-sans text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="font-extrabold text-lg text-gray-900">
            Ai Graphics LLC
          </p>
          <p className="text-xs text-gray-600 mt-1">Create. Print. Shine.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-800">
          <a
            href="mailto:Sales@aigraphicsfl.com"
            className="hover:text-[#E04B9A] transition-colors"
          >
            Sales@aigraphicsfl.com
          </a>
          <a
            href="tel:+13059705085"
            className="hover:text-[#E04B9A] transition-colors"
          >
            (305) 970-5085
          </a>
          <span>Homestead / Miami, FL</span>
        </div>

        <p className="text-gray-500 text-xs font-semibold">
          © {new Date().getFullYear()} AI GRAPHICS LLC. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
