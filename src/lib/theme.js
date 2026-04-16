// src/lib/theme.js

export const theme = {
  // 1. Layouts y Contenedores
  section: "py-24 px-6 overflow-hidden",
  container: "max-w-7xl mx-auto",

  // 2. Tipografía
  labelCyan:
    "text-print-cyan font-bold tracking-[0.2em] mb-4 uppercase text-xs md:text-sm",
  labelMagenta:
    "text-print-magenta font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4",
  mainHeading:
    "text-5xl md:text-7xl font-black text-print-dark mb-8 leading-[1.1]",
  paragraph: "text-gray-600 leading-relaxed text-lg",

  // 3. Botones y Formularios
  btnPrimary:
    "bg-print-magenta text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition shadow-xl inline-block uppercase tracking-widest text-center",
  inputShared:
    "w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:border-print-cyan focus:ring-1 focus:ring-print-cyan transition-all",
  formLabel:
    "block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide",

  // 4. Tarjetas de Servicios
  card: "p-8 bg-white rounded-3xl border-b-4 shadow-sm",
  cardTitle: "text-2xl font-black my-4 uppercase",
  cardDesc: "text-gray-500 text-sm font-sans",
  serviceImage: "w-full h-48 object-cover rounded-2xl mb-6 shadow-sm",

  // 5. Decoración de Imágenes
  imageWrapper:
    "relative rounded-[4rem] rounded-tr-none overflow-hidden shadow-2xl bg-gray-100",
  imageBackdrop:
    "absolute -bottom-6 -left-6 w-32 h-32 bg-support-light rounded-full -z-10",
};
