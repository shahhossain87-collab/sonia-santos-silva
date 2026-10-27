import { CookiesPolicy, cookiesMetadata } from "@/components/LegalContent";

export const metadata = cookiesMetadata("en");

export default function EnglishCookiesPage() {
  return <CookiesPolicy locale="en" />;
}
