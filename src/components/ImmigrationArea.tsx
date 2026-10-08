import Reveal from "@/components/Reveal";
import { AlternatingRow, CtaBand, FaqList, PageBanner } from "@/components/InnerPage";
import { whatsappHref } from "@/config/site";
import { immigrationTopics } from "@/data/immigration";
import { getPracticeArea } from "@/data/practice-areas";
import { getCopy, immigrationItems } from "@/i18n/copy";
import type { Locale } from "@/i18n/locales";
import { pathFor } from "@/i18n/routes";
import Link from "next/link";

/*
 * Sample inner page in the new template. All statements are existing site
 * text: src/data/immigration.ts, src/components/ImmigrationPages.tsx labels,
 * src/data/practice-areas.ts, the /faq page and src/data/services.ts.
 */
const text = {
  pt: {
    home: "Início",
    services: "Serviços",
    eyebrow: "Áreas de atuação",
    title: "Imigração e Vistos",
    lead: "Informação prática sobre processos de imigração, residência, AIMA e nacionalidade portuguesa.",
    bannerAlt: "Passaporte português e visto junto a uma mala no aeroporto de Lisboa",
    helpTitle: "Como podemos ajudar?",
    helpLine: "Vistos, autorização de residência, renovações, reagrupamento familiar e notificações da AIMA.",
    note: "Cada processo depende da situação individual, dos documentos disponíveis e das comunicações das entidades competentes.",
    listTitle: "Serviços nesta área",
    listLead: "Escolha o tema que corresponde à sua situação. As seis áreas estão disponíveis abaixo.",
    seeAlso: "Ver também",
    practical: "Pontos práticos a confirmar",
    more: "Ver mais",
    faqEyebrow: "Dúvidas",
    faqTitle: "Perguntas frequentes",
    ctaEyebrow: "Consulta",
    message: "Olá, preciso de ajuda com Imigração e Vistos.",
    breadcrumb: "Navegação estrutural",
    faqs: [
      {
        q: "Podem garantir a aprovação do visto ou da nacionalidade?",
        a: "Não. Nenhuma comunicação deste escritório deve ser lida como garantia de resultado. A decisão é sempre da entidade competente.",
      },
      {
        q: "Preciso de estar em Portugal para começar?",
        a: "Depende do tipo de pedido. Muitos processos começam à distância, com envio de documentos digitalizados e, depois, originais quando exigidos.",
      },
      {
        q: "Posso pedir reagrupamento logo após chegar?",
        a: "Depende do título de residência e das regras aplicáveis. Há situações com prazos de espera; outras permitem tramitação mais imediata.",
      },
      {
        q: "União de facto é aceite?",
        a: "Pode ser, se estiver devidamente comprovada nos termos da lei portuguesa. A prova é frequentemente o ponto mais sensível.",
      },
      {
        q: "Atendem em inglês?",
        a: "Sim. O atendimento está previsto em português e inglês.",
      },
    ],
  },
  en: {
    home: "Home",
    services: "Services",
    eyebrow: "Areas of practice",
    title: "Immigration and Visas",
    lead: "Practical information about immigration, residence, AIMA and Portuguese nationality processes.",
    bannerAlt: "Portuguese passport and visa beside a suitcase at Lisbon airport",
    helpTitle: "How we can help",
    helpLine: "Visas, residence permits, renewals, family reunification and AIMA notices.",
    note: "Each process depends on the individual circumstances, the documents available and communications from the competent authorities.",
    listTitle: "Services in this area",
    listLead: "Choose the topic that matches your situation. All six areas are available below.",
    seeAlso: "See also",
    practical: "Practical points to confirm",
    more: "Read more",
    faqEyebrow: "Questions",
    faqTitle: "Frequently asked questions",
    ctaEyebrow: "Consultation",
    message: "Hello, I need help with Immigration and Visas.",
    breadcrumb: "Breadcrumb",
    faqs: [
      {
        q: "Can you guarantee approval of a visa or of nationality?",
        a: "No. No communication from this office should be read as a guarantee of outcome. The decision always rests with the competent authority.",
      },
      {
        q: "Do I need to be in Portugal to start?",
        a: "It depends on the type of application. Many processes start remotely, with scanned documents sent first and originals later when required.",
      },
      {
        q: "Can I apply for family reunification soon after arriving?",
        a: "It depends on the residence title and the applicable rules. Some situations involve waiting periods; others allow the process to move more quickly.",
      },
      {
        q: "Is a união de facto (de facto partnership) accepted?",
        a: "It can be, if it is properly evidenced under Portuguese law. The evidence is often the most sensitive point.",
      },
      {
        q: "Do you assist in English?",
        a: "Yes. Assistance is available in Portuguese and English.",
      },
    ],
  },
} as const;

