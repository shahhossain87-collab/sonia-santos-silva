export const site = {
  lawyerName: "Sónia Santos Silva",
  title: "Sónia Santos Silva — Advogada",
  shortName: "Sónia Santos Silva",
  role: "Advogada",
  license: "55852L",
  nif: "221986286",
  tagline: "Imigração, residência e nacionalidade em Portugal.",
  description:
    "Acompanhamento jurídico em Portugal para nacionalidade, vistos de residência e reagrupamento familiar. Informação clara, sem garantia de resultado.",
  locale: "pt-PT",
  url: "https://www.soniasantossilva.pt",
  email: "soniasantosdasilva-55852l@adv.oa.pt",
  phoneDisplay: "+351 913 724 450",
  phoneDigits: "351913724450",
  whatsappMessage:
    "Olá, gostaria de agendar uma consulta sobre imigração em Portugal.",
  addressLine: "Rua Abranches Ferrão, 11 A, 1600-296 Lisboa",
  city: "Lisboa",
  hours: "Segunda a sexta, 10h–18h (hora de Lisboa)",
  languages: ["Português", "Inglês"],
  disclaimer:
    "A informação neste sítio não constitui aconselhamento jurídico nem garantia de resultado. Cada processo depende da análise do caso concreto e da decisão das autoridades competentes.",
} as const;

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  site.addressLine,
)}&hl=pt&z=17&output=embed`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.addressLine,
)}`;

export const whatsappUrl = `https://wa.me/${site.phoneDigits}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export function whatsappHref(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.phoneDigits}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { id: "inicio", title: "Início", href: "/" },
  { id: "escritorio", title: "O Escritório", href: "/o-escritorio" },
  {
    id: "nacionalidade",
    title: "Nacionalidade",
    href: "/nacionalidade",
    columns: [
      {
        heading: "Nacionalidade portuguesa",
        items: [
          {
            title: "Visão geral",
            description: "Caminhos legais para a nacionalidade e o que analisar primeiro.",
            href: "/nacionalidade",
          },
          {
            title: "Por descendência",
            description: "Filiação, avós e documentação de origem.",
            href: "/nacionalidade#descendencia",
          },
          {
            title: "Por casamento ou união",
            description: "Requisitos de prazo, ligação efetiva e prova documental.",
            href: "/nacionalidade#casamento",
          },
          {
            title: "Por residência",
            description: "Naturalização após tempo legal de residência em Portugal.",
            href: "/nacionalidade#residencia",
          },
        ],
      },
    ],
  },
  {
    id: "vistos",
    title: "Vistos",
    href: "/servicos",
    columns: [
      {
        heading: "Residência em Portugal",
        items: [
          {
            title: "Visto D7",
            description: "Rendimentos, reforma ou trabalho remoto com meios de subsistência.",
            href: "/visto-d7",
          },
          {
            title: "Visto D2",
            description: "Empreendedores, constituição de atividade e plano de negócio.",
            href: "/visto-d2",
          },
          {
            title: "Todos os serviços",
            description: "Mapa das áreas de atuação do escritório.",
            href: "/servicos",
          },
        ],
      },
    ],
  },
  {
    id: "outros",
    title: "Outros Serviços",
    href: "/servicos",
    columns: [
      {
        heading: "Família e documentação",
        items: [
          {
            title: "Reagrupamento familiar",
            description: "Reunir cônjuge, filhos ou outros familiares elegíveis.",
            href: "/reagrupamento",
          },
          {
            title: "Autorização de residência",
            description: "Pedidos, renovações e acompanhamento junto das entidades.",
            href: "/servicos#residencia",
          },
          {
            title: "Perguntas frequentes",
            description: "Respostas claras sobre prazos, documentos e consultas.",
            href: "/faq",
          },
        ],
      },
    ],
  },
  { id: "contato", title: "Contacto", href: "/contato" },
] as const;

export const footerLinks = {
  escritorio: [
    { title: "O Escritório", href: "/o-escritorio" },
    { title: "Serviços", href: "/servicos" },
    { title: "Equipa", href: "/o-escritorio#equipa" },
    { title: "Contacto", href: "/contato" },
  ],
  areas: [
    { title: "Nacionalidade", href: "/nacionalidade" },
    { title: "Visto D7", href: "/visto-d7" },
    { title: "Visto D2", href: "/visto-d2" },
    { title: "Reagrupamento", href: "/reagrupamento" },
  ],
  legal: [
    { title: "Perguntas frequentes", href: "/faq" },
    { title: "Privacidade", href: "/privacidade" },
    { title: "Cookies", href: "/cookies" },
    { title: "Blog", href: "/blog" },
  ],
} as const;

export const metrics = [
  { value: "2", label: "Idiomas", note: "Português e inglês" },
  { value: "PT", label: "Portugal", note: "Atendimento com marcação" },
] as const;

export const homeServiceCards = [
  {
    title: "Nacionalidade",
    blurb: "Descendência, casamento ou residência.",
    href: "/nacionalidade",
    image: "/images/home/card-nacionalidade.jpg",
  },
  {
    title: "Visto D7",
    blurb: "Rendimentos, reforma ou residência.",
    href: "/visto-d7",
    image: "/images/home/card-d7.jpg",
  },
  {
    title: "Visto D2",
    blurb: "Atividade e empreendedorismo.",
    href: "/visto-d2",
    image: "/images/home/card-d2.jpg",
  },
  {
    title: "Reagrupamento",
    blurb: "Reunir cônjuge, filhos ou família.",
    href: "/reagrupamento",
    image: "/images/home/card-familia.jpg",
  },
] as const;

export const serviceCards = [
  {
    title: "Nacionalidade portuguesa",
    text: "Descendência, casamento ou residência.",
    href: "/nacionalidade",
    tags: ["Descendência", "Casamento", "Residência"],
  },
  {
    title: "Visto D7",
    text: "Residência para quem dispõe de rendimentos, pensão ou meios de subsistência estáveis.",
    href: "/visto-d7",
    tags: ["Rendimentos", "Reforma", "Residência"],
  },
  {
    title: "Visto D2",
    text: "Apoio a quem pretende criar ou transferir atividade económica para Portugal.",
    href: "/visto-d2",
    tags: ["Empreender", "Empresa", "Plano"],
  },
  {
    title: "Reagrupamento familiar",
    text: "Orientação para reunir a família com base no direito de residência já constituído.",
    href: "/reagrupamento",
    tags: ["Cônjuge", "Filhos", "Família"],
  },
  {
    title: "Autorização de residência",
    text: "Pedidos, renovações e organização documental junto das entidades competentes.",
    href: "/servicos#residencia",
    tags: ["Renovação", "AIMA", "Documentos"],
  },
  {
    title: "Consultas e documentação",
    text: "Esclarecimento jurídico e preparação de peças, sempre com avaliação individual do caso.",
    href: "/contato",
    tags: ["Consulta", "NIF", "Documentos"],
  },
] as const;
