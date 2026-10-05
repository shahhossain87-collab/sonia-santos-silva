import Landing from "@/components/Home/Landing";
import { homeMetadata } from "@/i18n/metadata";

export const metadata = homeMetadata("en");

export default function EnglishHome() {
  return <Landing locale="en" />;
}
