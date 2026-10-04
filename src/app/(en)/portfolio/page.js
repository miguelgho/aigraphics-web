import PortfolioView, { portfolioMetadata } from "@/views/PortfolioView";

export const metadata = portfolioMetadata("en");

export default function Page() {
  return <PortfolioView lang="en" />;
}
