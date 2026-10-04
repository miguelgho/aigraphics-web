import WebDesignView, { webDesignMetadata } from "@/views/WebDesignView";

export const metadata = webDesignMetadata("en");

export default function Page() {
  return <WebDesignView lang="en" />;
}
