import type { PracticeArea, PracticeAreaKey, PracticeTopic } from "@/data/practice-areas";
import type { TopicDetail } from "@/data/topic-details";
import { pathFor } from "@/i18n/routes";

const shared = {
  pt: {
    helpTitle: "Em que podemos ajudar",
    helpNote: "O acompanhamento não garante o deferimento. A decisão cabe sempre às autoridades competentes.",
    docsTitle: "Documentos habitualmente necessários",
    docsTag: "Indicativo",
    docsLead: "Confirme os documentos, as regras de apresentação e as taxas no posto consular competente antes da entrega.",
    docsNote: "Lista indicativa: os documentos necessários dependem do caso concreto e do posto consular.",
    stepsTitle: "Como funciona",
    faqTitle: "Perguntas frequentes",
    ctaEyebrow: "Análise inicial",
  },
  en: {
    helpTitle: "How we can help",
    helpNote: "Our assistance does not guarantee approval. The decision always rests with the competent authorities.",
    docsTitle: "Documents usually required",
    docsTag: "Indicative",
    docsLead: "Confirm the documents, submission rules and fees with the competent consular post before applying.",
    docsNote: "This list is indicative only; the documents required depend on the individual case and consular post.",
    stepsTitle: "How it works",
    faqTitle: "Frequently asked questions",
    ctaEyebrow: "Initial review",
  },
} as const;

const consularDocs = {
  pt: [
    "Formulário consular, passaporte e fotografias, quando exigidas.",
    "Seguro de viagem ou cobertura de saúde aplicável.",
    "Registo criminal e autorização para consulta do registo criminal português, quando previstos.",
    "Prova de alojamento e meios de subsistência.",
  ],
  en: [
    "Consular application form, passport and photographs, where required.",
    "Travel insurance or applicable health cover.",
    "Criminal record certificate and authorisation to consult the Portuguese criminal record, where provided for.",
    "Proof of accommodation and means of subsistence.",
  ],
} as const;

const nationalityShared = {
  pt: {
    ...shared.pt,
    docsLead: "A documentação é definida após a análise do caso e confirmada junto da Conservatória / IRN (Instituto dos Registos e do Notariado).",
    docsNote: "Lista indicativa: os documentos dependem da via, do caso concreto e das indicações da Conservatória / IRN.",
  },
  en: {
    ...shared.en,
    docsLead: "The documents are identified after reviewing the case and confirmed with the civil registry office / IRN (Instituto dos Registos e do Notariado).",
    docsNote: "This list is indicative only; documents depend on the route, individual case and guidance from the civil registry office / IRN.",
  },
} as const;

const nationalityLawNote = {
  pt: "Confirmamos os requisitos aplicáveis após a análise do caso, de acordo com a lei em vigor, incluindo a Lei Orgânica n.º 1/2026 e a regulamentação aplicável.",
  en: "We confirm the applicable requirements after reviewing the case under the law in force, including Organic Law 1/2026 and the applicable regulations.",
} as const;

const nationalitySubmission = {
  pt: { title: "Apresentação e acompanhamento", text: "Quando há representação, um advogado ou solicitador pode apresentar o pedido online e acompanhá-lo na área profissional reservada." },
  en: { title: "Submission and follow-up", text: "When acting as your representative, a lawyer or solicitor can submit the application online and follow it in the reserved professional area." },
} as const;

