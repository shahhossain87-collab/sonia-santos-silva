import ImmigrationArea from "@/components/ImmigrationArea";
import { site, whatsappHref } from "@/config/site";
import type { ImmigrationTopic } from "@/data/immigration";
import type { Locale } from "@/i18n/locales";
import { pathFor } from "@/i18n/routes";
import Image from "next/image";
import Link from "next/link";

const labels = {
  pt: {
    services: "Serviços",
    parent: "Imigração e Vistos",
    eyebrow: "Imigração",
    parentLead: "Informação prática sobre processos de imigração, residência, AIMA e nacionalidade portuguesa.",
    listLead: "Escolha o tema que corresponde à sua situação. As seis áreas estão disponíveis abaixo.",
    practicalTitle: "Pontos práticos a confirmar",
    note: "Cada processo depende da situação individual, dos documentos disponíveis e das comunicações das entidades competentes.",
    whatsapp: "Abrir WhatsApp",
    email: "Enviar e-mail",
  },
  en: {
    services: "Services",
    parent: "Immigration and Visas",
    eyebrow: "Immigration",
    parentLead: "Practical information about immigration, residence, AIMA and Portuguese nationality processes.",
    listLead: "Choose the topic that matches your situation. All six areas are available below.",
    practicalTitle: "Practical points to confirm",
    note: "Each process depends on the individual circumstances, the documents available and communications from the competent authorities.",
    whatsapp: "Open WhatsApp",
    email: "Send email",
  },
} as const;

function Breadcrumbs({
  locale,
  current,
  isParent = false,
}: {
  locale: Locale;
  current: string;
  isParent?: boolean;
}) {
  const copy = labels[locale];

  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/50">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href={pathFor(locale, "home")} className="hover:text-gold">
            {locale === "pt" ? "Início" : "Home"}
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-gold/50">/</span>
          <Link href={pathFor(locale, "services")} className="hover:text-gold">
            {copy.services}
          </Link>
        </li>
        {!isParent ? (
          <li className="flex items-center gap-2">
            <span className="text-gold/50">/</span>
            <Link href={pathFor(locale, "immigration")} className="hover:text-gold">
              {copy.parent}
            </Link>
          </li>
        ) : null}
        <li className="flex items-center gap-2">
          <span className="text-gold/50">/</span>
          <span className="text-gold">{current}</span>
        </li>
      </ol>
    </nav>
  );
}

function WhatsAppMark() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.3-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.2.7.7-3.1-.2-.3a9.1 9.1 0 1 1 7.6 4.2Zm5-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.6 11.5 11.5 0 0 0 4.4 3.9 15 15 0 0 0 1.5.5 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.2-.3-.2-.6-.3Z" />
    </svg>
  );
}

export function ImmigrationLandingPage({ locale }: { locale: Locale }) {
  return <ImmigrationArea locale={locale} />;
}

export function ImmigrationTopicPage({
  locale,
  topic,
}: {
  locale: Locale;
  topic: ImmigrationTopic;
}) {
  const copy = labels[locale];
  const message =
    locale === "pt"
      ? `Olá, preciso de ajuda com ${topic.title.pt}.`
      : `Hello, I need help with ${topic.title.en}.`;

  return (
    <>
      <section className="bg-navy py-8 text-white md:py-10">
        <div className="container">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Breadcrumbs locale={locale} current={topic.title[locale]} />
              <p className="gold-rule">{copy.eyebrow}</p>
              <h1 className="mt-3 max-w-3xl font-display text-3xl leading-tight md:text-4xl">
                {topic.title[locale]}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
                {topic.summary[locale]}
              </p>
            </div>
            <aside className="flex shrink-0 items-center gap-3 rounded-sm border border-white/20 px-3 py-2 text-white/80 sm:mt-1">
              <a
                href={whatsappHref(message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={copy.whatsapp}
                title={copy.whatsapp}
                className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#128C7E] text-white transition hover:bg-[#0e7a6e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <WhatsAppMark />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label={copy.email}
                className="text-xs underline-offset-4 hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {site.email}
              </a>
            </aside>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-12">
        <div className="container max-w-3xl">
          <div className="relative aspect-[16/8]">
            <Image
              src={`/images/services/subcards/${topic.image}.jpg`}
              alt={topic.imageAlt[locale]}
              fill
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover"
            />
          </div>
          <h2 className="mt-8 font-display text-3xl text-navy">{copy.practicalTitle}</h2>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-body-color">
            {topic.points[locale].map((point) => (
              <li key={point} className="border-l-2 border-gold pl-4">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-navy/10 pt-5 text-sm leading-relaxed text-body-color">
            {copy.note}
          </p>
        </div>
      </section>
    </>
  );
}