export default function ImmigrationArea({ locale }: { locale: Locale }) {
  const t = text[locale];
  const copy = getCopy(locale);
  const shortTitles = immigrationItems[locale].map((item) => item.label);
  const international = getPracticeArea(locale, locale === "pt" ? "clientes-internacionais" : "international-clients");

  return (
    <>
      <PageBanner
        image="/images/services/imigracao-vistos.jpg"
        imageAlt={t.bannerAlt}
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        breadcrumbLabel={t.breadcrumb}
        crumbs={[
          { label: t.home, href: pathFor(locale, "home") },
          { label: t.services, href: pathFor(locale, "services") },
          { label: t.title },
        ]}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container grid max-w-[1240px] gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="block h-px w-8 bg-gold" aria-hidden="true" />
              {t.title}
            </p>
            <h2 className="mt-5 font-display text-[38px] leading-[1.08] font-medium text-navy sm:text-[46px]">{t.helpTitle}</h2>
            <p className="mt-6 text-[18px] leading-relaxed text-navy">{t.helpLine}</p>
            <p className="mt-4 text-[16.5px] leading-relaxed text-body-color">{t.note}</p>
            {international ? (
              <Link
                href={pathFor(locale, "internationalClients")}
                className="group mt-10 block border-l-2 border-gold bg-cream px-6 py-5 transition-colors hover:bg-cream-dark"
              >
                <span className="text-[11px] font-semibold tracking-[0.22em] text-gold-dark uppercase">{t.seeAlso}</span>
                <span className="mt-2 block font-display text-[22px] text-navy group-hover:text-gold-dark">
                  {locale === "pt" ? "Clientes Internacionais" : "International Clients"}{" "}
                  <span className="link-arrow inline-block" aria-hidden="true">→</span>
                </span>
                <span className="mt-1 block text-[15px] leading-relaxed text-body-color">{international.line[locale]}</span>
              </Link>
            ) : null}
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-[26px] text-navy">{t.listTitle}</h2>
            <p className="mt-2 text-[15.5px] text-body-color">{t.listLead}</p>
            <ol className="mt-6 border-b border-navy/12">
              {immigrationTopics.map((topic, index) => (
                <li key={topic.key} className="area-row border-t border-navy/12">
                  <a href={`#${topic.slug[locale]}`} className="group flex items-baseline gap-5 py-4">
                    <span className="font-display text-[20px] text-gold">{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex-1 font-display text-[20px] leading-snug text-navy group-hover:text-gold-dark sm:text-[21px]">
                      {shortTitles[index]}
                    </span>
                    <span className="area-row__arrow text-gold-dark" aria-hidden="true">↓</span>
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {immigrationTopics.map((topic, index) => (
        <section
          key={topic.key}
          id={topic.slug[locale]}
          className={`scroll-mt-24 py-20 md:py-24 ${index % 2 === 0 ? "bg-cream" : "bg-white"}`}
        >
          <div className="container max-w-[1240px]">
            <AlternatingRow index={index} image={`/images/services/subcards/${topic.image}.jpg`} imageAlt={topic.imageAlt[locale]} flip={index % 2 === 1}>
              <h2 className="font-display text-[32px] leading-[1.1] font-medium text-navy sm:text-[40px]">{shortTitles[index]}</h2>
              <span className="ornament mt-5 ml-0 w-24" aria-hidden="true">
                <span />
              </span>
              <p className="mt-5 text-[17px] leading-relaxed text-body-color">{topic.summary[locale]}</p>
              <p className="mt-7 text-[12px] font-semibold tracking-[0.2em] text-gold-dark uppercase">{t.practical}</p>
              <ul className="mt-3 space-y-3">
                {topic.points[locale].map((point) => (
                  <li key={point} className="flex gap-3 text-[15.5px] leading-relaxed text-navy/85">
                    <span className="mt-[11px] h-px w-4 shrink-0 bg-gold" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href={pathFor(locale, topic.key)}
                className="link-arrow mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-[13px] font-semibold tracking-[0.16em] text-navy uppercase hover:text-gold-dark"
              >
                {t.more} <span aria-hidden="true">→</span>
              </Link>
            </AlternatingRow>
          </div>
        </section>
      ))}

      <section className={`py-20 md:py-24 ${immigrationTopics.length % 2 === 0 ? "bg-cream" : "bg-white"}`}>
        <div className="container grid max-w-[1240px] gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="block h-px w-8 bg-gold" aria-hidden="true" />
              {t.faqEyebrow}
            </p>
            <h2 className="mt-5 font-display text-[36px] leading-[1.1] font-medium text-navy sm:text-[44px]">{t.faqTitle}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <FaqList items={t.faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand eyebrow={t.ctaEyebrow} title={copy.home.midCta} button={copy.home.midCtaButton} href={whatsappHref(t.message)} />
    </>
  );
}
