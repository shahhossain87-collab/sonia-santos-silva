import PageHero from "@/components/PageHero";
import ServiceCards from "@/components/Home/ServiceCards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Nacionalidade portuguesa, visto D7, visto D2, reagrupamento familiar e outros serviços de imigração em Portugal.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Áreas"
        title="Serviços"
        description="Informação geral sobre os pedidos mais frequentes. Cada processo é autónomo: a leitura destas páginas não cria mandato nem garante deferimento."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Serviços" },
        ]}
      />
      <ServiceCards />
    </>
  );
}
