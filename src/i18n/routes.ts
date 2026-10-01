import { practiceAreas, type PracticeArea, type PracticeTopic } from "@/data/practice-areas";
import { defaultLocale, type Locale } from "./locales";

export const paths = {
  home: { pt: "/", en: "/en" },
  about: { pt: "/o-escritorio", en: "/en/about" },
  contact: { pt: "/contacto", en: "/en/contact" },
  services: { pt: "/servicos", en: "/en/services" },
  internationalClients: { pt: "/servicos/clientes-internacionais", en: "/en/services/international-clients" },
  nationality: { pt: "/servicos/nacionalidade", en: "/en/services/portuguese-nationality" },
  tenancy: { pt: "/servicos/arrendamento", en: "/en/services/tenancy-and-leases" },
  debtRecovery: { pt: "/servicos/recuperacao-credito", en: "/en/services/debt-recovery" },
  companyLaw: { pt: "/servicos/sociedades", en: "/en/services/company-law" },
  propertyInheritance: { pt: "/servicos/patrimonio", en: "/en/services/property-and-inheritance" },
  criminalLaw: { pt: "/servicos/penal", en: "/en/services/criminal-law" },
  administrativeLaw: { pt: "/servicos/administrativo", en: "/en/services/administrative-law" },
  immigration: { pt: "/servicos/imigracao-e-vistos", en: "/en/services/immigration-and-visas" },
  immigrationVisas: {
    pt: "/servicos/imigracao-e-vistos/vistos-e-autorizacao-de-residencia",
    en: "/en/services/immigration-and-visas/visas-and-residence-permits",
  },
  residenceRenewal: {
    pt: "/servicos/imigracao-e-vistos/renovacao-e-regularizacao-da-residencia",
    en: "/en/services/immigration-and-visas/residence-renewal-and-regularisation",
  },
  familyReunificationTopic: {
    pt: "/servicos/imigracao-e-vistos/reagrupamento-familiar",
    en: "/en/services/immigration-and-visas/family-reunification",
  },
  aimaNotifications: {
    pt: "/servicos/imigracao-e-vistos/notificacoes-audiencia-previa-e-indeferimentos-da-aima",
    en: "/en/services/immigration-and-visas/aima-notices-audiencia-previa-and-refusals",
  },
  aimaCourtProceedings: {
    pt: "/servicos/imigracao-e-vistos/processos-judiciais-contra-a-aima",
    en: "/en/services/immigration-and-visas/court-proceedings-against-aima",
  },
  portugueseNationalityTopic: {
    pt: "/servicos/imigracao-e-vistos/nacionalidade-portuguesa",
    en: "/en/services/immigration-and-visas/portuguese-nationality",
  },
  faq: { pt: "/faq", en: "/en/faq" },
  privacy: { pt: "/privacidade" },
  cookies: { pt: "/cookies" },
  blog: { pt: "/blog" },
  visaD2: { pt: "/servicos/visto-d2" },
  visaD7: { pt: "/servicos/visto-d7" },
  familyReunification: { pt: "/servicos/reagrupamento" },
} as const;

export type RouteKey = keyof typeof paths;

export const routePairs: { pt: string; en: string }[] = [
  paths.home,
  paths.about,
  paths.contact,
  paths.services,
];

export function pathFor(locale: Locale, key: RouteKey) {
  return paths[key][locale] ?? paths[key].pt;
}

export function practiceAreaPath(locale: Locale, area: PracticeArea) {
  return pathFor(locale, area.key);
}

export function practiceTopicPath(locale: Locale, area: PracticeArea, topic: PracticeTopic) {
  return `${practiceAreaPath(locale, area)}/${topic.slug[locale]}`;
}

export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return "en";
  }
  return defaultLocale;
}

function stripTrailingSlash(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

const exactPairs: { pt: string; en: string }[] = [
  paths.home,
  paths.about,
  paths.services,
  paths.contact,
  paths.immigration,
  paths.immigrationVisas,
  paths.residenceRenewal,
  paths.familyReunificationTopic,
  paths.aimaNotifications,
  paths.aimaCourtProceedings,
  paths.portugueseNationalityTopic,
  { pt: "/contato", en: "/en/contact" },
  ...practiceAreas.flatMap((area) => [
    { pt: pathFor("pt", area.key), en: pathFor("en", area.key) },
    ...area.topics.map((topic) => ({
      pt: practiceTopicPath("pt", area, topic),
      en: practiceTopicPath("en", area, topic),
    })),
  ]),
  { pt: "/faq", en: "/en/faq" },
  { pt: "/privacidade", en: "/en/privacy" },
  { pt: "/privacidade", en: "/en/privacidade" },
  { pt: "/cookies", en: "/en/cookies" },
];

const ptPrefixes: { prefix: string; en: string }[] = [
  { prefix: "/servicos", en: "/en/services" },
  { prefix: "/o-escritorio", en: "/en/about" },
  { prefix: "/contacto", en: "/en/contact" },
  { prefix: "/contato", en: "/en/contact" },
  { prefix: "/nacionalidade", en: "/en/services" },
  { prefix: "/visto-d7", en: "/en/services" },
  { prefix: "/visto-d2", en: "/en/services" },
  { prefix: "/reagrupamento", en: "/en/services" },
];

const enPrefixes: { prefix: string; pt: string }[] = [
  { prefix: "/en/services", pt: "/servicos" },
  { prefix: "/en/about", pt: "/o-escritorio" },
  { prefix: "/en/contact", pt: "/contacto" },
];

export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const currentPath = stripTrailingSlash(pathname || "/");
  const currentLocale = getLocaleFromPathname(currentPath);

  if (currentLocale === nextLocale) {
    return currentPath;
  }

  const exact = exactPairs.find((pair) => pair[currentLocale] === currentPath);
  if (exact) {
    return exact[nextLocale];
  }

  if (nextLocale === "en") {
    const fallback = ptPrefixes.find(
      (item) => currentPath === item.prefix || currentPath.startsWith(`${item.prefix}/`),
    );
    return fallback?.en ?? paths.home.en;
  }

  const fallback = enPrefixes.find(
    (item) => currentPath === item.prefix || currentPath.startsWith(`${item.prefix}/`),
  );
  return fallback?.pt ?? paths.home.pt;
}
