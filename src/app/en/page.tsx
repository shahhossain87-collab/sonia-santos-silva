import Hero from "@/components/Home/Hero";
import OfficePresence from "@/components/Home/OfficePresence";
import ServiceFinder from "@/components/Home/ServiceFinder";
import { homeMetadata } from "@/i18n/metadata";

export const metadata = homeMetadata("en");

export default function EnglishHome() {
  return (
    <div className="home-page">
      <Hero />
      <ServiceFinder />
      <OfficePresence />
    </div>
  );
}
