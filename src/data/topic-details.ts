import type { Locale } from "@/i18n/locales";
import type { RouteKey } from "@/i18n/routes";
import { practiceTopicPath } from "@/i18n/routes";
import { practiceAreas, type PracticeAreaKey } from "@/data/practice-areas";

function practiceLinks(locale: Locale, key: PracticeAreaKey, slug?: string) {
  const area = practiceAreas.find((item) => item.key === key);
  if (!area) throw new Error(`Unknown practice area: ${key}`);
  const topics = area.topics.filter((item) => !slug || item.slug.pt === slug);
  if (!topics.length) throw new Error(`Unknown practice topic: ${slug}`);
  return topics.map((item) => ({
    label: `${area.title[locale]}: ${item.title[locale]}`,
    href: practiceTopicPath(locale, area, item),
  }));
}

/*
 * Detailed content for immigration topic pages, supplied by the office
 * (condensed). Topics without an entry here keep the short summary layout.
 */
export type TopicDetailText = {
  bannerTitle?: string;
  relatedTopics?: readonly { label: string; href: string }[];
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
  familyReunificationTopic: {
    metaDescription: {
      pt: "Reagrupamento familiar em Portugal: análise dos vínculos e requisitos, preparação do pedido à AIMA e articulação com a etapa consular.",
      en: "Family reunification in Portugal: review of family ties and requirements, preparation of the AIMA application and coordination with the consular stage.",
    },
    text: {
      pt: {
        ...shared.pt,
        bannerTitle: "Reagrupamento Familiar em Portugal",
        introTitle: "Reunir a família: enquadramento e pedido",
        intro: [
          "Analisamos o título do residente, o vínculo familiar, o alojamento e os meios de subsistência para perceber se existe direito ao reagrupamento.",
          "O procedimento depende também do local onde cada familiar se encontra: as regras diferem dentro e fora de Portugal.",
        ],
        relatedTopics: practiceLinks("pt", "internationalClients", "reagrupamento-familiar"),
        help: [
          "Identificar os familiares abrangidos e verificar o título do residente, os períodos de espera e as exceções.",
          "Rever certidões, dependência económica, guarda e consentimentos relativos a menores.",
          "Preparar o pedido à AIMA e acompanhar exigências documentais, notificações ou indeferimentos.",
          "Coordenar a etapa consular quando o familiar aguarda fora de Portugal.",
        ],
        docsLead: "Dependem do vínculo familiar e da situação do residente e dos familiares.",
        docs: [
          "Autorização de residência e identificação do residente; passaporte dos familiares.",
          "Certidões de nascimento ou casamento e prova de união de facto, conforme o caso.",
          "Prova de alojamento e meios de subsistência.",
          "Registo criminal dos adultos, quando exigido.",
          "Prova de dependência, matrícula, responsabilidades parentais ou autorização do outro progenitor, quando relevante.",
          "Certidões estrangeiras com legalização e tradução, quando exigidas.",
        ],
        docsNote: "Lista indicativa: a AIMA pode exigir documentos adicionais.",
        steps: [
          { title: "Análise familiar", text: "Analisamos a composição familiar e o regime aplicável." },
          { title: "Conferência da prova", text: "Verificamos o vínculo familiar e os restantes requisitos." },
          { title: "Pedido à AIMA", text: "Preparamos o pedido e acompanhamos o procedimento." },
          { title: "Etapa consular", text: "Se o familiar estiver fora de Portugal, segue-se a etapa consular após decisão favorável." },
          { title: "Entrada e residência", text: "Acompanhamos a entrada e o pedido do título de residência, conforme o procedimento aplicável." },
        ],
        faqs: [
          { q: "Tenho de esperar dois anos?", a: "Em regra, exige-se autorização válida há dois anos; para cônjuge ou equiparado com 18 meses de coabitação imediatamente antes da entrada do titular, o período é de 15 meses. Existem dispensas para certas categorias familiares e autorizações qualificadas, além de dispensa ou redução excecional fundamentada." },
          { q: "O meu familiar já está em Portugal. Pode pedir aqui?", a: "Em regra, esta possibilidade está limitada às categorias dispensadas da espera, sem prejuízo de regimes especiais e normas transitórias. A entrada, a permanência e a categoria familiar têm de ser analisadas; estar em Portugal não basta." },
          { q: "Uma certidão de casamento basta?", a: "A certidão prova o vínculo, mas também se avaliam a situação de residência, o alojamento, os meios de subsistência e os restantes requisitos." },
        ],
        ctaTitle: "Quer reunir a sua família em Portugal?",
        ctaLead: "Peça uma análise do seu caso antes de iniciar o processo.",
        message: "Olá, gostaria de marcar uma consulta sobre reagrupamento familiar em Portugal.",
      },
      en: {
        ...shared.en,
        bannerTitle: "Family Reunification in Portugal",
        introTitle: "Reuniting your family: legal route and application",
        intro: [
          "We review the resident's permit, family ties, accommodation and means of subsistence to assess whether there is a right to family reunification.",
          "The procedure also depends on where each family member is: different rules apply inside and outside Portugal.",
        ],
        relatedTopics: practiceLinks("en", "internationalClients", "reagrupamento-familiar"),
        help: [
          "Identify eligible relatives and check the resident's permit, waiting periods and exceptions.",
          "Review certificates, financial dependency, custody and consent relating to children.",
          "Prepare the AIMA application and follow up on document requests, notices or refusals.",
          "Coordinate the consular stage when the relative is waiting outside Portugal.",
        ],
        docsLead: "These depend on the family relationship and the circumstances of the resident and relatives.",
        docs: [
          "The resident's residence permit and identification; relatives' passports.",
          "Birth or marriage certificates and evidence of a de facto partnership, as applicable.",
          "Proof of accommodation and means of subsistence.",
          "Criminal record certificates for adults, where required.",
          "Evidence of dependency, enrolment, parental responsibility or the other parent's consent, where relevant.",
          "Foreign certificates with legalisation and translation, where required.",
        ],
        docsNote: "This list is indicative only; AIMA may request additional documents.",
        steps: [
          { title: "Family assessment", text: "We assess the family composition and applicable legal regime." },
          { title: "Checking the evidence", text: "We check the family ties and other requirements." },
          { title: "AIMA application", text: "We prepare the application and follow the procedure." },
          { title: "Consular stage", text: "If the relative is outside Portugal, the consular stage follows a favourable decision." },
          { title: "Entry and residence", text: "We assist with entry and the residence permit application under the applicable procedure." },
        ],
        faqs: [
          { q: "Do I have to wait two years?", a: "A permit valid for two years is generally required; for a spouse or equivalent partner with 18 months of cohabitation immediately before the holder's entry, the period is 15 months. Exemptions exist for certain family categories and qualifying permits, alongside exceptional, justified waivers or reductions." },
          { q: "My relative is already in Portugal. Can they apply here?", a: "This is generally limited to categories exempt from the waiting period, subject to special regimes and transitional rules. Entry, stay and family category must be assessed; being in Portugal is not enough." },
          { q: "Is a marriage certificate enough?", a: "The certificate proves the relationship, but residence status, accommodation, means of subsistence and other requirements are also assessed." },
        ],
        ctaTitle: "Want to reunite your family in Portugal?",
        ctaLead: "Ask for an assessment of your case before starting the process.",
        message: "Hello, I would like to book a consultation about family reunification in Portugal.",
      },
    },
  },
  aimaNotifications: {
    metaDescription: {
      pt: "Notificações, audiência prévia e indeferimentos da AIMA: análise da comunicação, do prazo e da resposta ou via de reação adequada ao caso.",
      en: "AIMA notices, prior hearings and refusals: review of the communication, deadline and appropriate response or route to challenge the decision.",
    },
    text: {
      pt: {
        ...shared.pt,
        bannerTitle: "Recebeu uma notificação da AIMA?",
        introTitle: "Compreender a comunicação e preparar a resposta",
        intro: [
          "Uma notificação pode pedir documentos, permitir uma resposta antes da decisão ou comunicar um indeferimento.",
          "Cada situação exige uma resposta própria e tem o prazo indicado na comunicação. Começamos pela leitura dos fundamentos e do histórico do processo.",
        ],
        help: [
          "Identificar o tipo de notificação, a data de receção, o prazo e o canal de resposta.",
          "Rever os fundamentos da AIMA e os documentos já entregues.",
          "Preparar a resposta de audiência prévia ou juntar prova adicional quando admissível.",
          "Analisar a decisão final e as vias administrativas ou judiciais, com atenção aos prazos.",
        ],
        docsLead: "A documentação deve permitir compreender a comunicação e o histórico do processo.",
        docs: [
          "Notificação integral e prova da data de receção.",
          "Número de processo, requerimento e comprovativos de submissão.",
          "Cópia do passaporte e do visto ou título de residência.",
          "Documentos entregues anteriormente.",
          "Prova que responda ao fundamento invocado, como contrato, rendimentos, alojamento ou vínculo familiar.",
        ],
        docsNote: "Lista indicativa: a AIMA pode exigir documentos adicionais.",
        steps: [
          { title: "Comunicação e prazo", text: "Lemos a notificação e calculamos o prazo aplicável." },
          { title: "Histórico do processo", text: "Reconstituímos o processo a partir dos documentos disponíveis." },
          { title: "Pontos a esclarecer", text: "Identificamos o que pode ser esclarecido ou corrigido." },
          { title: "Resposta fundamentada", text: "Preparamos a resposta e o envio pelo canal adequado." },
          { title: "Decisão e seguimento", text: "Acompanhamos a decisão e avaliamos a medida seguinte." },
        ],
        faqs: [
          { q: "Audiência prévia é uma recusa definitiva?", a: "Não: é a oportunidade de responder antes da decisão final, quando prevista. Ignorá-la pode deixar questões importantes sem esclarecimento." },
          { q: "Posso enviar qualquer documento depois do prazo?", a: "A possibilidade depende da notificação e do estado do processo. Contacte-nos rapidamente e conserve prova de todas as tentativas de entrega." },
          { q: "Um indeferimento pode ser contestado?", a: "Pode haver meios de reação, mas o fundamento, o prazo e a via adequada exigem a análise da decisão completa." },
        ],
        ctaTitle: "Envie-nos a notificação e a data em que a recebeu",
        ctaLead: "Avaliamos o prazo e a resposta adequada. Os documentos devem ser enviados por um canal privado e seguro, não num formulário público.",
        message: "Olá, gostaria de marcar uma consulta sobre uma notificação da AIMA e confirmar o canal privado e seguro para enviar documentos.",
      },
      en: {
        ...shared.en,
        bannerTitle: "Have You Received a Notice from AIMA?",
        introTitle: "Understanding the notice and preparing a response",
        intro: [
          "A notice may request documents, allow a response before a decision or communicate a refusal.",
          "Each situation needs its own response and has the deadline stated in the notice. We start by reading the grounds and the case history.",
        ],
        help: [
          "Identify the type of notice, date of receipt, deadline and response channel.",
          "Review AIMA's grounds and the documents already submitted.",
          "Prepare a prior-hearing response or submit additional evidence where admissible.",
          "Review the final decision and administrative or judicial routes, paying attention to deadlines.",
        ],
        docsLead: "The documents should help establish the meaning of the notice and the case history.",
        docs: [
          "The complete notice and proof of the date of receipt.",
          "Case number, application and proof of submission.",
          "Copy of the passport and visa or residence permit.",
          "Documents submitted previously.",
          "Evidence addressing the grounds raised, such as a contract, income, accommodation or family ties.",
        ],
        docsNote: "This list is indicative only; AIMA may request additional documents.",
        steps: [
          { title: "Notice and deadline", text: "We read the notice and calculate the applicable deadline." },
          { title: "Case history", text: "We reconstruct the case from the available documents." },
          { title: "Points to clarify", text: "We identify what can be clarified or corrected." },
          { title: "Reasoned response", text: "We prepare the response and its submission through the appropriate channel." },
          { title: "Decision and follow-up", text: "We follow up on the decision and assess the next step." },
        ],
        faqs: [
          { q: "Is a prior hearing a final refusal?", a: "No: it is an opportunity to respond before the final decision, where provided for. Ignoring it may leave important issues unexplained." },
          { q: "Can I send any document after the deadline?", a: "This depends on the notice and the stage of the proceedings. Contact us promptly and keep evidence of every attempt to submit documents." },
          { q: "Can a refusal be challenged?", a: "There may be ways to challenge it, but the grounds, deadline and appropriate route require a review of the complete decision." },
        ],
        ctaTitle: "Send us the notice and the date you received it",
        ctaLead: "We will assess the deadline and the appropriate response. Documents should be sent through a private, secure channel, not a public form.",
        message: "Hello, I would like to book a consultation about an AIMA notice and confirm the private, secure channel for sending documents.",
      },
    },
  },
  aimaCourtProceedings: {
    metaDescription: {
      pt: "Processos judiciais contra a AIMA: análise de decisões e omissões, prova, riscos e escolha do meio processual adequado à situação.",
      en: "Court proceedings against AIMA: review of decisions and failures to act, evidence, risks and the appropriate legal procedure for your circumstances.",
    },
    text: {
      pt: {
        ...shared.pt,
        helpNote: "O acompanhamento não garante o deferimento. A decisão cabe sempre aos tribunais e às entidades competentes.",
        bannerTitle: "Processos Judiciais contra a AIMA",
        introTitle: "Avaliar o recurso ao tribunal",
        intro: [
          "Uma decisão contestável ou uma omissão pode exigir intervenção judicial. Analisamos os factos, a prova e a utilidade de recorrer ao tribunal.",
          "A demora, por si só, não torna o processo urgente nem garante que o tribunal ordene a emissão do título.",
        ],
        help: [
          "Avaliar a legalidade da decisão, a ausência de resposta e os prazos de reação.",
          "Identificar a via adequada: ação administrativa, providência cautelar ou, excecionalmente, intimação para proteção de direitos, liberdades e garantias.",
          "Organizar a prova dos pedidos apresentados e dos efeitos concretos da decisão ou omissão.",
          "Representar o cliente e acompanhar o processo judicial dentro do mandato acordado.",
        ],
        docsLead: "Dependem do pedido judicial e dos factos que é necessário demonstrar.",
        docs: [
          "Decisão e notificação com as respetivas datas.",
          "Comprovativos de pedido, pagamento e contactos com a AIMA.",
          "Cópia do processo administrativo disponível.",
          "Passaporte, visto ou título e documentos que sustentam o direito alegado.",
          "Prova do prejuízo concreto e da urgência, quando invocados.",
          "Correspondência anterior e elementos sobre eventual representação por advogado.",
        ],
        docsNote: "Lista indicativa: os documentos necessários dependem do caso concreto.",
        steps: [
          { title: "Análise jurídica", text: "Analisamos o enquadramento e a cronologia do processo." },
          { title: "Via, custos e riscos", text: "Fundamentamos a escolha da via e avaliamos custos e riscos." },
          { title: "Petição e prova", text: "Preparamos a petição e os elementos de prova." },
          { title: "Tramitação judicial", text: "Acompanhamos o processo em tribunal." },
          { title: "Decisão e medidas", text: "Analisamos a decisão e as medidas posteriores perante a AIMA." },
        ],
        faqs: [
          { q: "Posso fazer uma intimação só porque espero há muito tempo?", a: "Não automaticamente. É necessária prova de lesão grave e direta de direitos pessoais em tempo útil e de que a tutela cautelar não é suficiente." },
          { q: "O tribunal dá-me logo a autorização de residência?", a: "Não se pode prometer: a decisão depende do pedido, dos requisitos legais e dos factos provados. Uma ordem para a AIMA decidir não equivale necessariamente a deferimento." },
          { q: "Preciso de ter feito um pedido à AIMA?", a: "Antes de escolher a ação, é essencial analisar a origem e o estado do procedimento, os comprovativos existentes e a atuação da Administração." },
        ],
        ctaTitle: "Peça uma avaliação jurídica do seu processo",
        ctaLead: "Avaliamos também a medida judicial adequada ao seu caso.",
        message: "Olá, gostaria de marcar uma consulta para avaliar o meu processo e a medida judicial adequada perante a AIMA.",
      },
      en: {
        ...shared.en,
        helpNote: "Our assistance does not guarantee approval. The decision always rests with the courts and the competent authorities.",
        bannerTitle: "Court Proceedings against AIMA",
        introTitle: "Assessing court action",
        intro: [
          "A decision that can be challenged or a failure to act may require court intervention. We assess the facts, evidence and value of taking court action.",
          "Delay alone does not make proceedings urgent or guarantee that the court will order a permit to be issued.",
        ],
        help: [
          "Assess the lawfulness of the decision, the absence of a response and deadlines for taking action.",
          "Identify the appropriate route: an administrative action, interim relief or, exceptionally, an urgent order protecting rights, freedoms and guarantees.",
          "Organise evidence of applications submitted and the specific effects of the decision or failure to act.",
          "Represent the client and follow the court proceedings within the agreed mandate.",
        ],
        docsLead: "These depend on the court application and the facts that need to be established.",
        docs: [
          "Decision and notice with their respective dates.",
          "Proof of application, payment and contact with AIMA.",
          "A copy of the administrative file, where available.",
          "Passport, visa or permit and documents supporting the claimed right.",
          "Evidence of specific harm and urgency, where claimed.",
          "Previous correspondence and details of any representation by a lawyer.",
        ],
        docsNote: "This list is indicative only; the documents required depend on the individual case.",
        steps: [
          { title: "Legal assessment", text: "We review the legal position and chronology of the case." },
          { title: "Route, costs and risks", text: "We explain the choice of procedure and assess costs and risks." },
          { title: "Claim and evidence", text: "We prepare the claim and supporting evidence." },
          { title: "Court proceedings", text: "We follow the proceedings in court." },
          { title: "Decision and next steps", text: "We assess the decision and subsequent steps with AIMA." },
        ],
        faqs: [
          { q: "Can I seek an urgent order just because I have waited a long time?", a: "Not automatically. Evidence is needed of serious, direct harm to personal rights requiring timely protection and of interim relief being insufficient." },
          { q: "Will the court grant me a residence permit straight away?", a: "This cannot be promised: the decision depends on the claim, legal requirements and proven facts. An order requiring AIMA to decide does not necessarily mean approval." },
          { q: "Do I need to have made an application to AIMA?", a: "Before choosing an action, it is essential to assess the origin and stage of the procedure, the available records and the administration's conduct." },
        ],
        ctaTitle: "Request a legal assessment of your case",
        ctaLead: "We will also assess the appropriate court procedure for your case.",
        message: "Hello, I would like to book a consultation to assess my case and the appropriate court procedure concerning AIMA.",
      },
    },
  },
  portugueseNationalityTopic: {
    metaDescription: {
      pt: "Nacionalidade portuguesa: escolha da via adequada, análise da lei aplicável, registos e documentos, preparação e acompanhamento do pedido.",
      en: "Portuguese nationality: choosing the appropriate route, reviewing the applicable law, records and documents, and preparing and following your application.",
    },
    text: {
      pt: {
        ...shared.pt,
        bannerTitle: "Nacionalidade Portuguesa: qual é a via adequada ao seu caso?",
        introTitle: "Escolher o fundamento do pedido",
        intro: [
          "A nacionalidade pode resultar da filiação, residência, casamento ou união de facto e de outras situações legais. Cada fundamento tem requisitos, documentos e efeitos próprios.",
          "Verificamos as datas, a cadeia de registos e a lei aplicável, especialmente nos processos iniciados antes das alterações de 2026.",
        ],
        relatedTopics: practiceLinks("pt", "nationality"),
        help: [
          "Identificar o fundamento e confirmar os registos de nascimento, casamento e filiação.",
          "Rever os períodos de residência legal e a prova de conhecimentos exigida.",
          "Organizar documentos estrangeiros e preparar o pedido perante o registo civil.",
          "Acompanhar o processo, responder a exigências e analisar decisões.",
        ],
        docsLead: "A lista não é igual para todas as vias de nacionalidade.",
        docs: [
          "Identificação e certidão de nascimento.",
          "Certidões que comprovem a ligação familiar ou o casamento, se aplicável.",
          "Prova de residência legal, quando a via depende dela.",
          "Certificados de registo criminal, provas linguísticas e cívicas e outros documentos exigidos pelo fundamento.",
          "Procuração, quando exista representação.",
          "Documentos estrangeiros com certidão integral, legalização ou apostila e tradução certificada, quando aplicável.",
        ],
        docsNote: "Lista indicativa: os documentos necessários dependem do caso concreto.",
        steps: [
          { title: "Escolha da via", text: "Distinguimos entre atribuição e aquisição da nacionalidade." },
          { title: "Lei aplicável", text: "Verificamos o regime aplicável na data do pedido." },
          { title: "Certidões e provas", text: "Reunimos e conferimos os documentos relevantes." },
          { title: "Pedido e acompanhamento", text: "Apresentamos o pedido e acompanhamos o processo." },
          { title: "Exigências e registo", text: "Respondemos a exigências e confirmamos o registo da decisão." },
        ],
        faqs: [
          { q: "Cinco anos de residência ainda bastam?", a: "Nos novos pedidos de naturalização apresentados a partir de 19 de maio de 2026, a regra geral é de sete anos para nacionais de países de língua oficial portuguesa e da UE, e dez para os restantes. Os processos administrativos já pendentes nessa data seguem a lei anterior." },
          { q: "Nascer em Portugal dá sempre nacionalidade?", a: "Não: depende da data de nascimento, da nacionalidade e residência dos pais e do fundamento legal aplicável." },
          { q: "Posso escolher qualquer fundamento?", a: "A via tem de corresponder a factos comprováveis. Uma consulta evita usar um modelo ou uma lista de documentos de outra categoria." },
        ],
        ctaTitle: "Não sabe por que via pedir a nacionalidade?",
        ctaLead: "Marque uma consulta para analisar os seus documentos.",
        message: "Olá, gostaria de marcar uma consulta para identificar a via adequada para pedir a nacionalidade portuguesa.",
      },
      en: {
        ...shared.en,
        bannerTitle: "Portuguese Nationality: Which Route Is Right for Your Case?",
        introTitle: "Choosing the grounds for your application",
        intro: [
          "Nationality may arise through parentage, residence, marriage or a de facto partnership, and other situations recognised by law. Each basis has its own requirements, documents and effects.",
          "We check the dates, chain of records and applicable law, particularly for proceedings started before the 2026 changes.",
        ],
        relatedTopics: practiceLinks("en", "nationality"),
        help: [
          "Identify the grounds and confirm birth, marriage and parentage records.",
          "Review periods of lawful residence and the required evidence of knowledge.",
          "Organise foreign documents and prepare the application to the civil registry.",
          "Follow the proceedings, respond to requests and review decisions.",
        ],
        docsLead: "The list differs between nationality routes.",
        docs: [
          "Identification and birth certificate.",
          "Certificates proving the family connection or marriage, where applicable.",
          "Proof of lawful residence where the route depends on it.",
          "Criminal record certificates, language and civic knowledge evidence, and other documents required for the grounds relied on.",
          "Power of attorney where there is representation.",
          "Foreign documents with full certificates, legalisation or apostille and certified translation, where applicable.",
        ],
        docsNote: "This list is indicative only; the documents required depend on the individual case.",
        steps: [
          { title: "Choosing the route", text: "We distinguish between attribution and acquisition of nationality." },
          { title: "Applicable law", text: "We check the legal regime applicable on the application date." },
          { title: "Certificates and evidence", text: "We gather and check the relevant documents." },
          { title: "Application and follow-up", text: "We submit the application and follow the proceedings." },
          { title: "Requests and registration", text: "We respond to requests and confirm registration of the decision." },
        ],
        faqs: [
          { q: "Are five years of residence still enough?", a: "For new naturalisation applications submitted from 19 May 2026, the general rule is seven years for nationals of Portuguese-speaking countries and the EU, and ten for others. Administrative proceedings already pending on that date follow the previous law." },
          { q: "Does being born in Portugal always confer nationality?", a: "No: this depends on the date of birth, the parents' nationality and residence, and the applicable legal grounds." },
          { q: "Can I choose any grounds?", a: "The route must match facts that can be proved. A consultation helps avoid using a template or document checklist for a different category." },
        ],
        ctaTitle: "Unsure which nationality route to use?",
        ctaLead: "Book a consultation to review your documents.",
        message: "Hello, I would like to book a consultation to identify the appropriate route to Portuguese nationality.",
      },
    },
  },
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
