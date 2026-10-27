import { FaqPage, faqMetadata } from "@/components/LegalContent";

export const metadata = faqMetadata("en");

export default function EnglishFaqPage() {
  return <FaqPage locale="en" />;
}
