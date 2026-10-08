import { site } from "@/config/site";
import type { Locale } from "@/i18n/locales";

export type TeamMember = {
  name?: string;
  role?: string;
  license?: string;
  bio?: string;
  photo: string;
  featured?: boolean;
};

export const team: TeamMember[] = [
  {
    name: "Sónia Santos da Silva",
    role: "Advogada",
    license: "Cédula Profissional n.º 55852L · Ordem dos Advogados",
    photo: "/images/team/sonia-santos.jpg",
    featured: true,
  },
  {
    name: "Armando Oliveira",
    role: "Solicitador e agente de execução",
    photo: "/images/team/armando.jpg",
  },
  {
    name: "Carolina Mendes",
    role: "Solicitadora",
    photo: "/images/team/carolina.jpg",
  },
  {
    name: "Kelvin Batista",
    role: "Assistente jurídico",
    photo: "/images/team/kelvin.jpg",
  },
  {
    name: "Nadir Meggy",
    role: "Coordenador de processos",
    photo: "/images/team/nadir.jpg",
  },
];

/** Professional licence line for Dra. Sónia, as shown across the site. */
export const licenceNumber = {
  pt: `Cédula Profissional n.º ${site.license}`,
  en: `Professional licence no. ${site.license}`,
} as const;

export const barAssociation = {
  pt: "Ordem dos Advogados",
  en: "Portuguese Bar Association (Ordem dos Advogados)",
} as const;

export const licenceLine = {
  pt: `${licenceNumber.pt} · ${barAssociation.pt}`,
  en: `${licenceNumber.en} · ${barAssociation.en}`,
} as const;

/** English role titles for the EN site. The Portuguese titles in `team` stay unchanged. */
const roleTitlesEn: Record<string, string> = {
  Advogada: "Lawyer",
  Advogado: "Lawyer",
  "Solicitador e agente de execução": "Solicitador (legal professional) and enforcement agent (agente de execução)",
  Solicitadora: "Solicitadora (Portuguese legal professional)",
  Solicitador: "Solicitador (Portuguese legal professional)",
  "Assistente jurídico": "Legal assistant",
  "Coordenador de processos": "Case coordinator",
};

export function memberRole(member: TeamMember, locale: Locale) {
  if (!member.role) return undefined;
  return locale === "en" ? (roleTitlesEn[member.role] ?? member.role) : member.role;
}

export function memberLicence(member: TeamMember, locale: Locale) {
  if (!member.license) return undefined;
  return member.featured ? licenceLine[locale] : member.license;
}
