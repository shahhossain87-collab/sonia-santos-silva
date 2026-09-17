import About from "@/components/Home/About";
import ConversionCta from "@/components/Home/ConversionCTA";
import Hero from "@/components/Home/Hero";
import Metrics from "@/components/Home/Metrics";
import OfficePresence from "@/components/Home/OfficePresence";
import ServiceCards from "@/components/Home/ServiceCards";
import Team from "@/components/Home/Team";
import { homeMetadata } from "@/i18n/metadata";

export const metadata = homeMetadata("en");

export default function EnglishHome() {
  return (
    <>
      <Hero />
      <Metrics />
      <ServiceCards />
      <OfficePresence />
      <About />
      <Team />
      <ConversionCta />
    </>
  );
}
