import { LegalNotice, legalNoticeMetadata } from "@/components/LegalContent";

export const metadata = legalNoticeMetadata("en");

export default function EnglishLegalNoticePage() {
  return <LegalNotice locale="en" />;
}
