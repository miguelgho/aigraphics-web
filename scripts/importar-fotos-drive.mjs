// Copia a Sanity las fotos de Google Drive que hoy están fijas en src/data/products.js.
// Crea un "Trabajo realizado" por producto (no toca los que ya existan).
//
// Uso (una sola vez):
//   node --env-file=.env.local scripts/importar-fotos-drive.mjs
//
// Necesita NEXT_PUBLIC_SANITY_PROJECT_ID y SANITY_API_WRITE_TOKEN (token con permiso "Editor").
import { createClient } from "next-sanity";
import { products } from "../src/data/products.js";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_WRITE_TOKEN;
if (!projectId || !token) {
  console.error(
    "Faltan NEXT_PUBLIC_SANITY_PROJECT_ID o SANITY_API_WRITE_TOKEN en .env.local",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01",
  token,
  useCdn: false,
});

for (const product of products) {
  const urls = [...new Set([product.coverImage, ...product.gallery])];
  const fotos = [];

  for (const url of urls) {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`  ⚠️  No se pudo descargar ${url} (${res.status})`);
      continue;
    }
    const asset = await client.assets.upload(
      "image",
      Buffer.from(await res.arrayBuffer()),
      { filename: `${product.id}-${fotos.length + 1}` },
    );
    fotos.push({
      _type: "image",
      _key: asset._id.slice(-12),
      asset: { _type: "reference", _ref: asset._id },
      alt: product.name,
    });
  }

  if (fotos.length === 0) continue;

  await client.createIfNotExists({
    _id: `importado-${product.id}`,
    _type: "trabajo",
    titulo: product.name,
    categoria: product.category,
    producto: product.id,
    descripcion: product.description,
    fotos,
  });
  console.log(`✅ ${product.name}: ${fotos.length} foto(s)`);
}
