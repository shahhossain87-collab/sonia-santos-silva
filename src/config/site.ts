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
  { id: "servicos", title: "Serviços", href: "/servicos" },
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
    { title: "Imigração e Vistos", href: "/servicos#imigracao" },
    { title: "Nacionalidade Portuguesa", href: "/servicos/nacionalidade" },
    { title: "Arrendamento", href: "/servicos#arrendamento" },
    { title: "Recuperação de Crédito", href: "/servicos#recuperacao-credito" },
    { title: "Direito das Sociedades", href: "/servicos#sociedades" },
    { title: "Património e Sucessões", href: "/servicos#patrimonio" },
  ],
  legal: [
    { title: "Perguntas frequentes", href: "/faq" },
    { title: "Privacidade", href: "/privacidade" },
    { title: "Cookies", href: "/cookies" },
  ],
} as const;

export const metrics = [
  { value: "2", label: "Idiomas", note: "Português e inglês" },
  { value: "PT", label: "Portugal", note: "Atendimento com marcação" },
] as const;

export const homeServiceCards = [
  {
    title: "Imigração e Vistos",
    blurb: "Visto D2, Visto D7, AIMA, residência, renovações e reagrupamento.",
    href: "/servicos#imigracao",
    image: "/images/home/card-d7.jpg",
  },
  {
    title: "Nacionalidade Portuguesa",
    blurb: "Pedidos de nacionalidade portuguesa.",
    href: "/servicos/nacionalidade",
    image: "/images/home/card-nacionalidade.jpg",
  },
  {
    title: "Arrendamento",
    blurb: "Questões de arrendamento.",
    href: "/servicos#arrendamento",
    image: "/images/home/office.jpg",
  },
  {
    title: "Recuperação de Crédito",
    blurb: "Recuperação de créditos.",
    href: "/servicos#recuperacao-credito",
    image: "/images/home/desk.jpg",
  },
  {
    title: "Direito das Sociedades",
    blurb: "Direito das sociedades.",
    href: "/servicos#sociedades",
    image: "/images/home/meeting.jpg",
  },
  {
    title: "Património e Sucessões",
    blurb: "Património e sucessões.",
    href: "/servicos#patrimonio",
    image: "/images/home/about-books.jpg",
  },
] as const;

export const serviceCards = [
  {
    title: "Imigração e Vistos",
    text: "Visto D2, Visto D7, AIMA, residência, renovações e reagrupamento.",
    href: "/servicos#imigracao",
    tags: ["D2", "D7", "AIMA"],
  },
  {
    title: "Nacionalidade Portuguesa",
    text: "Pedidos de nacionalidade portuguesa.",
    href: "/servicos/nacionalidade",
    tags: ["Nacionalidade"],
  },
  {
    title: "Arrendamento",
    text: "Questões de arrendamento.",
    href: "/servicos#arrendamento",
    tags: ["Arrendamento"],
  },
  {
    title: "Recuperação de Crédito",
    text: "Recuperação de créditos.",
    href: "/servicos#recuperacao-credito",
    tags: ["Crédito"],
  },
  {
    title: "Direito das Sociedades",
    text: "Direito das sociedades.",
    href: "/servicos#sociedades",
    tags: ["Sociedades"],
  },
  {
    title: "Património e Sucessões",
    text: "Património e sucessões.",
    href: "/servicos#patrimonio",
    tags: ["Património"],
  },
] as const;
