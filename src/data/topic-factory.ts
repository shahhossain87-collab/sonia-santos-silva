import type { TopicDetail, TopicDetailText } from "@/data/topic-details";
import type { Locale } from "@/i18n/locales";

const shell = {
  pt: {
    helpTitle: "Em que podemos ajudar",
    helpNote:
      "O acompanhamento não garante o deferimento nem qualquer outro resultado. Quando a decisão cabe a uma autoridade ou a um tribunal, é dessa entidade.",
    docsTitle: "Documentos habitualmente necessários",
    docsTag: "Indicativo",
    docsNote:
      "Lista indicativa. Os documentos, os prazos e a forma de apresentação dependem do caso concreto e das regras em vigor na data do pedido.",
    stepsTitle: "Como funciona",
    faqTitle: "Perguntas frequentes",
    ctaEyebrow: "Análise inicial",
  },
  en: {
    helpTitle: "How we can help",
    helpNote:
      "Our assistance does not guarantee approval or any other outcome. Where an authority or a court decides, the decision is theirs.",
    docsTitle: "Documents usually required",
    docsTag: "Indicative",
    docsNote:
      "This list is indicative. Documents, deadlines and how they must be filed depend on the individual case and on the rules in force on the date of the application.",
    stepsTitle: "How it works",
    faqTitle: "Frequently asked questions",
    ctaEyebrow: "Initial review",
  },
} as const;

export type TopicBody = {
  bannerTitle: string;
  introTitle: string;
  intro: readonly string[];
  help: readonly string[];
  docsLead: string;
  docs: readonly string[];
  steps: readonly { title: string; text: string }[];
  faqs: readonly { q: string; a: string }[];
  ctaTitle: string;
  ctaLead: string;
  message: string;
};

export function topicDetail(meta: { pt: string; en: string }, pt: TopicBody, en: TopicBody): TopicDetail {
  const fill = (locale: Locale, body: TopicBody): TopicDetailText => ({
    ...shell[locale],
    ...body,
  });
  return { metaDescription: meta, text: { pt: fill("pt", pt), en: fill("en", en) } };
}
