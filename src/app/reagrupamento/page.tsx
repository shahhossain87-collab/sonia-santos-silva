import ServiceTemplate from "@/components/ServiceTemplate";
import { reagrupamento } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reagrupamento familiar",
  description: reagrupamento.summary,
};

export default function ReagrupamentoPage() {
  return <ServiceTemplate content={reagrupamento} />;
}
