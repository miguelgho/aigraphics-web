export const theme = {
  // Layouts y Contenedores
  section: "py-24 px-6 overflow-hidden",
  container: "max-w-7xl mx-auto",

  // Tipografia
  labelCyan:
    "text-print-cyan font-bold tracking-[0.2em] mb-4 uppercase text-xs md:text-sm",
  labelMagenta:
    "text-print-magenta font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4",
  mainHeading:
    "text-5xl md:text-7xl font-black text-print-dark mb-8 leading-[1.1]",
  paragraph: "text-gray-600 leading-relaxed text-lg",

  // Botones y Formularios
  btnPrimary:
    "bg-print-magenta text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition shadow-xl inline-block uppercase tracking-widest text-center",
  inputShared:
    "w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:border-print-cyan focus:ring-1 focus:ring-print-cyan transition-all",
  formLabel:
    "block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide",

  // Tarjetas de Servicios
  card: "p-8 bg-white rounded-3xl border-b-4 shadow-sm",
  cardTitle: "text-2xl font-black my-4 uppercase",
  cardDesc: "text-gray-500 text-sm font-sans",
  serviceImage: "w-full h-48 object-cover rounded-2xl mb-6 shadow-sm",

  // Decoración de Imágenes
  imageWrapper:
    "relative rounded-[4rem] rounded-tr-none overflow-hidden shadow-2xl bg-gray-100",
  imageBackdrop:
    "absolute -bottom-6 -left-6 w-32 h-32 bg-support-light rounded-full -z-10",

  // Estilos de Portafolio
  portfolioHeader: "py-20 px-6 max-w-7xl mx-auto",
  portfolioTitle:
    "text-6xl md:text-8xl font-black text-print-dark mb-6 tracking-tighter uppercase",
  portfolioSub: "text-xl text-gray-500 max-w-2xl font-medium leading-relaxed",

  // Tarjetas de Proyecto (Grid)
  projectCard: "group cursor-pointer",
  projectImgBox:
    "aspect-[16/10] bg-gray-50 rounded-[2rem] overflow-hidden border-b-8 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 relative",
  projectImage:
    "w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105", // <-- Nueva clase para las fotos con un ligero zoom al pasar el mouse
  projectCategory:
    "text-xs font-bold text-print-cyan uppercase tracking-widest mb-2 block",
  projectHeading: "text-3xl font-black text-print-dark uppercase leading-none",
  projectMeta: "text-gray-400 font-medium italic mt-2",
};
