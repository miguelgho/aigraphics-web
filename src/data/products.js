export const categories = [
  { id: "all", name: "Todos los Productos" },
  { id: "dtf", name: "Impresión DTF" },
  { id: "embroidery", name: "Bordados" },
  { id: "signs", name: "Signs & Gran Formato" },
  { id: "marketing", name: "Marketing Products" },
  { id: "misc", name: "Misceláneos" }
];

// Cada producto tiene su propia página en /productos/[slug] (útil para Google Ads).
// "featured" marca los que se muestran en la página principal.
export const products = [
  // ==================== 1. IMPRESIÓN DTF ====================
  {
    id: "dtf-tshirts",
    slug: "camisetas-enguatadas-dtf",
    name: "Camisetas, Franelas y Enguatadas DTF",
    category: "dtf",
    tagline: "Impresión full color de máxima durabilidad",
    coverImage: "/trabajos/camiseta-dtf-full-color.webp",
    color: "#E4157C",
    description: "Estampado Direct-to-Film en camisetas, franelas, manga larga y enguatadas (hoodies y sudaderas) de algodón, dry-fit y mezclas, sin límite de colores.",
    gallery: [
      "/trabajos/camiseta-dtf-full-color.webp",
      "/trabajos/camiseta-gris-dtf.webp",
      "/trabajos/manga-larga-dtf.webp",
      "/trabajos/camisetas-enguatadas-dtf-1.webp",
      "/trabajos/camisetas-enguatadas-dtf-2.webp",
    ],
    whatsappMsg: "Hola Ai Graphics, me gustaría cotizar camisetas o enguatadas en DTF."
  },
  {
    id: "dtf-polos",
    slug: "polos-trabajo-dtf",
    featured: true,
    name: "Polos y Ropa de Trabajo en DTF",
    category: "dtf",
    tagline: "Estampado de alta definición para contratistas",
    coverImage: "/trabajos/polo-trabajo-dtf.webp",
    color: "#1C9CE5",
    description: "Polos de trabajo, camisetas de alta visibilidad (Hi-Vis) y prendas industriales con logos nítidos y resistentes a los lavados.",
    gallery: [
      "/trabajos/polo-trabajo-dtf.webp",
      "/trabajos/polo-amarillo-dtf.webp",
      "/trabajos/camiseta-equipo-dtf.webp",
      "/trabajos/polos-trabajo-dtf-1.webp",
      "/trabajos/polos-trabajo-dtf-2.webp",
    ],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar polos y ropa de trabajo con DTF."
  },
  {
    id: "dtf-caps",
    slug: "gorras-dtf",
    name: "Gorras con Transfer DTF",
    category: "dtf",
    tagline: "Estampado térmico en todo tipo de gorras",
    coverImage: "/trabajos/gorras-trucker-dtf.webp",
    color: "#E4157C",
    description: "Personalización de gorras con transfer DTF de alta adherencia para diseños con detalles finos y degradados.",
    gallery: [
      "/trabajos/gorras-trucker-dtf.webp",
      "/trabajos/gorra-trucker-dtf.webp",
      "/trabajos/gorras-dtf-1.webp",
    ],
    whatsappMsg: "Hola Ai Graphics, deseo cotizar gorras con estampado DTF."
  },
  {
    id: "dtf-school",
    slug: "uniformes-escolares-dtf",
    name: "Uniformes Escolares en DTF",
    category: "dtf",
    tagline: "Personalización para escuelas y graduaciones",
    coverImage: "/trabajos/senior-class-graduacion.webp",
    color: "#3D393A",
    description: "Prendas escolares, camisetas deportivas y conjuntos de graduación (Senior Class) con acabado suave y flexible.",
    gallery: [
      "/trabajos/senior-class-graduacion.webp",
      "/trabajos/senior-falda.webp",
      "/trabajos/uniformes-escolares-dtf-1.webp",
    ],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar uniformes escolares en DTF."
  },

  // ==================== 2. BORDADOS ====================
  {
    id: "embroidery-caps",
    slug: "gorras-bordadas",
    name: "Gorras y Sombreros Bordados",
    category: "embroidery",
    tagline: "Bordado plano y 3D Puff de alta precisión",
    coverImage: "/trabajos/gorra-bordada.webp",
    color: "#E4157C",
    description: "Bordado computarizado en todo tipo de gorras (trucker, snapbacks, cerradas y viseras) con relieve profesional.",
    gallery: [
      "/trabajos/gorra-bordada.webp",
      "/trabajos/gorras-trucker-bordadas.webp",
      "/trabajos/gorras-dtf-1.webp",
      "/trabajos/gorras-bordadas-1.webp",
      "/trabajos/gorras-bordadas-2.webp",
    ],
    whatsappMsg: "Hola Ai Graphics, deseo cotizar gorras bordadas."
  },
  {
    id: "embroidery-polos",
    slug: "polos-bordados",
    featured: true,
    name: "Polos Corporativos Bordados",
    category: "embroidery",
    tagline: "Presencia elegante y duradera para tu empresa",
    coverImage: "/trabajos/polo-corporativo-bordado.webp",
    color: "#1C9CE5",
    description: "Bordado de logotipos en el pecho, mangas o espalda sobre polos piqué y camisas de trabajo corporativas.",
    gallery: [
      "/trabajos/polo-corporativo-bordado.webp",
      "/trabajos/polo-gris-bordado.webp",
      "/trabajos/polo-blanco-bordado.webp",
      "/trabajos/logo-bordado-detalle.webp",
      "/trabajos/polos-trabajo-dtf-1.webp",
    ],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar polos bordados para mi empresa."
  },
  {
    id: "embroidery-school",
    slug: "uniformes-escolares-bordados",
    featured: true,
    name: "Uniformes Escolares y Senior Bordados",
    category: "embroidery",
    tagline: "Bordado institucional para colegios y academias",
    coverImage: "/trabajos/uniforme-escolar-escudo-bordado.webp",
    color: "#3D393A",
    description: "Bordado de insignias, escudos escolares y personalización de faldas, chalecos y suéteres de graduación.",
    gallery: [
      "/trabajos/uniforme-escolar-escudo-bordado.webp",
      "/trabajos/uniformes-escolares-dtf-1.webp",
    ],
    whatsappMsg: "Hola Ai Graphics, deseo cotizar bordados escolares."
  },

  // ==================== 3. SIGNS & GRAN FORMATO ====================
  {
    id: "signs-microperforado",
    slug: "microperforado",
    featured: true,
    name: "Microperforado para Ventanas y Vehículos",
    category: "signs",
    tagline: "One-Way Vision para vitrinas y cristales de autos",
    coverImage: "/trabajos/microperforado-auto.webp",
    color: "#1C9CE5",
    description: "Vinil microperforado que permite ver desde el interior hacia afuera mientras exhibe tu publicidad full color al exterior.",
    gallery: [
      "/trabajos/microperforado-auto.webp",
      "/trabajos/instalacion-microperforado.webp",
      "/window.webp",
    ],
    whatsappMsg: "Hola Ai Graphics, me gustaría cotizar microperforado para ventana/vehículo."
  },
  {
    id: "signs-window-vinyl",
    slug: "vinil-vitrinas",
    name: "Vinil y Rotulación para Ventanas y Vitrinas",
    category: "signs",
    tagline: "Gráficos comerciales de alto impacto para locales",
    coverImage: "/window.webp",
    color: "#E4157C",
    description: "Vinil de corte, textos publicitarios, horarios y gráficos decorativos para puertas y vitrinas comerciales.",
    gallery: ["/window.webp"],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar rotulación de vitrinas."
  },
  {
    id: "signs-rollups-banners",
    slug: "banners-roll-ups",
    featured: true,
    name: "Banners y Roll-Ups Retráctiles",
    category: "signs",
    tagline: "Estructuras portátiles para ferias, eventos y recepciones",
    coverImage: "/trabajos/roll-up-retractil.webp",
    color: "#3D393A",
    description: "Roll-ups de aluminio con lona impresa en alta resolución de armado rápido y banners de vinil con ojales.",
    gallery: [
      "/trabajos/roll-up-retractil.webp",
      "/trabajos/banner-gran-formato.webp",
      "/trabajos/roll-up-producto.webp",
    ],
    whatsappMsg: "Hola Ai Graphics, deseo cotizar Roll-Ups y banners."
  },
  {
    id: "signs-rigid-pvc",
    slug: "letreros-coroplast-pvc",
    name: "Letreros en Coroplast y PVC Rígido",
    category: "signs",
    tagline: "Señalética exterior resistente al agua y sol",
    coverImage: "/trabajos/letreros-coroplast.webp",
    color: "#1C9CE5",
    description: "Carteles de Coroplast para jardines/inmobiliarias y placas rígidas de PVC con sobrelaminado UV para negocios.",
    gallery: [
      "/trabajos/letreros-coroplast.webp",
      "/trabajos/letrero-a-frame.webp",
    ],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar letreros en Coroplast o PVC."
  },

  // ==================== 4. MARKETING PRODUCTS ====================
  {
    id: "marketing-stickers",
    slug: "stickers-troquelados",
    name: "Stickers y Calcomanías Troqueladas",
    category: "marketing",
    tagline: "Vinil impermeable troquelado (Die-Cut)",
    coverImage: "/trabajos/stickers-troquelados.webp",
    color: "#E4157C",
    description: "Stickers troquelados en vinil de alta adherencia y durabilidad para empaques, termos, autos y branding.",
    gallery: [
      "/trabajos/stickers-troquelados.webp",
    ],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar stickers personalizados."
  },
  {
    id: "marketing-business-cards",
    slug: "tarjetas-de-presentacion",
    name: "Tarjetas de Presentación (Business Cards)",
    category: "marketing",
    tagline: "Impresión premium y acabados profesionales",
    coverImage: "/branding.webp",
    color: "#231F20",
    description: "Tarjetas corporativas en cartulina gruesa con acabado mate o brillante que reflejan la seriedad de tu empresa.",
    gallery: ["/branding.webp"],
    whatsappMsg: "Hola Ai Graphics, deseo cotizar tarjetas de presentación."
  },
  {
    id: "marketing-flyers",
    slug: "flyers",
    name: "Flyers y Folletos Publicitarios",
    category: "marketing",
    tagline: "Material impreso para promociones y eventos",
    coverImage: "/branding.webp",
    color: "#1C9CE5",
    description: "Volantes a todo color en papel brillante o satinado para distribución masiva y promociones comerciales.",
    gallery: ["/branding.webp"],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar flyers publicitarios."
  },
  {
    id: "marketing-foam-counter",
    slug: "displays-foam-board",
    name: "Displays en PVC y Foam Board / Foam Counter",
    category: "marketing",
    tagline: "Carteles ligeros y stands para mostrador",
    coverImage: "/print.jpeg",
    color: "#3D393A",
    description: "Impresión montada sobre Foam Board y PVC espumado ideal para puntos de venta, menús y señalética de mesa.",
    gallery: ["/print.jpeg"],
    whatsappMsg: "Hola Ai Graphics, deseo cotizar displays en Foam Board o PVC."
  },
  {
    id: "marketing-mugs-drinkware",
    slug: "tazas-promocionales",
    featured: true,
    name: "Tazas y Artículos Promocionales",
    category: "marketing",
    tagline: "Sublimación y cristalería para regalos y marcas",
    coverImage: "/trabajos/tazas-sublimadas.webp",
    color: "#3D393A",
    description: "Tazas de cerámica sublimadas y cristalería personalizada para obsequios corporativos y ocasiones especiales.",
    gallery: [
      "/trabajos/tazas-sublimadas.webp",
      "/trabajos/taza-cristal-personalizada.webp",
      "/trabajos/copas-personalizadas.webp",
      "/trabajos/tazas-promocionales-1.webp",
    ],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar tazas o artículos promocionales."
  },

  // ==================== 5. MISCELÁNEOS ====================
  {
    id: "misc-delantales",
    slug: "delantales-gorros-chef",
    name: "Delantales, Gorros de Chef y Misceláneos",
    category: "misc",
    tagline: "Artículos personalizados para restaurantes, panaderías y más",
    coverImage: "/trabajos/delantales-personalizados.webp",
    color: "#1C9CE5",
    description: "Delantales, gorros de chef y otros artículos con el logo de tu negocio, listos para tu equipo.",
    gallery: [
      "/trabajos/delantales-personalizados.webp",
      "/trabajos/delantal-gorro-chef.webp"
    ],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar delantales u otros artículos personalizados."
  }
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
