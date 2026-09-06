import ServiceTemplate from "@/components/ServiceTemplate";
import { vistoD7 } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visto D7",
  description: vistoD7.summary,
};

export default function VistoD7Page() {
  return <ServiceTemplate content={vistoD7} />;
}
