import OfficePageContent from "@/components/OfficePageContent";
import { getCopy } from "@/i18n/copy";
import { pageMetadata } from "@/i18n/metadata";

const copy = getCopy("en");

export const metadata = pageMetadata("en", "about", {
  title: copy.meta.aboutTitle,
  description: copy.meta.aboutDescription,
});

export default function EnglishAboutPage() {
  return <OfficePageContent locale="en" />;
}
