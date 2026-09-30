import { ImmigrationLandingPage } from "@/components/ImmigrationPages";
import { pageMetadata } from "@/i18n/metadata";

export const metadata = pageMetadata("pt", "immigration", {
  title: "Imigração e Vistos",
  description: "Informação prática sobre imigração, residência, AIMA e nacionalidade portuguesa.",
});

export default function ImmigrationPage() {
  return <ImmigrationLandingPage locale="pt" />;
}
