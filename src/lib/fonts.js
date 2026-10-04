import { Oswald, Sora } from "next/font/google";

export const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
});
