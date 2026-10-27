import { CookiesPolicy, cookiesMetadata } from "@/components/LegalContent";

export const metadata = cookiesMetadata("pt");

export default function CookiesPage() {
  return <CookiesPolicy locale="pt" />;
}
