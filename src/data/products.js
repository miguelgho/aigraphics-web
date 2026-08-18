export const categories = [
  { id: "all", name: "Todos los Productos" },
  { id: "dtf", name: "Impresión Textil DTF" },
  { id: "embroidery", name: "Bordados & Gorras" },
  { id: "vinyl", name: "Rotulación & Microperforado" },
  { id: "signage", name: "Señalética & Displays" },
  { id: "stickers", name: "Stickers & Papelería" },
];

export const products = [
  {
    id: "dtf-tshirts",
    name: "Franelas y Camisetas DTF",
    category: "dtf",
    tagline: "Impresión Direct-to-Film a todo color sin límite de diseño",
    coverImage: "/shirt-print.jpg",
    color: "#E04B9A",
    description:
      "Estampado de máxima durabilidad sobre algodón y telas dry-fit. Colores vivos y tacto suave.",
    gallery: ["/shirt-print.jpg", "/print.jpeg"],
    whatsappMsg:
      "Hola Ai Graphics, me gustaría cotizar franelas/camisetas en DTF.",
  },
  {
    id: "polos-workwear",
    name: "Polos y Uniformes de Trabajo",
    category: "embroidery",
    tagline: "Presencia corporativa y resistencia para tu equipo",
    coverImage: "/embroidery-shirt.webp",
    color: "#68C9D8",
    description:
      "Polos piqué, enguatadas de trabajo y uniformes para construcción y empresas con bordado de alta definición.",
    gallery: ["/embroidery-shirt.webp", "/embroidery.webp"],
    whatsappMsg:
      "Hola Ai Graphics, deseo cotizar polos y uniformes de trabajo.",
  },
  {
    id: "caps-embroidery",
    name: "Gorras y Snapbacks Bordadas",
    category: "embroidery",
    tagline: "Bordado plano y 3D Puff de alto relieve",
    coverImage: "/embroidery.webp",
    color: "#E04B9A",
    description:
      "Bordado profesional en gorras tipo trucker (malla), snapbacks cerradas y viseras.",
    gallery: ["/embroidery.webp", "/embroidery-shirt.webp"],
    whatsappMsg: "Hola Ai Graphics, deseo cotizar gorras bordadas.",
  },
  {
    id: "microperforado",
    name: "Microperforado para Ventanas y Autos",
    category: "vinyl",
    tagline: "Visión hacia afuera con publicidad total hacia el exterior",
    coverImage: "/window.webp",
    color: "#68C9D8",
    description:
      "Vinilo microperforado (One-Way Vision) para cristales traseros de vehículos y vitrinas comerciales.",
    gallery: ["/window.webp"],
    whatsappMsg:
      "Hola Ai Graphics, me gustaría cotizar microperforado para ventana/vehículo.",
  },
  {
    id: "window-lettering",
    name: "Rotulación Comercial para Vitrinas",
    category: "vinyl",
    tagline: "Publicidad en vinilo de corte y gráficos para tiendas",
    coverImage: "/window.webp",
    color: "#E04B9A",
    description:
      "Logos, horarios, promociones y diseño gráfico en vinil para puertas y fachadas de locales.",
    gallery: ["/window.webp"],
    whatsappMsg:
      "Hola Ai Graphics, quiero cotizar rotulación para mi vitrina/local.",
  },
  {
    id: "stickers",
    name: "Stickers Troquelados (Die-Cut)",
    category: "stickers",
    tagline: "Calcomanías personalizadas en vinilo impermeable",
    coverImage: "/palette.webp",
    color: "#F4D30D",
    description:
      "Vinil adhesivo de alta adherencia con laminado protector contra sol y agua. En cualquier forma y tamaño.",
    gallery: ["/palette.webp"],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar stickers personalizados.",
  },
  {
    id: "rollups",
    name: "Roll-Ups (Banners Retráctiles)",
    category: "signage",
    tagline: "Displays portátiles de alta presencia para ferias y eventos",
    coverImage: "/print.jpeg",
    color: "#F4D30D",
    description:
      "Estructura de aluminio ligera y resistente, lona impresa en alta resolución y bolso para transporte.",
    gallery: ["/print.jpeg"],
    whatsappMsg: "Hola Ai Graphics, deseo cotizar Roll-Ups portátiles.",
  },
  {
    id: "aframes",
    name: "A-Frames (Caballetes de Acera)",
    category: "signage",
    tagline: "Publicidad de doble cara para la entrada de tu local",
    coverImage: "/window.webp",
    color: "#F4D30D",
    description:
      "Estructuras plegables para exteriores con paneles intercambiables en PVC o Coroplast.",
    gallery: ["/window.webp"],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar un A-Frame publicitario.",
  },
  {
    id: "coroplast-signs",
    name: "Letreros en Coroplast (Yard Signs)",
    category: "signage",
    tagline: "Carteles resistentes para inmobiliarias, jardines y eventos",
    coverImage: "/print.jpeg",
    color: "#68C9D8",
    description:
      "Plástico corrugado ligero y resistente a la intemperie con opción de estacas metálicas.",
    gallery: ["/print.jpeg"],
    whatsappMsg: "Hola Ai Graphics, deseo cotizar letreros en Coroplast.",
  },
  {
    id: "pvc-signs",
    name: "Letreros en PVC Rígido Laminado",
    category: "signage",
    tagline: "Señalética interior y exterior de máxima durabilidad",
    coverImage: "/print.jpeg",
    color: "#E04B9A",
    description:
      "Placas rígidas de PVC con vinil impreso y sobrelaminado protector UV de alta resistencia.",
    gallery: ["/print.jpeg"],
    whatsappMsg: "Hola Ai Graphics, me gustaría cotizar letreros en PVC.",
  },
  {
    id: "business-cards",
    name: "Tarjetas de Presentación (Business Cards)",
    category: "stickers",
    tagline: "Impresión nítida y acabados profesionales",
    coverImage: "/branding.webp",
    color: "#2B2E35",
    description:
      "Tarjetas corporativas a todo color en cartulina gruesa con acabado mate o brillante.",
    gallery: ["/branding.webp"],
    whatsappMsg: "Hola Ai Graphics, quiero cotizar tarjetas de presentación.",
  },
];