// Stable area key + Portuguese topic slug; both languages use the same entry.
export const practiceTopicDetails: Partial<Record<`${PracticeAreaKey}/${string}`, TopicDetail>> = {
  "nationality/netos-de-cidadaos-portugueses": {
    metaDescription: {
      pt: "Nacionalidade para netos de portugueses: análise da ascendência, das certidões familiares e do enquadramento da atribuição segundo a lei em vigor.",
      en: "Nationality for grandchildren of Portuguese citizens: review of ancestry, family certificates and the attribution route under the law in force.",
    },
    text: {
      pt: {
        ...nationalityShared.pt,
        bannerTitle: "Nacionalidade para Netos de Cidadãos Portugueses",
        introTitle: "Compreender a ligação ao ascendente português",
        intro: [
          "Ter um avô ou uma avó portuguesa pode justificar a análise de uma via de atribuição da nacionalidade. Estudamos a ascendência e os registos que ligam o interessado à família portuguesa.",
          nationalityLawNote.pt,
        ],
        help: [
          "Analisar a ascendência e o histórico de nacionalidade do avô ou da avó.",
          "Rever a ligação documental entre o interessado, o progenitor e o ascendente português.",
          "Identificar divergências nas certidões e elementos por esclarecer.",
          "Preparar o pedido e acompanhar as comunicações da Conservatória / IRN.",
        ],
        docs: [
          "Identificação e certidão de nascimento do interessado, para análise.",
          "Certidão de nascimento do progenitor que estabelece a ligação familiar.",
          "Assento português ou outros registos disponíveis do avô ou da avó.",
          "Certidões de casamento ou documentos de alteração de nome, quando relevantes.",
          "Decisões, retificações ou comunicações anteriores relacionadas com os registos, se existirem.",
        ],
        steps: [
          { title: "Ascendência e enquadramento", text: "Analisamos o percurso familiar e a possibilidade de enquadramento na atribuição." },
          { title: "Ligação entre registos", text: "Conferimos as certidões e identificamos os elementos a esclarecer." },
          nationalitySubmission.pt,
          { title: "Seguimento e decisão", text: "Acompanhamos as comunicações e explicamos a decisão e os seus efeitos." },
        ],
        faqs: [
          { q: "Ter um avô português garante a nacionalidade?", a: "A ascendência permite iniciar a análise, mas não garante o resultado. O enquadramento e os requisitos são confirmados no caso concreto." },
          { q: "O meu pai ou a minha mãe também tem de apresentar um pedido?", a: "Não presumimos essa necessidade sem analisar o percurso familiar. Comparamos as vias que possam ser relevantes para a sua situação." },
          { q: "Falta uma certidão da família. Posso começar pela consulta?", a: "Podemos começar pelos elementos de que já dispõe. A análise permite identificar os registos a procurar e as questões ainda por esclarecer." },
        ],
        ctaTitle: "Tem um avô ou uma avó portuguesa?",
        ctaLead: "Marque uma consulta para rever a ligação familiar e os registos disponíveis.",
        message: "Olá, gostaria de marcar uma consulta sobre a nacionalidade portuguesa para netos de cidadãos portugueses.",
      },
      en: {
        ...nationalityShared.en,
        bannerTitle: "Nationality for Grandchildren of Portuguese Citizens",
        introTitle: "Understanding the Link to Your Portuguese Ancestor",
        intro: [
          "Having a Portuguese grandparent may provide a reason to assess an attribution route to nationality. We examine the ancestry and records connecting the applicant to the Portuguese family.",
          nationalityLawNote.en,
        ],
        help: [
          "Assess ancestry and the grandparent's nationality history.",
          "Review the documentary link between the applicant, parent and Portuguese ancestor.",
          "Identify discrepancies in certificates and matters needing clarification.",
          "Prepare the application and follow communications from the civil registry office / IRN.",
        ],
        docs: [
          "The applicant's identification and birth certificate, for review.",
          "Birth certificate of the parent through whom the family connection is traced.",
          "Portuguese birth registration or other available records of the grandparent.",
          "Marriage certificates or name-change documents, where relevant.",
          "Previous decisions, corrections or communications relating to the records, if any.",
        ],
        steps: [
          { title: "Ancestry and legal route", text: "We assess the family history and whether an attribution route may be relevant." },
          { title: "Connecting the records", text: "We check certificates and identify matters to clarify." },
          nationalitySubmission.en,
          { title: "Follow-up and decision", text: "We follow communications and explain the decision and its effects." },
        ],
        faqs: [
          { q: "Does having a Portuguese grandparent guarantee nationality?", a: "Ancestry provides a starting point for the assessment, but does not guarantee the outcome. The legal route and requirements are confirmed for the individual case." },
          { q: "Does my parent also need to apply?", a: "We do not assume this is necessary without reviewing the family history. We compare the routes that may be relevant to your circumstances." },
          { q: "A family certificate is missing. Can I start with a consultation?", a: "We can start with the information you already have. The review helps identify records to locate and questions still to clarify." },
        ],
        ctaTitle: "Do you have a Portuguese grandparent?",
        ctaLead: "Book a consultation to review your family connection and available records.",
        message: "Hello, I would like to book a consultation about nationality for grandchildren of Portuguese citizens.",
      },
    },
  },
  "nationality/criancas-nascidas-em-portugal": {
    metaDescription: {
      pt: "Nacionalidade para crianças nascidas em Portugal: análise do nascimento, dos registos e da situação familiar para confirmar a via aplicável.",
      en: "Nationality for children born in Portugal: review of the birth, records and family circumstances to confirm the applicable route.",
    },
    text: {
      pt: {
        ...nationalityShared.pt,
        bannerTitle: "Nacionalidade para Crianças Nascidas em Portugal",
        introTitle: "Analisar o nascimento e a situação familiar",
        intro: [
          "O nascimento em Portugal é o ponto de partida para analisar a situação da criança, incluindo uma eventual via de atribuição da nacionalidade. Os registos e o percurso dos pais ajudam a distinguir esse enquadramento de outras vias possíveis.",
          nationalityLawNote.pt,
        ],
        help: [
          "Analisar o registo de nascimento e a situação familiar da criança.",
          "Rever os registos e o percurso dos progenitores nas datas relevantes.",
          "Distinguir a eventual atribuição de outras vias e analisar a representação da criança.",
          "Organizar o pedido e acompanhar o processo junto da Conservatória / IRN.",
        ],
        docs: [
          "Assento de nascimento da criança disponível para análise.",
          "Documentos de identificação dos progenitores e da criança, quando aplicáveis.",
          "Certidões ou outros registos dos progenitores relevantes para o caso.",
          "Elementos sobre o percurso de residência dos pais, quando pertinentes.",
          "Documentos de responsabilidades parentais, representação ou comunicações anteriores, se relevantes.",
        ],
        steps: [
          { title: "Contexto familiar", text: "Analisamos o nascimento, o percurso dos pais e os registos disponíveis." },
          { title: "Via e elementos", text: "Confirmamos o enquadramento legal e a documentação adequada ao caso." },
          nationalitySubmission.pt,
          { title: "Acompanhamento e registo", text: "Acompanhamos as comunicações e esclarecemos a decisão e os passos relativos ao registo." },
        ],
        faqs: [
          { q: "Nascer em Portugal permite presumir a nacionalidade?", a: "Não deve presumir o resultado apenas pelo local de nascimento. A situação familiar, os registos e a lei aplicável são analisados em conjunto." },
          { q: "A situação dos pais é relevante?", a: "O percurso dos pais pode ser relevante para identificar a via. Confirmamos quais os elementos a analisar na situação concreta da criança." },
          { q: "Existe apenas uma via para crianças nascidas em Portugal?", a: "A análise distingue a eventual atribuição de outras possibilidades de aquisição. Não aplicamos uma solução única a todas as famílias." },
        ],
        ctaTitle: "Pretende esclarecer a situação de uma criança nascida em Portugal?",
        ctaLead: "Marque uma consulta para analisar o registo de nascimento e o contexto familiar.",
        message: "Olá, gostaria de marcar uma consulta sobre a nacionalidade portuguesa para uma criança nascida em Portugal.",
      },
      en: {
        ...nationalityShared.en,
        bannerTitle: "Nationality for Children Born in Portugal",
        introTitle: "Reviewing the Birth and Family Circumstances",
        intro: [
          "Birth in Portugal is the starting point for assessing a child's position, including a possible attribution route to nationality. The records and the parents' history help distinguish this route from other possibilities.",
          nationalityLawNote.en,
        ],
        help: [
          "Assess the child's birth record and family circumstances.",
          "Review the parents' records and history at the relevant dates.",
          "Distinguish possible attribution from other routes and assess the child's representation.",
          "Organise the application and follow the proceedings with the civil registry office / IRN.",
        ],
        docs: [
          "The child's birth registration available for review.",
          "Identification documents for the parents and child, where applicable.",
          "Certificates or other parental records relevant to the case.",
          "Information about the parents' residence history, where relevant.",
          "Parental responsibility or representation documents, or previous communications, where relevant.",
        ],
        steps: [
          { title: "Family circumstances", text: "We assess the birth, the parents' history and the available records." },
          { title: "Route and evidence", text: "We confirm the applicable legal route and documents appropriate to the case." },
          nationalitySubmission.en,
          { title: "Follow-up and registration", text: "We follow communications and explain the decision and registration-related steps." },
        ],
        faqs: [
          { q: "Can nationality be assumed from birth in Portugal?", a: "The outcome should not be assumed from the place of birth alone. The family circumstances, records and applicable law are assessed together." },
          { q: "Are the parents' circumstances relevant?", a: "The parents' history may be relevant to identifying the route. We confirm which information needs to be reviewed for the child's individual circumstances." },
          { q: "Is there only one route for children born in Portugal?", a: "The review distinguishes possible attribution from other acquisition routes. We do not apply a single solution to every family." },
        ],
        ctaTitle: "Would you like to clarify the position of a child born in Portugal?",
        ctaLead: "Book a consultation to review the birth registration and family circumstances.",
        message: "Hello, I would like to book a consultation about Portuguese nationality for a child born in Portugal.",
      },
    },
  },
  "nationality/outras-formas-de-aquisicao": {
    metaDescription: {
      pt: "Outras formas de aquisição da nacionalidade portuguesa: análise do percurso pessoal e familiar para identificar a via e os documentos adequados.",
      en: "Other ways of acquiring Portuguese nationality: review of personal and family history to identify the appropriate route and documents.",
    },
    text: {
      pt: {
        ...nationalityShared.pt,
        bannerTitle: "Outras Formas de Aquisição da Nacionalidade Portuguesa",
        introTitle: "Encontrar o enquadramento do seu percurso",
        intro: [
          "Alguns percursos pessoais e familiares exigem uma análise para além das vias mais conhecidas. Questões de adoção, alterações de nacionalidade na família ou ausência de nacionalidade podem orientar a avaliação de uma eventual via de aquisição.",
          nationalityLawNote.pt,
        ],
        help: [
          "Reconstituir o percurso pessoal e familiar e as datas relevantes.",
          "Analisar qual a via de aquisição que possa corresponder aos factos apresentados.",
          "Rever decisões e registos nacionais ou estrangeiros relacionados com o caso.",
          "Preparar o pedido e acompanhar comunicações e decisões da Conservatória / IRN.",
        ],
        docs: [
          "Identificação e certidão de nascimento disponíveis para análise.",
          "Registos familiares relevantes para o percurso apresentado.",
          "Decisões sobre adoção ou outros atos de registo, quando relacionados com o caso.",
          "Elementos sobre o histórico de nacionalidade ou a ausência de nacionalidade, se pertinentes.",
          "Comprovativos de residência ou comunicações anteriores, quando relevantes para a via em análise.",
        ],
        steps: [
          { title: "Percurso pessoal", text: "Ouvimos o histórico e identificamos os factos e registos relevantes." },
          { title: "Enquadramento e prova", text: "Confirmamos a via a analisar e os elementos adequados à situação." },
          nationalitySubmission.pt,
          { title: "Seguimento e esclarecimento", text: "Acompanhamos o processo e explicamos o conteúdo da decisão e os passos seguintes." },
        ],
        faqs: [
          { q: "Não encontro o meu caso nas outras páginas. Pode ser analisado?", a: "Podemos rever o percurso e os documentos disponíveis. A análise permite verificar se existe uma via aplicável, sem presumir o resultado." },
          { q: "Uma adoção ou uma alteração de nacionalidade na família resolve o pedido?", a: "Esses factos precisam de ser enquadrados no histórico pessoal e nos registos. Não devem ser tratados como garantia de aquisição da nacionalidade." },
          { q: "Há uma lista de documentos igual para todos estes casos?", a: "Não usamos uma lista única para situações diferentes. Os documentos são definidos após a identificação da via e a análise do caso concreto." },
        ],
        ctaTitle: "O seu percurso não se enquadra nas vias mais conhecidas?",
        ctaLead: "Marque uma consulta para analisar a sua situação pessoal e familiar.",
        message: "Olá, gostaria de marcar uma consulta para analisar outras formas de aquisição da nacionalidade portuguesa no meu caso.",
      },
      en: {
        ...nationalityShared.en,
        bannerTitle: "Other Ways of Acquiring Portuguese Nationality",
        introTitle: "Finding the Legal Route for Your Circumstances",
        intro: [
          "Some personal and family histories need assessment beyond the best-known routes. Adoption, changes of nationality within the family or statelessness may guide a review of a possible acquisition route.",
          nationalityLawNote.en,
        ],
        help: [
          "Reconstruct the personal and family history and relevant dates.",
          "Assess which acquisition route may correspond to the facts presented.",
          "Review Portuguese or foreign decisions and records relating to the case.",
          "Prepare the application and follow communications and decisions from the civil registry office / IRN.",
        ],
        docs: [
          "Identification and birth certificate available for review.",
          "Family records relevant to the history presented.",
          "Adoption decisions or other registration documents, where related to the case.",
          "Evidence of nationality history or statelessness, where relevant.",
          "Residence records or previous communications, where relevant to the route being assessed.",
        ],
        steps: [
          { title: "Personal history", text: "We listen to your history and identify the relevant facts and records." },
          { title: "Legal route and evidence", text: "We confirm the route to assess and the evidence appropriate to your circumstances." },
          nationalitySubmission.en,
          { title: "Follow-up and explanation", text: "We follow the proceedings and explain the decision and next steps." },
        ],
        faqs: [
          { q: "My case is not covered by the other pages. Can it be reviewed?", a: "We can review your history and available documents. The assessment helps establish whether a route applies, without presuming the outcome." },
          { q: "Does an adoption or a family member's change of nationality settle the application?", a: "Those facts need to be considered alongside your personal history and records. They should not be treated as a guarantee of acquiring nationality." },
          { q: "Is there one document list for all these cases?", a: "We do not use a single checklist for different situations. Documents are identified after establishing the route and reviewing the individual case." },
        ],
        ctaTitle: "Does your history fall outside the best-known routes?",
        ctaLead: "Book a consultation to review your personal and family circumstances.",
        message: "Hello, I would like to book a consultation to review other ways of acquiring Portuguese nationality in my circumstances.",
      },
    },
  },
  "nationality/por-residencia": {
    metaDescription: {
      pt: "Nacionalidade portuguesa por residência: análise do percurso de residência, enquadramento na lei em vigor e preparação do pedido junto do IRN.",
      en: "Portuguese nationality by residence: review of your residence history, the applicable law and preparation of the application to the IRN.",
    },
    text: {
      pt: {
        ...nationalityShared.pt,
        bannerTitle: "Nacionalidade Portuguesa por Residência",
        introTitle: "Analisar o seu percurso em Portugal",
        intro: [
          "A residência em Portugal pode ser o ponto de partida para analisar uma via de aquisição da nacionalidade. Revemos o seu percurso e os registos disponíveis para identificar o enquadramento adequado.",
          nationalityLawNote.pt,
        ],
        help: [
          "Rever o histórico de residência e as datas relevantes para a análise.",
          "Identificar a via de aquisição e confirmar os requisitos aplicáveis ao caso.",
          "Organizar os documentos e esclarecer divergências nos registos.",
          "Preparar o pedido, acompanhar o processo e analisar comunicações da Conservatória / IRN.",
        ],
        docs: [
          "Documento de identificação, a confirmar na análise inicial.",
          "Certidão de nascimento e elementos de registo civil relevantes.",
          "Títulos e comprovativos do percurso de residência disponíveis.",
          "Comunicações de processos anteriores, se existirem.",
          "Outros comprovativos e procuração, quando aplicáveis, a definir após a análise.",
        ],
        steps: [
          { title: "Histórico e enquadramento", text: "Analisamos o percurso de residência e a lei aplicável à sua situação." },
          { title: "Revisão documental", text: "Conferimos os registos e definimos os elementos a reunir." },
          nationalitySubmission.pt,
          { title: "Comunicações e decisão", text: "Acompanhamos as comunicações e explicamos a decisão e os passos seguintes." },
        ],
        faqs: [
          { q: "O título de residência basta para obter a nacionalidade?", a: "O título, por si só, não permite concluir que o pedido será aprovado. É necessário analisar o percurso e confirmar os requisitos aplicáveis ao caso." },
          { q: "Como é analisado o meu tempo de residência?", a: "Revemos os títulos, os registos e as datas do seu percurso. O enquadramento é confirmado segundo a lei em vigor, sem presumir uma contagem a partir de regras anteriores." },
          { q: "Já tenho um processo iniciado. Podem analisá-lo?", a: "Podemos rever o pedido e as comunicações disponíveis. Confirmamos o regime aplicável à situação antes de indicar os passos seguintes." },
        ],
        ctaTitle: "Pretende analisar a nacionalidade por residência?",
        ctaLead: "Marque uma consulta para rever o seu percurso e os documentos disponíveis.",
        message: "Olá, gostaria de marcar uma consulta sobre a nacionalidade portuguesa por residência.",
      },
      en: {
        ...nationalityShared.en,
        bannerTitle: "Portuguese Nationality by Residence",
        introTitle: "Reviewing Your Time in Portugal",
        intro: [
          "Residence in Portugal may be the starting point for assessing a route to acquiring nationality. We review your history and available records to identify the appropriate legal route.",
          nationalityLawNote.en,
        ],
        help: [
          "Review your residence history and the dates relevant to the assessment.",
          "Identify the acquisition route and confirm the requirements applicable to your case.",
          "Organise documents and clarify discrepancies in the records.",
          "Prepare the application, follow the proceedings and review communications from the civil registry office / IRN.",
        ],
        docs: [
          "Identification document, to be confirmed at the initial review.",
          "Birth certificate and relevant civil registration records.",
          "Available permits and evidence of your residence history.",
          "Communications from previous proceedings, if any.",
          "Other evidence and a power of attorney, where applicable, to be identified after the review.",
        ],
        steps: [
          { title: "History and legal route", text: "We assess your residence history and the law applicable to your circumstances." },
          { title: "Document review", text: "We check the records and identify the documents to gather." },
          nationalitySubmission.en,
          { title: "Communications and decision", text: "We follow communications and explain the decision and next steps." },
        ],
        faqs: [
          { q: "Is a residence permit enough to obtain nationality?", a: "The permit alone does not establish that an application will be approved. Your history must be reviewed and the applicable requirements confirmed." },
          { q: "How is my time in residence assessed?", a: "We review the permits, records and dates in your history. The legal position is confirmed under the law in force, without assuming that earlier counting rules apply." },
          { q: "I already have an application in progress. Can you review it?", a: "We can review the application and available communications. We confirm the regime applicable to your situation before explaining the next steps." },
        ],
        ctaTitle: "Would you like to explore nationality by residence?",
        ctaLead: "Book a consultation to review your history and available documents.",
        message: "Hello, I would like to book a consultation about Portuguese nationality by residence.",
      },
    },
  },
  "nationality/por-casamento-ou-uniao-de-facto": {
    metaDescription: {
      pt: "Nacionalidade por casamento ou união de facto: análise do vínculo, dos registos e da via de aquisição aplicável, com acompanhamento junto do IRN.",
      en: "Nationality by marriage or de facto partnership: review of the relationship, records and applicable acquisition route, with follow-up through the IRN.",
    },
    text: {
      pt: {
        ...nationalityShared.pt,
        bannerTitle: "Nacionalidade por Casamento ou União de Facto",
        introTitle: "Enquadrar o vínculo e os registos",
        intro: [
          "O casamento ou a união de facto com uma pessoa portuguesa pode dar lugar à análise de uma via de aquisição da nacionalidade. O vínculo, o seu histórico e os registos orientam essa avaliação.",
          nationalityLawNote.pt,
        ],
        help: [
          "Analisar o histórico do casamento ou da união de facto.",
          "Conferir os registos dos interessados e o enquadramento do vínculo.",
          "Avaliar se há registos ou documentos estrangeiros a regularizar.",
          "Preparar o pedido e acompanhar comunicações e decisões da Conservatória / IRN.",
        ],
        docs: [
          "Documentos de identificação dos interessados, quando relevantes.",
          "Certidões de nascimento e elementos do registo português disponíveis.",
          "Certidão de casamento ou elementos relativos à união de facto, conforme o caso.",
          "Documentos estrangeiros ou decisões sobre o vínculo, se existirem.",
          "Comunicações anteriores e procuração, quando aplicáveis.",
        ],
        steps: [
          { title: "Análise do vínculo", text: "Revemos o histórico da relação e confirmamos o enquadramento legal." },
          { title: "Conferência dos registos", text: "Analisamos os documentos e identificamos eventuais questões a esclarecer." },
          nationalitySubmission.pt,
          { title: "Seguimento do processo", text: "Acompanhamos as comunicações e explicamos a decisão da entidade competente." },
        ],
        faqs: [
          { q: "O casamento dá nacionalidade automaticamente?", a: "Não deve presumir uma aquisição automática. A possibilidade de apresentar o pedido e o respetivo enquadramento são confirmados após a análise do caso." },
          { q: "Casamento e união de facto seguem o mesmo procedimento?", a: "Não se deve usar a mesma lista documental sem analisar o vínculo. Confirmamos o procedimento e os elementos adequados à sua situação." },
          { q: "O vínculo foi formalizado no estrangeiro. Pode ser analisado?", a: "Podemos rever os documentos e os registos disponíveis. A necessidade de outros atos ou elementos é avaliada no caso concreto." },
        ],
        ctaTitle: "Pretende analisar a nacionalidade pelo seu vínculo familiar?",
        ctaLead: "Marque uma consulta para rever o casamento ou a união de facto e os respetivos registos.",
        message: "Olá, gostaria de marcar uma consulta sobre a nacionalidade portuguesa por casamento ou união de facto.",
      },
      en: {
        ...nationalityShared.en,
        bannerTitle: "Nationality by Marriage or De Facto Partnership",
        introTitle: "Assessing the Relationship and Records",
        intro: [
          "Marriage or a de facto partnership with a Portuguese person may provide a basis for assessing a route to acquiring nationality. The relationship, its history and the records guide that assessment.",
          nationalityLawNote.en,
        ],
        help: [
          "Review the history of the marriage or de facto partnership.",
          "Check the individuals' records and the legal position of the relationship.",
          "Assess whether any foreign records or documents need to be put in order.",
          "Prepare the application and follow communications and decisions from the civil registry office / IRN.",
        ],
        docs: [
          "Identification documents for the individuals concerned, where relevant.",
          "Birth certificates and available Portuguese registration records.",
          "Marriage certificate or evidence relating to the de facto partnership, as applicable.",
          "Foreign documents or decisions relating to the relationship, if any.",
          "Previous communications and a power of attorney, where applicable.",
        ],
        steps: [
          { title: "Relationship assessment", text: "We review the relationship's history and confirm the applicable legal route." },
          { title: "Checking the records", text: "We assess the documents and identify any matters to clarify." },
          nationalitySubmission.en,
          { title: "Following the proceedings", text: "We follow communications and explain the competent authority's decision." },
        ],
        faqs: [
          { q: "Does marriage automatically confer nationality?", a: "You should not assume automatic acquisition. The possibility of applying and the applicable legal route are confirmed after reviewing the case." },
          { q: "Do marriage and a de facto partnership follow the same procedure?", a: "The same document checklist should not be used without reviewing the relationship. We confirm the procedure and evidence appropriate to your circumstances." },
          { q: "The relationship was formalised abroad. Can it be reviewed?", a: "We can review the available documents and records. Any need for further formalities or evidence is assessed in the individual case." },
        ],
        ctaTitle: "Would you like to explore nationality through your relationship?",
        ctaLead: "Book a consultation to review your marriage or de facto partnership and the relevant records.",
        message: "Hello, I would like to book a consultation about Portuguese nationality by marriage or de facto partnership.",
      },
    },
  },
  "nationality/filhos-de-cidadaos-portugueses": {
    metaDescription: {
      pt: "Nacionalidade para filhos de cidadãos portugueses: análise da filiação, dos registos familiares e do enquadramento da atribuição no caso concreto.",
      en: "Nationality for children of Portuguese citizens: review of parentage, family records and the attribution route in the individual case.",
    },
    text: {
      pt: {
        ...nationalityShared.pt,
        bannerTitle: "Nacionalidade para Filhos de Cidadãos Portugueses",
        introTitle: "Analisar a filiação e o percurso familiar",
        intro: [
          "A filiação de uma pessoa portuguesa pode orientar a análise de uma via de atribuição da nacionalidade. Revemos os registos familiares e a situação do progenitor para distinguir esse enquadramento de outras vias possíveis.",
          nationalityLawNote.pt,
        ],
        help: [
          "Analisar a filiação e o histórico de nacionalidade do progenitor.",
          "Conferir as certidões do filho e do progenitor português.",
          "Identificar divergências nos registos e questões de representação de menores, quando relevantes.",
          "Preparar o pedido e acompanhar o processo junto da Conservatória / IRN.",
        ],
        docs: [
          "Identificação do interessado e do progenitor, quando relevante.",
          "Certidão de nascimento do filho disponível para análise.",
          "Assento português ou outros registos do progenitor.",
          "Documentos sobre filiação, alterações de nome ou registos familiares, se aplicáveis.",
          "Elementos de representação de menores ou decisões anteriores, quando relevantes.",
        ],
        steps: [
          { title: "Histórico familiar", text: "Analisamos a filiação e a situação do progenitor nas datas relevantes." },
          { title: "Via e documentação", text: "Confirmamos o enquadramento e revemos os registos disponíveis." },
          nationalitySubmission.pt,
          { title: "Decisão e registo", text: "Acompanhamos as comunicações e verificamos os efeitos da decisão no registo." },
        ],
        faqs: [
          { q: "Ter mãe ou pai português permite concluir logo qual é a via?", a: "A filiação é o ponto de partida da análise. Os registos e o histórico do progenitor permitem confirmar se está em causa atribuição ou outra via." },
          { q: "O meu progenitor tornou-se português depois do meu nascimento. É a mesma situação?", a: "Essa sequência deve ser analisada de forma própria. Não se deve aplicar automaticamente o enquadramento de outro caso familiar." },
          { q: "Existem diferenças de nomes nas certidões. O que devo fazer?", a: "Reunimos os elementos disponíveis para compreender as divergências. A necessidade de esclarecimento ou regularização é avaliada antes da apresentação." },
        ],
        ctaTitle: "É filho de uma pessoa portuguesa e pretende esclarecer a sua situação?",
        ctaLead: "Marque uma consulta para analisar a filiação e os registos familiares.",
        message: "Olá, gostaria de marcar uma consulta sobre a nacionalidade portuguesa para filhos de cidadãos portugueses.",
      },
      en: {
        ...nationalityShared.en,
        bannerTitle: "Nationality for Children of Portuguese Citizens",
        introTitle: "Reviewing Parentage and Family History",
        intro: [
          "Having a Portuguese parent may provide a basis for assessing an attribution route to nationality. We review family records and the parent's circumstances to distinguish this route from other possibilities.",
          nationalityLawNote.en,
        ],
        help: [
          "Assess parentage and the parent's nationality history.",
          "Check the child's and Portuguese parent's certificates.",
          "Identify discrepancies in records and matters concerning representation of minors, where relevant.",
          "Prepare the application and follow the proceedings with the civil registry office / IRN.",
        ],
        docs: [
          "Identification for the applicant and parent, where relevant.",
          "The child's birth certificate available for review.",
          "Portuguese birth registration or other records of the parent.",
          "Documents relating to parentage, name changes or family records, where applicable.",
          "Evidence of representation of minors or previous decisions, where relevant.",
        ],
        steps: [
          { title: "Family history", text: "We assess parentage and the parent's circumstances at the relevant dates." },
          { title: "Route and documents", text: "We confirm the legal route and review the available records." },
          nationalitySubmission.en,
          { title: "Decision and registration", text: "We follow communications and check the decision's effects on registration." },
        ],
        faqs: [
          { q: "Does having a Portuguese parent immediately establish the route?", a: "Parentage is the starting point for the assessment. The records and the parent's history help confirm whether attribution or another route is relevant." },
          { q: "My parent became Portuguese after I was born. Is this the same situation?", a: "That sequence needs its own assessment. The legal route used in another family's case should not be applied automatically." },
          { q: "Names differ between the certificates. What should I do?", a: "We gather the available evidence to understand the discrepancies. Any need for clarification or correction is assessed before submission." },
        ],
        ctaTitle: "Do you have a Portuguese parent and want to understand your position?",
        ctaLead: "Book a consultation to review parentage and family records.",
        message: "Hello, I would like to book a consultation about nationality for children of Portuguese citizens.",
      },
    },
  },
  "internationalClients/visto-d7-rendimentos": {
    metaDescription: {
      pt: "Visto D7 para rendimentos próprios: análise da origem e regularidade dos rendimentos, prova financeira, agregado, pedido consular e residência.",
      en: "D7 visa for people with their own income: review of income sources and regularity, financial evidence, household, consular application and residence.",
    },
    text: {
      pt: {
        ...shared.pt,
        bannerTitle: "Visto D7 para Pessoas com Rendimentos Próprios",
        introTitle: "Demonstrar rendimentos estáveis",
        intro: [
          "O D7 é uma via de residência para quem pretende viver em Portugal com rendimentos próprios estáveis, como pensão ou outros rendimentos documentados.",
          "A origem, regularidade e suficiência dos rendimentos são mais relevantes do que mostrar apenas um saldo pontual em conta.",
        ],
        help: [
          "Analisar a origem e a continuidade dos rendimentos.",
          "Organizar declarações de pensão, contratos e prova bancária.",
          "Rever o alojamento e os meios de subsistência do agregado.",
          "Preparar o processo consular e a etapa de residência.",
        ],
        docs: [
          ...consularDocs.pt,
          "Comprovativos de pensão, rendas, dividendos ou outra fonte legítima e recorrente, conforme o caso.",
          "Extratos bancários e declarações fiscais que sustentem a origem dos rendimentos.",
          "Prova de meios para o agregado familiar.",
        ],
        steps: [
          { title: "Rendimentos e agregado", text: "Avaliamos as fontes de rendimento e o agregado familiar." },
          { title: "Prova fiscal e bancária", text: "Conferimos a consistência dos documentos fiscais e bancários." },
          { title: "Pedido consular", text: "Preparamos e apresentamos o pedido no consulado." },
          { title: "Residência", text: "Após a entrada, segue-se a fase de residência perante a AIMA." },
        ],
        faqs: [
          { q: "Basta ter dinheiro depositado?", a: "Um saldo pode ajudar a demonstrar meios, mas não substitui necessariamente a prova da fonte de rendimentos próprios." },
          { q: "Qual o valor exigido?", a: "Os meios de subsistência seguem referências legais e dependem também do agregado. O valor deve ser confirmado para o ano e o consulado do pedido." },
          { q: "Trabalho remotamente para uma empresa estrangeira. É D7?", a: "Essa atividade pode enquadrar-se no visto de trabalho remoto. Compare os fundamentos antes de escolher." },
        ],
        ctaTitle: "Tem pensão ou rendimentos próprios?",
        ctaLead: "Analisamos a prova financeira do seu D7.",
        message: "Olá, gostaria de marcar uma consulta sobre o visto D7 e a prova dos meus rendimentos próprios.",
      },
      en: {
        ...shared.en,
        bannerTitle: "D7 Visa for People with Their Own Income",
        introTitle: "Demonstrating Stable Income",
        intro: [
          "D7 is a residence route for people intending to live in Portugal on stable income of their own, such as a pension or other documented income.",
          "The source, regularity and sufficiency of the income matter more than simply showing a bank balance at a single point in time.",
        ],
        help: [
          "Assess the source and continuity of income.",
          "Organise pension statements, contracts and bank evidence.",
          "Review accommodation and the household's means of subsistence.",
          "Prepare the consular application and residence stage.",
        ],
        docs: [
          ...consularDocs.en,
          "Evidence of a pension, rent, dividends or another legitimate, recurring source, as applicable.",
          "Bank statements and tax returns supporting the source of income.",
          "Evidence of financial means for the household.",
        ],
        steps: [
          { title: "Income and household", text: "We assess income sources and the household." },
          { title: "Tax and bank evidence", text: "We check that tax and bank documents are consistent." },
          { title: "Consular application", text: "We prepare and submit the application to the consulate." },
          { title: "Residence", text: "The residence stage with AIMA follows entry into Portugal." },
        ],
        faqs: [
          { q: "Is having money deposited enough?", a: "A balance may help demonstrate financial means, but does not necessarily replace evidence of the source of your own income." },
          { q: "What amount is required?", a: "Means of subsistence follow legal benchmarks and also depend on the household. The amount must be confirmed for the year and consulate of the application." },
          { q: "I work remotely for a foreign company. Is that D7?", a: "That activity may fall under the remote work visa. Compare the grounds before choosing." },
        ],
        ctaTitle: "Do you have a pension or income of your own?",
        ctaLead: "We assess the financial evidence for your D7 application.",
        message: "Hello, I would like to book a consultation about the D7 visa and evidence of my own income.",
      },
    },
  },
  "internationalClients/visto-d8-trabalho-remoto": {
    metaDescription: {
      pt: "Visto D8 para trabalho remoto: análise do vínculo com empregador ou clientes no estrangeiro, rendimentos, residência fiscal e modalidade de visto.",
      en: "D8 visa for remote work: review of your relationship with an employer or clients abroad, income, tax residence and the appropriate visa type.",
    },
    text: {
      pt: {
        ...shared.pt,
        bannerTitle: "Visto D8 para Trabalho Remoto em Portugal",
        introTitle: "Trabalhar para o estrangeiro a partir de Portugal",
        intro: [
          "O visto de residência para trabalho remoto destina-se a quem trabalha a partir de Portugal para empregador ou clientes com sede ou domicílio fora do país.",
          "Pode abranger trabalho subordinado ou independente, desde que o vínculo, a atividade e os rendimentos cumpram as regras próprias.",
        ],
        help: [
          "Verificar a localização do empregador ou clientes e a natureza do vínculo.",
          "Rever contratos, faturação, rendimentos e residência fiscal.",
          "Comparar o visto de residência com o visto de estada temporária.",
          "Organizar o processo consular e a autorização de residência.",
        ],
        docs: [
          ...consularDocs.pt,
          "Contrato de trabalho ou declaração da entidade empregadora.",
          "Para independentes, contrato de sociedade, prestação de serviços ou prova de serviços prestados.",
          "Prova dos rendimentos médios mensais dos últimos três meses, com referência a quatro remunerações mínimas mensais garantidas. O montante em euros deve ser atualizado.",
          "Comprovativo de residência fiscal.",
        ],
        steps: [
          { title: "Vínculo e destinatário", text: "Analisamos o vínculo e o país do destinatário do trabalho." },
          { title: "Rendimentos e prova fiscal", text: "Conferimos os rendimentos e os documentos fiscais." },
          { title: "Modalidade de visto", text: "Escolhemos a modalidade adequada à duração da permanência." },
          { title: "Pedido consular", text: "Preparamos e apresentamos o pedido no posto competente." },
          { title: "Residência na AIMA", text: "Tratamos da etapa de residência se foi emitido visto de residência." },
        ],
        faqs: [
          { q: "Posso usar D8 se trabalho para uma empresa portuguesa?", a: "Este regime exige atividade prestada a pessoas ou entidades fora de Portugal. Trabalhar para uma empresa portuguesa pode exigir outra via." },
          { q: "O salário de um único mês basta?", a: "A regulamentação refere a média mensal dos últimos três meses. A documentação deve ser coerente." },
          { q: "D8 e D7 são a mesma coisa?", a: "Não: o D8 assenta em atividade profissional remota. O D7 assenta em rendimentos próprios de outra natureza." },
        ],
        ctaTitle: "Trabalha remotamente para o estrangeiro?",
        ctaLead: "Verificamos se o seu vínculo e rendimentos cumprem os requisitos.",
        message: "Olá, gostaria de marcar uma consulta sobre o visto D8 e o meu trabalho remoto para o estrangeiro.",
      },
      en: {
        ...shared.en,
        bannerTitle: "D8 Visa for Remote Work in Portugal",
        introTitle: "Working for Clients or Employers Abroad from Portugal",
        intro: [
          "The residence visa for remote work is for people working from Portugal for an employer or clients based or domiciled outside the country.",
          "It can cover employment or self-employment, provided the relationship, activity and income meet the specific rules.",
        ],
        help: [
          "Check where the employer or clients are based and the nature of the relationship.",
          "Review contracts, invoicing, income and tax residence.",
          "Compare the residence visa with the temporary stay visa.",
          "Organise the consular application and residence permit.",
        ],
        docs: [
          ...consularDocs.en,
          "Employment contract or employer's statement.",
          "For self-employed applicants, a company agreement, services contract or evidence of services provided.",
          "Evidence of average monthly income over the last three months, using four guaranteed minimum monthly wages as the benchmark. The euro amount must be updated.",
          "Proof of tax residence.",
        ],
        steps: [
          { title: "Relationship and recipient", text: "We assess the relationship and the country of the recipient of the work." },
          { title: "Income and tax evidence", text: "We check income and tax documents." },
          { title: "Visa type", text: "We choose the type suited to the intended length of stay." },
          { title: "Consular application", text: "We prepare and submit the application to the competent post." },
          { title: "Residence with AIMA", text: "We assist with the residence stage if a residence visa has been issued." },
        ],
        faqs: [
          { q: "Can I use D8 if I work for a Portuguese company?", a: "This regime requires work for people or entities outside Portugal. Working for a Portuguese company may require another route." },
          { q: "Is one month's salary enough?", a: "The regulations refer to the monthly average over the last three months. The documents must be consistent." },
          { q: "Are D8 and D7 the same?", a: "No: D8 is based on remote professional activity. D7 is based on income of a different nature." },
        ],
        ctaTitle: "Do you work remotely for clients or an employer abroad?",
        ctaLead: "We check whether your working relationship and income meet the requirements.",
        message: "Hello, I would like to book a consultation about the D8 visa and my remote work for clients or an employer abroad.",
      },
    },
  },
  "internationalClients/visto-procura-trabalho": {
    metaDescription: {
      pt: "Visto para procura de trabalho qualificado: ainda indisponível nos consulados segundo o MNE em 9 de outubro de 2026; análise de alternativas existentes.",
      en: "Qualified job-seeker visa: not yet available at consulates according to the MNE on 9 October 2026; assessment of existing alternatives.",
    },
    text: {
      pt: {
        ...shared.pt,
        bannerTitle: "Visto para Procura de Trabalho Qualificado: situação atual",
        introTitle: "Avaliar as vias atualmente disponíveis",
        intro: [
          "O visto para procura de trabalho qualificado ainda não está disponível nos postos consulares portugueses, segundo o MNE em 9 de outubro de 2026. Está previsto na lei, mas aguarda a regulamentação necessária.",
          "A via destina-se a pessoas com competências técnicas especializadas que procuram trabalho qualificado. A definição das qualificações e a abertura do procedimento dependem de regras e instruções oficiais.",
          "Podemos avaliar alternativas já disponíveis, como um visto de trabalho com proposta concreta ou um regime de atividade altamente qualificada.",
        ],
        help: [
          "Acompanhar a publicação das regras.",
          "Analisar formação, experiência e ofertas concretas.",
          "Comparar D1, D3 e outras vias existentes.",
          "Preparar um plano documental preliminar, sem apresentar a candidatura como aberta.",
        ],
        docsTitle: "Documentos a preparar apenas de forma preliminar",
        docsLead: "A via ainda está indisponível; esta não é uma lista consular definitiva.",
        docs: [
          "Passaporte e CV.",
          "Diplomas e prova de experiência.",
          "Provas de qualificações técnicas.",
          "Oferta ou contactos profissionais, se existirem.",
          "Prova de meios e alojamento.",
        ],
        docsNote: "Lista indicativa e preliminar: os documentos e o procedimento só podem ser confirmados após a abertura oficial.",
        stepsTitle: "Como funciona agora",
        steps: [
          { title: "Informação oficial", text: "Verificamos a informação oficial do MNE sobre a disponibilidade da via." },
          { title: "Perfil e alternativas", text: "Analisamos o perfil e as alternativas já disponíveis." },
          { title: "Regulamentação", text: "Acompanhamos a publicação das regras futuras." },
          { title: "Após abertura oficial", text: "Só após a abertura oficial se confirmam os documentos e o procedimento." },
        ],
        faqs: [
          { q: "Posso pedir este visto hoje?", a: "Segundo o MNE, o visto ainda não está disponível nos postos consulares portugueses à data da revisão de 9 de outubro de 2026." },
          { q: "É o antigo visto geral de procura de trabalho?", a: "Não: a lei de 2025 substituiu a via geral pela procura de trabalho qualificado, sujeita a regras próprias." },
          { q: "Tenho uma oferta de emprego. Devo esperar?", a: "Pode ser mais adequado avaliar já D1 ou D3, consoante a função e o contrato." },
        ],
        ctaTitle: "Tem uma proposta ou perfil qualificado?",
        ctaLead: "Peça uma avaliação das vias atualmente disponíveis.",
        message: "Olá, gostaria de marcar uma consulta para avaliar as vias atualmente disponíveis para o meu perfil profissional.",
      },
      en: {
        ...shared.en,
        bannerTitle: "Qualified Job-Seeker Visa: Current Status",
        introTitle: "Assessing the Routes Currently Available",
        intro: [
          "The qualified job-seeker visa is not yet available at Portuguese consular posts, according to the MNE on 9 October 2026. It is provided for in law but awaits the necessary regulations.",
          "The route is intended for people with specialist technical skills seeking qualified work. The definition of qualifications and opening of the procedure depend on official rules and instructions.",
          "We can assess alternatives already available, such as a work visa with a specific offer or a highly qualified activity route.",
        ],
        help: [
          "Follow the publication of the rules.",
          "Assess education, experience and specific offers.",
          "Compare D1, D3 and other existing routes.",
          "Prepare a preliminary document plan without presenting applications as open.",
        ],
        docsTitle: "Documents to Prepare on a Preliminary Basis Only",
        docsLead: "The route is still unavailable; this is not a definitive consular checklist.",
        docs: [
          "Passport and CV.",
          "Degrees and evidence of experience.",
          "Evidence of technical qualifications.",
          "An offer or professional contacts, if available.",
          "Evidence of financial means and accommodation.",
        ],
        docsNote: "This list is indicative and preliminary only; documents and the procedure can only be confirmed after the official opening.",
        stepsTitle: "How it works now",
        steps: [
          { title: "Official information", text: "We check official MNE information on the route's availability." },
          { title: "Profile and alternatives", text: "We assess the profile and alternatives already available." },
          { title: "Regulations", text: "We follow the publication of future rules." },
          { title: "After the official opening", text: "Documents and the procedure are confirmed only after the official opening." },
        ],
        faqs: [
          { q: "Can I apply for this visa today?", a: "According to the MNE, the visa is not yet available at Portuguese consular posts as at the review date of 9 October 2026." },
          { q: "Is this the former general job-seeker visa?", a: "No: the 2025 law replaced the general route with qualified job-seeking, subject to its own rules." },
          { q: "I have a job offer. Should I wait?", a: "It may be more appropriate to assess D1 or D3 now, depending on the role and contract." },
        ],
        ctaTitle: "Do you have an offer or a qualified professional profile?",
        ctaLead: "Request an assessment of the routes currently available.",
        message: "Hello, I would like to book a consultation to assess the routes currently available for my professional profile.",
      },
    },
  },
  "internationalClients/reagrupamento-familiar": {
    metaDescription: {
      pt: "Visto de reagrupamento familiar para quem está no estrangeiro: pedido à AIMA, decisão favorável, documentação consular e residência após a entrada.",
      en: "Family reunification visa for relatives abroad: AIMA application, favourable decision, consular documents and residence after entry into Portugal.",
    },
    text: {
      pt: {
        ...shared.pt,
        bannerTitle: "Visto de Reagrupamento Familiar para Entrar em Portugal",
        introTitle: "Preparar as duas etapas para a família",
        intro: [
          "Quando o familiar está fora de Portugal, o procedimento costuma começar com a análise e o pedido de reagrupamento à AIMA pelo residente em Portugal.",
          "Após a decisão favorável, o familiar segue a etapa de visto no posto consular competente. O visto e a autorização de residência são atos diferentes.",
        ],
        relatedTopics: [{ label: "Imigração e Vistos: Reagrupamento Familiar", href: pathFor("pt", "familyReunificationTopic") }],
        help: [
          "Confirmar se o familiar e o residente preenchem os requisitos.",
          "Preparar a prova familiar para a AIMA.",
          "Organizar a documentação e o agendamento consular após a decisão.",
          "Rever pedidos adicionais e orientar a fase de residência depois da entrada.",
        ],
        docs: [
          ...consularDocs.pt,
          "Decisão favorável ou referência do processo de reagrupamento.",
          "Certidões de nascimento ou casamento e prova de união de facto ou dependência, conforme o caso.",
          "Prova de consentimento e representação de menores.",
          "Legalização e tradução de documentos estrangeiros, quando exigidas.",
        ],
        steps: [
          { title: "Pedido à AIMA", text: "O residente apresenta o pedido de reagrupamento à AIMA." },
          { title: "Avaliação dos requisitos", text: "A AIMA avalia o vínculo, o alojamento, os meios e as condições legais." },
          { title: "Etapa consular", text: "Após decisão favorável, o familiar apresenta o pedido de visto no posto competente." },
          { title: "Entrada e título", text: "Seguem-se a entrada em Portugal e a etapa do título de residência na AIMA." },
        ],
        faqs: [
          { q: "Posso começar pelo consulado sem decisão da AIMA?", a: "Na via habitual, a etapa consular segue a autorização da AIMA. Confirme se existe um regime especial aplicável." },
          { q: "O visto dá imediatamente um cartão de residência?", a: "Não: a emissão do título de residência é uma etapa posterior." },
          { q: "A família toda tem exatamente os mesmos documentos?", a: "Não: a idade, o vínculo, a guarda e a dependência podem alterar a prova exigida." },
        ],
        ctaTitle: "A sua família está fora de Portugal?",
        ctaLead: "Podemos verificar as duas etapas antes de iniciar.",
        message: "Olá, gostaria de marcar uma consulta sobre o reagrupamento de familiares que estão fora de Portugal.",
      },
      en: {
        ...shared.en,
        bannerTitle: "Family Reunification Visa to Enter Portugal",
        introTitle: "Preparing Both Stages for the Family",
        intro: [
          "When the relative is outside Portugal, the procedure usually starts with an assessment and a family reunification application to AIMA by the resident in Portugal.",
          "After a favourable decision, the relative proceeds to the visa stage at the competent consular post. The visa and residence permit are separate decisions.",
        ],
        relatedTopics: [{ label: "Immigration and Visas: Family Reunification", href: pathFor("en", "familyReunificationTopic") }],
        help: [
          "Check whether the relative and resident meet the requirements.",
          "Prepare evidence of family ties for AIMA.",
          "Organise documents and the consular appointment after the decision.",
          "Review additional requests and advise on the residence stage after entry.",
        ],
        docs: [
          ...consularDocs.en,
          "Favourable decision or reference for the family reunification case.",
          "Birth or marriage certificates and evidence of a de facto partnership or dependency, as applicable.",
          "Evidence of consent and representation for minors.",
          "Legalisation and translation of foreign documents, where required.",
        ],
        steps: [
          { title: "AIMA application", text: "The resident submits the family reunification application to AIMA." },
          { title: "Assessment of requirements", text: "AIMA assesses family ties, accommodation, means and legal conditions." },
          { title: "Consular stage", text: "After a favourable decision, the relative applies for a visa at the competent post." },
          { title: "Entry and permit", text: "Entry into Portugal and the residence permit stage with AIMA follow." },
        ],
        faqs: [
          { q: "Can I start at the consulate without an AIMA decision?", a: "Under the usual route, the consular stage follows AIMA's authorisation. Check whether a special regime applies." },
          { q: "Does the visa immediately provide a residence card?", a: "No: issuing the residence permit is a later stage." },
          { q: "Does the whole family need exactly the same documents?", a: "No: age, relationship, custody and dependency can change the evidence required." },
        ],
        ctaTitle: "Is your family outside Portugal?",
        ctaLead: "We can check both stages before you begin.",
        message: "Hello, I would like to book a consultation about reunification with relatives who are outside Portugal.",
      },
    },
  },
  "internationalClients/visto-d1-trabalho": {
    metaDescription: {
      pt: "Visto D1 para trabalhar em Portugal: análise da oferta, contrato e documentos, preparação consular e etapa de residência perante a AIMA.",
      en: "D1 visa to work in Portugal: review of the offer, contract and documents, consular preparation and the residence stage with AIMA.",
    },
    text: {
      pt: {
        ...shared.pt,
        bannerTitle: "Visto D1 para Trabalhar em Portugal",
        introTitle: "Preparar a mudança por trabalho",
        intro: [
          "O visto de residência para trabalho subordinado destina-se a quem tem uma oportunidade de emprego em Portugal e pretende residir no país para exercer essa atividade.",
          "Antes do pedido, verificamos o contrato, as condições da oferta e os requisitos consulares. A autorização de residência é tratada posteriormente com a AIMA.",
        ],
        help: [
          "Analisar a oferta de trabalho e o enquadramento legal.",
          "Rever o contrato ou promessa de contrato e os dados do empregador.",
          "Preparar a lista documental segundo o consulado competente.",
          "Acompanhar a fase consular e planear a etapa de residência na AIMA.",
        ],
        docs: [
          ...consularDocs.pt,
          "Contrato de trabalho ou promessa de contrato.",
          "Prova das qualificações, quando a profissão é regulamentada.",
          "Elementos do empregador e outros documentos laborais exigidos pelo regime.",
        ],
        steps: [
          { title: "Oferta e requisitos", text: "Confirmamos a oferta e os requisitos aplicáveis." },
          { title: "Contrato e documentos", text: "Preparamos o contrato e os documentos pessoais." },
          { title: "Pedido consular", text: "Apresentamos o pedido no canal consular competente." },
          { title: "Entrada e residência", text: "Após a emissão do visto, seguem-se a entrada e as etapas necessárias perante a AIMA e outras entidades." },
        ],
        faqs: [
          { q: "Preciso de contrato antes de pedir o D1?", a: "É necessário apresentar contrato, promessa de contrato ou outra prova legalmente aceite para a via concreta. Uma intenção informal do empregador pode não bastar." },
          { q: "O visto D1 é o cartão de residência?", a: "Não: o visto permite a entrada e o pedido de residência nos termos aplicáveis. A autorização é decidida pela AIMA." },
          { q: "Posso trocar de empregador depois?", a: "A lei prevê a comunicação de alterações em determinados casos. Antes de mudar, verifique o título e o dever de comunicar à AIMA." },
        ],
        ctaTitle: "Tem uma oferta de trabalho em Portugal?",
        ctaLead: "Revemos os documentos antes do pedido de visto.",
        message: "Olá, gostaria de marcar uma consulta sobre o visto D1 para trabalhar em Portugal.",
      },
      en: {
        ...shared.en,
        bannerTitle: "D1 Visa to Work in Portugal",
        introTitle: "Preparing to Move for Work",
        intro: [
          "The residence visa for employment is for people with a job opportunity in Portugal who intend to live in the country to carry out that work.",
          "Before the application, we check the contract, the terms of the offer and consular requirements. The residence permit is dealt with later through AIMA.",
        ],
        help: [
          "Assess the job offer and applicable legal route.",
          "Review the employment contract or promise of a contract and the employer's details.",
          "Prepare the document list for the competent consulate.",
          "Assist with the consular stage and plan the residence stage with AIMA.",
        ],
        docs: [
          ...consularDocs.en,
          "Employment contract or promise of an employment contract.",
          "Proof of qualifications where the profession is regulated.",
          "Employer details and other employment documents required by the regime.",
        ],
        steps: [
          { title: "Offer and requirements", text: "We confirm the offer and applicable requirements." },
          { title: "Contract and documents", text: "We prepare the contract and personal documents." },
          { title: "Consular application", text: "We submit the application through the competent consular channel." },
          { title: "Entry and residence", text: "Once the visa is issued, entry and the necessary steps with AIMA and other authorities follow." },
        ],
        faqs: [
          { q: "Do I need a contract before applying for D1?", a: "You must provide a contract, a promise of a contract or other legally accepted evidence for the specific route. An employer's informal intention may not be enough." },
          { q: "Is the D1 visa the residence card?", a: "No: the visa allows entry and an application for residence under the applicable rules. AIMA decides on the residence permit." },
          { q: "Can I change employer afterwards?", a: "The law requires changes to be reported in certain cases. Before changing, check your permit and any duty to notify AIMA." },
        ],
        ctaTitle: "Do you have a job offer in Portugal?",
        ctaLead: "We review the documents before the visa application.",
        message: "Hello, I would like to book a consultation about the D1 visa to work in Portugal.",
      },
    },
  },
  "internationalClients/visto-d2-empreendedores": {
    metaDescription: {
      pt: "Visto D2 para empreendedores e atividade independente: análise do projeto, contratos, investimento e documentação consular antes do pedido.",
      en: "D2 visa for entrepreneurs and self-employment: review of the project, contracts, investment and consular documents before applying.",
    },
    text: {
      pt: {
        ...shared.pt,
        bannerTitle: "Visto D2 para Empreender ou Trabalhar por Conta Própria",
        introTitle: "Enquadrar o projeto e a atividade",
        intro: [
          "O D2 abrange projetos de atividade independente e de investimento empreendedor, sujeitos a provas diferentes.",
          "É necessário demonstrar o plano de atividade, a viabilidade e os meios para o executar. Constituir uma sociedade, por si só, não garante um visto.",
        ],
        help: [
          "Distinguir a prestação de serviços da via empreendedora.",
          "Rever contratos, plano de negócio, investimento e documentação da sociedade.",
          "Identificar autorizações profissionais necessárias.",
          "Organizar o processo consular e preparar a fase de residência.",
        ],
        docs: [
          ...consularDocs.pt,
          "Para atividade independente, contrato ou proposta de prestação de serviços.",
          "Prova de habilitação para profissão regulamentada, quando aplicável.",
          "Para empreendedor, plano de negócio fundamentado, prova de investimento realizado ou planeado e meios financeiros disponíveis.",
          "Certidão e documentação da sociedade, se já existir.",
        ],
        steps: [
          { title: "Análise do projeto", text: "Avaliamos o projeto, o mercado e o fundamento legal." },
          { title: "Prova comercial e financeira", text: "Reunimos documentação coerente com a atividade proposta." },
          { title: "Pedido de visto", text: "Preparamos e apresentamos o pedido consular." },
          { title: "Obrigações e residência", text: "Após a entrada, seguem-se as obrigações empresariais e fiscais necessárias e o pedido de residência aplicável." },
        ],
        faqs: [
          { q: "Há capital social mínimo fixo de 10 ou 15 mil euros?", a: "Esses valores não são um requisito legal universal do D2. A análise incide sobre a realidade do projeto, o investimento e os meios disponíveis." },
          { q: "Abrir uma empresa garante o visto?", a: "Não: a empresa é apenas um elemento possível da prova. A decisão depende do conjunto dos requisitos." },
          { q: "Posso pedir D2 como freelancer?", a: "Pode existir enquadramento para atividade independente, desde que se comprove o trabalho proposto e os restantes requisitos." },
        ],
        ctaTitle: "Tem um projeto de negócio ou prestação de serviços?",
        ctaLead: "Peça uma análise documental do D2.",
        message: "Olá, gostaria de marcar uma consulta sobre o visto D2 e o meu projeto de negócio ou atividade independente.",
      },
      en: {
        ...shared.en,
        bannerTitle: "D2 Visa for Entrepreneurs or Self-Employment",
        introTitle: "Assessing the Project and Activity",
        intro: [
          "D2 covers self-employment and entrepreneurial investment projects, which require different evidence.",
          "You need to demonstrate the activity plan, its viability and the means to carry it out. Incorporating a company does not, by itself, guarantee a visa.",
        ],
        help: [
          "Distinguish the provision of services from the entrepreneurial route.",
          "Review contracts, the business plan, investment and company documents.",
          "Identify any professional authorisations required.",
          "Organise the consular application and prepare the residence stage.",
        ],
        docs: [
          ...consularDocs.en,
          "For self-employment, a services contract or proposal.",
          "Proof of professional qualification for a regulated profession, where applicable.",
          "For entrepreneurs, a substantiated business plan, evidence of investment made or planned and available financial means.",
          "Company registration certificate and documents, if the company already exists.",
        ],
        steps: [
          { title: "Project assessment", text: "We assess the project, market and legal grounds." },
          { title: "Commercial and financial evidence", text: "We gather documents consistent with the proposed activity." },
          { title: "Visa application", text: "We prepare and submit the consular application." },
          { title: "Obligations and residence", text: "After entry, the necessary business and tax obligations and the applicable residence application follow." },
        ],
        faqs: [
          { q: "Is there a fixed minimum share capital of €10,000 or €15,000?", a: "These amounts are not a universal legal requirement for D2. The assessment concerns the reality of the project, investment and available means." },
          { q: "Does opening a company guarantee the visa?", a: "No: a company is only one possible piece of evidence. The decision depends on all the requirements." },
          { q: "Can I apply for D2 as a freelancer?", a: "The self-employment route may apply if the proposed work and other requirements can be demonstrated." },
        ],
        ctaTitle: "Do you have a business or services project?",
        ctaLead: "Request a document review for D2.",
        message: "Hello, I would like to book a consultation about the D2 visa and my business or self-employment project.",
      },
    },
  },
  "internationalClients/visto-d3-qualificados": {
    metaDescription: {
      pt: "Visto D3 para atividade altamente qualificada: análise da função, contrato, qualificações e remuneração, com preparação consular e de residência.",
      en: "D3 visa for highly qualified activity: review of the role, contract, qualifications and pay, with preparation for the consular and residence stages.",
    },
    text: {
      pt: {
        ...shared.pt,
        bannerTitle: "Visto D3 para Atividade Altamente Qualificada",
        introTitle: "Confirmar a categoria adequada",
        intro: [
          "O D3 destina-se a determinadas atividades qualificadas, incluindo trabalho especializado, docência e investigação, conforme o regime concreto.",
          "A função, o vínculo, as qualificações e, em algumas categorias, a remuneração devem corresponder às condições legais.",
        ],
        help: [
          "Identificar se o caso cabe no D3, no Cartão Azul UE, no Tech Visa ou noutra via.",
          "Rever o contrato e a descrição de funções.",
          "Conferir diplomas, experiência e reconhecimento de qualificações.",
          "Preparar o pedido consular e a fase perante a AIMA.",
        ],
        docs: [
          ...consularDocs.pt,
          "Contrato ou promessa de contrato, vínculo de investigação ou docência, ou prestação de serviços adequada ao regime.",
          "Descrição da função e remuneração, verificadas segundo a categoria escolhida.",
          "Diplomas, certificados e prova de experiência relevante.",
          "Reconhecimento ou habilitação profissional, quando a profissão é regulamentada.",
        ],
        steps: [
          { title: "Categoria jurídica", text: "Determinamos o regime adequado ao caso." },
          { title: "Função e qualificações", text: "Validamos a função, a remuneração e as qualificações exigidas." },
          { title: "Prova e visto", text: "Preparamos a documentação e o pedido consular." },
          { title: "Residência", text: "Após a entrada, segue-se a etapa de autorização de residência." },
        ],
        faqs: [
          { q: "Ter licenciatura basta?", a: "Não necessariamente. A função, o vínculo e os requisitos do regime escolhido também são avaliados." },
          { q: "D3 e Cartão Azul UE são iguais?", a: "Não: são regimes com requisitos e efeitos próprios. Comparamos a opção adequada ao caso." },
          { q: "Qual é o salário mínimo para o D3?", a: "O valor deve ser confirmado para o regime e a data do pedido. A exigência legal pode usar indicadores anuais que mudam." },
        ],
        ctaTitle: "Recebeu uma proposta para uma função qualificada?",
        ctaLead: "Analisamos o enquadramento antes do pedido.",
        message: "Olá, gostaria de marcar uma consulta sobre o visto D3 e uma proposta para uma função qualificada.",
      },
      en: {
        ...shared.en,
        bannerTitle: "D3 Visa for Highly Qualified Activity",
        introTitle: "Confirming the Appropriate Category",
        intro: [
          "D3 is for certain qualified activities, including specialist work, teaching and research, depending on the specific regime.",
          "The role, contractual relationship, qualifications and, in some categories, pay must meet the legal conditions.",
        ],
        help: [
          "Identify whether D3, the EU Blue Card, Tech Visa or another route fits the case.",
          "Review the contract and job description.",
          "Check degrees, experience and recognition of qualifications.",
          "Prepare the consular application and the stage with AIMA.",
        ],
        docs: [
          ...consularDocs.en,
          "Contract or promise of a contract, research or teaching arrangement, or services agreement appropriate to the regime.",
          "Description of the role and pay, checked against the chosen category.",
          "Degrees, certificates and evidence of relevant experience.",
          "Professional recognition or authorisation where the profession is regulated.",
        ],
        steps: [
          { title: "Legal category", text: "We determine the appropriate regime for the case." },
          { title: "Role and qualifications", text: "We check the role, pay and required qualifications." },
          { title: "Evidence and visa", text: "We prepare the documents and consular application." },
          { title: "Residence", text: "The residence permit stage follows entry into Portugal." },
        ],
        faqs: [
          { q: "Is having a degree enough?", a: "Not necessarily. The role, contractual relationship and requirements of the chosen regime are also assessed." },
          { q: "Are D3 and the EU Blue Card the same?", a: "No: they have their own requirements and effects. We compare the appropriate option for the case." },
          { q: "What is the minimum salary for D3?", a: "The amount must be confirmed for the regime and application date. The legal requirement may use annual indicators that change." },
        ],
        ctaTitle: "Have you received an offer for a qualified role?",
        ctaLead: "We assess the legal route before you apply.",
        message: "Hello, I would like to book a consultation about the D3 visa and an offer for a qualified role.",
      },
    },
  },
  "internationalClients/visto-d4-estudo": {
    metaDescription: {
      pt: "Visto D4 para estudar em Portugal: análise da admissão e do curso, documentos, alojamento e meios, fase consular e residência quando aplicável.",
      en: "D4 visa to study in Portugal: review of admission, course, documents, accommodation and means, the consular stage and residence where applicable.",
    },
    text: {
      pt: {
        ...shared.pt,
        bannerTitle: "Visto D4 para Estudar em Portugal",
        introTitle: "Relacionar o curso e as condições de permanência",
        intro: [
          "O visto de residência para estudo exige que o curso e o estabelecimento de ensino se enquadrem no regime aplicável.",
          "O processo relaciona a admissão, as condições de permanência e os documentos pessoais. Ensino superior, secundário, intercâmbio, estágio e mobilidade podem ter regras diferentes.",
        ],
        help: [
          "Verificar a carta de admissão e a natureza do curso.",
          "Preparar a prova de alojamento e meios de subsistência.",
          "Rever documentos de menores, bolsas e seguros.",
          "Acompanhar a fase consular e a posterior autorização de residência.",
        ],
        docs: [
          ...consularDocs.pt,
          "Carta de admissão, matrícula ou comprovativo equivalente.",
          "Prova de pagamento ou isenção de propinas, quando exigida.",
          "Comprovativo de bolsa ou de outros meios financeiros.",
          "Para menores, consentimento de quem exerce responsabilidades parentais e documentos de tutela aplicáveis.",
        ],
        steps: [
          { title: "Curso e visto", text: "Identificamos o curso e a categoria de visto." },
          { title: "Admissão e permanência", text: "Confirmamos a admissão e as condições de permanência." },
          { title: "Pedido consular", text: "Entregamos o pedido no posto competente." },
          { title: "Matrícula e residência", text: "Após a entrada, conclui-se a matrícula e trata-se da residência na AIMA, quando aplicável." },
        ],
        faqs: [
          { q: "Uma inscrição num curso qualquer dá direito ao D4?", a: "Não: o estabelecimento, o programa e a finalidade do visto têm de cumprir o regime aplicável." },
          { q: "A bolsa substitui todos os comprovativos financeiros?", a: "Pode alterar a prova exigida. O alcance da bolsa e a lista documental do consulado devem ser confirmados." },
          { q: "Um estudante pode trabalhar?", a: "Existem regras para o exercício de atividade profissional por titulares de residência para estudo. Devem ser analisadas para o título concreto." },
        ],
        ctaTitle: "Foi admitido numa instituição portuguesa?",
        ctaLead: "Confirme a documentação do visto antes de submeter.",
        message: "Olá, gostaria de marcar uma consulta sobre o visto D4 para estudar em Portugal.",
      },
      en: {
        ...shared.en,
        bannerTitle: "D4 Visa to Study in Portugal",
        introTitle: "Matching the Course and Conditions of Stay",
        intro: [
          "The residence visa for study requires the course and educational institution to fall within the applicable regime.",
          "The application connects admission, conditions of stay and personal documents. Higher and secondary education, exchanges, placements and mobility may have different rules.",
        ],
        help: [
          "Check the admission letter and nature of the course.",
          "Prepare evidence of accommodation and means of subsistence.",
          "Review documents for minors, scholarships and insurance.",
          "Assist with the consular stage and subsequent residence permit.",
        ],
        docs: [
          ...consularDocs.en,
          "Admission letter, enrolment or equivalent evidence.",
          "Proof of tuition fee payment or exemption, where required.",
          "Evidence of a scholarship or other financial means.",
          "For minors, consent from those with parental responsibility and applicable guardianship documents.",
        ],
        steps: [
          { title: "Course and visa", text: "We identify the course and visa category." },
          { title: "Admission and stay", text: "We confirm admission and the conditions of stay." },
          { title: "Consular application", text: "We submit the application to the competent post." },
          { title: "Enrolment and residence", text: "After entry, enrolment is completed and residence is dealt with through AIMA, where applicable." },
        ],
        faqs: [
          { q: "Does enrolling on any course qualify me for D4?", a: "No: the institution, programme and purpose of the visa must meet the applicable regime." },
          { q: "Does a scholarship replace all financial evidence?", a: "It may change the evidence required. The scope of the scholarship and the consulate's document list must be confirmed." },
          { q: "Can a student work?", a: "Rules apply to professional activity by holders of residence permits for study. These must be assessed for the specific permit." },
        ],
        ctaTitle: "Have you been admitted to a Portuguese institution?",
        ctaLead: "Check the visa documents before submitting your application.",
        message: "Hello, I would like to book a consultation about the D4 visa to study in Portugal.",
      },
    },
  },
};

export function getPracticeTopicDetail(area: PracticeArea, topic: PracticeTopic) {
  return practiceTopicDetails[`${area.key}/${topic.slug.pt}`];
}
