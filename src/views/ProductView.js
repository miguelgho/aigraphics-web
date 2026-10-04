import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCatalog from "@/components/ProductCatalog";
import QuoteButton from "@/components/QuoteButton";
import { getCategories, getProductBySlug, getProducts } from "@/data/products";
import { getTrabajos } from "@/sanity/trabajos";
import { SITE_URL } from "@/lib/site";
import { buildMetadata, categoryPath, path, productPath } from "@/lib/i18n";

const copy = {
  en: {
    metaTitle: (name) => `${name} in Homestead & Miami | Ai Graphics`,
    home: "Home",
    products: "Products",
    breadcrumb: "Breadcrumb",
    photoAlt: (name, i) => `${name}, job ${i}`,
    price: "Request a price",
    bullets: [
      "Production in 3–5 business days",
      "Rush in 24–48 h",
      "Pickup by appointment in Homestead or shipping",
    ],
    gallery: "Our work",
    howTitle: "How to order",
    step: "Step",
    steps: [
      {
        title: "Tell us your idea",
        text: "Send us your logo or idea, quantities, sizes and the date you need it.",
      },
      {
        title: "We confirm the details",
        text: "We send you the price and turnaround time, and fine-tune the design with you.",
      },
      {
        title: "We make it",
        text: "We produce it in our workshop and you pick it up in Homestead by appointment, or we ship it to you.",
      },
    ],
    startOrder: "Start my order",
    related: "You may also like",
  },
  es: {
    metaTitle: (name) => `${name} en Homestead y Miami | Ai Graphics`,
    home: "Inicio",
    products: "Productos",
    breadcrumb: "Ruta",
    photoAlt: (name, i) => `${name}, trabajo ${i}`,
    price: "Solicitar precio",
    bullets: [
      "Producción en 3–5 días hábiles",
      "Rush en 24–48 h",
      "Recogida con cita en Homestead o envío",
    ],
    gallery: "Trabajos realizados",
    howTitle: "Cómo hacer tu pedido",
    step: "Paso",
    steps: [
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
        text: "Lo hacemos en nuestro taller y lo recoges en Homestead con cita previa, o te lo enviamos.",
      },
    ],
    startOrder: "Empezar mi pedido",
    related: "También te puede interesar",
  },
};

export const productStaticParams = (lang) =>
  getProducts(lang).map((p) => ({ slug: p.slug }));

export function productMetadata(slug, lang) {
  const product = getProductBySlug(slug, lang);
  if (!product) return {};
  return buildMetadata({
    lang,
    paths: { en: productPath(product, "en"), es: productPath(product, "es") },
    title: copy[lang].metaTitle(product.name),
    description: product.description,
    image: product.coverImage,
  });
}

export default async function ProductView({ slug, lang }) {
  const t = copy[lang];
  const product = getProductBySlug(slug, lang);
  if (!product) notFound();

  const category = getCategories(lang).find((c) => c.id === product.category);

  // Fotos subidas en /studio para este producto, seguidas de las fijas.
  const trabajos = await getTrabajos(lang);
  const uploaded = trabajos
    .filter((t) => t.producto === product.id)
    .flatMap((t) => t.fotos);
  const photos = [
    ...uploaded,
    ...product.gallery.map((src, i) => ({
      src,
      alt: t.photoAlt(product.name, i + 1),
    })),
  ];

  const related = getProducts(lang)
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
        <nav className="text-sm text-gray-500 mb-8" aria-label={t.breadcrumb}>
          <Link
            href={path("home", lang)}
            className="hover:text-print-magenta-dark"
          >
            {t.home}
          </Link>
          {" / "}
          <Link
            href={path("products", lang)}
            className="hover:text-print-magenta-dark"
          >
            {t.products}
          </Link>
          {category && (
            <>
              {" / "}
              <Link
                href={categoryPath(category.id, lang)}
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
                lang={lang}
                label={t.price}
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
              {t.bullets.map((b) => (
                <li key={b}>✔ {b}</li>
              ))}
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
              {t.gallery}
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
            {t.howTitle}
          </h2>
          <span
            className="brand-swoosh w-40 max-w-full mx-auto mt-2 mb-10"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.steps.map((step, i) => (
              <li
                key={step.title}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm"
              >
                <span
                  className={`brand-ribbon text-base ${
                    i % 2 === 0 ? "bg-print-magenta" : "bg-print-cyan"
                  }`}
                >
                  {t.step} {i + 1}
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
              lang={lang}
              label={t.startOrder}
              message={product.whatsappMsg}
              variant="ink"
              size="lg"
            />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <div className="bg-white">
          <ProductCatalog lang={lang} products={related} title={t.related} />
        </div>
      )}
    </div>
  );
}
