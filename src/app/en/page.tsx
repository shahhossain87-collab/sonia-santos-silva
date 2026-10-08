import HomePage from "@/components/Home/HomePage";
import { homeMetadata } from "@/i18n/metadata";

export const metadata = homeMetadata("en");

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
