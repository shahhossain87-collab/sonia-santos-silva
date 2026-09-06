import ServiceTemplate from "@/components/ServiceTemplate";
import { vistoD2 } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: vistoD2.title,
  description: vistoD2.summary,
};

export default function Page() {
  return <ServiceTemplate content={vistoD2} />;
}
