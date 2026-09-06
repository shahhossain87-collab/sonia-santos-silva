import PageHero from "@/components/PageHero";
import { site } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Informação sobre o tratamento de dados pessoais neste sítio.",
};

export default function PrivacidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Política de privacidade"
        description="Texto provisório, alinhado com o RGPD, até existirem dados finais do responsável pelo tratamento."
        crumbs={[{ label: "Início", href: "/" }, { label: "Privacidade" }]}
      />
      <section className="py-16">
        <div className="container max-w-3xl space-y-6 text-sm leading-relaxed text-body-color">
          <p>
            O responsável pelo tratamento é {site.title}, cédula profissional{" "}
            {site.license}, NIF {site.nif}, com domicílio profissional em{" "}
            {site.addressLine}. Contacto: {site.email}.
          </p>
          <h2 className="font-display text-2xl text-navy">Dados que podemos tratar</h2>
          <p>
            Identificação, contactos, informações sobre o seu processo migratório
            e documentos que nos envie para análise jurídica.
          </p>
          <h2 className="font-display text-2xl text-navy">Finalidades</h2>
          <p>
            Responder a pedidos de contacto, prestar serviços jurídicos, cumprir
            deveres legais e, se nos der consentimento, enviar comunicações
            informativas.
          </p>
          <h2 className="font-display text-2xl text-navy">Conservação e direitos</h2>
          <p>
            Os dados conservam-se pelo tempo necessário à finalidade e às
            obrigações legais. Pode solicitar acesso, retificação, apagamento,
            limitação, oposição e portabilidade, bem como apresentar reclamação
            à Comissão Nacional de Proteção de Dados.
          </p>
          <p>{site.disclaimer}</p>
        </div>
      </section>
    </>
  );
}
