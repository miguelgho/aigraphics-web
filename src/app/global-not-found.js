import "./globals.css";
import Link from "next/link";
import { oswald, sora } from "@/lib/fonts";

export const metadata = {
  title: "Page not found | Página no encontrada | Ai Graphics",
};

// Página 404 para direcciones que no existen (en inglés y español).
export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${sora.variable} ${oswald.variable}`}>
      <body className="bg-white text-print-ink font-sans brand-dots min-h-screen flex items-center justify-center p-6">
        <main className="text-center max-w-lg">
          <p className="font-display font-bold text-8xl text-print-magenta">
            404
          </p>
          <h1 className="font-display font-bold uppercase text-3xl mt-2">
            Page not found
          </h1>
          <p className="text-print-dark mt-1">Página no encontrada</p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link
              href="/"
              className="px-6 py-3 rounded-xl bg-print-magenta text-white font-bold hover:bg-print-magenta-dark"
            >
              Go to home
            </Link>
            <Link
              href="/es"
              className="px-6 py-3 rounded-xl bg-white text-print-cyan-dark font-bold border-2 border-print-cyan hover:bg-print-cyan hover:text-white"
            >
              Ir al inicio
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
