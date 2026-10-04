import SiteRoot, { rootMetadata } from "@/views/SiteRoot";

export const metadata = rootMetadata("es");

export default function SpanishLayout({ children }) {
  return <SiteRoot lang="es">{children}</SiteRoot>;
}
