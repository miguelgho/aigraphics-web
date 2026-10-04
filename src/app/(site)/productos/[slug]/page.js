import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCatalog from "@/components/ProductCatalog";
import QuoteButton from "@/components/QuoteButton";
import { categories, getProductBySlug, products } from "@/data/products";
import { getTrabajos } from "@/sanity/trabajos";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} en Homestead y Miami | Ai Graphics`,
    description: product.description,
    alternates: {
      canonical: `${SITE_URL}/productos/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | Ai Graphics`,
      description: product.description,
      images: [product.coverImage],
      locale: "es_US",
      type: "website",
    },
  };
}

const steps = [
  {
    title: "Cuéntanos tu idea",
    text: "Escríbenos con tu logo o idea, cantidades, tallas y la fecha en que lo necesitas.",
  },
  {
    title: "Confirmamos los detalles",
    text: "Te enviamos el precio y el tiempo de entrega, y ajustamos el diseño contigo.",
  },
  {
    title: "Lo producimos",
    text: "Lo hacemos en nuestro taller y lo recoges en Homestead o te lo enviamos.",
  },
];

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = categories.find((c) => c.id === product.category);

  // Fotos subidas en /studio para este producto, seguidas de las fijas.
  const trabajos = await getTrabajos();
  const uploaded = trabajos
    .filter((t) => t.producto === product.id)
    .flatMap((t) => t.fotos);
  const photos = [
    ...uploaded,
    ...product.gallery.map((src, i) => ({
      src,
      alt: `${product.name}, trabajo ${i + 1}`,
    })),
  ];

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: product.name,
    description: product.description,
    image: product.coverImage.startsWith("/")
      ? `${SITE_URL}${product.coverImage}`
      : product.coverImage,
    areaServed: ["Homestead", "Florida City", "Cutler Bay", "Kendall", "Miami"],
    provider: {
      "@type": "LocalBusiness",
      name: "Ai Graphics LLC",
      telephone: "+1-305-970-5085",
      url: SITE_URL,
    },
  };

  return (
    <div className="brand-dots">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Encabezado del producto */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-14">
        <nav className="text-sm text-gray-500 mb-8" aria-label="Ruta">
          <Link href="/" className="hover:text-print-magenta-dark">
            Inicio
          </Link>
          {" / "}
          <Link href="/productos" className="hover:text-print-magenta-dark">
            Productos
          </Link>
          {category && (
            <>
              {" / "}
              <Link
                href={`/productos?categoria=${category.id}`}
                className="hover:text-print-magenta-dark"
              >
                {category.name}
              </Link>
            </>
          )}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="brand-ribbon text-base"
              style={{ backgroundColor: product.color }}
            >
              {product.tagline}
            </span>
            <h1 className="font-display font-bold uppercase text-print-ink text-4xl md:text-6xl leading-[1.05] mt-5">
              {product.name}
            </h1>
            <span
              className="brand-swoosh w-56 max-w-full mt-3"
              aria-hidden="true"
            />
            <p className="text-print-dark text-lg leading-relaxed mt-5">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <QuoteButton
                label="Solicitar precio"
                message={product.whatsappMsg}
                size="lg"
              />
              <a
                href="tel:+13059705085"
                className="px-7 py-4 rounded-xl bg-print-ink text-white font-bold hover:bg-print-dark transition-all shadow-lg"
              >
                📞 (305) 970-5085
              </a>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-print-dark">
              <li>✔ Producción en 3–5 días hábiles</li>
              <li>✔ Rush en 24–48 h</li>
              <li>✔ Recogida en Homestead o envío</li>
            </ul>
          </div>
          <div className="relative mx-3">
            <span className="absolute -top-3 -left-3 w-5 h-5 border-t-2 border-l-2 border-print-ink/40" />
            <span className="absolute -top-3 -right-3 w-5 h-5 border-t-2 border-r-2 border-print-ink/40" />
            <span className="absolute -bottom-3 -left-3 w-5 h-5 border-b-2 border-l-2 border-print-ink/40" />
            <span className="absolute -bottom-3 -right-3 w-5 h-5 border-b-2 border-r-2 border-print-ink/40" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <Image
                src={product.coverImage}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      {photos.length > 1 && (
        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display font-bold uppercase text-print-cyan text-3xl md:text-4xl text-center">
              Trabajos realizados
            </h2>
            <span
              className="brand-swoosh w-40 max-w-full mx-auto mt-2 mb-10"
              aria-hidden="true"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-sm"
                >
                  <Image
                    src={photo.thumb || photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cómo pedir */}
      <section className="py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold uppercase text-print-cyan text-3xl md:text-4xl text-center">
            Cómo hacer tu pedido
          </h2>
          <span
            className="brand-swoosh w-40 max-w-full mx-auto mt-2 mb-10"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm"
              >
                <span
                  className={`brand-ribbon text-base ${
                    i % 2 === 0 ? "bg-print-magenta" : "bg-print-cyan"
                  }`}
                >
                  Paso {i + 1}
                </span>
                <h3 className="font-display font-bold uppercase text-xl text-print-dark mt-4">
                  {step.title}
                </h3>
                <p className="text-print-dark text-sm mt-2 leading-relaxed">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
          <div className="text-center mt-10">
            <QuoteButton
              label="Empezar mi pedido"
              message={product.whatsappMsg}
              variant="ink"
              size="lg"
            />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <div className="bg-white">
          <ProductCatalog
            products={related}
            title="También te puede interesar"
          />
        </div>
      )}
    </div>
  );
}
