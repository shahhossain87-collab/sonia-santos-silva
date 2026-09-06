import PageHero from "@/components/PageHero";
import Team from "@/components/Home/Team";
import Office from "@/components/Home/Office";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Escritório",
  description: `${site.title}. Escritório em Lisboa dedicado a imigração, nacionalidade e residência.`,
};

export default function EscritorioPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="O escritório"
        description={`${site.title}, cédula profissional ${site.license}. Prática focada em nacionalidade portuguesa, vistos de residência e reagrupamento familiar.`}
        crumbs={[
          { label: "Início", href: "/" },
          { label: "O Escritório" },
        ]}
      />
      <section className="bg-cream py-16 dark:bg-navy">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="prose-legal">
            <h2 className="font-display mb-4 text-3xl text-navy dark:text-cream">
              Missão e método
            </h2>
            <p>
              O trabalho começa por ouvir a história do cliente e identificar
              o enquadramento legal possível. Só depois se organiza a prova e
              se decide se e como avançar com um pedido.
            </p>
            <p>
              Não se publicam taxas de aprovação nem prazos de decisão. A
              advocacia em imigração depende de lei, de prova e de decisões
              administrativas ou judiciais que o mandatário não controla.
            </p>
            <p>
              A comunicação pretende ser clara: o que é requisito, o que é
              risco e o que depende de terceiros.
            </p>
            <WhatsAppButton label="Agendar conversa" className="mt-4" />
          </div>
          <ul className="space-y-4">
            {[
              {
                t: "Independência profissional",
                d: "Análise jurídica própria, sem copiar modelos de marketing de outros escritórios.",
              },
              {
                t: "Confidencialidade",
                d: "Dados e documentos tratados com reserva, nos termos da lei e da deontologia.",
              },
              {
                t: "Transparência de custos",
                d: "Honorários e despesas explicados por escrito antes do início do mandato.",
              },
            ].map((item) => (
              <li
                key={item.t}
                className="rounded-sm border border-gold/25 bg-white p-5 dark:bg-navy-soft"
              >
                <h3 className="mb-2 font-semibold text-navy dark:text-cream">
                  {item.t}
                </h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  {item.d}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Team />
      <Office />
    </>
  );
}
