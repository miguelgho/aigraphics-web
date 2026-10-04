import WorkshopView, { workshopMetadata } from "@/views/WorkshopView";

export const metadata = workshopMetadata("es");

export default function Page() {
  return <WorkshopView lang="es" />;
}
