import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/i18n/metadata";
import Link from "next/link";

export const metadata = pageMetadata("pt", "internationalClients", {
  title: "Clientes internacionais",
  description: "Acompanhamento jurídico para quem vive no estrangeiro e pretende mudar-se e estabelecer-se em Portugal.",
});

export default function InternationalClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clientes internacionais"
        title="Preparar a mudança para Portugal"
        description="Para pessoas e famílias que ainda vivem no estrangeiro e querem compreender os passos da mudança e da instalação em Portugal."
        crumbs={[{ label: "Início", href: "/" }, { label: "Serviços", href: "/servicos" }, { label: "Clientes internacionais" }]}
      />
      <section className="py-12">
        <div className="container max-w-3xl space-y-6 text-sm leading-relaxed text-body-color">
          <h2 className="font-display text-2xl text-navy">O ponto de partida é a sua situação</h2>
          <p>Em consulta, analisamos o seu objetivo, a situação familiar e a documentação disponível para identificar as questões jurídicas a esclarecer antes da mudança.</p>
          <p>Os vistos D2, D7 e D8 são exemplos de vias que podem ser analisadas. A escolha depende do caso concreto e dos requisitos aplicáveis; não existe uma solução única para todas as pessoas.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Enquadramento do pedido e preparação da documentação.</li>
            <li>Esclarecimento de dúvidas sobre a mudança e a instalação em Portugal.</li>
            <li>Acompanhamento das questões jurídicas de residência e família, conforme o caso.</li>
          </ul>
          <div className="flex flex-wrap gap-5">
            <Link className="font-semibold text-navy underline" href="/servicos/visto-d2">Informação sobre o Visto D2</Link>
            <Link className="font-semibold text-navy underline" href="/servicos/visto-d7">Informação sobre o Visto D7</Link>
          </div>
          <p>Se já está em Portugal, consulte a área de <Link className="font-semibold text-navy underline" href="/servicos#imigracao">Imigração e Vistos</Link>, que inclui AIMA, residência, nacionalidade e reagrupamento familiar.</p>
          <div className="flex flex-wrap gap-3">
            <CtaLink><WhatsAppIcon />Marcar consulta</CtaLink>
            <CtaLink href="/contacto" variant="outline-navy">Formulário de contacto</CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
