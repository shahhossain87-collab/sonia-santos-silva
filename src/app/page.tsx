import About from "@/components/Home/About";
import ConversionCta from "@/components/Home/ConversionCTA";
import Hero from "@/components/Home/Hero";
import Metrics from "@/components/Home/Metrics";
import MidCta from "@/components/Home/MidCTA";
import Office from "@/components/Home/Office";
import ServiceCards from "@/components/Home/ServiceCards";
import Team from "@/components/Home/Team";
import Testimonials from "@/components/Home/Testimonials";
import { site } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${site.title} | Imigração, residência e nacionalidade`,
  description: site.description,
};

export default function Home() {
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
