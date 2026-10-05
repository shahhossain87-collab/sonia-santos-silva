import Landing from "@/components/Home/Landing";
import { homeMetadata } from "@/i18n/metadata";

export const metadata = homeMetadata("pt");

export default function Home() {
  return <Landing locale="pt" />;
}
