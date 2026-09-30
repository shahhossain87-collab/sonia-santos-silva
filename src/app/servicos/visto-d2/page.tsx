import ServiceTemplate from "@/components/ServiceTemplate";
import { vistoD2 } from "@/data/services";
import { pageMetadata } from "@/i18n/metadata";

export const metadata = pageMetadata("pt", "visaD2", {
  title: vistoD2.title,
  description: vistoD2.summary,
});

export default function Page() {
  return <ServiceTemplate content={vistoD2} />;
}
