import WebDesignView, { webDesignMetadata } from "@/views/WebDesignView";

export const metadata = webDesignMetadata("es");

export default function Page() {
  return <WebDesignView lang="es" />;
}
