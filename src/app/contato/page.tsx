import ContactForm from "@/components/ContactForm";
import OfficeMap from "@/components/OfficeMap";
import PageHero from "@/components/PageHero";
import { mapsLink, site } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Fale com ${site.title} por WhatsApp, e-mail ou formulário.`,
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Fale connosco"
        description="Descreva a sua situação. O primeiro contacto ajuda a perceber se o assunto se enquadra nas áreas de atuação."
        crumbs={[{ label: "Início", href: "/" }, { label: "Contacto" }]}
      />
      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">Dados de contacto</h2>
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="tracking-[0.16em] text-gold uppercase">WhatsApp</dt>
                <dd className="mt-1">{site.phoneDisplay}</dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-gold uppercase">E-mail</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="hover:text-gold-dark">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-gold uppercase">Morada</dt>
                <dd className="mt-1">
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-dark"
                  >
                    {site.addressLine}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-gold uppercase">Cédula</dt>
                <dd className="mt-1">{site.license}</dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-gold uppercase">NIF</dt>
                <dd className="mt-1">{site.nif}</dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-gold uppercase">Horário</dt>
                <dd className="mt-1">{site.hours}</dd>
              </div>
            </dl>
            <p className="mt-8 text-sm leading-relaxed text-body-color">
              {site.disclaimer}
            </p>
          </div>
          <ContactForm />
        </div>
        <div className="container mt-12">
          <h2 className="font-display text-3xl">Como chegar</h2>
          <p className="mt-2 text-sm text-body-color">
            Escritório em Lisboa, junto à Loja do Cidadão de Laranjeiras.
          </p>
          <OfficeMap className="mt-6 h-[380px] md:h-[440px]" />
        </div>
      </section>
    </>
  );
}
