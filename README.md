# Ai Graphics Web 🎨

Official website codebase for **Ai Graphics LLC** ([aigraphicsfl.com](https://aigraphicsfl.com)) — _Create. Print. Shine._

Providing end-to-end custom apparel, commercial embroidery, large-format signage, and promotional branding solutions for businesses and individuals across Homestead, Miami, and South Florida.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router paradigm)
- **UI Library:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4 & PostCSS
- **Typography:** [Sora](https://fonts.google.com/specimen/Sora) (Google Fonts)
- **SEO & Analytics:** Schema.org JSON-LD (`LocalBusiness`), OpenGraph metadata, dynamic Sitemap, Robots.txt, and Google Analytics 4 (GA4)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Key Features

- **Interactive Landing Page:** Hero slider (`HeroSlider`), dynamic product catalog, customer testimonials (`ReviewsWidget`), and collapsible FAQs (`FAQSection`).
- **Categorized Product Catalog:** Client-side filtering across core service categories:
  - **DTF Printing:** Custom t-shirts, high-durability workwear, and school uniforms.
  - **Computerized Embroidery:** Corporate polos, school uniforms, and structured caps.
  - **Signage & Large Format:** Retractable banners, Coroplast/PVC yard signs, perforated window vinyl, and vehicle graphics.
  - **Marketing & Promotional Goods:** Die-cut vinyl stickers, business cards, sublimated drinkware, and event merchandise.
- **Dedicated Routes:**
  - `/portfolio`: Showcase gallery of completed customer projects and print work.
  - `/contact`: Inquiries, service requests, and direct communication channels.
- **Instant Lead Capture:** Floating call-to-action button (`WhatsAppButton`) routing directly to `+1 (305) 970-5085`.
- **Performance & Asset Optimization:** Lightweight architecture leveraging next-gen `.webp` images to ensure fast load times.
- **Localized SEO:** Structured for South Florida regional search dominance (Homestead, Florida City, Cutler Bay, Kendall, Miami) alongside nationwide shipping capabilities.
- **AI Readiness:** Integrated `/public/llms.txt` file for structured indexing and discovery by AI agents and LLMs.

---

## 📂 Project Structure

```text
aigraphics-web/
├── public/
│   ├── images/              # Optimized static assets (.webp)
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── llms.txt             # Structured business data for LLMs
├── src/
│   ├── app/
│   │   ├── layout.js        # Root shell, fonts, and global SEO metadata
│   │   ├── globals.css      # Tailwind theme: official brand colors and helpers
│   │   ├── (site)/          # Public website (Navbar + Footer layout)
│   │   │   ├── page.js      # Main landing page
│   │   │   ├── contact/     # Contact page route
│   │   │   ├── portfolio/   # Portfolio gallery (photos from Sanity)
│   │   │   └── taller/      # "Nuestro Taller": process, machines, turnaround
│   │   └── studio/          # Sanity Studio: photo upload panel at /studio
│   ├── components/
│   │   ├── Navbar.js        # Header navigation
│   │   ├── Footer.js        # Site footer and quick links
│   │   ├── HeroSection.js   # Hero: Uniformes | Gran Formato panels
│   │   ├── ProductCatalog.js# Filterable product grid
│   │   ├── GoogleReviews.js # Google reviews styled with the brand
│   │   ├── FAQSection.js    # Accordion FAQ component
│   │   ├── ServicesSection.js # The 4 service pillars from the roll-up
│   │   ├── PortfolioGallery.js # Filterable work gallery with photo viewer
│   │   └── WhatsAppButton.js# Floating contact button
│   ├── data/
│   │   ├── products.js      # Centralized product and category definitions
│   │   └── workCategories.js# Portfolio categories (site + /studio)
│   ├── sanity/              # Sanity client, env and "trabajo" schema
│   └── lib/
│       └── theme.js         # Theme utilities and design tokens
├── scripts/
│   └── importar-fotos-drive.mjs # One-time copy of Drive photos into Sanity
├── sanity.config.js         # Studio configuration (Spanish UI)
├── package.json
└── README.md
```

---

## 📸 Fotos de trabajos (Sanity)

Las fotos del portafolio y de las galerías de productos se suben desde el panel **`/studio`**
(por ejemplo `https://aigraphicsfl.com/studio`), sin tocar código.

**Subir un trabajo:** entra a `/studio` → *Trabajo realizado* → **+** → escribe el título, elige la
categoría, arrastra o toma las fotos → **Publicar**. Aparece en la página en ~1 minuto.
Marca *Destacado* para que salga primero, y elige un producto para que también se vea en su galería.

**Configuración inicial (una sola vez):**

1. Crea un proyecto gratis en [sanity.io](https://www.sanity.io/get-started) (dataset `production`).
2. En [sanity.io/manage](https://www.sanity.io/manage) → *API* → *CORS origins*, agrega
   `https://aigraphicsfl.com`, `https://www.aigraphicsfl.com` y `http://localhost:3000`
   con **Allow credentials** activado.
3. En Vercel → *Settings* → *Environment Variables* agrega `NEXT_PUBLIC_SANITY_PROJECT_ID`
   y `NEXT_PUBLIC_SANITY_DATASET=production`, y vuelve a desplegar. Localmente, copia `.env.example` a `.env.local`.
4. (Opcional) Para copiar las fotos actuales de Google Drive: crea un token *Editor* en
   *API → Tokens*, ponlo en `.env.local` como `SANITY_API_WRITE_TOKEN` y ejecuta
   `node --env-file=.env.local scripts/importar-fotos-drive.mjs`.

Mientras Sanity no esté configurado, el sitio sigue mostrando las fotos fijas de `products.js`.

---

## ⭐ Reseñas de Google

La sección de reseñas lee las reseñas oficiales del perfil de Google (Places API) y se actualiza una vez al día.

1. En [Google Cloud Console](https://console.cloud.google.com/) crea un proyecto, activa **Places API (New)** y crea una **API key** restringida a esa API.
2. Agrega `GOOGLE_PLACES_API_KEY` en Vercel (y en `.env.local`).
3. El Place ID de Ai Graphics (`ChIJU64i6zKHlqIRnT-yyaZkAL0`) ya viene en el código; `GOOGLE_PLACE_ID` solo hace falta para cambiarlo.

Sin la llave, la sección muestra los botones para ver y dejar reseñas en Google Maps. Google muestra como máximo 5 reseñas por la API.

---

## 🚀 Getting Started & Local Development
Prerequisites
Node.js (v18.17.0 or higher recommended)

npm, yarn, or pnpm

Installation
Clone the repository:
git clone [https://github.com/miguelgho/aigraphics-web.git](https://github.com/miguelgho/aigraphics-web.git)
cd aigraphics-web

Install dependencies:

Bash
npm install

tart the local development server:

Bash
npm run dev

Open http://localhost:3000 in your browser to view the application.

Build for production:

Bash
npm run build
npm run start

---


📍 Business & Contact Information
Company: Ai Graphics LLC

Website: aigraphicsfl.com

Phone: (305) 970-5085

Email: sales@aigraphicsfl.com

Location: Homestead / Miami, FL
