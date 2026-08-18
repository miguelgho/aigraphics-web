export default function FAQSection() {
  const faqs = [
    {
      q: "¿Tienen una cantidad mínima de pedido?",
      a: "Los mínimos de compra dependen del tipo de producto y de la técnica de producción requerida. Para conocer los requerimientos específicos de tu pedido o recibir una cotización a la medida, contáctanos directamente y con gusto te asesoramos.",
    },
    {
      q: "¿En qué formato debo enviar mi logotipo o diseño?",
      a: "Preferimos archivos vectoriales (.AI, .EPS, .PDF, .SVG) o imágenes en alta resolución (.PNG con fondo transparente a 300 DPI). Si no tienes el archivo en buena calidad, nosotros te ayudamos con el servicio de vectorización y preparación del arte.",
    },
    {
      q: "¿Cuál es el tiempo de producción y entrega?",
      a: "Manejamos un tiempo estándar de 3 a 5 días hábiles. Si tu empresa o evento requiere entrega inmediata, ofrecemos la modalidad de Orden Prioritaria (Rush Order) sujeta a tarifa especial de urgencia, garantizando la misma calidad en un plazo reducido.",
    },
    {
      q: "¿Hacen entregas locales o envíos?",
      a: "Sí, ofrecemos opción de recogida local en el área de Homestead / Miami y realizamos envíos a cualquier parte de Florida y Estados Unidos.",
    },
    {
      q: "¿Qué tan duraderos son los stickers, letreros y el microperforado para exteriores?",
      a: "Todos nuestros trabajos de señalética, rotulación y stickers utilizan vinilos de grado comercial y laminado con protección UV, diseñados para resistir el sol intenso, el agua y el clima de Florida sin decolorarse ni despegarse.",
    },
    {
      q: "¿Cómo se realiza el proceso de cotización y pago?",
      a: "Puedes enviarnos tu diseño, cantidad y producto por WhatsApp al (305) 970-5085 o al correo Sales@aigraphicsfl.com. Te enviamos la cotización y factura digital para pagar de forma segura con tarjeta.",
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
    <section id="faqs" className="py-16 px-4 max-w-5xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Preguntas Frecuentes
        </h2>
        <p className="text-gray-600 text-sm">
          Respuestas a las dudas más comunes sobre pedidos, tiempos y
          materiales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-gray-900 mb-2 text-base">{faq.q}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
