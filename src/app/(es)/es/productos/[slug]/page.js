import ProductView, {
  productMetadata,
  productStaticParams,
} from "@/views/ProductView";

export function generateStaticParams() {
  return productStaticParams("es");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return productMetadata(slug, "es");
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ProductView slug={slug} lang="es" />;
}
