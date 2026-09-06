import ServiceTemplate from "@/components/ServiceTemplate";
import { reagrupamento } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: reagrupamento.title,
  description: reagrupamento.summary,
};

export default function Page() {
  return <ServiceTemplate content={reagrupamento} />;
}
