import ServiceTemplate from "@/components/ServiceTemplate";
import { reagrupamento } from "@/data/services";
import { pageMetadata } from "@/i18n/metadata";

export const metadata = pageMetadata("pt", "familyReunification", {
  title: reagrupamento.title,
  description: reagrupamento.summary,
});

export default function Page() {
  return <ServiceTemplate content={reagrupamento} />;
}
