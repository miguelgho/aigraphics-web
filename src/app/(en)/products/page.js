import ProductsView, { productsMetadata } from "@/views/ProductsView";

export const metadata = productsMetadata("en");

export default async function Page({ searchParams }) {
  const { category } = await searchParams;
  return <ProductsView lang="en" category={category} />;
}
