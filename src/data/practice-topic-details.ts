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

// Stable area key + Portuguese topic slug; both languages use the same entry.
export const practiceTopicDetails: Partial<Record<`${PracticeAreaKey}/${string}`, TopicDetail>> = {
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
