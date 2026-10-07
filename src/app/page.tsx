import ConversionCta from "@/components/Home/ConversionCTA";
import Hero from "@/components/Home/Hero";
import OfficePresence from "@/components/Home/OfficePresence";
import ServiceFinder from "@/components/Home/ServiceFinder";
import HomeBackground from "@/components/Home/HomeBackground";
import { homeMetadata } from "@/i18n/metadata";

export const metadata = homeMetadata("pt");

export default function Home() {
  return (
    <div className="home-page relative isolate">
      <HomeBackground />
      <Hero />
      <ServiceFinder />
      <OfficePresence />
      <ConversionCta />
    </div>
  );
}
