import { getCopy } from "@/i18n/copy";
import { site } from "@/config/site";
import type { Locale } from "@/i18n/locales";

/**
 * Small labels used by the restructured homepage. Every factual statement
 * comes from existing site copy (src/i18n/copy.ts, src/config/site.ts,
 * src/data/*); these are only section labels and link texts.
 */
export const homeText = {
  pt: {
    heroTitle: "Advogada em Direito Penal, Imigração e Direito Civil",
    heroLanguages: "Português · English · Presencial em Lisboa e online",
    heroAreasAll: "Ver todas as áreas",
    heroAreas: "Áreas de atuação",
    addressLabel: "Morada",
    hoursLabel: "Horário",
    hoursShort: site.hours.pt,
    languagesLabel: "Idiomas",
    languages: "Português · Inglês",
    areasEyebrow: "Áreas de atuação",
    areasAll: "Ver todas as áreas",
    services: "serviços",
    more: "Ver mais",
    officeLink: "Conhecer o escritório",
    teamLink: "Conheça a equipa",
    phoneLabel: "Telefone / WhatsApp",
    emailLabel: "E-mail",
    formLink: "Prefere escrever? Fale connosco",
    city: "Lisboa · Portugal",
  },
  en: {
    heroTitle: "Lawyer in Criminal, Immigration and Civil Law",
    heroLanguages: "Portuguese · English · In person in Lisbon and online",
    heroAreasAll: "View all areas",
    heroAreas: "Areas of practice",
    addressLabel: "Address",
    hoursLabel: "Hours",
    hoursShort: site.hours.en,
    languagesLabel: "Languages",
    languages: "Portuguese · English",
    areasEyebrow: "Areas of practice",
    areasAll: "View all areas",
    services: "services",
    more: "Read more",
    officeLink: "About the office",
    teamLink: "Meet the team",
    phoneLabel: "Phone / WhatsApp",
    emailLabel: "Email",
    formLink: "Prefer to write? Talk to us",
    city: "Lisbon · Portugal",
  },
} as const satisfies Record<Locale, Record<string, string>>;

/** Practice-area descriptions for the homepage rows (existing site text). */
export const immigrationLine = {
  pt: "Vistos, autorização de residência, renovações, reagrupamento familiar e notificações da AIMA.",
  en: "Visas, residence permits, renewals, family reunification and AIMA notices.",
} as const;

/** Display titles for the nine practice areas, in Title Case for both languages. */
export function areaTitle(locale: Locale, id: string, fallback: string) {
  if (id === "clientes-internacionais") {
    return locale === "pt" ? "Clientes Internacionais" : "International Clients";
  }
  const cards = getCopy(locale).cards as Record<string, { title: string }>;
  return cards[id]?.title ?? fallback;
}
