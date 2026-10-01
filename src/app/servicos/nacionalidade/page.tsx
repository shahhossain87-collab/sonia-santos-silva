import { PracticeAreaLanding } from "@/components/PracticeAreaPages";
import { getPracticeArea } from "@/data/practice-areas";
import { pageMetadata } from "@/i18n/metadata";

const area = getPracticeArea("pt", "nacionalidade");

if (!area) {
  throw new Error("Nationality practice area is missing.");
}

export const metadata = pageMetadata("pt", "nationality", {
  title: area.title.pt,
  description: area.line.pt,
});

export default function Page() {
  return <PracticeAreaLanding locale="pt" area={area} />;
}
