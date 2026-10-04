import { SITE_URL } from "@/lib/site";
import ProductCatalog from "@/components/ProductCatalog";
import { categories, products } from "@/data/products";

export const metadata = {
  title: "Productos: Uniformes, Bordados, DTF y Gran Formato | Ai Graphics",
  description:
    "Polos y uniformes bordados, camisetas y enguatadas DTF, gorras, banners, roll-ups, microperforado, stickers y artículos promocionales en Homestead y Miami.",
  alternates: { canonical: `${SITE_URL}/productos` },
};

export default async function Productos({ searchParams }) {
  const { categoria } = await searchParams;
  const initialCategory = categories.some((c) => c.id === categoria)
    ? categoria
    : "all";

  return (
    <div className="brand-dots">
      <ProductCatalog
        products={products}
        title="Todos nuestros productos"
        subtitle="Elige una categoría o entra a cualquier producto para ver fotos de trabajos realizados y hacer tu pedido."
        showFilter
        initialCategory={initialCategory}
      />
    </div>
  );
}
