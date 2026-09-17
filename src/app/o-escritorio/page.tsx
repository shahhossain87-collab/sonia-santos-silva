import OfficePageContent from "@/components/OfficePageContent";
import { getCopy } from "@/i18n/copy";
import { pageMetadata } from "@/i18n/metadata";

const copy = getCopy("pt");

export const metadata = pageMetadata("pt", "about", {
  title: copy.meta.aboutTitle,
  description: copy.meta.aboutDescription,
});

export default function EscritorioPage() {
  return <OfficePageContent locale="pt" />;
}
