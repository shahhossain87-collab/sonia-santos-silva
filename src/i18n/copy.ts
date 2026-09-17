import type { Locale } from "./locales";
import { pathFor } from "./routes";

export const homeServiceIds = [
  "imigracao",
  "nacionalidade",
  "arrendamento",
  "recuperacao-credito",
  "sociedades",
  "patrimonio",
  "penal",
  "administrativo",
] as const;

export type HomeServiceId = (typeof homeServiceIds)[number];
export type ServiceId = HomeServiceId;

const immigrationItems = {
  pt: [
    { label: "Visto D2", href: "/servicos/visto-d2" },
    { label: "Visto D7", href: "/servicos/visto-d7" },
    { label: "AIMA", href: "/servicos#imigracao" },
    { label: "Autorizações de residência", href: "/servicos#imigracao" },
    { label: "Renovações", href: "/servicos#imigracao" },
    { label: "Reagrupamento familiar", href: "/servicos/reagrupamento" },
  ],
  en: [
    { label: "D2 visa", href: "/servicos/visto-d2" },
    { label: "D7 visa", href: "/servicos/visto-d7" },
    { label: "AIMA", href: "/en/services#imigracao" },
    { label: "Residence permits", href: "/en/services#imigracao" },
    { label: "Renewals", href: "/en/services#imigracao" },
    { label: "Family reunification", href: "/servicos/reagrupamento" },
  ],
} as const;

export const serviceFinderIds = [
  "imigracao",
  "visto-d2",
  "visto-d7",
  "aima-residencia",
  "nacionalidade",
  "reagrupamento",
  "arrendamento",
  "sociedades",
  "recuperacao-credito",
  "patrimonio",
  "penal",
  "administrativo",
] as const;

export type ServiceFinderId = (typeof serviceFinderIds)[number];

const serviceFinderLabels: Record<Locale, Record<ServiceFinderId, string>> = {
  pt: {
    imigracao: "Imigração e Vistos",
    "visto-d2": "Visto D2",
    "visto-d7": "Visto D7",
    "aima-residencia": "AIMA e residência",
    nacionalidade: "Nacionalidade Portuguesa",
    reagrupamento: "Reagrupamento familiar",
    arrendamento: "Arrendamento",
    sociedades: "Direito das Sociedades",
    "recuperacao-credito": "Recuperação de Crédito",
    patrimonio: "Património e Sucessões",
    penal: "Direito Penal",
    administrativo: "Direito Administrativo",
  },
  en: {
    imigracao: "Immigration and Visas",
    "visto-d2": "D2 Visa",
    "visto-d7": "D7 Visa",
    "aima-residencia": "AIMA and residence",
    nacionalidade: "Portuguese Nationality",
    reagrupamento: "Family reunification",
    arrendamento: "Tenancy and leases",
    sociedades: "Company law",
    "recuperacao-credito": "Debt recovery",
    patrimonio: "Property and inheritance",
    penal: "Criminal law",
    administrativo: "Administrative law",
  },
};

const serviceFinderDetailHrefs: Partial<Record<ServiceFinderId, string>> = {
  "visto-d2": "/servicos/visto-d2",
  "visto-d7": "/servicos/visto-d7",
  nacionalidade: "/servicos/nacionalidade",
  reagrupamento: "/servicos/reagrupamento",
};

export function serviceFinderHref(locale: Locale, id: ServiceFinderId) {
  const detail = serviceFinderDetailHrefs[id];
  if (detail) return detail;
  const hash =
    id === "aima-residencia" ? "imigracao" : id === "reagrupamento" ? "imigracao" : id;
  return `${pathFor(locale, "services")}#${hash}`;
}

export function serviceFinderHasDetail(id: ServiceFinderId) {
  return Boolean(serviceFinderDetailHrefs[id]);
}

export function getServiceFinder(locale: Locale) {
  return serviceFinderIds.map((id) => ({
    id,
    title: serviceFinderLabels[locale][id],
    href: serviceFinderHref(locale, id),
    overview: !serviceFinderHasDetail(id),
  }));
}

const otherAreaIds = homeServiceIds.filter((id) => id !== "imigracao");

