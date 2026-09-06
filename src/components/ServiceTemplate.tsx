import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import { site } from "@/config/site";
import Link from "next/link";

export type ServiceContent = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  whoFor: string[];
  process: { title: string; text: string }[];
  documents: string[];
  faqs: { question: string; answer: string }[];
};

const related = [
  { href: "/nacionalidade", title: "Nacionalidade portuguesa" },
  { href: "/visto-d7", title: "Visto D7" },
  { href: "/visto-d2", title: "Visto D2" },
  { href: "/reagrupamento", title: "Reagrupamento familiar" },
];

export default function ServiceTemplate({ content }: { content: ServiceContent }) {
  return (
    <>
      <section className="bg-navy py-16 text-white md:py-20">
        <div className="container">
          <nav aria-label="Navegação estrutural" className="mb-6 text-sm text-white/50">
            <Link href="/" className="hover:text-gold">
              Início
            </Link>
            <span className="mx-2 text-gold/50">/</span>
            <Link href="/servicos" className="hover:text-gold">
              Serviços
            </Link>
            <span className="mx-2 text-gold/50">/</span>
            <span className="text-gold">{content.title}</span>
          </nav>
          <p className="gold-rule">{content.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            {content.summary}
          </p>
          <CtaLink className="mt-8">
            <WhatsAppIcon />
            Falar no WhatsApp
          </CtaLink>
        </div>
      </section>

      <article className="py-16">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <section>
              <h2 className="font-display text-3xl">A quem se destina</h2>
              <ul className="mt-6 space-y-3">
                {content.whoFor.map((item) => (
                  <li key={item} className="flex gap-3 text-body-color">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-3xl">Como acompanhamos</h2>
              <ol className="mt-6 space-y-6">
                {content.process.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="font-display text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-body-color">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-3xl">Documentação típica</h2>
              <p className="mt-3 text-sm text-body-color">
                Lista indicativa. A entidade competente pode exigir elementos
                adicionais. Não substitui a análise do seu caso.
              </p>
              <ul className="mt-6">
                {content.documents.map((item) => (
                  <li
                    key={item}
                    className="border-b border-navy/10 py-3 text-sm text-navy"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-3xl">Perguntas frequentes</h2>
              <div className="mt-6 divide-y divide-navy/10 border border-navy/10 bg-white px-6">
                {content.faqs.map((faq) => (
                  <details key={faq.question} className="py-5">
                    <summary className="cursor-pointer font-semibold">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-body-color">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <p className="mt-10 text-xs leading-relaxed text-body-color">
              {site.disclaimer}
            </p>
          </div>

          <aside className="lg:col-span-4">
            <div className="border border-gold/30 bg-navy p-6 text-white lg:sticky lg:top-28">
              <p className="gold-rule">Consulta</p>
              <h2 className="mt-3 font-display text-2xl">
                Fale connosco sobre este serviço
              </h2>
              <p className="mt-3 text-sm text-white/70">
                A resposta inicial é informativa e não garante o deferimento do
                pedido.
              </p>
              <CtaLink className="mt-6 w-full">
                <WhatsAppIcon />
                WhatsApp
              </CtaLink>
              <CtaLink
                href="/contato"
                variant="outline-light"
                className="mt-3 w-full"
              >
                Formulário
              </CtaLink>
            </div>
            <div className="mt-6 border border-navy/10 bg-white p-6">
              <h2 className="font-semibold">Outros serviços</h2>
              <ul className="mt-4 space-y-2">
                {related
                  .filter((item) => !item.href.includes(content.slug))
                  .map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-body-color hover:text-gold-dark"
                      >
                        {item.title} →
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
