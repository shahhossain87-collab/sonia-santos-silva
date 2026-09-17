import About from "@/components/Home/About";
import ConversionCta from "@/components/Home/ConversionCTA";
import Hero from "@/components/Home/Hero";
import Metrics from "@/components/Home/Metrics";
import MidCta from "@/components/Home/MidCTA";
import Office from "@/components/Home/Office";
import ServiceCards from "@/components/Home/ServiceCards";
import Team from "@/components/Home/Team";
import Testimonials from "@/components/Home/Testimonials";
import { homeMetadata } from "@/i18n/metadata";

export const metadata = homeMetadata("en");

export default function EnglishHome() {
  return (
    <>
      <Hero />
      <Metrics />
      <ServiceCards />
      <MidCta />
      <About />
      <Team />
      <ConversionCta />
      <Testimonials />
      <Office />
    </>
  );
}
