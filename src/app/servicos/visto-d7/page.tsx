import ServiceTemplate from "@/components/ServiceTemplate";
import { vistoD7 } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: vistoD7.title,
  description: vistoD7.summary,
};

export default function Page() {
  return <ServiceTemplate content={vistoD7} />;
}
