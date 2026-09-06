import ServiceTemplate from "@/components/ServiceTemplate";
import { nacionalidade } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: nacionalidade.title,
  description: nacionalidade.summary,
};

export default function Page() {
  return <ServiceTemplate content={nacionalidade} />;
}
