import type { Locale } from "@/i18n/locales";
import type { RouteKey } from "@/i18n/routes";

/*
 * Detailed content for immigration topic pages, supplied by the office
 * (condensed). Topics without an entry here keep the short summary layout.
 */
export type TopicDetailText = {
  introTitle: string;
  intro: readonly string[];
  helpTitle: string;
  help: readonly string[];
  helpNote: string;
  docsTitle: string;
  docsTag: string;
  docsLead: string;
  docs: readonly string[];
  docsNote: string;
  stepsTitle: string;
  steps: readonly { title: string; text: string }[];
  faqTitle: string;
  faqs: readonly { q: string; a: string }[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaLead: string;
  message: string;
};

export type TopicDetail = {
  metaDescription: Record<Locale, string>;
  text: Record<Locale, TopicDetailText>;
};

const shared = {
  pt: {
    helpTitle: "Em que podemos ajudar",
    helpNote: "O acompanhamento não garante o deferimento. A decisão cabe sempre às autoridades competentes.",
    docsTitle: "Documentos habitualmente necessários",
    docsTag: "Indicativo",
    stepsTitle: "Como funciona",
    faqTitle: "Perguntas frequentes",
    ctaEyebrow: "Análise inicial",
  },
  en: {
    helpTitle: "How we can help",
    helpNote: "Our assistance does not guarantee approval. The decision always rests with the competent authorities.",
    docsTitle: "Documents usually required",
    docsTag: "Indicative",
    stepsTitle: "How it works",
    faqTitle: "Frequently asked questions",
    ctaEyebrow: "Initial review",
  },
} as const;

export const topicDetails: Partial<Record<RouteKey, TopicDetail>> = {
  immigrationVisas: {
    metaDescription: {
      pt: "Autorização de residência em Portugal: análise do enquadramento, documentos, preparação do pedido e acompanhamento junto da AIMA, em Lisboa.",
      en: "Residence permits in Portugal: assessing the legal route, documents, preparing the application and follow-up with AIMA, from our Lisbon office.",
    },
    text: {
      pt: {
        ...shared.pt,
        introTitle: "Autorização de Residência em Portugal",
        intro: [
          "A autorização de residência permite a cidadãos estrangeiros residir legalmente em Portugal, desde que cumpram os requisitos aplicáveis à sua situação.",
          "O procedimento e os documentos variam consoante o motivo do pedido: trabalho, estudo, atividade independente, investimento, reagrupamento familiar ou outro regime legal.",
          "Acompanhamos a análise do enquadramento, a preparação do pedido e o contacto com as entidades competentes.",
        ],
        help: [
          "Analisar a sua situação documental e o enquadramento legal aplicável.",
          "Verificar os requisitos e os documentos necessários.",
          "Organizar e rever a documentação antes da apresentação.",
          "Acompanhar o procedimento junto da AIMA, incluindo pedidos de elementos adicionais.",
          "Analisar notificações ou decisões e explicar as opções disponíveis.",
        ],
        docsLead: "Dependem do tipo de pedido.",
        docs: [
          "Passaporte válido e cópias das páginas relevantes.",
          "Visto de residência válido, quando exigido.",
          "Comprovativo de morada em Portugal.",
          "Prova de meios de subsistência.",
          "Comprovativos da situação profissional, académica ou familiar, conforme o motivo do pedido.",
          "NIF e comprovativos de inscrição ou situação contributiva, quando aplicável.",
          "Registo criminal ou outros documentos, quando exigidos.",
          "Documentos estrangeiros certificados e, se necessário, traduzidos.",
        ],
        docsNote: "Lista indicativa: a AIMA pode exigir documentos adicionais.",
        steps: [
          { title: "Análise inicial", text: "Avaliamos a sua situação, a entrada em Portugal, os documentos e o motivo do pedido." },
          { title: "Enquadramento", text: "Verificamos a via legal aplicável, os requisitos e possíveis obstáculos." },
          { title: "Preparação do processo", text: "Organizamos e revemos os documentos para reduzir omissões." },
          { title: "Apresentação e acompanhamento", text: "Acompanhamos a tramitação, as notificações e os pedidos de elementos." },
          { title: "Análise da decisão", text: "Explicamos o conteúdo da decisão e as opções legais disponíveis." },
        ],
        faqs: [
          {
            q: "Preciso de um visto para pedir autorização de residência?",
            a: "Em regra, sim: o pedido baseia-se num visto de residência adequado. Existem regimes especiais, por isso convém confirmar o enquadramento antes.",
          },
          {
            q: "Posso pedir autorização de residência com qualquer visto?",
            a: "Não. O tipo de visto e a sua finalidade podem limitar as opções.",
          },
          {
            q: "Ainda é possível pedir através de manifestação de interesse?",
            a: "Deixou de ser uma via geral para novos pedidos. Existiu um regime transitório com prazo legal próprio; convém confirmar se está abrangido.",
          },
          {
            q: "Quanto tempo demora?",
            a: "Varia de caso para caso e não é possível garantir prazo nem decisão. Um processo completo ajuda a evitar atrasos.",
          },
        ],
        ctaTitle: "Precisa de pedir autorização de residência?",
        ctaLead: "Se não sabe qual o enquadramento aplicável, contacte-nos para uma análise inicial.",
        message: "Olá, preciso de ajuda com um pedido de autorização de residência.",
      },
      en: {
        ...shared.en,
        introTitle: "Residence permits in Portugal",
        intro: [
          "A residence permit (autorização de residência) allows foreign nationals to live legally in Portugal, provided they meet the requirements that apply to their situation.",
          "The procedure and documents depend on the grounds for the application: work, study, self-employment, investment, family reunification or another legal regime.",
          "We assist with assessing the legal route, preparing the application and liaising with the competent authorities.",
        ],
        help: [
          "Review your documents and the legal route that may apply.",
          "Check the requirements and the documents needed.",
          "Organise and review the paperwork before submission.",
          "Follow the procedure with AIMA, including requests for additional information.",
          "Review notices or decisions and explain the options available.",
        ],
        docsLead: "They depend on the type of application.",
        docs: [
          "Valid passport and copies of the relevant pages.",
          "Valid residence visa, where required.",
          "Proof of address in Portugal.",
          "Proof of means of subsistence.",
          "Evidence of your professional, academic or family situation, depending on the grounds.",
          "NIF (tax number) and proof of social security registration or contributions, where applicable.",
          "Criminal record certificate or other documents, where required.",
          "Certified foreign documents, translated where necessary.",
        ],
        docsNote: "This list is indicative only; AIMA may request additional documents.",
        steps: [
          { title: "Initial review", text: "We look at your situation, your entry into Portugal, your documents and the grounds for the application." },
          { title: "Legal route", text: "We confirm the applicable route, its requirements and any possible obstacles." },
          { title: "Preparing the file", text: "We organise and review the documents to reduce omissions." },
          { title: "Submission and follow-up", text: "We follow the procedure, notices and requests for additional information." },
          { title: "Reviewing the decision", text: "We explain what the decision says and the legal options available." },
        ],
        faqs: [
          {
            q: "Do I need a visa to apply for a residence permit?",
            a: "As a rule, yes: the application is based on a suitable residence visa. Special regimes exist, so it is worth confirming the legal route first.",
          },
          {
            q: "Can I apply with any type of visa?",
            a: "No. The type of visa and its purpose may limit your options.",
          },
          {
            q: "Can I still apply through a manifestação de interesse (expression of interest)?",
            a: "It is no longer a general route for new applications. A transitional regime existed with its own legal deadline; it is worth checking whether you are covered.",
          },
          {
            q: "How long does it take?",
            a: "It varies, and neither the timeframe nor the decision can be guaranteed. A complete application helps avoid delays.",
          },
        ],
        ctaTitle: "Need to apply for a residence permit?",
        ctaLead: "If you are unsure which legal route applies, contact us for an initial review.",
        message: "Hello, I need help with a residence permit application.",
      },
    },
  },
  residenceRenewal: {
    metaDescription: {
      pt: "Renovação da autorização de residência em Portugal: análise do título, documentos, preparação do pedido e acompanhamento junto da AIMA, em Lisboa.",
      en: "Renewing a residence permit in Portugal: review of the permit, documents, preparing the application and follow-up with AIMA, from our Lisbon office.",
    },
    text: {
      pt: {
        ...shared.pt,
        introTitle: "Renovação da Autorização de Residência",
        intro: [
          "A renovação exige verificar os documentos e requisitos aplicáveis ao tipo de título e à situação atual do titular.",
          "Acompanhamos a preparação do pedido e o contacto com a AIMA.",
        ],
        help: [
          "Analisar o título de residência e a situação do titular.",
          "Confirmar os documentos necessários.",
          "Organizar e rever a documentação.",
          "Acompanhar o procedimento e ajudar a responder a notificações ou pedidos de elementos.",
          "Analisar decisões de indeferimento e explicar as opções disponíveis.",
        ],
        docsLead: "Dependem do tipo de autorização.",
        docs: [
          "Passaporte válido e título de residência atual ou caducado.",
          "Comprovativo de morada.",
          "Comprovativos de meios de subsistência e da atividade profissional, quando aplicável.",
          "Comprovativos da situação fiscal e contributiva, quando exigidos.",
          "Documentos específicos do regime, como matrícula e frequência escolar.",
        ],
        docsNote: "Lista indicativa: a AIMA pode pedir outros documentos.",
        steps: [
          { title: "Análise do título", text: "Analisamos o título, a validade e o histórico do processo." },
          { title: "Procedimento e documentos", text: "Confirmamos o procedimento disponível e reunimos os documentos." },
          { title: "Pedido e tramitação", text: "Preparamos o pedido e acompanhamos a tramitação junto da AIMA." },
          { title: "Notificações e decisão", text: "Se houver notificação ou decisão, explicamos os passos seguintes." },
        ],
        faqs: [
          {
            q: "Quando devo tratar da renovação?",
            a: "Com antecedência, tendo em conta a validade do título e as instruções atuais da AIMA. O momento e o canal podem variar.",
          },
          {
            q: "Posso renovar se o título já caducou?",
            a: "A caducidade, por si só, não define o procedimento: é preciso analisar o tipo de título, a validade e a situação do processo. Não presuma que uma prorrogação anterior continua válida.",
          },
          {
            q: "Tenho de apresentar sempre os mesmos documentos?",
            a: "Não. Variam conforme o tipo de autorização e a sua situação.",
          },
          {
            q: "Quanto tempo demora?",
            a: "Depende do procedimento e das entidades envolvidas. Não é possível garantir uma data.",
          },
        ],
        ctaTitle: "A sua autorização está a terminar ou já caducou?",
        ctaLead: "Contacte-nos para analisarmos o procedimento adequado.",
        message: "Olá, preciso de ajuda com a renovação da autorização de residência.",
      },
      en: {
        ...shared.en,
        introTitle: "Renewing a residence permit",
        intro: [
          "Renewal requires checking the documents and requirements that apply to the type of permit and the holder's current situation.",
          "We assist with preparing the application and liaising with AIMA.",
        ],
        help: [
          "Review the residence permit and the holder's situation.",
          "Confirm the documents required.",
          "Organise and review the paperwork.",
          "Follow the procedure and help respond to notices or requests for additional information.",
          "Review refusal decisions and explain the options available.",
        ],
        docsLead: "They depend on the type of permit.",
        docs: [
          "Valid passport and current or expired residence permit.",
          "Proof of address.",
          "Proof of means of subsistence and of professional activity, where applicable.",
          "Proof of tax and social security status, where required.",
          "Documents specific to the regime, such as school enrolment and attendance.",
        ],
        docsNote: "This list is indicative only; AIMA may request other documents.",
        steps: [
          { title: "Reviewing the permit", text: "We review the permit, its validity and the history of the case." },
          { title: "Procedure and documents", text: "We confirm the available procedure and gather the documents." },
          { title: "Application and follow-up", text: "We prepare the application and follow its progress with AIMA." },
          { title: "Notices and decisions", text: "If a notice or decision arrives, we explain the next steps." },
        ],
        faqs: [
          {
            q: "When should I deal with the renewal?",
            a: "Well in advance, taking into account the permit's validity and AIMA's current instructions. The timing and channel may vary.",
          },
          {
            q: "Can I renew if my permit has already expired?",
            a: "Expiry alone does not determine the procedure: the type of permit, its validity and the status of the case must be reviewed. Do not assume that an earlier extension still applies.",
          },
          {
            q: "Do I always need to submit the same documents?",
            a: "No. They vary with the type of permit and your situation.",
          },
          {
            q: "How long does it take?",
            a: "It depends on the procedure and the authorities involved. No date can be guaranteed.",
          },
        ],
        ctaTitle: "Is your permit about to expire, or has it already expired?",
        ctaLead: "Contact us so we can review the appropriate procedure.",
        message: "Hello, I need help renewing my residence permit.",
      },
    },
  },
};

export function getTopicDetail(key: RouteKey) {
  return topicDetails[key];
}
