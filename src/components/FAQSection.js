export default function FAQSection() {
  const faqs = [
    {
      q: "¿Pueden agregar bordado personalizado a uniformes de empresa, como polos, gorras y chaquetas?",
      a: "Sí, realizamos bordado computarizado de alta precisión para uniformes corporativos, polos, todo tipo de gorras, chaquetas y enguatadas de trabajo. Agregamos el logotipo o nombre de tu empresa con acabado profesional y duradero. Si no tienes tu arte listo, te ayudamos con el diseño, vectorización y digitalización del bordado.",
    },
    {
      q: "¿Ofrecen impresión DTF o estampado térmico para uniformes con logotipos a todo color?",
      a: "Sí, contamos con impresión DTF (Direct-to-Film) de última generación. Permite estampar logotipos y diseños full color con degradados y detalles complejos. Los estampados DTF son resistentes a los lavados, elásticos, de colores vivos y funcionan perfectamente sobre casi cualquier tipo de tela (algodón, poliéster o mezclas).",
    },
    {
      q: "¿Pueden ayudarme con el diseño o vectorización si solo tengo una imagen de baja calidad de mi logotipo?",
      a: "Totalmente. Si solo tienes una foto borrosa o un archivo pixelado de tu logo, nuestros especialistas en diseño gráfico pueden recrearlo y convertirlo en un vector de alta resolución listo para producción. Esto asegura que tu logotipo se vea 100% nítido tanto en bordados como en camisetas, gorras y letreros.",
    },
    {
      q: "¿Pueden crear paquetes combinados de uniformes para mi equipo (polos, hoodies, gorras y camisetas)?",
      a: "Es una de nuestras especialidades. Confeccionamos y personalizamos conjuntos completos a juego (polos, sudaderas con capucha, gorras, camisetas y chaquetas) con la misma identidad visual de tu marca, combinando bordado o impresión DTF según tu preferencia.",
    },
    {
      q: "¿Tienen cantidad mínima de pedido para uniformes de trabajo o puedo ordenar una sola pieza?",
      a: "En uniformes y prendas textiles ofrecemos total flexibilidad y podemos trabajar desde piezas individuales o muestras hasta pedidos completos para todo tu equipo. Para ciertos productos como stickers o papelería aplican mínimos específicos; contáctanos y con gusto te asesoramos según tu proyecto.",
    },
    {
      q: "¿Cuál es el tiempo de producción y puedo solicitar una orden urgente (Rush Order)?",
      a: "El tiempo estándar de producción es de 3 a 5 días hábiles. Si tu empresa o evento tiene una fecha límite inmediata, ofrecemos servicio de Orden Prioritaria (Rush Order) con tarifa express para entregar tu pedido en tiempo récord. Solo indícanos tu fecha de entrega requerida al cotizar.",
    },
    {
      q: "¿Ofrecen recogida local y envíos, y qué áreas cubren?",
      a: "Sí, ofrecemos recogida local y entregas cubriendo Homestead, Kendall, Cutler Bay, Miami y todo el sur de Florida, además de envíos a nivel nacional en todo Estados Unidos. Puedes coordinar la opción que te resulte más cómoda al hacer tu pedido.",
    },
    {
      q: "¿Imprimen tarjetas de presentación y flyers a juego con la marca y uniformes de mi negocio?",
      a: "Sí, imprimimos tarjetas de presentación (business cards), flyers y material publicitario asegurando que los colores, tipografías y logotipos coincidan exactamente con la identidad de tus uniformes y letreros para una imagen corporativa profesional y uniforme.",
    },
    {
      q: "¿Qué tan duraderos son los letreros, stickers y el microperforado para exteriores?",
      a: "Todos nuestros trabajos de señalética (PVC y Coroplast), rotulación de vitrinas y stickers utilizan vinilos de grado comercial con sobrelaminado protector UV, diseñados para resistir el sol intenso, el agua y el clima de Florida sin decolorarse ni despegarse.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section id="faqs" className="py-16 px-4 max-w-6xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="text-center mb-12">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E04B9A]/10 text-[#E04B9A] text-xs font-bold uppercase tracking-wider mb-2">
          Centro de Ayuda & FAQs
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
          Preguntas Frecuentes
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Todo lo que necesitas saber sobre bordados, impresión DTF, uniformes,
          vectorización y entregas en Homestead y Miami.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <h3 className="font-bold text-gray-900 mb-3 text-base sm:text-lg leading-snug">
              {faq.q}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
