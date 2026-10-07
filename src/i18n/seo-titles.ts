/**
 * Shorter <title> text for pages whose visible heading is too long for search results.
 * Keyed by the page's own path. Only the <title>/og:title changes; page headings and copy stay as they are.
 * The " | Gabinete Jurídico Laranjeiras" suffix is added by pageMetadata, so keep these to ~28 characters.
 */
export const seoTitles: Record<string, string> = {
  // Imigração e vistos
  "/servicos/imigracao-e-vistos/vistos-e-autorizacao-de-residencia": "Vistos e Residência",
  "/en/services/immigration-and-visas/visas-and-residence-permits": "Visas and Residence Permits",
  "/servicos/imigracao-e-vistos/renovacao-e-regularizacao-da-residencia": "Renovação da Residência",
  "/en/services/immigration-and-visas/residence-renewal-and-regularisation": "Residence Permit Renewal",
  "/en/services/immigration-and-visas/family-reunification": "Family Reunification Guide",
  "/servicos/imigracao-e-vistos/notificacoes-audiencia-previa-e-indeferimentos-da-aima": "Audiência Prévia da AIMA",
  "/en/services/immigration-and-visas/aima-notices-audiencia-previa-and-refusals": "AIMA Notices and Refusals",
  "/servicos/imigracao-e-vistos/processos-judiciais-contra-a-aima": "Processos Judiciais AIMA",
  "/en/services/immigration-and-visas/court-proceedings-against-aima": "Court Cases against AIMA",
  "/en/services/immigration-and-visas/portuguese-nationality": "Portuguese Nationality Guide",

  // Clientes internacionais
  "/servicos/clientes-internacionais/visto-d2-empreendedores": "Visto D2 · Empreendedores",
  "/en/services/international-clients/d2-entrepreneurs": "D2 Visa · Entrepreneurs",
  "/servicos/clientes-internacionais/visto-d3-qualificados": "Visto D3 · Alta Qualificação",
  "/en/services/international-clients/d3-highly-qualified-professionals": "D3 Visa · Highly Qualified",
  "/servicos/clientes-internacionais/visto-d7-rendimentos": "Visto D7 · Rendimentos",
  "/servicos/clientes-internacionais/visto-d8-trabalho-remoto": "Visto D8 · Nómadas Digitais",
  "/en/services/international-clients/d8-remote-work": "D8 Visa · Digital Nomads",
  "/servicos/clientes-internacionais/visto-procura-trabalho": "Visto Procura de Trabalho",

  // Nacionalidade
  "/servicos/nacionalidade/por-casamento-ou-uniao-de-facto": "Nacionalidade por Casamento",
  "/en/services/portuguese-nationality/by-marriage-or-partnership": "Nationality by Marriage",
  "/servicos/nacionalidade/filhos-de-cidadaos-portugueses": "Filhos de Portugueses",
  "/en/services/portuguese-nationality/children-of-portuguese-citizens": "Nationality: Children",
  "/servicos/nacionalidade/netos-de-cidadaos-portugueses": "Netos de Portugueses",
  "/en/services/portuguese-nationality/grandchildren-of-portuguese-citizens": "Nationality: Grandchildren",
  "/servicos/nacionalidade/criancas-nascidas-em-portugal": "Nascidos em Portugal",
  "/servicos/nacionalidade/outras-formas-de-aquisicao": "Outras Vias de Nacionalidade",
  "/en/services/portuguese-nationality/other-ways-of-acquiring-nationality": "Other Routes to Nationality",

  // Arrendamento
  "/servicos/arrendamento/cessacao-renovacao": "Cessação de Arrendamento",
  "/en/services/tenancy-and-leases/termination-and-renewal": "Lease Termination & Renewal",
  "/en/services/tenancy-and-leases/eviction-and-handover": "Eviction and Handover",

  // Sociedades
  "/servicos/sociedades/atas-deliberacoes": "Atas e Deliberações Sociais",
  "/en/services/company-law/minutes-and-corporate-resolutions": "Minutes and Resolutions",
  "/servicos/sociedades/gerentes": "Nomeação de Gerentes",
  "/en/services/company-law/appointment-and-resignation-of-managers": "Appointing Company Managers",
  "/servicos/sociedades/dissolucao": "Dissolução de Empresas",
  "/en/services/company-law/dissolution-and-closure": "Company Dissolution",

  // Património
  "/en/services/property-and-inheritance/inheritance-and-division": "Inheritance and Estates",

  // Penal
  "/servicos/penal/crimes-contra-pessoas-patrimonio": "Crimes contra Pessoas e Bens",
  "/en/services/criminal-law/offences-against-people-and-property": "Personal & Property Crimes",
  "/servicos/penal/queixas": "Queixas Criminais",
  "/en/services/criminal-law/criminal-reports": "Criminal Complaints",
  "/servicos/penal/recursos": "Recursos e Processos Penais",
  "/en/services/criminal-law/appeals-and-court-proceedings": "Appeals and Court Cases",

  // Administrativo
  "/servicos/administrativo/notificacoes-decisoes": "Notificações Administrativas",
  "/en/services/administrative-law/administrative-notices-and-decisions": "Administrative Notices",
  "/servicos/administrativo/impugnacao": "Impugnação Administrativa",
  "/en/services/administrative-law/challenge-of-administrative-decisions": "Contesting Admin Decisions",
  "/en/services/administrative-law/administrative-offences-and-fines": "Administrative Fines",
};
