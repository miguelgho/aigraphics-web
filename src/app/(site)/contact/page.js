import Link from "next/link";
import { theme } from "@/lib/theme";

export default function Contact() {
  return (
    <main className="brand-dots py-16 px-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
        <Link
          href="/"
          className="text-print-cyan-dark font-bold text-sm mb-6 inline-block hover:text-print-magenta-dark transition"
        >
          ← Back to Home
        </Link>

        <h1 className="font-display text-5xl font-bold text-print-dark mb-2 text-center uppercase">
          Get a <span className="text-print-magenta italic">Quote</span>
        </h1>
        <p className="text-gray-500 text-center mb-10 text-sm">
          Tell us about your project and we’ll get back to you within 24 hours.
        </p>

        <form
          action="https://formspree.io/f/mnjovdaa"
          method="POST"
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={theme.formLabel}>Full Name / Company</label>
              <input
                type="text"
                name="name"
                required
                className={theme.inputShared}
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className={theme.formLabel}>Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                className={theme.inputShared}
                placeholder="(305) 000-0000"
              />
            </div>
          </div>

          <div>
            <label className={theme.formLabel}>Email Address</label>
            <input
              type="email"
              name="email"
              required
              className={theme.inputShared}
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label className={theme.formLabel}>Service Needed</label>
            <select name="service" className={theme.inputShared}>
              <option value="uniforms">
                Uniforms & Embroidery (Polos, Work Shirts, Caps)
              </option>
              <option value="dtf">DTF Printing (T-Shirts, Hoodies)</option>
              <option value="signs">
                Signs & Storefronts (Banners, Window Vinyl)
              </option>
              <option value="vehicle">
                Vehicle Graphics (Lettering, Magnets)
              </option>
              <option value="promo">
                Marketing & Promo (Cards, Flyers, Drinkware)
              </option>
              <option value="other">Other / Not sure</option>
            </select>
          </div>

          <div>
            <label className={theme.formLabel}>Project Details</label>
            <textarea
              name="message"
              rows="4"
              required
              className={theme.inputShared}
              placeholder="Quantities, sizes, colors or ideas you have in mind..."
            ></textarea>
          </div>

          <button type="submit" className={theme.btnPrimary}>
            Send Inquiry
          </button>
        </form>
      </div>
    </main>
  );
}
