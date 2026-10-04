import WorkshopView, { workshopMetadata } from "@/views/WorkshopView";

export const metadata = workshopMetadata("en");

export default function Page() {
  return <WorkshopView lang="en" />;
}
