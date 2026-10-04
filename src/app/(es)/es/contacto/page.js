import ContactView, { contactMetadata } from "@/views/ContactView";

export const metadata = contactMetadata("es");

export default function Page() {
  return <ContactView lang="es" />;
}
