import PortfolioView, { portfolioMetadata } from "@/views/PortfolioView";

export const metadata = portfolioMetadata("es");

export default function Page() {
  return <PortfolioView lang="es" />;
}
