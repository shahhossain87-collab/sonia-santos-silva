import { PrivacyPolicy, privacyMetadata } from "@/components/LegalContent";

export const metadata = privacyMetadata("en");

export default function EnglishPrivacyPage() {
  return <PrivacyPolicy locale="en" />;
}
