import ServiceTemplate from "@/components/ServiceTemplate";
import { vistoD2 } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visto D2",
  description: vistoD2.summary,
};

export default function VistoD2Page() {
  return <ServiceTemplate content={vistoD2} />;
}
