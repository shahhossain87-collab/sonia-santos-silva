import { ImmigrationLandingPage } from "@/components/ImmigrationPages";
import { pageMetadata } from "@/i18n/metadata";

export const metadata = pageMetadata("en", "immigration", {
  title: "Immigration and Visas",
  description: "Practical information about immigration, residence, AIMA and Portuguese nationality processes.",
});

export default function EnglishImmigrationPage() {
  return <ImmigrationLandingPage locale="en" />;
}
