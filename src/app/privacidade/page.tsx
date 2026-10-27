import { PrivacyPolicy, privacyMetadata } from "@/components/LegalContent";

export const metadata = privacyMetadata("pt");

export default function PrivacidadePage() {
  return <PrivacyPolicy locale="pt" />;
}
