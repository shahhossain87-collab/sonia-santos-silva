import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "Respostas sobre consultas, documentos, prazos e o que o escritório pode (e não pode) garantir.",
};

const faqs = [
  {
    q: "A consulta inicial tem um custo?",
    a: "As condições da consulta serão confirmadas no primeiro contacto. Não há informação de honorários neste sítio até existir tabela aprovada.",
  },
  {
    q: "Podem garantir a aprovação do visto ou da nacionalidade?",
    a: "Não. Nenhuma comunicação deste escritório deve ser lida como garantia de resultado. A decisão é sempre da entidade competente.",
  },
  {
    q: "Atendem em inglês?",
    a: "Sim. O atendimento está previsto em português e inglês.",
  },
  {
    q: "Preciso de estar em Portugal para começar?",
    a: "Depende do tipo de pedido. Muitos processos começam à distância, com envio de documentos digitalizados e, depois, originais quando exigidos.",
  },
  {
    q: "Trabalham com Golden Visa?",
    a: "Esta versão do sítio concentra-se em nacionalidade, D7, D2 e reagrupamento. Outras vias podem ser analisadas em consulta, se se enquadrarem na prática do escritório.",
  },
  {
    q: "Como tratam os meus dados?",
    a: "Apenas para prestar o serviço jurídico e cumprir obrigações legais. Veja a página de Privacidade.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Perguntas frequentes"
        description="Esclarecimentos gerais. Não substituem uma análise do seu caso."
        crumbs={[{ label: "Início", href: "/" }, { label: "FAQ" }]}
      />
      <section className="py-16">
        <div className="container max-w-3xl divide-y divide-navy/10 bg-white px-6 shadow-one sm:px-10">
          {faqs.map((item) => (
            <details key={item.q} className="py-6">
              <summary className="cursor-pointer font-semibold">{item.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-body-color">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
