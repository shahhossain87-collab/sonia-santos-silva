import { PracticeAreaLanding } from "@/components/PracticeAreaPages";
import { getPracticeArea } from "@/data/practice-areas";
import { pageMetadata } from "@/i18n/metadata";

const area = getPracticeArea("pt", "clientes-internacionais");

if (!area) {
  throw new Error("International clients practice area is missing.");
}

export const metadata = pageMetadata("pt", "internationalClients", {
  title: area.title.pt,
  description: area.line.pt,
});

export default function InternationalClientsPage() {
  return <PracticeAreaLanding locale="pt" area={area} />;
}
