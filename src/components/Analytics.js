"use client";

import Script from "next/script";
import { useEffect } from "react";

const GA_ID = "G-72KGPBRDY2";

export default function Analytics() {
  // Track clicks on WhatsApp and phone links as GA4 events
  useEffect(() => {
    const handler = (e) => {
      const link = e.target.closest && e.target.closest("a[href]");
      if (!link || typeof window.gtag !== "function") return;
      const href = link.getAttribute("href") || "";
      if (href.includes("wa.me")) {
        window.gtag("event", "whatsapp_click", { link_url: href });
      } else if (href.startsWith("tel:")) {
        window.gtag("event", "phone_click", { link_url: href });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
