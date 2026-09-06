import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Informação sobre a utilização de cookies neste sítio.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Política de cookies"
        description="Este sítio pode utilizar cookies técnicos necessários ao funcionamento. Ferramentas de análise serão identificadas se forem ativadas."
        crumbs={[{ label: "Início", href: "/" }, { label: "Cookies" }]}
      />
      <section className="py-16">
        <div className="container max-w-3xl space-y-6 text-sm leading-relaxed text-body-color">
          <p>
            Cookies estritamente necessários permitem a navegação e a segurança
            da sessão. Não utilizamos, nesta versão, cookies de publicidade.
          </p>
          <p>
            Se no futuro forem instalados cookies de medição de audiência, será
            pedido consentimento sempre que a lei o exija, e esta página será
            atualizada com o nome de cada ferramenta.
          </p>
          <p>
            Pode gerir cookies no seu browser. Bloquear cookies técnicos pode
            afetar algumas funções do sítio.
          </p>
        </div>
      </section>
    </>
  );
}
