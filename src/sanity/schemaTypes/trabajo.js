import { defineArrayMember, defineField, defineType } from "sanity";
import { workCategories } from "../../data/workCategories";
import { products } from "../../data/products";

export const trabajo = defineType({
  name: "trabajo",
  title: "Trabajo realizado",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      description:
        'Ej: "Uniformes para Plomería JR" o "Microperforado Restaurante El Sol"',
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "categoria",
      title: "Categoría",
      type: "string",
      options: {
        list: workCategories.map(({ value, title }) => ({ value, title })),
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "fotos",
      title: "Fotos",
      description: "Puedes subir varias a la vez. La primera será la portada.",
      type: "array",
      options: { layout: "grid" },
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Descripción corta (opcional)",
              type: "string",
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "producto",
      title: "Mostrar también en la galería de este producto (opcional)",
      type: "string",
      options: {
        list: products.map((p) => ({ value: p.id, title: p.name })),
      },
    }),
    defineField({
      name: "cliente",
      title: "Cliente (opcional, solo interno)",
      description: "Para tu control. No se muestra en la página.",
      type: "string",
    }),
    defineField({
      name: "descripcion",
      title: "Descripción (opcional)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "destacado",
      title: "⭐ Destacado (mostrar primero)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "fecha",
      title: "Fecha",
      type: "date",
      initialValue: () => new Date().toISOString().slice(0, 10),
    }),
  ],
  orderings: [
    {
      title: "Más recientes",
      name: "fechaDesc",
      by: [{ field: "fecha", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "titulo", categoria: "categoria", media: "fotos.0" },
    prepare({ title, categoria, media }) {
      const cat = workCategories.find((c) => c.value === categoria);
      return { title, subtitle: cat?.title, media };
    },
  },
});
