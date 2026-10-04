import SiteRoot, { rootMetadata } from "@/views/SiteRoot";

export const metadata = rootMetadata("en");

export default function EnglishLayout({ children }) {
  return <SiteRoot lang="en">{children}</SiteRoot>;
}
