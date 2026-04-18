import { theme } from "@/lib/theme";

export default function Contact() {
  return (
    <main className="bg-gray-50 py-16 px-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
        <a
          href="/"
          className="text-print-cyan font-bold text-sm mb-6 inline-block hover:text-print-magenta transition"
        >
          ← Back to Home
        </a>

        <h1 className="text-4xl font-black text-print-dark mb-2 text-center uppercase tracking-tighter">
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
              <option value="web_design">Web Design & E-commerce</option>
              <option value="logo_branding">Logo & Branding Design</option>
              <option value="apparel">Custom Apparel (Shirts, Hats)</option>
              <option value="windows">Window Graphics & Signs</option>
              <option value="swag">Promotional Items (SWAG)</option>
              <option value="full_360">
                Full 360 Package (Digital + Print)
              </option>
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
