// Catálogo en inglés (en) y español (es).
// Cada producto tiene su propia página: /products/[slug] en inglés y /es/productos/[slug] en español.
// "featured" marca los que se muestran en la página principal.

const categoryNames = {
  all: { en: "All Products", es: "Todos los Productos" },
  dtf: { en: "DTF Printing", es: "Impresión DTF" },
  embroidery: { en: "Embroidery", es: "Bordados" },
  signs: { en: "Signs & Large Format", es: "Letreros y Gran Formato" },
  marketing: { en: "Marketing Products", es: "Productos de Marketing" },
  misc: { en: "Miscellaneous", es: "Misceláneos" },
};

export const productData = [
  // ==================== 1. IMPRESIÓN DTF ====================
  {
    id: "dtf-tshirts",
    category: "dtf",
    coverImage: "/trabajos/camiseta-dtf-full-color.webp",
    color: "#E4157C",
    gallery: [
      "/trabajos/camiseta-dtf-full-color.webp",
      "/trabajos/camiseta-gris-dtf.webp",
      "/trabajos/manga-larga-dtf.webp",
      "/trabajos/camisetas-enguatadas-dtf-1.webp",
      "/trabajos/camisetas-enguatadas-dtf-2.webp",
    ],
    en: {
      slug: "dtf-t-shirts-hoodies",
      name: "DTF T-Shirts, Long Sleeves & Hoodies",
      tagline: "Full-color printing built to last",
      description:
        "Direct-to-Film printing on t-shirts, long sleeves, hoodies and sweatshirts in cotton, dry-fit and blends, with unlimited colors.",
      whatsappMsg:
        "Hi Ai Graphics, I'd like a quote for DTF t-shirts or hoodies.",
    },
    es: {
      slug: "camisetas-enguatadas-dtf",
      name: "Camisetas, Franelas y Enguatadas DTF",
      tagline: "Impresión full color de máxima durabilidad",
      description:
        "Estampado Direct-to-Film en camisetas, franelas, manga larga y enguatadas (hoodies y sudaderas) de algodón, dry-fit y mezclas, sin límite de colores.",
      whatsappMsg:
        "Hola Ai Graphics, me gustaría cotizar camisetas o enguatadas en DTF.",
    },
  },
  {
    id: "dtf-polos",
    featured: true,
    category: "dtf",
    coverImage: "/trabajos/polo-trabajo-dtf.webp",
    color: "#1C9CE5",
    gallery: [
      "/trabajos/polo-trabajo-dtf.webp",
      "/trabajos/polo-amarillo-dtf.webp",
      "/trabajos/camiseta-equipo-dtf.webp",
      "/trabajos/polos-trabajo-dtf-1.webp",
      "/trabajos/polos-trabajo-dtf-2.webp",
    ],
    en: {
      slug: "dtf-work-polos",
      name: "DTF Work Polos & Workwear",
      tagline: "High-definition prints for contractors",
      description:
        "Work polos, high-visibility (Hi-Vis) shirts and industrial workwear with sharp logos that hold up wash after wash.",
      whatsappMsg:
        "Hi Ai Graphics, I'd like a quote for DTF work polos and workwear.",
    },
    es: {
      slug: "polos-trabajo-dtf",
      name: "Polos y Ropa de Trabajo en DTF",
      tagline: "Estampado de alta definición para contratistas",
      description:
        "Polos de trabajo, camisetas de alta visibilidad (Hi-Vis) y prendas industriales con logos nítidos y resistentes a los lavados.",
      whatsappMsg:
        "Hola Ai Graphics, quiero cotizar polos y ropa de trabajo con DTF.",
    },
  },
  {
    id: "dtf-caps",
    category: "dtf",
    coverImage: "/trabajos/gorras-trucker-dtf.webp",
    color: "#E4157C",
    gallery: [
      "/trabajos/gorras-trucker-dtf.webp",
      "/trabajos/gorra-trucker-dtf.webp",
      "/trabajos/gorras-dtf-1.webp",
    ],
    en: {
      slug: "dtf-hats",
      name: "Hats with DTF Transfers",
      tagline: "Heat-pressed prints on any style of hat",
      description:
        "Custom hats with high-adhesion DTF transfers, perfect for designs with fine details and gradients.",
      whatsappMsg: "Hi Ai Graphics, I'd like a quote for hats with DTF prints.",
    },
    es: {
      slug: "gorras-dtf",
      name: "Gorras con Transfer DTF",
      tagline: "Estampado térmico en todo tipo de gorras",
      description:
        "Personalización de gorras con transfer DTF de alta adherencia para diseños con detalles finos y degradados.",
      whatsappMsg: "Hola Ai Graphics, deseo cotizar gorras con estampado DTF.",
    },
  },
  {
    id: "dtf-school",
    category: "dtf",
    coverImage: "/trabajos/senior-class-graduacion.webp",
    color: "#3D393A",
    gallery: [
      "/trabajos/senior-class-graduacion.webp",
      "/trabajos/senior-falda.webp",
      "/trabajos/uniformes-escolares-dtf-1.webp",
    ],
    en: {
      slug: "dtf-school-uniforms",
      name: "DTF School Uniforms",
      tagline: "Custom apparel for schools and graduations",
      description:
        "School apparel, sports shirts and Senior Class graduation sets with a soft, flexible finish.",
      whatsappMsg: "Hi Ai Graphics, I'd like a quote for DTF school uniforms.",
    },
    es: {
      slug: "uniformes-escolares-dtf",
      name: "Uniformes Escolares en DTF",
      tagline: "Personalización para escuelas y graduaciones",
      description:
        "Prendas escolares, camisetas deportivas y conjuntos de graduación (Senior Class) con acabado suave y flexible.",
      whatsappMsg:
        "Hola Ai Graphics, quiero cotizar uniformes escolares en DTF.",
    },
  },

  // ==================== 2. BORDADOS ====================
  {
    id: "embroidery-caps",
    category: "embroidery",
    coverImage: "/trabajos/gorra-bordada.webp",
    color: "#E4157C",
    gallery: [
      "/trabajos/gorra-bordada.webp",
      "/trabajos/gorras-trucker-bordadas.webp",
      "/trabajos/gorras-dtf-1.webp",
      "/trabajos/gorras-bordadas-1.webp",
      "/trabajos/gorras-bordadas-2.webp",
    ],
    en: {
      slug: "embroidered-hats",
      name: "Embroidered Hats & Caps",
      tagline: "Precise flat and 3D puff embroidery",
      description:
        "Computerized embroidery on every kind of hat (trucker, snapback, fitted and visors) with a professional raised finish.",
      whatsappMsg: "Hi Ai Graphics, I'd like a quote for embroidered hats.",
    },
    es: {
      slug: "gorras-bordadas",
      name: "Gorras y Sombreros Bordados",
      tagline: "Bordado plano y 3D Puff de alta precisión",
      description:
        "Bordado computarizado en todo tipo de gorras (trucker, snapbacks, cerradas y viseras) con relieve profesional.",
      whatsappMsg: "Hola Ai Graphics, deseo cotizar gorras bordadas.",
    },
  },
  {
    id: "embroidery-polos",
    featured: true,
    category: "embroidery",
    coverImage: "/trabajos/logo-bordado-detalle.webp",
    color: "#1C9CE5",
    gallery: [
      "/trabajos/logo-bordado-detalle.webp",
      "/trabajos/polo-corporativo-bordado.webp",
      "/trabajos/polo-gris-bordado.webp",
      "/trabajos/polo-blanco-bordado.webp",
      "/trabajos/polos-trabajo-dtf-1.webp",
    ],
    en: {
      slug: "embroidered-polos",
      name: "Embroidered Company Polos",
      tagline: "A sharp, lasting look for your business",
      description:
        "Logo embroidery on the chest, sleeves or back of pique polos and company work shirts.",
      whatsappMsg:
        "Hi Ai Graphics, I'd like a quote for embroidered polos for my company.",
    },
    es: {
      slug: "polos-bordados",
      name: "Polos Corporativos Bordados",
      tagline: "Presencia elegante y duradera para tu empresa",
      description:
        "Bordado de logotipos en el pecho, mangas o espalda sobre polos piqué y camisas de trabajo corporativas.",
      whatsappMsg:
        "Hola Ai Graphics, quiero cotizar polos bordados para mi empresa.",
    },
  },
  {
    id: "embroidery-school",
    featured: true,
    category: "embroidery",
    coverImage: "/trabajos/uniforme-escolar-escudo-bordado.webp",
    color: "#3D393A",
    gallery: [
      "/trabajos/uniforme-escolar-escudo-bordado.webp",
      "/trabajos/uniformes-escolares-dtf-1.webp",
    ],
    en: {
      slug: "embroidered-school-uniforms",
      name: "Embroidered School & Senior Uniforms",
      tagline: "Embroidery for schools and academies",
      description:
        "Embroidered school crests and badges, plus custom skirts, vests and graduation sweaters.",
      whatsappMsg: "Hi Ai Graphics, I'd like a quote for school embroidery.",
    },
    es: {
      slug: "uniformes-escolares-bordados",
      name: "Uniformes Escolares y Senior Bordados",
      tagline: "Bordado institucional para colegios y academias",
      description:
        "Bordado de insignias, escudos escolares y personalización de faldas, chalecos y suéteres de graduación.",
      whatsappMsg: "Hola Ai Graphics, deseo cotizar bordados escolares.",
    },
  },

  // ==================== 3. SIGNS & GRAN FORMATO ====================
  {
    id: "signs-microperforado",
    featured: true,
    category: "signs",
    coverImage: "/trabajos/microperforado-auto.webp",
    color: "#1C9CE5",
    gallery: [
      "/trabajos/microperforado-auto.webp",
      "/trabajos/instalacion-microperforado.webp",
      "/window.webp",
    ],
    en: {
      slug: "perforated-window-film",
      name: "Perforated Window Film for Storefronts & Vehicles",
      tagline: "One-way vision for windows and car glass",
      description:
        "Perforated vinyl that lets you see out from inside while showing your full-color ad to everyone outside.",
      whatsappMsg:
        "Hi Ai Graphics, I'd like a quote for perforated window film for a window or vehicle.",
    },
    es: {
      slug: "microperforado",
      name: "Microperforado para Ventanas y Vehículos",
      tagline: "One-Way Vision para vitrinas y cristales de autos",
      description:
        "Vinil microperforado que permite ver desde el interior hacia afuera mientras exhibe tu publicidad full color al exterior.",
      whatsappMsg:
        "Hola Ai Graphics, me gustaría cotizar microperforado para ventana/vehículo.",
    },
  },
  {
    id: "signs-window-vinyl",
    category: "signs",
    coverImage: "/window.webp",
    color: "#E4157C",
    gallery: ["/window.webp"],
    en: {
      slug: "storefront-window-vinyl",
      name: "Storefront & Window Vinyl Graphics",
      tagline: "High-impact graphics for your business",
      description:
        "Cut vinyl lettering, promotions, business hours and decorative graphics for doors and storefront windows.",
      whatsappMsg:
        "Hi Ai Graphics, I'd like a quote for storefront window graphics.",
    },
    es: {
      slug: "vinil-vitrinas",
      name: "Vinil y Rotulación para Ventanas y Vitrinas",
      tagline: "Gráficos comerciales de alto impacto para locales",
      description:
        "Vinil de corte, textos publicitarios, horarios y gráficos decorativos para puertas y vitrinas comerciales.",
      whatsappMsg: "Hola Ai Graphics, quiero cotizar rotulación de vitrinas.",
    },
  },
  {
    id: "signs-rollups-banners",
    featured: true,
    category: "signs",
    coverImage: "/trabajos/roll-up-retractil.webp",
    color: "#3D393A",
    gallery: [
      "/trabajos/roll-up-retractil.webp",
      "/trabajos/banner-gran-formato.webp",
      "/trabajos/roll-up-producto.webp",
    ],
    en: {
      slug: "banners-retractable-stands",
      name: "Banners & Retractable Roll-Up Stands",
      tagline: "Portable displays for events, trade shows and lobbies",
      description:
        "Quick-setup aluminum roll-up stands with high-resolution prints, plus vinyl banners with grommets.",
      whatsappMsg:
        "Hi Ai Graphics, I'd like a quote for roll-up stands and banners.",
    },
    es: {
      slug: "banners-roll-ups",
      name: "Banners y Roll-Ups Retráctiles",
      tagline: "Estructuras portátiles para ferias, eventos y recepciones",
      description:
        "Roll-ups de aluminio con lona impresa en alta resolución de armado rápido y banners de vinil con ojales.",
      whatsappMsg: "Hola Ai Graphics, deseo cotizar Roll-Ups y banners.",
    },
  },
  {
    id: "signs-rigid-pvc",
    category: "signs",
    coverImage: "/trabajos/letreros-coroplast.webp",
    color: "#1C9CE5",
    gallery: [
      "/trabajos/letreros-coroplast.webp",
      "/trabajos/letrero-a-frame.webp",
    ],
    en: {
      slug: "coroplast-pvc-signs",
      name: "Coroplast Yard Signs & Rigid PVC Signs",
      tagline: "Outdoor signs that stand up to sun and rain",
      description:
        "Coroplast yard and real estate signs, plus rigid PVC boards with UV laminate for businesses.",
      whatsappMsg:
        "Hi Ai Graphics, I'd like a quote for coroplast or PVC signs.",
    },
    es: {
      slug: "letreros-coroplast-pvc",
      name: "Letreros en Coroplast y PVC Rígido",
      tagline: "Señalética exterior resistente al agua y sol",
      description:
        "Carteles de Coroplast para jardines/inmobiliarias y placas rígidas de PVC con sobrelaminado UV para negocios.",
      whatsappMsg:
        "Hola Ai Graphics, quiero cotizar letreros en Coroplast o PVC.",
    },
  },

  // ==================== 4. MARKETING PRODUCTS ====================
  {
    id: "marketing-stickers",
    category: "marketing",
    coverImage: "/trabajos/stickers-troquelados.webp",
    color: "#E4157C",
    gallery: ["/trabajos/stickers-troquelados.webp"],
    en: {
      slug: "die-cut-stickers",
      name: "Die-Cut Stickers & Decals",
      tagline: "Waterproof die-cut vinyl",
      description:
        "Strong, long-lasting die-cut vinyl stickers for packaging, tumblers, cars and branding.",
      whatsappMsg: "Hi Ai Graphics, I'd like a quote for custom stickers.",
    },
    es: {
      slug: "stickers-troquelados",
      name: "Stickers y Calcomanías Troqueladas",
      tagline: "Vinil impermeable troquelado (Die-Cut)",
      description:
        "Stickers troquelados en vinil de alta adherencia y durabilidad para empaques, termos, autos y branding.",
      whatsappMsg: "Hola Ai Graphics, quiero cotizar stickers personalizados.",
    },
  },
  {
    id: "marketing-business-cards",
    category: "marketing",
    coverImage: "/branding.webp",
    color: "#231F20",
    gallery: ["/branding.webp"],
    en: {
      slug: "business-cards",
      name: "Business Cards",
      tagline: "Premium printing and professional finishes",
      description:
        "Thick cardstock business cards in matte or gloss that show how serious your business is.",
      whatsappMsg: "Hi Ai Graphics, I'd like a quote for business cards.",
    },
    es: {
      slug: "tarjetas-de-presentacion",
      name: "Tarjetas de Presentación (Business Cards)",
      tagline: "Impresión premium y acabados profesionales",
      description:
        "Tarjetas corporativas en cartulina gruesa con acabado mate o brillante que reflejan la seriedad de tu empresa.",
      whatsappMsg: "Hola Ai Graphics, deseo cotizar tarjetas de presentación.",
    },
  },
  {
    id: "marketing-flyers",
    category: "marketing",
    coverImage: "/branding.webp",
    color: "#1C9CE5",
    gallery: ["/branding.webp"],
    en: {
      slug: "flyers",
      name: "Flyers & Brochures",
      tagline: "Print materials for promotions and events",
      description:
        "Full-color flyers on gloss or satin paper for mass distribution and promotions.",
      whatsappMsg: "Hi Ai Graphics, I'd like a quote for flyers.",
    },
    es: {
      slug: "flyers",
      name: "Flyers y Folletos Publicitarios",
      tagline: "Material impreso para promociones y eventos",
      description:
        "Volantes a todo color en papel brillante o satinado para distribución masiva y promociones comerciales.",
      whatsappMsg: "Hola Ai Graphics, quiero cotizar flyers publicitarios.",
    },
  },
  {
    id: "marketing-foam-counter",
    category: "marketing",
    coverImage: "/print.jpeg",
    color: "#3D393A",
    gallery: ["/print.jpeg"],
    en: {
      slug: "foam-board-pvc-displays",
      name: "Foam Board & PVC Displays",
      tagline: "Lightweight signs and counter displays",
      description:
        "Prints mounted on foam board or expanded PVC, ideal for point of sale, menus and table signs.",
      whatsappMsg:
        "Hi Ai Graphics, I'd like a quote for foam board or PVC displays.",
    },
    es: {
      slug: "displays-foam-board",
      name: "Displays en PVC y Foam Board / Foam Counter",
      tagline: "Carteles ligeros y stands para mostrador",
      description:
        "Impresión montada sobre Foam Board y PVC espumado ideal para puntos de venta, menús y señalética de mesa.",
      whatsappMsg:
        "Hola Ai Graphics, deseo cotizar displays en Foam Board o PVC.",
    },
  },
  {
    id: "marketing-mugs-drinkware",
    featured: true,
    category: "marketing",
    coverImage: "/trabajos/tazas-sublimadas.webp",
    color: "#3D393A",
    gallery: [
      "/trabajos/tazas-sublimadas.webp",
      "/trabajos/taza-cristal-personalizada.webp",
      "/trabajos/copas-personalizadas.webp",
      "/trabajos/tazas-promocionales-1.webp",
    ],
    en: {
      slug: "promotional-mugs",
      name: "Mugs & Promotional Products",
      tagline: "Sublimation and glassware for gifts and brands",
      description:
        "Sublimated ceramic mugs and custom glassware for corporate gifts and special occasions.",
      whatsappMsg:
        "Hi Ai Graphics, I'd like a quote for mugs or promotional products.",
    },
    es: {
      slug: "tazas-promocionales",
      name: "Tazas y Artículos Promocionales",
      tagline: "Sublimación y cristalería para regalos y marcas",
      description:
        "Tazas de cerámica sublimadas y cristalería personalizada para obsequios corporativos y ocasiones especiales.",
      whatsappMsg:
        "Hola Ai Graphics, quiero cotizar tazas o artículos promocionales.",
    },
  },

  // ==================== 5. MISCELÁNEOS ====================
  {
    id: "misc-delantales",
    category: "misc",
    coverImage: "/trabajos/delantales-personalizados.webp",
    color: "#1C9CE5",
    gallery: [
      "/trabajos/delantales-personalizados.webp",
      "/trabajos/delantal-gorro-chef.webp",
    ],
    en: {
      slug: "aprons-chef-hats",
      name: "Aprons, Chef Hats & More",
      tagline: "Custom items for restaurants, bakeries and more",
      description:
        "Aprons, chef hats and other items with your business logo, ready for your team.",
      whatsappMsg:
        "Hi Ai Graphics, I'd like a quote for aprons or other custom items.",
    },
    es: {
      slug: "delantales-gorros-chef",
      name: "Delantales, Gorros de Chef y Misceláneos",
      tagline: "Artículos personalizados para restaurantes, panaderías y más",
      description:
        "Delantales, gorros de chef y otros artículos con el logo de tu negocio, listos para tu equipo.",
      whatsappMsg:
        "Hola Ai Graphics, quiero cotizar delantales u otros artículos personalizados.",
    },
  },
];

// Producto con los textos del idioma pedido (name, slug, tagline...) y los slugs de ambos idiomas.
function localize(product, lang) {
  const { en, es, ...shared } = product;
  return { ...shared, ...product[lang], slugs: { en: en.slug, es: es.slug } };
}

export const getProducts = (lang) => productData.map((p) => localize(p, lang));

export const getProductBySlug = (slug, lang) =>
  getProducts(lang).find((p) => p.slug === slug);

export const getCategories = (lang) =>
  Object.entries(categoryNames).map(([id, names]) => ({
    id,
    name: names[lang],
  }));
