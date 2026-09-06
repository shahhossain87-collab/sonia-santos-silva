import { Menu } from "@/types/menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Início",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "O Escritório",
    path: "/o-escritorio",
    newTab: false,
  },
  {
    id: 3,
    title: "Nacionalidade",
    newTab: false,
    mega: true,
    intro: {
      title: "Nacionalidade portuguesa",
      description:
        "Análise do enquadramento e acompanhamento do pedido, sem garantia de resultado.",
      path: "/servicos/nacionalidade",
    },
    submenu: [
      {
        id: 31,
        title: "Nacionalidade portuguesa",
        path: "/servicos/nacionalidade",
        description: "Visão geral dos pedidos e da instrução do processo.",
      },
      {
        id: 32,
        title: "Por descendência",
        path: "/servicos/nacionalidade#descendencia",
        description: "Filhos, netos e outros vínculos de origem portuguesa.",
      },
      {
        id: 33,
        title: "Por casamento ou união",
        path: "/servicos/nacionalidade#casamento",
        description: "Cônjuges e unidos de facto, com análise caso a caso.",
      },
      {
        id: 34,
        title: "Por residência",
        path: "/servicos/nacionalidade#residencia",
        description: "Naturalização após tempo de residência legal em Portugal.",
      },
    ],
  },
  {
    id: 4,
    title: "Vistos",
    newTab: false,
    mega: true,
    intro: {
      title: "Vistos de residência",
      description:
        "Orientação sobre requisitos, documentação e tramitação junto das entidades competentes.",
      path: "/servicos",
    },
    submenu: [
      {
        id: 41,
        title: "Visto D7",
        path: "/servicos/visto-d7",
        description: "Residência para rendimentos, reforma ou trabalho remoto.",
      },
      {
        id: 42,
        title: "Visto D2",
        path: "/servicos/visto-d2",
        description: "Atividade independente, empreendedorismo e investimento.",
      },
      {
        id: 43,
        title: "Todos os serviços",
        path: "/servicos",
        description: "Lista completa de vistos e residência.",
      },
    ],
  },
  {
    id: 5,
    title: "Outros Serviços",
    newTab: false,
    mega: true,
    intro: {
      title: "Apoio complementar",
      description:
        "Família, residência e documentação — sempre com informação geral e avaliação individual.",
      path: "/servicos",
    },
    submenu: [
      {
        id: 51,
        title: "Reagrupamento familiar",
        path: "/servicos/reagrupamento",
        description: "Reunir familiares com quem já reside legalmente em Portugal.",
      },
      {
        id: 52,
        title: "Serviços de imigração",
        path: "/servicos",
        description: "Residência, documentação e consultas jurídicas.",
      },
      {
        id: 53,
        title: "Perguntas frequentes",
        path: "/faq",
        description: "Respostas gerais — não substituem consulta.",
      },
    ],
  },
  {
    id: 6,
    title: "Contacto",
    path: "/contato",
    newTab: false,
  },
];

export const footerNav = {
  escritorio: [
    { title: "O Escritório", path: "/o-escritorio" },
    { title: "Equipa", path: "/o-escritorio#equipa" },
    { title: "Blog", path: "/blog" },
    { title: "FAQ", path: "/faq" },
  ],
  servicos: [
    { title: "Todos os serviços", path: "/servicos" },
    { title: "Nacionalidade", path: "/servicos/nacionalidade" },
    { title: "Visto D7", path: "/servicos/visto-d7" },
    { title: "Visto D2", path: "/servicos/visto-d2" },
    { title: "Reagrupamento", path: "/servicos/reagrupamento" },
  ],
  legal: [
    { title: "Privacidade", path: "/privacidade" },
    { title: "Cookies", path: "/cookies" },
    { title: "Contacto", path: "/contato" },
  ],
};
