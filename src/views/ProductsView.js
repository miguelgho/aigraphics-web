import ProductCatalog from "@/components/ProductCatalog";
import { getCategories, getProducts } from "@/data/products";
import { pageMetadata } from "@/lib/i18n";

const copy = {
  en: {
    metaTitle:
      "Products: Uniforms, Embroidery, DTF & Large Format | Ai Graphics",
    metaDescription:
      "Embroidered polos and uniforms, DTF t-shirts and hoodies, hats, banners, roll-up stands, perforated window film, stickers and promotional products in Homestead and Miami.",
    title: "All our products",
    subtitle:
      "Pick a category or open any product to see photos of our work and place your order.",
  },
  es: {
    metaTitle:
      "Productos: Uniformes, Bordados, DTF y Gran Formato | Ai Graphics",
    metaDescription:
      "Polos y uniformes bordados, camisetas y enguatadas DTF, gorras, banners, roll-ups, microperforado, stickers y artículos promocionales en Homestead y Miami.",
    title: "Todos nuestros productos",
    subtitle:
      "Elige una categoría o entra a cualquier producto para ver fotos de trabajos realizados y hacer tu pedido.",
  },
};

export const productsMetadata = (lang) =>
  pageMetadata("products", lang, {
    title: copy[lang].metaTitle,
    description: copy[lang].metaDescription,
  });

export default function ProductsView({ lang, category }) {
  const t = copy[lang];
  const initialCategory = getCategories(lang).some((c) => c.id === category)
    ? category
    : "all";

  return (
    <div className="brand-dots">
      <ProductCatalog
        key={initialCategory}
        lang={lang}
        products={getProducts(lang)}
        title={t.title}
        subtitle={t.subtitle}
        showFilter
        headingLevel="h1"
        initialCategory={initialCategory}
      />
    </div>
  );
}
