export type ServiceCard = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  href: string;
  tags: string[];
};

export const featuredServices: ServiceCard[] = [
  {
    slug: "nacionalidade",
    eyebrow: "Cidadania",
    title: "Nacionalidade portuguesa",
    summary:
      "Análise do enquadramento legal e acompanhamento do pedido junto das entidades competentes.",
    href: "/servicos/nacionalidade",
    tags: ["Descendência", "Casamento", "Residência"],
  },
  {
    slug: "visto-d7",
    eyebrow: "Residência",
    title: "Visto D7",
    summary:
      "Orientação sobre requisitos de meios de subsistência, alojamento e tramitação consular.",
    href: "/servicos/visto-d7",
    tags: ["Reforma", "Rendimentos", "Residência"],
  },
  {
    slug: "visto-d2",
    eyebrow: "Atividade",
    title: "Visto D2",
    summary:
      "Apoio a quem pretende desenvolver atividade independente ou empresarial em Portugal.",
    href: "/servicos/visto-d2",
    tags: ["Empresa", "Prestação de serviços"],
  },
  {
    slug: "reagrupamento",
    eyebrow: "Família",
    title: "Reagrupamento familiar",
    summary:
      "Acompanhamento de pedidos para reunir familiares com quem já reside legalmente no país.",
    href: "/servicos/reagrupamento",
    tags: ["Cônjuge", "Filhos", "Dependentes"],
  },
];

export const extraServiceCards: ServiceCard[] = [
  {
    slug: "residencia",
    eyebrow: "AIMA",
    title: "Autorização de residência",
    summary:
      "Informação sobre pedidos, renovações e organização documental. Tramitação sujeita à prática das entidades.",
    href: "/servicos",
    tags: ["Renovação", "Documentos"],
  },
  {
    slug: "documentacao",
    eyebrow: "Apoio",
    title: "Documentação e consultas",
    summary:
      "Esclarecimento jurídico e preparação de peças, sempre com avaliação individual do caso.",
    href: "/contato",
    tags: ["Consulta", "NIF", "Documentos"],
  },
];

export const allServiceCards = [...featuredServices, ...extraServiceCards];

export const metrics = [
  {
    value: "—",
    label: "Anos de prática",
    note: "Indicador a confirmar",
  },
  {
    value: "—",
    label: "Processos acompanhados",
    note: "Indicador a confirmar",
  },
  {
    value: "PT",
    label: "Atendimento em português",
    note: "Outros idiomas a confirmar",
  },
  {
    value: "PT",
    label: "Sede em Portugal",
    note: "Morada a confirmar",
  },
];

export type TeamMember = {
  name?: string;
  role?: string;
  license?: string;
  bio?: string;
  initials?: string;
  photo: string;
  featured?: boolean;
};

export const team: TeamMember[] = [
  {
    name: "Sónia Santos da Silva",
    role: "Advogada",
    license: "Cédula profissional 55852L",
    bio: "Acompanhamento em nacionalidade, vistos e residência em Portugal.",
    initials: "SSS",
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

export const officeVisuals = [
  {
    src: "/images/office/01-reception.jpg",
    alt: "Visualização da recepção compacta, com secretária em nogueira e vista para o gabinete vidrado.",
    label: "Recepção",
  },
  {
    src: "/images/office/02-sonia-cabin.jpg",
    alt: "Visualização do gabinete vidrado junto à recepção, com secretária e cadeiras de consulta.",
    label: "Gabinete",
  },
  {
    src: "/images/office/03-corridor-armando.jpg",
    alt: "Visualização do corredor, com um gabinete à esquerda e a sala de reuniões ao fundo.",
    label: "Corredor",
  },
  {
    src: "/images/office/04-conference.jpg",
    alt: "Visualização da sala de consultas alongada, com mesa longa e estante de livros.",
    label: "Sala de consultas",
  },
  {
    src: "/images/office/05-establishing.jpg",
    alt: "Vista de conjunto da recepção, do gabinete vidrado e do corredor até à sala de reuniões.",
    label: "Vista geral",
  },
] as const;

export const officeVisualDisclaimer =
  "Imagens de visualização arquitectónica inspiradas na descrição do escritório em Laranjeiras. Não são fotografias das instalações existentes.";

export const testimonials = [
  {
    quote:
      "Espaço reservado para um depoimento real, após autorização escrita do cliente.",
    author: "Nome a confirmar",
    origin: "Depoimento ilustrativo",
  },
  {
    quote:
      "Os testemunhos publicados neste sítio serão de clientes reais e não constituem garantia de resultado noutros processos.",
    author: "Nome a confirmar",
    origin: "Depoimento ilustrativo",
  },
  {
    quote:
      "Até à recolha de avaliações, esta secção permanece como estrutura visual.",
    author: "Nome a confirmar",
    origin: "Depoimento ilustrativo",
  },
];
