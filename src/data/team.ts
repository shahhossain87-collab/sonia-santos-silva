import type { Locale } from "@/i18n/locales";

export type TeamMember = {
  name?: string;
  role?: Record<Locale, string>;
  license?: Record<Locale, string>;
  bio?: string;
  photo: string;
  featured?: boolean;
};

export const team: TeamMember[] = [
  {
    name: "Sónia Santos da Silva",
    role: { pt: "Advogada", en: "Lawyer / Advogada" },
    license: {
      pt: "Cédula profissional 55852L",
      en: "Professional licence 55852L",
    },
    photo: "/images/team/sonia-santos.jpg",
    featured: true,
  },
  {
    name: "Armando Oliveira",
    role: {
      pt: "Solicitador e agente de execução",
      en: "Solicitor and enforcement agent / Solicitador e agente de execução",
    },
    photo: "/images/team/armando.jpg",
  },
  {
    name: "Carolina Mendes",
    role: { pt: "Solicitadora", en: "Solicitor / Solicitadora" },
    photo: "/images/team/carolina.jpg",
  },
  {
    name: "Kelvin Batista",
    role: { pt: "Assistente jurídico", en: "Legal assistant / Assistente jurídico" },
    photo: "/images/team/kelvin.jpg",
  },
  {
    name: "Nadir Meggy",
    role: { pt: "Coordenador de processos", en: "Case coordinator / Coordenador de processos" },
    photo: "/images/team/nadir.jpg",
  },
];
