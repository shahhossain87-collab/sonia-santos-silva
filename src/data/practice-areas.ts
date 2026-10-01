import type { Locale } from "@/i18n/locales";

type Localized = Record<Locale, string>;

export type PracticeAreaKey =
  | "internationalClients"
  | "nationality"
  | "tenancy"
  | "debtRecovery"
  | "companyLaw"
  | "propertyInheritance"
  | "criminalLaw"
  | "administrativeLaw";

export type PracticeTopic = {
  slug: Localized;
  title: Localized;
  whoFor: Localized;
  image: string;
};

export type PracticeArea = {
  key: PracticeAreaKey;
  slug: Localized;
  title: Localized;
  line: Localized;
  headline?: Localized;
  support?: Localized;
  topics: readonly PracticeTopic[];
};

const topic = (slug: Localized, title: Localized, whoFor: Localized, image: string): PracticeTopic => ({
  slug,
  title,
  whoFor,
  image,
});

export const practiceAreas: readonly PracticeArea[] = [
  {
    key: "internationalClients",
    slug: { pt: "clientes-internacionais", en: "international-clients" },
    title: { pt: "Clientes internacionais", en: "International clients" },
    line: {
      pt: "Para quem ainda vive no estrangeiro e quer viver, trabalhar, estudar, investir ou criar um negócio em Portugal legalmente.",
      en: "For people still abroad who want to live, work, study, invest or open a business in Portugal legally.",
    },
    headline: {
      pt: "Pretende viver, trabalhar, estudar, investir ou criar um negócio em Portugal?",
      en: "Do you intend to live, work, study, invest or create a business in Portugal?",
    },
    support: {
      pt: "Analisamos o seu caso antes de iniciar o processo, identificamos a solução legal adequada e acompanhamos a preparação da documentação necessária. Prestamos apoio desde o pedido de visto e entrada em Portugal até às etapas relacionadas com a autorização de residência, quando aplicável.",
      en: "We assess your situation before the process starts, identify the appropriate legal route and support preparation of the necessary information. We assist from the visa application and entry into Portugal through stages related to residence authorisation, where applicable.",
    },
    topics: [
      topic({ pt: "visto-d1-trabalho", en: "d1-work-visa" }, { pt: "Visto D1 · Trabalho", en: "D1 Visa · Employment" }, { pt: "Para pessoas com atividade profissional subordinada em Portugal.", en: "For people taking up employed work in Portugal." }, "visto-d1-trabalho"),
      topic({ pt: "visto-d2-empreendedores", en: "d2-entrepreneurs" }, { pt: "Visto D2 · Empreendedores e atividade independente", en: "D2 Visa · Entrepreneurs and independent activity" }, { pt: "Para empreendedores e pessoas que pretendem exercer atividade independente.", en: "For entrepreneurs and people planning independent activity." }, "visto-d2-empreendedores"),
      topic({ pt: "visto-d3-qualificados", en: "d3-highly-qualified-professionals" }, { pt: "Visto D3 · Profissionais altamente qualificados", en: "D3 Visa · Highly qualified professionals" }, { pt: "Para profissionais com atividade qualificada em Portugal.", en: "For professionals taking up qualified activity in Portugal." }, "visto-d3-qualificados"),
      topic({ pt: "visto-d4-estudo", en: "d4-study" }, { pt: "Visto D4 · Estudo", en: "D4 Visa · Study" }, { pt: "Para estudantes que pretendem frequentar ensino ou formação em Portugal.", en: "For students planning education or training in Portugal." }, "visto-d4-estudo"),
      topic({ pt: "visto-d7-rendimentos", en: "d7-own-income" }, { pt: "Visto D7 · Rendimentos próprios", en: "D7 Visa · Own income" }, { pt: "Para pessoas com meios próprios que pretendem residir em Portugal.", en: "For people with their own means who plan to reside in Portugal." }, "visto-d7-rendimentos"),
      topic({ pt: "visto-d8-trabalho-remoto", en: "d8-remote-work" }, { pt: "Visto D8 · Trabalho remoto / Nómadas digitais", en: "D8 Visa · Remote work / Digital nomads" }, { pt: "Para quem trabalha remotamente e pretende viver em Portugal.", en: "For people working remotely who plan to live in Portugal." }, "visto-d8-trabalho-remoto"),
      topic({ pt: "visto-procura-trabalho", en: "job-seeker-visa" }, { pt: "Visto para Procura de Trabalho", en: "Job Seeker Visa" }, { pt: "Para pessoas que pretendem procurar trabalho em Portugal de forma regular.", en: "For people who intend to look for work in Portugal lawfully." }, "visto-procura-trabalho"),
      topic({ pt: "reagrupamento-familiar", en: "family-reunification" }, { pt: "Reagrupamento Familiar", en: "Family Reunification" }, { pt: "Para familiares elegíveis que se encontram fora de Portugal.", en: "For eligible family members who are outside Portugal." }, "reagrupamento-familiar-internacional"),
    ],
  },
  {
    key: "nationality",
    slug: { pt: "nacionalidade", en: "portuguese-nationality" },
    title: { pt: "Nacionalidade Portuguesa", en: "Portuguese Nationality" },
    line: { pt: "Saiba se reúne as condições para adquirir a nacionalidade portuguesa.", en: "Find out whether you may meet the conditions to acquire Portuguese nationality." },
    support: {
      pt: "Analisamos a sua situação, verificamos a via legal aplicável, organizamos a documentação e acompanhamos o processo de nacionalidade portuguesa até à sua conclusão. Quando há representação por advogado ou solicitador, o profissional pode apresentar o pedido online e acompanhá-lo na área profissional reservada. O regime aplicável é confirmado após análise do caso, incluindo as alterações da Lei Orgânica n.º 1/2026 e a regulamentação complementar aplicável.",
      en: "We assess your situation, confirm the applicable legal route, organise the relevant information and follow the Portuguese nationality process through to its conclusion. When represented by a lawyer or solicitor, the professional may submit the application online and follow it through the reserved professional area. The applicable route is confirmed after reviewing the case, including changes under Organic Law 1/2026 and any applicable complementary regulation.",
    },
    topics: [
      topic({ pt: "por-residencia", en: "by-residence" }, { pt: "Nacionalidade por residência", en: "Nationality by residence" }, { pt: "Para residentes que pretendem confirmar a via de nacionalidade aplicável ao seu caso.", en: "For residents who need to confirm the nationality route applicable to their case." }, "nacionalidade-residencia"),
      topic({ pt: "por-casamento-ou-uniao-de-facto", en: "by-marriage-or-partnership" }, { pt: "Nacionalidade por casamento ou união de facto", en: "Nationality by marriage or união de facto" }, { pt: "Para cônjuges ou unidos de facto que pretendem analisar a sua situação.", en: "For spouses or partners who need their circumstances reviewed." }, "nacionalidade-casamento-uniao-facto"),
      topic({ pt: "filhos-de-cidadaos-portugueses", en: "children-of-portuguese-citizens" }, { pt: "Filhos de cidadãos portugueses", en: "Children of Portuguese citizens" }, { pt: "Para filhos de cidadãos portugueses que precisam de analisar a via disponível.", en: "For children of Portuguese citizens who need to review the available route." }, "filhos-cidadaos-portugueses"),
      topic({ pt: "netos-de-cidadaos-portugueses", en: "grandchildren-of-portuguese-citizens" }, { pt: "Netos de cidadãos portugueses", en: "Grandchildren of Portuguese citizens" }, { pt: "Para netos de cidadãos portugueses que pretendem avaliar o enquadramento legal.", en: "For grandchildren of Portuguese citizens who need to assess the legal framework." }, "netos-cidadaos-portugueses"),
      topic({ pt: "criancas-nascidas-em-portugal", en: "children-born-in-portugal" }, { pt: "Crianças nascidas em Portugal", en: "Children born in Portugal" }, { pt: "Para famílias que pretendem confirmar a situação de crianças nascidas em Portugal.", en: "For families who need to confirm the position of children born in Portugal." }, "criancas-nascidas-portugal"),
      topic({ pt: "outras-formas-de-aquisicao", en: "other-ways-of-acquiring-nationality" }, { pt: "Outras formas de aquisição da nacionalidade", en: "Other ways of acquiring nationality" }, { pt: "Para situações que exigem análise da via legal adequada.", en: "For situations requiring analysis of the appropriate legal route." }, "outras-formas-nacionalidade"),
    ],
  },
  {
    key: "tenancy", slug: { pt: "arrendamento", en: "tenancy-and-leases" }, title: { pt: "Arrendamento", en: "Tenancy and Leases" }, line: { pt: "Apoio jurídico a senhorios e arrendatários, desde a preparação do contrato até à resolução de conflitos.", en: "Legal support for landlords and tenants, from preparing the agreement to resolving disputes." },
    topics: [
      topic({ pt: "contratos", en: "tenancy-agreements" }, { pt: "Contratos de Arrendamento", en: "Tenancy Agreements" }, { pt: "Para senhorios e arrendatários em arrendamento habitacional ou comercial.", en: "For landlords and tenants in residential or commercial leases." }, "contratos-arrendamento"),
      topic({ pt: "despejo-entrega", en: "eviction-and-handover" }, { pt: "Despejo e Entrega do Imóvel", en: "Eviction and Handover of Property" }, { pt: "Para situações de entrega do imóvel ou cessação da ocupação.", en: "For property handover or end-of-occupation situations." }, "despejo-entrega-imovel"),
      topic({ pt: "rendas-em-atraso", en: "rent-arrears" }, { pt: "Rendas em Atraso", en: "Rent Arrears" }, { pt: "Para senhorios e arrendatários perante rendas em atraso.", en: "For landlords and tenants dealing with rent arrears." }, "rendas-atraso"),
      topic({ pt: "senhorios-inquilinos", en: "landlords-and-tenants" }, { pt: "Senhorios e Inquilinos", en: "Landlords and Tenants" }, { pt: "Para dúvidas e conflitos na relação de arrendamento.", en: "For questions and disputes in a tenancy relationship." }, "senhorios-inquilinos"),
      topic({ pt: "cessacao-renovacao", en: "termination-and-renewal" }, { pt: "Cessação e Renovação do Contrato", en: "Termination and Renewal of Agreement" }, { pt: "Para analisar cessação, oposição e renovação contratual.", en: "For reviewing termination, opposition and agreement renewal." }, "cessacao-renovacao-contrato"),
      topic({ pt: "comercial", en: "commercial-leases" }, { pt: "Arrendamento Comercial", en: "Commercial Leases" }, { pt: "Para empresas, senhorios e ocupantes de espaços comerciais.", en: "For businesses, landlords and occupiers of commercial premises." }, "arrendamento-comercial"),
    ],
  },
  {
    key: "debtRecovery", slug: { pt: "recuperacao-credito", en: "debt-recovery" }, title: { pt: "Recuperação de Crédito", en: "Debt Recovery" }, line: { pt: "Acompanhamento jurídico na cobrança de valores em dívida, procurando uma solução eficaz por via extrajudicial ou judicial.", en: "Legal support in recovering sums due, seeking an effective extrajudicial or judicial solution." },
    topics: [
      topic({ pt: "faturas-dividas", en: "overdue-invoices-and-debts" }, { pt: "Faturas e Dívidas em Atraso", en: "Overdue Invoices and Debts" }, { pt: "Para credores que pretendem avaliar valores em dívida.", en: "For creditors who need to assess sums due." }, "faturas-dividas-atraso"),
      topic({ pt: "cobranca-extrajudicial", en: "extrajudicial-recovery" }, { pt: "Cobrança Extrajudicial", en: "Extrajudicial Recovery" }, { pt: "Para quem procura uma solução antes de recorrer ao tribunal.", en: "For those seeking a solution before going to court." }, "cobranca-extrajudicial"),
      topic({ pt: "injuncoes", en: "payment-orders" }, { pt: "Injunções", en: "Injunções" }, { pt: "Para credores que ponderam o procedimento de injunção.", en: "For creditors considering the injunção procedure." }, "injuncoes"),
      topic({ pt: "acoes-cobranca", en: "debt-claims" }, { pt: "Ações de Cobrança", en: "Debt Recovery Claims" }, { pt: "Para situações que podem exigir uma ação judicial de cobrança.", en: "For matters that may require a judicial debt claim." }, "acoes-cobranca"),
      topic({ pt: "execucoes", en: "enforcement" }, { pt: "Execuções", en: "Enforcement Proceedings" }, { pt: "Para credores com título que pretendem analisar a via executiva.", en: "For creditors with an enforceable title who need to assess enforcement." }, "execucoes"),
      topic({ pt: "acordos-pagamento", en: "payment-agreements" }, { pt: "Acordos de Pagamento", en: "Payment Agreements" }, { pt: "Para credores e devedores que procuram formalizar uma solução de pagamento.", en: "For creditors and debtors seeking to formalise a payment solution." }, "acordos-pagamento"),
    ],
  },
  {
    key: "companyLaw", slug: { pt: "sociedades", en: "company-law" }, title: { pt: "Direito das Sociedades", en: "Company Law" }, line: { pt: "Constituição, alterações societárias, cessão de quotas, gerência e acompanhamento jurídico de empresas.", en: "Incorporation, corporate changes, quota transfers, management and legal support for companies." },
    topics: [
      topic({ pt: "constituicao", en: "incorporation" }, { pt: "Constituição de Sociedades", en: "Company Incorporation" }, { pt: "Para quem pretende iniciar uma sociedade em Portugal.", en: "For people planning to start a company in Portugal." }, "constituicao-sociedades"),
      topic({ pt: "alteracoes", en: "corporate-changes" }, { pt: "Alterações Societárias", en: "Corporate Changes" }, { pt: "Para sociedades que precisam de atualizar a sua estrutura ou registos.", en: "For companies that need to update their structure or registrations." }, "alteracoes-societarias"),
      topic({ pt: "cessao-quotas", en: "quota-transfers" }, { pt: "Cessão de Quotas", en: "Quota Transfers" }, { pt: "Para sócios envolvidos na transmissão de quotas.", en: "For partners involved in transferring quotas." }, "cessao-quotas"),
      topic({ pt: "entrada-saida-socios", en: "entry-and-exit-of-partners" }, { pt: "Entrada e Saída de Sócios", en: "Entry and Exit of Partners" }, { pt: "Para empresas e sócios perante mudanças na composição societária.", en: "For companies and partners facing changes in ownership." }, "entrada-saida-socios"),
      topic({ pt: "gerentes", en: "appointment-and-resignation-of-managers" }, { pt: "Nomeação e Renúncia de Gerentes", en: "Appointment and Resignation of Managers" }, { pt: "Para sociedades que precisam de tratar da gerência.", en: "For companies that need to address management appointments or resignations." }, "nomeacao-renuncia-gerentes"),
      topic({ pt: "dissolucao", en: "dissolution-and-closure" }, { pt: "Dissolução e Encerramento de Empresas", en: "Dissolution and Closure of Companies" }, { pt: "Para empresas que ponderam encerrar ou dissolver a sociedade.", en: "For companies considering closure or dissolution." }, "dissolucao-encerramento-empresas"),
      topic({ pt: "atas-deliberacoes", en: "minutes-and-corporate-resolutions" }, { pt: "Atas, Deliberações e Documentação Societária", en: "Minutes, Resolutions and Corporate Records" }, { pt: "Para sociedades que precisam de organizar decisões societárias.", en: "For companies that need to record corporate decisions." }, "atas-deliberacoes-societarias"),
      topic({ pt: "conflitos-socios", en: "partner-disputes" }, { pt: "Conflitos entre Sócios", en: "Partner Disputes" }, { pt: "Para sócios e empresas perante divergências societárias.", en: "For partners and companies facing corporate disputes." }, "conflitos-socios"),
    ],
  },
  {
    key: "propertyInheritance", slug: { pt: "patrimonio", en: "property-and-inheritance" }, title: { pt: "Património e Sucessões", en: "Property and Inheritance" }, line: { pt: "Heranças, partilhas, testamentos e proteção do património familiar.", en: "Inheritance, division of estates, wills and protection of family assets." },
    topics: [
      topic({ pt: "herancas-partilhas", en: "inheritance-and-division" }, { pt: "Heranças e Partilhas", en: "Inheritance and Division of Estates" }, { pt: "Para herdeiros e famílias perante uma sucessão.", en: "For heirs and families dealing with an estate." }, "herancas-partilhas"),
      topic({ pt: "habilitacao-herdeiros", en: "declaration-of-heirs" }, { pt: "Habilitação de Herdeiros", en: "Declaration of Heirs" }, { pt: "Para famílias que precisam de regularizar a qualidade de herdeiro.", en: "For families who need to establish heirship." }, "habilitacao-herdeiros"),
      topic({ pt: "testamentos", en: "wills" }, { pt: "Testamentos", en: "Wills" }, { pt: "Para pessoas que pretendem planear a sucessão por testamento.", en: "For people planning succession through a will." }, "testamentos"),
      topic({ pt: "partilhas-acordo", en: "agreed-division" }, { pt: "Partilhas por Acordo", en: "Agreed Division of Estates" }, { pt: "Para herdeiros que procuram uma partilha por acordo.", en: "For heirs seeking an agreed division of an estate." }, "partilhas-acordo"),
      topic({ pt: "conflitos-herdeiros", en: "heir-disputes" }, { pt: "Conflitos entre Herdeiros", en: "Disputes between Heirs" }, { pt: "Para herdeiros perante divergências na sucessão.", en: "For heirs facing succession disputes." }, "conflitos-herdeiros"),
      topic({ pt: "imoveis-heranca", en: "inherited-property" }, { pt: "Imóveis em Herança", en: "Inherited Property" }, { pt: "Para famílias com imóveis integrados numa herança.", en: "For families with property included in an estate." }, "imoveis-heranca"),
      topic({ pt: "planeamento-sucessorio", en: "succession-planning" }, { pt: "Planeamento Sucessório", en: "Succession Planning" }, { pt: "Para quem pretende antecipar decisões sobre património familiar.", en: "For people planning ahead for family assets." }, "planeamento-sucessorio"),
    ],
  },
  {
    key: "criminalLaw", slug: { pt: "penal", en: "criminal-law" }, title: { pt: "Direito Penal", en: "Criminal Law" }, line: { pt: "Defesa e acompanhamento em processos criminais, desde a denúncia ao tribunal.", en: "Defence and support in criminal proceedings, from a report to court." },
    topics: [
      topic({ pt: "queixas", en: "criminal-reports" }, { pt: "Queixas e Participações Criminais", en: "Criminal Reports and Complaints" }, { pt: "Para quem pretende analisar uma queixa ou participação criminal.", en: "For people who need to assess a criminal report or complaint." }, "queixas-participacoes-criminais"),
      topic({ pt: "arguidos", en: "defence-for-defendants" }, { pt: "Arguidos e Defesa Criminal", en: "Defence for Defendants" }, { pt: "Para pessoas constituídas arguidas ou chamadas a intervir num processo.", en: "For people named as defendants or required to take part in a proceeding." }, "arguidos-defesa-criminal"),
      topic({ pt: "vitimas", en: "victims-of-crime" }, { pt: "Vítimas de Crime", en: "Victims of Crime" }, { pt: "Para vítimas que precisam de compreender os passos do processo.", en: "For victims who need to understand the steps in a proceeding." }, "vitimas-crime"),
      topic({ pt: "detencao", en: "detention-and-questioning" }, { pt: "Detenção e Interrogatório", en: "Detention and Questioning" }, { pt: "Para pessoas perante detenção ou interrogatório.", en: "For people facing detention or questioning." }, "detencao-interrogatorio"),
      topic({ pt: "violencia-domestica", en: "domestic-violence" }, { pt: "Violência Doméstica", en: "Domestic Violence" }, { pt: "Para vítimas ou pessoas envolvidas num processo de violência doméstica.", en: "For victims or people involved in a domestic violence proceeding." }, "violencia-domestica"),
      topic({ pt: "crimes-contra-pessoas-patrimonio", en: "offences-against-people-and-property" }, { pt: "Crimes contra Pessoas e Património", en: "Offences against People and Property" }, { pt: "Para situações que envolvem alegados crimes contra pessoas ou património.", en: "For matters involving alleged offences against people or property." }, "crimes-pessoas-patrimonio"),
      topic({ pt: "recursos", en: "appeals-and-court-proceedings" }, { pt: "Recursos e Processos em Tribunal", en: "Appeals and Court Proceedings" }, { pt: "Para quem precisa de analisar recursos ou fases em tribunal.", en: "For people who need to assess appeals or stages in court." }, "recursos-processos-tribunal"),
    ],
  },
  {
    key: "administrativeLaw", slug: { pt: "administrativo", en: "administrative-law" }, title: { pt: "Direito Administrativo", en: "Administrative Law" }, line: { pt: "Apoio jurídico em decisões, notificações e conflitos com entidades públicas.", en: "Legal support in decisions, notices and disputes with public bodies." },
    topics: [
      topic({ pt: "notificacoes-decisoes", en: "administrative-notices-and-decisions" }, { pt: "Notificações e Decisões Administrativas", en: "Administrative Notices and Decisions" }, { pt: "Para pessoas e empresas que recebem decisões de entidades públicas.", en: "For people and businesses receiving decisions from public bodies." }, "notificacoes-decisoes-administrativas"),
      topic({ pt: "audiencia-previa", en: "audiencia-previa" }, { pt: "Audiência Prévia", en: "Audiência Prévia" }, { pt: "Para respostas em procedimentos de administração pública fora do âmbito da AIMA.", en: "For responses in public-administration procedures outside AIMA matters." }, "audiencia-previa-administrativa"),
      topic({ pt: "impugnacao", en: "challenge-of-administrative-decisions" }, { pt: "Impugnação de Decisões Administrativas", en: "Challenge of Administrative Decisions" }, { pt: "Para quem pretende analisar uma decisão administrativa de outra entidade pública.", en: "For people who need to assess an administrative decision by another public body." }, "impugnacao-decisoes-administrativas"),
      topic({ pt: "contraordenacoes", en: "administrative-offences-and-fines" }, { pt: "Contraordenações e Coimas", en: "Administrative Offences and Fines" }, { pt: "Para pessoas e empresas notificadas em processos contraordenacionais.", en: "For people and businesses notified in administrative-offence proceedings." }, "contraordenacoes-coimas"),
      topic({ pt: "licencas", en: "licences-and-authorisations" }, { pt: "Licenças e Autorizações", en: "Licences and Authorisations" }, { pt: "Para pedidos ou decisões sobre licenças e autorizações públicas.", en: "For applications or decisions concerning public licences and authorisations." }, "licencas-autorizacoes"),
      topic({ pt: "recursos", en: "administrative-appeals" }, { pt: "Recursos Administrativos", en: "Administrative Appeals" }, { pt: "Para quem pondera recurso perante uma entidade pública.", en: "For people considering an appeal before a public body." }, "recursos-administrativos"),
      topic({ pt: "tribunais-administrativos", en: "administrative-courts" }, { pt: "Tribunais Administrativos", en: "Administrative Courts" }, { pt: "Para situações que podem exigir apreciação pelos tribunais administrativos.", en: "For matters that may require review by administrative courts." }, "tribunais-administrativos"),
    ],
  },
];

export function getPracticeArea(locale: Locale, slug: string) {
  return practiceAreas.find((area) => area.slug[locale] === slug);
}

export function getPracticeTopic(area: PracticeArea, locale: Locale, slug: string) {
  return area.topics.find((topicItem) => topicItem.slug[locale] === slug);
}
