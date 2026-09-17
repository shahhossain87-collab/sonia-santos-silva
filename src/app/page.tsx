import About from "@/components/Home/About";
import ConversionCta from "@/components/Home/ConversionCTA";
import Hero from "@/components/Home/Hero";
import Metrics from "@/components/Home/Metrics";
import MidCta from "@/components/Home/MidCTA";
import OfficePresence from "@/components/Home/OfficePresence";
import ServiceCards from "@/components/Home/ServiceCards";
import Team from "@/components/Home/Team";
import { homeMetadata } from "@/i18n/metadata";

export const metadata = homeMetadata("pt");

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <ServiceCards />
      <MidCta />
      <About />
      <Team />
      <OfficePresence />
      <ConversionCta />
    </>
  );
}
