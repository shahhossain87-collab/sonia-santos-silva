import type { Locale } from "@/i18n/locales";
import type { RouteKey } from "@/i18n/routes";

export type ImmigrationTopic = {
  key: RouteKey;
  slug: Record<Locale, string>;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  points: Record<Locale, readonly string[]>;
  image: string;
  imageAlt: Record<Locale, string>;
};

export const immigrationTopics = [
  {
    key: "immigrationVisas",
    slug: {
      pt: "vistos-e-autorizacao-de-residencia",
      en: "visas-and-residence-permits",
    },
    title: {
      pt: "Vistos e Autorização de Residência",
      en: "Visas and Residence Permits (Vistos e Autorização de Residência)",
    },
    summary: {
      pt: "Orientação sobre D1, D2, D3, D4, D7, D8, CPLP, autorização de residência e outros processos de imigração.",
      en: "Guidance on D1, D2, D3, D4, D7, D8, CPLP, autorização de residência and other immigration processes.",
    },
    points: {
      pt: [
        "Identificar a via de visto ou autorização que corresponde à situação concreta.",
        "Organizar os documentos normalmente necessários antes da apresentação do pedido.",
        "Esclarecer os passos seguintes depois da entrada em Portugal ou da emissão do título.",
      ],
      en: [
        "Identify the visa or authorisation route that fits the specific circumstances.",
        "Organise the documents usually needed before the application is submitted.",
        "Clarify the next steps after entry into Portugal or the issue of the residence title.",
      ],
    },
    image: "vistos-autorizacao-residencia",
    imageAlt: { pt: "Pastas sobre uma mesa", en: "Folders on a table" },
  },
  {
    key: "residenceRenewal",
    slug: {
      pt: "renovacao-e-regularizacao-da-residencia",
      en: "residence-renewal-and-regularisation",
    },
    title: {
      pt: "Renovação e Regularização da Residência",
      en: "Residence Renewal and Regularisation (Renovação e Regularização da Residência)",
    },
    summary: {
      pt: "Análise de renovações, títulos caducados, processos pendentes, documentação e situações de regularização.",
      en: "Review of renewals, expired permits, pending processes, documentation and regularisation situations.",
    },
    points: {
      pt: [
        "Confirmar a situação do título e os registos disponíveis no processo.",
        "Reunir a documentação atualizada necessária para renovação ou regularização.",
        "Avaliar comunicações da AIMA e os passos adequados enquanto o processo está pendente.",
      ],
      en: [
        "Confirm the status of the residence title and the records available in the process.",
        "Gather updated documents needed for renewal or regularisation.",
        "Review AIMA communications and the appropriate steps while the process is pending.",
      ],
    },
    image: "renovacao-regularizacao-residencia",
    imageAlt: { pt: "Pessoa a preencher um formulário", en: "Person completing a form" },
  },
  {
    key: "familyReunificationTopic",
    slug: {
      pt: "reagrupamento-familiar",
      en: "family-reunification",
    },
    title: {
      pt: "Reagrupamento Familiar",
      en: "Family Reunification (Reagrupamento Familiar)",
    },
    summary: {
      pt: "Informação prática para cônjuge, filhos e outros familiares elegíveis ao abrigo do reagrupamento familiar.",
      en: "Practical information for spouses, children and other eligible family members under reagrupamento familiar.",
    },
    points: {
      pt: [
        "Verificar quem pode ser incluído no pedido e qual a prova do vínculo familiar.",
        "Organizar certidões, traduções e documentos de identificação dos familiares.",
        "Analisar alojamento, meios de subsistência e outras exigências aplicáveis ao agregado.",
      ],
      en: [
        "Check who can be included in the application and what evidence is needed for the family relationship.",
        "Organise certificates, translations and identity documents for family members.",
        "Review accommodation, means of support and other requirements that apply to the household.",
      ],
    },
    image: "reagrupamento-familiar",
    imageAlt: { pt: "Família a caminhar ao ar livre", en: "Family walking outdoors" },
  },
  {
    key: "aimaNotifications",
    slug: {
      pt: "notificacoes-audiencia-previa-e-indeferimentos-da-aima",
      en: "aima-notices-audiencia-previa-and-refusals",
    },
    title: {
      pt: "Notificações, Audiência Prévia e Indeferimentos da AIMA",
      en: "AIMA Notices, Audiência Prévia and Refusals",
    },
    summary: {
      pt: "Leitura de audiência prévia, intenção de indeferimento, decisão final de recusa e outras notificações da AIMA.",
      en: "Review of audiência prévia, intenção de indeferimento, final refusal decisions and other AIMA notices.",
    },
    points: {
      pt: [
        "Ler a notificação e identificar o prazo indicado para resposta ou apresentação de documentos.",
        "Verificar quais os factos ou documentos que a AIMA considera em falta.",
        "Preparar uma resposta adequada à fase do processo, sem assumir que o resultado está garantido.",
      ],
      en: [
        "Read the notice and identify the deadline for a reply or for providing documents.",
        "Check which facts or documents AIMA considers missing.",
        "Prepare a response suited to the stage of the process, without assuming that an outcome is guaranteed.",
      ],
    },
    image: "notificacoes-aima",
    imageAlt: { pt: "Pessoa a analisar papéis", en: "Person reviewing papers" },
  },
  {
    key: "aimaCourtProceedings",
    slug: {
      pt: "processos-judiciais-contra-a-aima",
      en: "court-proceedings-against-aima",
    },
    title: {
      pt: "Processos Judiciais contra a AIMA",
      en: "Court Proceedings against AIMA (Processos Judiciais contra a AIMA)",
    },
    summary: {
      pt: "Avaliação de atrasos prolongados, falta de agendamento, inação administrativa e recurso aos tribunais quando se justifique.",
      en: "Assessment of long delays, lack of an appointment, administrative inaction and court action when it is appropriate.",
    },
    points: {
      pt: [
        "Reunir comprovativos do pedido, tentativas de contacto e comunicações recebidas.",
        "Distinguir uma demora administrativa de uma situação que possa justificar intervenção judicial.",
        "Explicar o enquadramento, os riscos e os passos possíveis antes de avançar.",
      ],
      en: [
        "Gather proof of the application, contact attempts and notices received.",
        "Distinguish an administrative delay from a situation that may justify court action.",
        "Explain the legal framework, risks and possible steps before proceeding.",
      ],
    },
    image: "processos-judiciais-aima",
    imageAlt: { pt: "Edifício visto da rua", en: "Building seen from the street" },
  },
  {
    key: "portugueseNationalityTopic",
    slug: {
      pt: "nacionalidade-portuguesa",
      en: "portuguese-nationality",
    },
    title: {
      pt: "Nacionalidade Portuguesa",
      en: "Portuguese Nationality (Nacionalidade Portuguesa)",
    },
    summary: {
      pt: "Orientação sobre nacionalidade, Conservatória, documentação, atrasos e decisões de recusa.",
      en: "Guidance on nationality, Conservatória, documents, delays and refusal decisions.",
    },
    points: {
      pt: [
        "Identificar a via de nacionalidade e a Conservatória competente para o processo.",
        "Organizar certidões, traduções, apostilhas e outros documentos relevantes.",
        "Analisar pedidos de elementos, atrasos ou decisões de recusa recebidas no processo.",
      ],
      en: [
        "Identify the nationality route and the Conservatória responsible for the process.",
        "Organise certificates, translations, apostilles and other relevant documents.",
        "Review requests for further information, delays or refusal decisions received in the process.",
      ],
    },
    image: "nacionalidade-portuguesa-imigracao",
    imageAlt: { pt: "Pessoa a escrever numa mesa", en: "Person writing at a table" },
  },
] as const satisfies readonly ImmigrationTopic[];

export function getImmigrationTopic(locale: Locale, slug: string) {
  return immigrationTopics.find((topic) => topic.slug[locale] === slug);
}
