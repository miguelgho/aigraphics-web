import ProductsView, { productsMetadata } from "@/views/ProductsView";

export const metadata = productsMetadata("es");

export default async function Page({ searchParams }) {
  const { categoria } = await searchParams;
  return <ProductsView lang="es" category={categoria} />;
}
