import ServiceTemplate from "@/components/ServiceTemplate";
import { vistoD7 } from "@/data/services";
import { pageMetadata } from "@/i18n/metadata";

export const metadata = pageMetadata("pt", "visaD7", {
  title: vistoD7.title,
  description: vistoD7.summary,
});

export default function Page() {
  return <ServiceTemplate content={vistoD7} />;
}
