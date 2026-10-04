import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import { apiVersion, dataset, isSanityConfigured, projectId } from "./env";

const client = isSanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

const builder = client ? createImageUrlBuilder(client) : null;

const TRABAJOS_QUERY = `*[_type == "trabajo" && count(fotos) > 0]
  | order(destacado desc, fecha desc, _createdAt desc) {
    _id, titulo, categoria, producto, descripcion,
    fotos[]{ asset, hotspot, crop, alt }
  }`;

// Devuelve los trabajos subidos en /studio, con las URLs de las fotos ya listas.
// Si Sanity no está configurado o no responde, devuelve [] y el sitio usa sus fotos fijas.
export async function getTrabajos() {
  if (!client) return [];
  try {
    const docs = await client.fetch(
      TRABAJOS_QUERY,
      {},
      { next: { revalidate: 60 } },
    );
    return docs.map((doc) => ({
      id: doc._id,
      titulo: doc.titulo,
      categoria: doc.categoria,
      producto: doc.producto ?? null,
      descripcion: doc.descripcion ?? null,
      fotos: doc.fotos
        .filter((foto) => foto?.asset)
        .map((foto) => ({
          src: builder.image(foto).width(1600).fit("max").auto("format").url(),
          thumb: builder
            .image(foto)
            .width(800)
            .height(500)
            .fit("crop")
            .auto("format")
            .url(),
          alt: foto.alt || doc.titulo,
        })),
    }));
  } catch (error) {
    console.error("No se pudieron cargar los trabajos de Sanity:", error);
    return [];
  }
}
