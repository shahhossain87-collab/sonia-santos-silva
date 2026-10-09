import Reveal from "@/components/Reveal";
import { CtaBand, FaqList, PageBanner } from "@/components/InnerPage";
import { whatsappHref } from "@/config/site";
import type { ImmigrationTopic } from "@/data/immigration";
import type { TopicDetail } from "@/data/topic-details";
import { getCopy, immigrationItems } from "@/i18n/copy";
import type { Locale } from "@/i18n/locales";
import { pathFor } from "@/i18n/routes";
import Link from "next/link";

const labels = {
  pt: { home: "Início", services: "Serviços", parent: "Imigração e Vistos", breadcrumb: "Navegação estrutural", related: "Páginas relacionadas", back: "Ver todos os temas de Imigração e Vistos" },
  en: { home: "Home", services: "Services", parent: "Immigration and Visas", breadcrumb: "Breadcrumb", related: "Related pages", back: "See all Immigration and Visas topics" },
} as const;

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 ${light ? "eyebrow-light" : "eyebrow"}`}>
      <span className="block h-px w-8 bg-gold" aria-hidden="true" />
      {children}
    </p>
  );
}

/** Detailed immigration topic page in the inner-page template. */
export default function TopicDetailPage({
  locale,
  topic,
  detail,
}: {
  locale: Locale;
  topic: ImmigrationTopic;
  detail: TopicDetail;
}) {
  const t = labels[locale];
  const d = detail.text[locale];
  const copy = getCopy(locale);
  const shortTitle = immigrationItems[locale].find((item) => item.href === pathFor(locale, topic.key))?.label ?? topic.title[locale];
  const bodyIntro = d.bannerTitle ? d.intro.slice(1) : d.intro;
  const stepCols = d.steps.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";

  return (
    <>
      <PageBanner
        image={`/images/services/subcards/${topic.image}.jpg`}
        imageAlt={topic.imageAlt[locale]}
        eyebrow={t.parent}
        title={d.bannerTitle ?? shortTitle}
        lead={d.bannerTitle ? d.intro[0] : topic.summary[locale]}
        breadcrumbLabel={t.breadcrumb}
        crumbs={[
          { label: t.home, href: pathFor(locale, "home") },
          { label: t.services, href: pathFor(locale, "services") },
          { label: t.parent, href: pathFor(locale, "immigration") },
          { label: shortTitle },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container grid max-w-[1240px] gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>{t.parent}</Eyebrow>
            <h2 className="mt-5 font-display text-[34px] leading-[1.1] font-medium text-navy sm:text-[44px]">{d.introTitle}</h2>
            <span className="ornament mt-6 ml-0 w-24" aria-hidden="true">
              <span />
            </span>
            {bodyIntro.map((paragraph, index) => (
              <p key={paragraph} className={`text-[17px] leading-relaxed ${index === 0 ? "mt-6 text-navy" : "mt-4 text-body-color"}`}>
                {paragraph}
              </p>
            ))}
            <Link
              href={pathFor(locale, "immigration")}
              className="link-arrow mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-gold-dark hover:text-navy"
            >
              {t.back} <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border-t-2 border-gold bg-cream p-7 sm:p-9">
              <h2 className="font-display text-[28px] leading-tight text-navy sm:text-[32px]">{d.helpTitle}</h2>
              <ol className="mt-6 space-y-4">
                {d.help.map((item, index) => (
                  <li key={item} className="flex gap-4 text-[16px] leading-relaxed text-navy/90">
                    <span className="w-7 shrink-0 font-display text-[19px] leading-[1.45] text-gold">{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ol>
              <p className="mt-7 border-l-2 border-gold/70 pl-4 text-[14px] leading-relaxed text-body-color">{d.helpNote}</p>
            </div>
            {d.relatedTopics?.length ? (
              <nav aria-label={t.related} className="mt-8">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-dark uppercase">{t.related}</p>
                <ul className="mt-3 space-y-2.5">
                  {d.relatedTopics.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="link-arrow inline-flex items-start gap-2 text-[14px] font-semibold text-navy hover:text-gold-dark">
                        <span aria-hidden="true" className="text-gold">→</span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}
          </Reveal>
        </div>
      </section>

      <section className="azulejo-texture bg-cream py-16 md:py-24">
        <div className="container grid max-w-[1240px] gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-[calc(var(--site-header-height)+48px)] lg:self-start">
            <Eyebrow>{d.docsTag}</Eyebrow>
            <h2 className="mt-5 font-display text-[32px] leading-[1.1] font-medium text-navy sm:text-[40px]">{d.docsTitle}</h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-body-color">{d.docsLead}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {d.docs.map((doc) => (
                <li key={doc} className="flex gap-3 border border-navy/8 bg-white px-5 py-4 text-[15.5px] leading-relaxed text-navy/90">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                  {doc}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-gold/70 pl-4 text-[14px] leading-relaxed text-body-color">{d.docsNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container max-w-[1240px]">
          <Reveal>
            <Eyebrow>{shortTitle}</Eyebrow>
            <h2 className="mt-5 font-display text-[32px] leading-[1.1] font-medium text-navy sm:text-[40px]">{d.stepsTitle}</h2>
          </Reveal>
          <ol className={`mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 md:mt-14 ${stepCols}`}>
            {d.steps.map((step, index) => (
              <li key={step.title}>
                <Reveal delay={Math.min(index, 4) * 0.06} className="h-full border-t border-navy/12 pt-6">
                  <span className="block font-display text-[40px] leading-none text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-display text-[21px] leading-snug text-navy">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-body-color">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container grid max-w-[1240px] gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20">
          <Reveal>
            <Eyebrow>{shortTitle}</Eyebrow>
            <h2 className="mt-5 font-display text-[34px] leading-[1.1] font-medium text-navy sm:text-[42px]">{d.faqTitle}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <FaqList items={d.faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand eyebrow={d.ctaEyebrow} title={d.ctaTitle} lead={d.ctaLead} button={copy.home.presenceBookCta} href={whatsappHref(d.message)} />
    </>
  );
}
