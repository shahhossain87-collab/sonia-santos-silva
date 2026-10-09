import { getCopy } from "@/i18n/copy";
import type { Locale } from "@/i18n/locales";

/**
 * Small labels used by the restructured homepage. Every factual statement
 * comes from existing site copy (src/i18n/copy.ts, src/config/site.ts,
 * src/data/*); these are only section labels and link texts.
 */
export const homeText = {
  pt: {
    heroEyebrow: "Gabinete Jurídico Laranjeiras · Lisboa",
    heroTitle: "Advogada em Direito Penal, Imigração e Direito Civil",
    heroPrefix: "Advogada em",
    heroTitleRest: "Direito Penal, Imigração e Direito Civil",
    heroLead: "Para pessoas, famílias e empresas. Atendimento em português e inglês.",
    heroAttendance: "Atendimento presencial em Lisboa e online em todo o país.",
    heroAreasAll: "Ver todas as áreas",
    heroAreas: "Áreas de atuação",
    addressLabel: "Morada",
    hoursLabel: "Horário",
    hoursShort: "Segunda a sexta, 10h–18h",
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
    heroEyebrow: "Gabinete Jurídico Laranjeiras · Lisbon",
    heroTitle: "Lawyer in Criminal, Immigration and Civil Law",
    heroPrefix: "Lawyer in",
    heroTitleRest: "Criminal, Immigration and Civil Law",
    heroLead: "For individuals, families and businesses. Assistance in Portuguese and English.",
    heroAttendance: "In person in Lisbon and online throughout Portugal.",
    heroAreasAll: "View all areas",
    heroAreas: "Areas of practice",
    addressLabel: "Address",
    hoursLabel: "Hours",
    hoursShort: "Monday to Friday, 10:00–18:00",
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
