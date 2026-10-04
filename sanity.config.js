"use client";

// Panel para subir fotos de trabajos, disponible en /studio
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { esESLocale } from "@sanity/locale-es-es";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  title: "Ai Graphics · Trabajos",
  projectId,
  dataset,
  apiVersion,
  schema: { types: schemaTypes },
  plugins: [structureTool(), esESLocale()],
});
