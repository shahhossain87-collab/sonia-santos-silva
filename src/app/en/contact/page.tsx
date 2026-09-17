import ContactPageContent from "@/components/ContactPageContent";
import { getCopy } from "@/i18n/copy";
import { pageMetadata } from "@/i18n/metadata";

const copy = getCopy("en");

export const metadata = pageMetadata("en", "contact", {
  title: copy.meta.contactTitle,
  description: copy.meta.contactDescription,
});

export default function EnglishContactPage() {
  return <ContactPageContent locale="en" />;
}
