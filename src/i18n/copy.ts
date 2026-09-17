import type { Locale } from "./locales";
import { pathFor } from "./routes";

export const homeServiceIds = [
  "imigracao",
  "nacionalidade",
  "arrendamento",
  "recuperacao-credito",
  "sociedades",
  "patrimonio",
] as const;

export type HomeServiceId = (typeof homeServiceIds)[number];

export const extraServiceIds = ["penal", "administrativo"] as const;

export type ServiceId = HomeServiceId | (typeof extraServiceIds)[number];

const immigrationItems = {
  pt: [
    { label: "Visto D2", href: "/servicos/visto-d2" },
    { label: "Visto D7", href: "/servicos/visto-d7" },
    { label: "AIMA" },
    { label: "Autorizações de residência" },
    { label: "Renovações" },
    { label: "Reagrupamento familiar", href: "/servicos/reagrupamento" },
  ],
  en: [
    { label: "D2 visa" },
    { label: "D7 visa" },
    { label: "AIMA" },
    { label: "Residence permits" },
    { label: "Renewals" },
    { label: "Family reunification" },
  ],
} as const;

export const ui = {
  pt: {
    nav: [
      { id: "inicio", title: "Início", href: pathFor("pt", "home") },
      { id: "escritorio", title: "O Escritório", href: pathFor("pt", "about") },
      { id: "servicos", title: "Serviços", href: pathFor("pt", "services") },
      { id: "contato", title: "Contacto", href: pathFor("pt", "contact") },
    ],
    header: {
      kicker: "Portugal · Lisboa",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      talk: "Fale connosco",
      languageLabel: "Idioma",
      portuguese: "PT",
      english: "EN",
    },
    footer: {
      office: "Escritório",
      areas: "Áreas",
      contact: "Contacto",
      tagline: "Acompanhamento jurídico em Lisboa, em português e inglês.",
      rights: "Todos os direitos reservados.",
      officeLinks: [
        { title: "O Escritório", href: pathFor("pt", "about") },
        { title: "Serviços", href: pathFor("pt", "services") },
        { title: "Equipa", href: `${pathFor("pt", "about")}#equipa` },
        { title: "Contacto", href: pathFor("pt", "contact") },
      ],
      legalLinks: [
        { title: "Perguntas frequentes", href: "/faq" },
        { title: "Privacidade", href: "/privacidade" },
        { title: "Cookies", href: "/cookies" },
      ],
    },
    home: {
      heroKicker: "Lisboa",
      heroTitle: "Um escritório em Lisboa.",
      heroLead: "Acompanhamento jurídico em português e inglês.",
      heroNote: "Análise caso a caso — sem garantia de resultado.",
      heroServices: "Ver serviços",
      heroTalk: "Fale connosco",
      heroWhatsapp: "Olá, gostaria de agendar uma consulta.",
      heroPortraitAlt: "Sónia Santos da Silva, advogada.",
      heroRole: "Advogada",
      heroLicense: "Cédula profissional",
      metrics: ["Português e inglês", "Escritório em Portugal", "Atendimento com marcação"],
      servicesEyebrow: "Áreas",
      servicesTitle: "Serviços",
      servicesMore: "Saber mais →",
      aboutEyebrow: "O escritório",
      aboutTitle: "Acompanhamento próximo, sem atalhos.",
      aboutCta: "O escritório",
      aboutPoints: [
        { title: "Caso concreto", text: "Documentos, prazos, objetivo." },
        { title: "Linguagem clara", text: "O que a lei permite — e o que falta." },
        { title: "Acompanhamento", text: "Da consulta à instrução." },
      ],
      midCta: "Esclareça o enquadramento antes de avançar.",
      midCtaButton: "Pedir uma consulta",
      conversionEyebrow: "Consulta",
      conversionTitle: "Vamos falar do seu próximo passo.",
      conversionForm: "Formulário",
      teamEyebrow: "Equipa",
      teamTitle: "A equipa",
      teamGroupAlt: "A equipa do Gabinete Jurídico Laranjeiras.",
      teamFallbackAlt: "Membro da equipa do escritório",
      testimonialsEyebrow: "Testemunhos",
      testimonialsTitle: "Avaliações reais, quando autorizadas.",
      officeEyebrow: "Lisboa",
      officeTitle: "Escritório em Portugal",
      officeCta: "Marcar conversa",
      hours: "Segunda a sexta, 10h–18h (hora de Lisboa)",
      presenceTitle: "O escritório em Lisboa",
      presenceLead:
        "Gabinete Jurídico Laranjeiras. Atendimento jurídico presencial em Lisboa, em português e inglês.",
      presenceLocation: "Laranjeiras · Lisboa",
      presenceMapCta: "Ver localização",
      presenceBookCta: "Marcar consulta",
      presenceImageAlt: "Fachada do Gabinete Jurídico Laranjeiras em Lisboa.",
    },
    servicesPage: {
      eyebrow: "Áreas",
      title: "Serviços",
      description:
        "Informação geral sobre as áreas de atuação. Cada processo é autónomo: a leitura destas páginas não cria mandato nem garante deferimento.",
      intro:
        "Abaixo encontram-se as áreas em que o escritório presta informação e acompanhamento. Não se descrevem aqui requisitos, prazos ou resultados.",
      immigrationNote: "Nesta área incluem-se, entre outros:",
      moreWhenReady: "Informação específica será publicada nesta página. Até lá, o contacto inicial ajuda a perceber se o assunto se enquadra.",
      contact: "Falar connosco",
    },
    aboutPage: {
      eyebrow: "Sobre",
      title: "O escritório",
      description:
        "Escritório em Lisboa, em Laranjeiras. Acompanhamento jurídico em português e inglês.",
      licensePrefix: "cédula profissional",
      missionTitle: "Missão e método",
      mission: [
        "O trabalho começa por ouvir a história do cliente e identificar o enquadramento legal possível. Só depois se organiza a prova e se decide se e como avançar com um pedido.",
        "Não se publicam taxas de aprovação nem prazos de decisão. O resultado de cada processo depende de lei, de prova e de decisões administrativas ou judiciais que o mandatário não controla.",
        "A comunicação pretende ser clara: o que é requisito, o que é risco e o que depende de terceiros.",
      ],
      values: [
        {
          title: "Independência profissional",
          text: "Análise jurídica própria, sem copiar modelos de marketing de outros escritórios.",
        },
        {
          title: "Confidencialidade",
          text: "Dados e documentos tratados com reserva, nos termos da lei e da deontologia.",
        },
        {
          title: "Transparência de custos",
          text: "Honorários e despesas explicados por escrito antes do início do mandato.",
        },
      ],
      schedule: "Agendar conversa",
      galleryEyebrow: "Laranjeiras",
      galleryTitle: "O espaço de trabalho",
      galleryDisclaimer:
        "Imagens de visualização arquitectónica inspiradas na descrição do escritório em Laranjeiras. Não são fotografias das instalações existentes.",
    },
    contactPage: {
      eyebrow: "Contacto",
      title: "Fale connosco",
      description:
        "Descreva a sua situação. O primeiro contacto ajuda a perceber se o assunto se enquadra nas áreas de atuação.",
      detailsTitle: "Dados de contacto",
      whatsapp: "WhatsApp",
      email: "E-mail",
      address: "Morada",
      license: "Cédula",
      nif: "NIF",
      hours: "Horário",
      mapTitle: "Como chegar",
      mapLead: "Escritório em Lisboa, junto à Loja do Cidadão de Laranjeiras.",
    },
    form: {
      name: "Nome",
      email: "E-mail",
      phone: "Telefone",
      subject: "Assunto",
      message: "Mensagem",
      submit: "Enviar para WhatsApp",
      prefix: "Pedido de contacto via sítio web",
      notice:
        "Ao enviar, abre o WhatsApp com a mensagem preenchida. Não envie documentos sensíveis neste formulário.",
      fallback:
        "Se o WhatsApp não abriu, utilize o botão flutuante ou o número indicado.",
      subjects: [
        "Imigração e Vistos",
        "Nacionalidade Portuguesa",
        "Arrendamento",
        "Recuperação de Crédito",
        "Direito das Sociedades",
        "Património e Sucessões",
        "Outro",
      ],
    },
    common: {
      breadcrumb: "Navegação estrutural",
      whatsapp: "Falar no WhatsApp",
      whatsappFloat: "Falar no WhatsApp",
      cookies: "Cookies técnicos.",
      privacy: "Privacidade",
      cookieOk: "OK",
    },
    meta: {
      homeTitle: "Gabinete Jurídico Laranjeiras",
      homeDescription:
        "Gabinete Jurídico Laranjeiras. Acompanhamento jurídico em Lisboa, em português e inglês. Informação clara, sem garantia de resultado.",
      aboutTitle: "O Escritório",
      aboutDescription:
        "Escritório em Lisboa. Informação geral, sem garantia de resultado.",
      contactTitle: "Contacto",
      contactDescription: "Contacto por WhatsApp, e-mail ou formulário.",
      servicesTitle: "Serviços",
      servicesDescription:
        "Imigração e vistos, nacionalidade portuguesa, arrendamento, recuperação de crédito, direito das sociedades, património e sucessões.",
    },
    cards: {
      imigracao: {
        title: "Imigração e Vistos",
        blurb: "Visto D2, Visto D7, AIMA, residência, renovações e reagrupamento.",
      },
      nacionalidade: {
        title: "Nacionalidade Portuguesa",
        blurb: "Pedidos de nacionalidade portuguesa.",
      },
      arrendamento: {
        title: "Arrendamento",
        blurb: "Questões de arrendamento.",
      },
      "recuperacao-credito": {
        title: "Recuperação de Crédito",
        blurb: "Recuperação de créditos.",
      },
      sociedades: {
        title: "Direito das Sociedades",
        blurb: "Direito das sociedades.",
      },
      patrimonio: {
        title: "Património e Sucessões",
        blurb: "Património e sucessões.",
      },
    },
    extraServices: {
      penal: { title: "Direito Penal" },
      administrativo: { title: "Direito Administrativo" },
    },
  },
  en: {
    nav: [
      { id: "inicio", title: "Home", href: pathFor("en", "home") },
      { id: "escritorio", title: "About", href: pathFor("en", "about") },
      { id: "servicos", title: "Services", href: pathFor("en", "services") },
      { id: "contato", title: "Contact", href: pathFor("en", "contact") },
    ],
    header: {
      kicker: "Portugal · Lisbon",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      talk: "Talk to us",
      languageLabel: "Language",
      portuguese: "PT",
      english: "EN",
    },
    footer: {
      office: "Office",
      areas: "Areas",
      contact: "Contact",
      tagline: "Legal support in Lisbon, in Portuguese and English.",
      rights: "All rights reserved.",
      officeLinks: [
        { title: "About", href: pathFor("en", "about") },
        { title: "Services", href: pathFor("en", "services") },
        { title: "Team", href: `${pathFor("en", "about")}#equipa` },
        { title: "Contact", href: pathFor("en", "contact") },
      ],
      legalLinks: [
        { title: "FAQ", href: "/faq" },
        { title: "Privacy", href: "/privacidade" },
        { title: "Cookies", href: "/cookies" },
      ],
    },
    home: {
      heroKicker: "Lisbon",
      heroTitle: "A law office in Lisbon.",
      heroLead: "Legal support in Portuguese and English.",
      heroNote: "Case-by-case review — no guarantee of outcome.",
      heroServices: "View services",
      heroTalk: "Talk to us",
      heroWhatsapp: "Hello, I would like to book a consultation.",
      heroPortraitAlt: "Sónia Santos da Silva, lawyer.",
      heroRole: "Lawyer",
      heroLicense: "Professional licence",
      metrics: ["Portuguese and English", "Office in Portugal", "Appointments by arrangement"],
      servicesEyebrow: "Areas",
      servicesTitle: "Services",
      servicesMore: "Read more →",
      aboutEyebrow: "The office",
      aboutTitle: "Close support, without shortcuts.",
      aboutCta: "The office",
      aboutPoints: [
        { title: "The specific case", text: "Documents, deadlines, objective." },
        { title: "Clear language", text: "What the law allows — and what is missing." },
        { title: "Follow-up", text: "From the first conversation to filing." },
      ],
      midCta: "Clarify the legal framework before you proceed.",
      midCtaButton: "Request a consultation",
      conversionEyebrow: "Consultation",
      conversionTitle: "Let us talk about your next step.",
      conversionForm: "Form",
      teamEyebrow: "Team",
      teamTitle: "The team",
      teamGroupAlt: "The team at Gabinete Jurídico Laranjeiras.",
      teamFallbackAlt: "Member of the office team",
      testimonialsEyebrow: "Testimonials",
      testimonialsTitle: "Real reviews, when authorised.",
      officeEyebrow: "Lisbon",
      officeTitle: "Office in Portugal",
      officeCta: "Book a conversation",
      hours: "Monday to Friday, 10:00–18:00 (Lisbon time)",
      presenceTitle: "Our office in Lisbon",
      presenceLead:
        "Gabinete Jurídico Laranjeiras. In-person legal assistance in Lisbon, in Portuguese and English.",
      presenceLocation: "Laranjeiras · Lisboa",
      presenceMapCta: "View location",
      presenceBookCta: "Book a consultation",
      presenceImageAlt: "Façade of Gabinete Jurídico Laranjeiras in Lisbon.",
    },
    servicesPage: {
      eyebrow: "Areas",
      title: "Services",
      description:
        "General information about the areas of work. Reading these pages does not create a mandate or guarantee a decision.",
      intro:
        "The office provides information and support in the areas below. This page does not set out requirements, timeframes or outcomes.",
      immigrationNote: "This area includes, among others:",
      moreWhenReady:
        "Specific information will be published here. Until then, a first contact helps to see whether the matter falls within these areas.",
      contact: "Contact us",
    },
    aboutPage: {
      eyebrow: "About",
      title: "The office",
      description:
        "A Lisbon office in Laranjeiras. Legal support in Portuguese and English.",
      licensePrefix: "professional licence",
      missionTitle: "Approach",
      mission: [
        "The work begins by listening to the client’s circumstances and identifying the possible legal framework. Only then is the evidence organised and a decision taken on whether and how to proceed.",
        "Approval rates and decision times are not published. The outcome of each matter depends on the law, on evidence, and on administrative or judicial decisions that counsel does not control.",
        "The aim is clear communication: what is required, what is a risk, and what depends on third parties.",
      ],
      values: [
        {
          title: "Professional independence",
          text: "Independent legal analysis, without copying another firm’s marketing model.",
        },
        {
          title: "Confidentiality",
          text: "Data and documents are handled with reserve, under the law and professional rules.",
        },
        {
          title: "Clear fees",
          text: "Fees and expenses are explained in writing before a mandate begins.",
        },
      ],
      schedule: "Arrange a conversation",
      galleryEyebrow: "Laranjeiras",
      galleryTitle: "The workplace",
      galleryDisclaimer:
        "Architectural visualisations inspired by the description of the office in Laranjeiras. They are not photographs of the existing premises.",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Talk to us",
      description:
        "Describe your situation. The first contact helps to see whether the matter falls within the areas of work.",
      detailsTitle: "Contact details",
      whatsapp: "WhatsApp",
      email: "Email",
      address: "Address",
      license: "Professional licence",
      nif: "Tax number",
      hours: "Hours",
      mapTitle: "How to find us",
      mapLead: "Office in Lisbon, next to the Loja do Cidadão in Laranjeiras.",
    },
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      message: "Message",
      submit: "Send to WhatsApp",
      prefix: "Website contact request",
      notice:
        "Submitting opens WhatsApp with the message filled in. Do not send sensitive documents through this form.",
      fallback: "If WhatsApp did not open, use the floating button or the number shown.",
      subjects: [
        "Immigration and Visas",
        "Portuguese Nationality",
        "Tenancy and leases",
        "Debt recovery",
        "Company law",
        "Property and inheritance",
        "Other",
      ],
    },
    common: {
      breadcrumb: "Breadcrumb",
      whatsapp: "Talk on WhatsApp",
      whatsappFloat: "Talk on WhatsApp",
      cookies: "Technical cookies.",
      privacy: "Privacy",
      cookieOk: "OK",
    },
    meta: {
      homeTitle: "Gabinete Jurídico Laranjeiras",
      homeDescription:
        "Gabinete Jurídico Laranjeiras. Legal support in Lisbon, in Portuguese and English. Clear information, with no guarantee of outcome.",
      aboutTitle: "About",
      aboutDescription: "A Lisbon office. General information, with no guarantee of outcome.",
      contactTitle: "Contact",
      contactDescription: "Contact by WhatsApp, email or form.",
      servicesTitle: "Services",
      servicesDescription:
        "Immigration and visas, Portuguese nationality, tenancy and leases, debt recovery, company law, property and inheritance.",
    },
    cards: {
      imigracao: {
        title: "Immigration and Visas",
        blurb: "D2 visa, D7 visa, AIMA, residence, renewals and family reunification.",
      },
      nacionalidade: {
        title: "Portuguese Nationality",
        blurb: "Portuguese nationality applications.",
      },
      arrendamento: {
        title: "Tenancy and Leases",
        blurb: "Tenancy and lease matters.",
      },
      "recuperacao-credito": {
        title: "Debt Recovery",
        blurb: "Debt recovery.",
      },
      sociedades: {
        title: "Company Law",
        blurb: "Company law.",
      },
      patrimonio: {
        title: "Property & Inheritance",
        blurb: "Property and inheritance.",
      },
    },
    extraServices: {
      penal: { title: "Criminal Law" },
      administrativo: { title: "Administrative Law" },
    },
  },
} as const;

export const homeServiceImages: Record<HomeServiceId, string> = {
  imigracao: "/images/home/card-d7.jpg",
  nacionalidade: "/images/home/card-nacionalidade.jpg",
  arrendamento: "/images/home/office.jpg",
  "recuperacao-credito": "/images/home/desk.jpg",
  sociedades: "/images/home/meeting.jpg",
  patrimonio: "/images/home/about-books.jpg",
};

export function homeServiceHref(locale: Locale, id: HomeServiceId) {
  if (locale === "pt" && id === "nacionalidade") {
    return "/servicos/nacionalidade";
  }
  return `${pathFor(locale, "services")}#${id}`;
}

export function getCopy(locale: Locale) {
  return ui[locale];
}

export { immigrationItems };
