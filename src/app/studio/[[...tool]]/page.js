import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6 text-center">
        <p className="max-w-md text-print-dark">
          El panel de fotos todavía no está conectado. Falta configurar{" "}
          <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> en Vercel.
        </p>
      </main>
    );
  }
  return <NextStudio config={config} />;
}
