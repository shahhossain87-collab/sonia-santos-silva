import ContactPageContent from "@/components/ContactPageContent";
import { getCopy } from "@/i18n/copy";
import { pageMetadata } from "@/i18n/metadata";

const copy = getCopy("pt");

export const metadata = pageMetadata("pt", "contact", {
  title: copy.meta.contactTitle,
  description: copy.meta.contactDescription,
});

export default function ContactoPage() {
  return <ContactPageContent locale="pt" />;
}
