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
    license: "Cédula profissional 55852L",
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
