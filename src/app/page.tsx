import HomePage from "@/components/Home/HomePage";
import { homeMetadata } from "@/i18n/metadata";

export const metadata = homeMetadata("pt");

export default function Home() {
  return <HomePage locale="pt" />;
}
