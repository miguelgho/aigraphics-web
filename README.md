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
  - **Computerized Embroidery:** Corporate polos, outerwear, and structured caps.
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
│   │   ├── layout.js        # Root shell, font imports, and global SEO metadata
│   │   ├── page.js          # Main landing page
│   │   ├── globals.css      # Tailwind core directives and theme styles
│   │   ├── contact/
│   │   │   └── page.js      # Contact page route
│   │   └── portfolio/
│   │       └── page.js      # Portfolio gallery route
│   ├── components/
│   │   ├── Navbar.js        # Header navigation
│   │   ├── Footer.js        # Site footer and quick links
│   │   ├── HeroSlider.js    # Interactive homepage hero banner
│   │   ├── ProductCatalog.js# Filterable product grid
│   │   ├── ReviewsWidget.js # Customer reviews and ratings
│   │   ├── FAQSection.js    # Accordion FAQ component
│   │   └── WhatsAppButton.js# Floating contact button
│   ├── data/
│   │   └── products.js      # Centralized product and category definitions
│   └── lib/
│       └── theme.js         # Theme utilities and design tokens
├── package.json
└── README.md

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

```
