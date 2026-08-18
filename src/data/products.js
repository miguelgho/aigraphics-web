export const categories = [
  { id: "all", name: "Todos los Productos" },
  { id: "dtf", name: "Impresión DTF" },
  { id: "embroidery", name: "Bordados" },
  { id: "signs", name: "Signs & Gran Formato" },
  { id: "marketing", name: "Marketing Products" }
];

export const products = [
  // ==================== 1. IMPRESIÓN DTF ====================
  {
    id: "dtf-tshirts",
    name: "Franelas y Camisetas DTF",
    category: "dtf",
    tagline: "Impresión full color de máxima durabilidad",
    coverImage: "https://lh3.googleusercontent.com/d/15QfmlELfgqtR1ktWexMSA6h-_BaOcGIs",
    color: "#E04B9A",
    description: "Estampado Direct-to-Film sobre algodón, telas dry-fit y mezclas sin límite de colores para marcas y empresas.",
    gallery: [
      "https://lh3.googleusercontent.com/d/15QfmlELfgqtR1ktWexMSA6h-_BaOcGIs",
      "https://lh3.googleusercontent.com/d/1161AL7Awf96OjRjArlA9tj6CX0f2tQyA"
    ],
    whatsappMsg: "Hola Ai Graphics, me gustaría cotizar camisetas/franelas en DTF."
  },
  {
    id: "dtf-polos",
    name: "Polos y Ropa de Trabajo en DTF",
    category: "dtf",
    tagline: "Estampado de alta definición para contratistas",
    coverImage: "https://lh3.googleusercontent.com/d/1gAWsTeoVUVuTw-b92B3vzDALZfV5Z1IP",
    color: "#68C9D8",
    description: "Polos de trabajo, camisetas de alta visibilidad (Hi-Vis) y prendas industriales con logos nítidos y resistentes a los lavados.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1gAWsTeoVUVuTw-b92B3vzDALZfV5Z1IP",
      "https://lh3.googleusercontent.com/d/17cOfEd6RnRdJBVpbNIZBxbI0XPMRKo1q"
    ],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar polos y ropa de trabajo con DTF."
  },
  {
    id: "dtf-caps",
    name: "Gorras con Transfer DTF",
    category: "dtf",
    tagline: "Estampado térmico en todo tipo de gorras",
    coverImage: "https://lh3.googleusercontent.com/d/1NE-OYOVOJbU-aEZHlyM8BlBPEwK7q0mE",
    color: "#E04B9A",
    description: "Personalización de gorras con transfer DTF de alta adherencia para diseños con detalles finos y degradados.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1NE-OYOVOJbU-aEZHlyM8BlBPEwK7q0mE"
    ],
    whatsappMsg: "Hola Ai Graphics, deseo cotizar gorras con estampado DTF."
  },
  {
    id: "dtf-school",
    name: "Uniformes Escolares en DTF",
    category: "dtf",
    tagline: "Personalización para escuelas y graduaciones",
    coverImage: "https://lh3.googleusercontent.com/d/1367t_4WaLnVSuiUN3tQeB1ppV4Pc6Z3l",
    color: "#F4D30D",
    description: "Prendas escolares, camisetas deportivas y conjuntos de graduación (Senior Class) con acabado suave y flexible.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1367t_4WaLnVSuiUN3tQeB1ppV4Pc6Z3l"
    ],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar uniformes escolares en DTF."
  },

  // ==================== 2. BORDADOS ====================
  {
    id: "embroidery-caps",
    name: "Gorras y Sombreros Bordados",
    category: "embroidery",
    tagline: "Bordado plano y 3D Puff de alta precisión",
    coverImage: "https://lh3.googleusercontent.com/d/1NE-OYOVOJbU-aEZHlyM8BlBPEwK7q0mE",
    color: "#E04B9A",
    description: "Bordado computarizado en todo tipo de gorras (trucker, snapbacks, cerradas y viseras) con relieve profesional.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1NE-OYOVOJbU-aEZHlyM8BlBPEwK7q0mE",
      "https://lh3.googleusercontent.com/d/1jb329JGPzRfcVpq3Z-X4HUYkfTJqYcpK",
      "https://lh3.googleusercontent.com/d/1wSH9noRiDpRx81OQu_hRFvdH3S3XScWK"
    ],
    whatsappMsg: "Hola Ai Graphics, deseo cotizar gorras bordadas."
  },
  {
    id: "embroidery-polos",
    name: "Polos Corporativos Bordados",
    category: "embroidery",
    tagline: "Presencia elegante y duradera para tu empresa",
    coverImage: "https://lh3.googleusercontent.com/d/1gAWsTeoVUVuTw-b92B3vzDALZfV5Z1IP",
    color: "#68C9D8",
    description: "Bordado de logotipos en el pecho, mangas o espalda sobre polos piqué y camisas de trabajo corporativas.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1gAWsTeoVUVuTw-b92B3vzDALZfV5Z1IP",
      "https://lh3.googleusercontent.com/d/1Q-OOWN-XcBmChIzrnJGRmx7WoPYF4TNm"
    ],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar polos bordados para mi empresa."
  },
  {
    id: "embroidery-school",
    name: "Uniformes Escolares y Senior Bordados",
    category: "embroidery",
    tagline: "Bordado institucional para colegios y academias",
    coverImage: "https://lh3.googleusercontent.com/d/1367t_4WaLnVSuiUN3tQeB1ppV4Pc6Z3l",
    color: "#F4D30D",
    description: "Bordado de insignias, escudos escolares y personalización de faldas, chalecos y suéteres de graduación.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1367t_4WaLnVSuiUN3tQeB1ppV4Pc6Z3l"
    ],
    whatsappMsg: "Hola Ai Graphics, deseo cotizar bordados escolares."
  },
  {
    id: "embroidery-outerwear",
    name: "Chaquetas, Enguatadas y Otros Bordados",
    category: "embroidery",
    tagline: "Bordado resistente para prendas pesadas y parches",
    coverImage: "https://lh3.googleusercontent.com/d/17cOfEd6RnRdJBVpbNIZBxbI0XPMRKo1q",
    color: "#E04B9A",
    description: "Bordado de alta resistencia en sudaderas con capucha, chaquetas de trabajo, mandiles y parches personalizados.",
    gallery: [
      "https://lh3.googleusercontent.com/d/17cOfEd6RnRdJBVpbNIZBxbI0XPMRKo1q"
    ],
    whatsappMsg: "Hola Ai Graphics, deseo cotizar bordado en chaquetas o enguatadas."
  },

  // ==================== 3. SIGNS & GRAN FORMATO ====================
  {
    id: "signs-microperforado",
    name: "Microperforado para Ventanas y Vehículos",
    category: "signs",
    tagline: "One-Way Vision para vitrinas y cristales de autos",
    coverImage: "/window.webp",
    color: "#68C9D8",
    description: "Vinil microperforado que permite ver desde el interior hacia afuera mientras exhibe tu publicidad full color al exterior.",
    gallery: ["/window.webp"],
    whatsappMsg: "Hola Ai Graphics, me gustaría cotizar microperforado para ventana/vehículo."
  },
  {
    id: "signs-window-vinyl",
    name: "Vinil y Rotulación para Ventanas y Vitrinas",
    category: "signs",
    tagline: "Gráficos comerciales de alto impacto para locales",
    coverImage: "/window.webp",
    color: "#E04B9A",
    description: "Vinil de corte, textos publicitarios, horarios y gráficos decorativos para puertas y vitrinas comerciales.",
    gallery: ["/window.webp"],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar rotulación de vitrinas."
  },
  {
    id: "signs-rollups-banners",
    name: "Banners y Roll-Ups Retráctiles",
    category: "signs",
    tagline: "Estructuras portátiles para ferias, eventos y recepciones",
    coverImage: "/print.jpeg",
    color: "#F4D30D",
    description: "Roll-ups de aluminio con lona impresa en alta resolución de armado rápido y banners de vinil con ojales.",
    gallery: ["/print.jpeg"],
    whatsappMsg: "Hola Ai Graphics, deseo cotizar Roll-Ups y banners."
  },
  {
    id: "signs-rigid-pvc",
    name: "Letreros en Coroplast y PVC Rígido",
    category: "signs",
    tagline: "Señalética exterior resistente al agua y sol",
    coverImage: "/print.jpeg",
    color: "#68C9D8",
    description: "Carteles de Coroplast para jardines/inmobiliarias y placas rígidas de PVC con sobrelaminado UV para negocios.",
    gallery: ["/print.jpeg"],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar letreros en Coroplast o PVC."
  },

  // ==================== 4. MARKETING PRODUCTS ====================
  {
    id: "marketing-stickers",
    name: "Stickers y Calcomanías Troqueladas",
    category: "marketing",
    tagline: "Vinil impermeable troquelado (Die-Cut)",
    coverImage: "https://lh3.googleusercontent.com/d/1ubQVnYdC1_Q3pPhpVcD8BR70c0AUQzmc",
    color: "#E04B9A",
    description: "Stickers troquelados en vinil de alta adherencia y durabilidad para empaques, termos, autos y branding.",
    gallery: ["https://lh3.googleusercontent.com/d/1ubQVnYdC1_Q3pPhpVcD8BR70c0AUQzmc"],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar stickers personalizados."
  },
  {
    id: "marketing-business-cards",
    name: "Tarjetas de Presentación (Business Cards)",
    category: "marketing",
    tagline: "Impresión premium y acabados profesionales",
    coverImage: "/branding.webp",
    color: "#2B2E35",
    description: "Tarjetas corporativas en cartulina gruesa con acabado mate o brillante que reflejan la seriedad de tu empresa.",
    gallery: ["/branding.webp"],
    whatsappMsg: "Hola Ai Graphics, deseo cotizar tarjetas de presentación."
  },
  {
    id: "marketing-flyers",
    name: "Flyers y Folletos Publicitarios",
    category: "marketing",
    tagline: "Material impreso para promociones y eventos",
    coverImage: "/branding.webp",
    color: "#68C9D8",
    description: "Volantes a todo color en papel brillante o satinado para distribución masiva y promociones comerciales.",
    gallery: ["/branding.webp"],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar flyers publicitarios."
  },
  {
    id: "marketing-foam-counter",
    name: "Displays en PVC y Foam Board / Foam Counter",
    category: "marketing",
    tagline: "Carteles ligeros y stands para mostrador",
    coverImage: "/print.jpeg",
    color: "#F4D30D",
    description: "Impresión montada sobre Foam Board y PVC espumado ideal para puntos de venta, menús y señalética de mesa.",
    gallery: ["/print.jpeg"],
    whatsappMsg: "Hola Ai Graphics, deseo cotizar displays en Foam Board o PVC."
  },
  {
    id: "marketing-mugs-drinkware",
    name: "Tazas y Artículos Promocionales",
    category: "marketing",
    tagline: "Sublimación y cristalería para regalos y marcas",
    coverImage: "https://lh3.googleusercontent.com/d/1EDap3Ddp7z4wMcUS8Z5uK5j7xEJkkdhi",
    color: "#F4D30D",
    description: "Tazas de cerámica sublimadas y cristalería personalizada para obsequios corporativos y ocasiones especiales.",
    gallery: [
      "https://lh3.googleusercontent.com/d/1EDap3Ddp7z4wMcUS8Z5uK5j7xEJkkdhi",
      "https://lh3.googleusercontent.com/d/1SahQFaqM2fn0h40z5Lii8jbFRyRz4T9k"
    ],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar tazas o artículos promocionales."
  }
];