import { LegalNotice, legalNoticeMetadata } from "@/components/LegalContent";

export const metadata = legalNoticeMetadata("pt");

export default function AvisoLegalPage() {
  return <LegalNotice locale="pt" />;
}
