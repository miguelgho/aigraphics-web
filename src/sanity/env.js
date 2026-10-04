export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2025-01-01";

// Sin Project ID el sitio sigue funcionando con las fotos fijas de products.js.
export const isSanityConfigured = Boolean(projectId);