export function getNavServiceMenu(locale: Locale) {
  const labels = serviceFinderLabels[locale];

  return {
    immigration: {
      title: labels.imigracao,
      items: [
        { title: labels["visto-d2"], href: serviceFinderHref(locale, "visto-d2") },
        { title: labels["visto-d7"], href: serviceFinderHref(locale, "visto-d7") },
        { title: labels.nacionalidade, href: serviceFinderHref(locale, "nacionalidade") },
        { title: labels.reagrupamento, href: serviceFinderHref(locale, "reagrupamento") },
        { title: labels["aima-residencia"], href: serviceFinderHref(locale, "aima-residencia") },
      ],
    },
    other: {
      title: locale === "en" ? "Other areas" : "Outras áreas",
      items: otherAreaIds.map((id) => ({
        title: labels[id],
        href: homeServiceHref(locale, id),
      })),
    },
  };
}

export const ui = {
  pt: {
    nav: [
      { id: "inicio", title: "Início", href: pathFor("pt", "home") },
      { id: "escritorio", title: "O Escritório", href: pathFor("pt", "about") },
      { id: "servicos", title: "Serviços", href: pathFor("pt", "services") },
      { id: "contato", title: "Contacto", href: pathFor("pt", "contact") },
    ],
    brand: {
      name: "Gabinete Jurídico Laranjeiras",
      descriptor: "Advogados · Solicitadores",
      lockupLabel: "Gabinete Jurídico Laranjeiras — Advogados · Solicitadores",
    },
    header: {
      kicker: "Portugal · Lisboa",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      talk: "Fale connosco",
      languageLabel: "Idioma",
      portuguese: "PT",
      english: "EN",
      allServices: "Ver todos os serviços",
      openServices: "Abrir lista de serviços",
      closeServices: "Fechar lista de serviços",
    },
    footer: {
      office: "Escritório",
      areas: "Áreas de Atuação",
      contact: "Contacto",
      tagline: "Advogados · Solicitadores. Acompanhamento jurídico em Lisboa, em português e inglês.",
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
      heroTitle: "Acompanhamento jurídico em Lisboa.",
      heroLead: "Para pessoas, famílias e empresas.",
      heroNote: "Análise caso a caso — sem garantia de resultado.",
      heroServices: "Áreas de Atuação",
      heroTalk: "Marcar consulta",
      heroWhatsapp: "Olá, gostaria de agendar uma consulta.",
      heroPortraitAlt: "Sónia Santos da Silva, advogada.",
      heroRole: "Advogada",
      heroLicense: "Cédula profissional",
      metrics: ["Português e inglês", "Escritório em Portugal", "Atendimento com marcação"],
      servicesEyebrow: "Serviços",
      servicesTitle: "Áreas de Atuação",
      servicesMore: "Saber mais",
      finderTitle: "Em que podemos ajudar?",
      finderLead: "Escolha a área mais próxima da sua situação.",
      finderAll: "Ver todas as áreas",
      finderOverview: "Informação geral",
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
      presenceEyebrow: "Laranjeiras · Lisboa",
      presenceTitle: "Visite-nos em Laranjeiras",
      presenceLead: "Atendimento jurídico presencial, em português e inglês.",
      presenceLocation: "Laranjeiras",
      presenceMapCta: "Ver localização",
      presenceBookCta: "Marcar consulta",
      presenceImageAlt: "Fachada do Gabinete Jurídico Laranjeiras em Lisboa.",
    },
    servicesPage: {
      eyebrow: "Lisboa",
      title: "Áreas de Atuação",
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
        "Gabinete Jurídico Laranjeiras. Advogados · Solicitadores. Escritório em Lisboa, em Laranjeiras. Acompanhamento jurídico em português e inglês.",
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
        "Direito Penal",
        "Direito Administrativo",
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
      homeTitle: "Gabinete Jurídico Laranjeiras | Advogados e Solicitadores",
      homeDescription:
        "Gabinete Jurídico Laranjeiras. Advogados · Solicitadores. Acompanhamento jurídico em Lisboa, em português e inglês. Informação clara, sem garantia de resultado.",
      aboutTitle: "O Escritório",
      aboutDescription:
        "Gabinete Jurídico Laranjeiras. Advogados · Solicitadores. Escritório em Lisboa. Informação geral, sem garantia de resultado.",
      contactTitle: "Contacto",
      contactDescription:
        "Gabinete Jurídico Laranjeiras. Advogados · Solicitadores. Contacto por WhatsApp, e-mail ou formulário.",
      servicesTitle: "Áreas de Atuação",
      servicesDescription:
        "Imigração e vistos, nacionalidade portuguesa, arrendamento, recuperação de crédito, direito das sociedades, património e sucessões, direito penal e direito administrativo.",
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
      penal: {
        title: "Direito Penal",
        blurb: "Questões de direito penal.",
      },
      administrativo: {
        title: "Direito Administrativo",
        blurb: "Questões de direito administrativo.",
      },
    },
  },
  en: {
    nav: [
      { id: "inicio", title: "Home", href: pathFor("en", "home") },
      { id: "escritorio", title: "About", href: pathFor("en", "about") },
      { id: "servicos", title: "Services", href: pathFor("en", "services") },
      { id: "contato", title: "Contact", href: pathFor("en", "contact") },
    ],
    brand: {
      name: "Gabinete Jurídico Laranjeiras",
      descriptor: "Lawyers · Solicitors",
      lockupLabel: "Gabinete Jurídico Laranjeiras — Lawyers · Solicitors",
    },
    header: {
      kicker: "Portugal · Lisbon",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      talk: "Talk to us",
      languageLabel: "Language",
      portuguese: "PT",
      english: "EN",
      allServices: "View all services",
      openServices: "Open services list",
      closeServices: "Close services list",
    },
    footer: {
      office: "Office",
      areas: "Areas of practice",
      contact: "Contact",
      tagline: "Lawyers · Solicitors. Legal support in Lisbon, in Portuguese and English.",
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
      heroTitle: "Legal support in Lisbon.",
      heroLead: "For individuals, families and businesses.",
      heroNote: "Case-by-case review — no guarantee of outcome.",
      heroServices: "Areas of Practice",
      heroTalk: "Book a consultation",
      heroWhatsapp: "Hello, I would like to book a consultation.",
      heroPortraitAlt: "Sónia Santos da Silva, lawyer.",
      heroRole: "Lawyer",
      heroLicense: "Professional licence",
      metrics: ["Portuguese and English", "Office in Portugal", "Appointments by arrangement"],
      servicesEyebrow: "Services",
      servicesTitle: "Areas of Practice",
      servicesMore: "Read more",
      finderTitle: "How can we help?",
      finderLead: "Choose the area closest to your situation.",
      finderAll: "View all areas",
      finderOverview: "Overview",
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
      presenceEyebrow: "Laranjeiras · Lisbon",
      presenceTitle: "Visit us in Laranjeiras",
      presenceLead: "In-person legal assistance, in Portuguese and English.",
      presenceLocation: "Laranjeiras",
      presenceMapCta: "View location",
      presenceBookCta: "Book a consultation",
      presenceImageAlt: "Façade of Gabinete Jurídico Laranjeiras in Lisbon.",
    },
    servicesPage: {
      eyebrow: "Lisbon",
      title: "Areas of practice",
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
        "Gabinete Jurídico Laranjeiras. Lawyers · Solicitors. A Lisbon office in Laranjeiras. Legal support in Portuguese and English.",
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
        "Criminal law",
        "Administrative law",
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
      homeTitle: "Gabinete Jurídico Laranjeiras | Lawyers & Solicitors",
      homeDescription:
        "Gabinete Jurídico Laranjeiras. Lawyers · Solicitors. Legal support in Lisbon, in Portuguese and English. Clear information, with no guarantee of outcome.",
      aboutTitle: "About",
      aboutDescription:
        "Gabinete Jurídico Laranjeiras. Lawyers · Solicitors. A Lisbon office. General information, with no guarantee of outcome.",
      contactTitle: "Contact",
      contactDescription:
        "Gabinete Jurídico Laranjeiras. Lawyers · Solicitors. Contact by WhatsApp, email or form.",
      servicesTitle: "Areas of practice",
      servicesDescription:
        "Immigration and visas, Portuguese nationality, tenancy and leases, debt recovery, company law, property and inheritance, criminal law and administrative law.",
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
      penal: {
        title: "Criminal Law",
        blurb: "Criminal law matters.",
      },
      administrativo: {
        title: "Administrative Law",
        blurb: "Administrative law matters.",
      },
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
  penal: "/images/office/02-sonia-cabin.jpg",
  administrativo: "/images/office/05-establishing.jpg",
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
