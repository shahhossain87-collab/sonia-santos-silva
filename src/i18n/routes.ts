import { defaultLocale, type Locale } from "./locales";

export const paths = {
  home: { pt: "/", en: "/en" },
  about: { pt: "/o-escritorio", en: "/en/about" },
  contact: { pt: "/contacto", en: "/en/contact" },
  services: { pt: "/servicos", en: "/en/services" },
} as const;

export type RouteKey = keyof typeof paths;

export const routePairs: { pt: string; en: string }[] = [
  paths.home,
  paths.about,
  paths.contact,
  paths.services,
];

export function pathFor(locale: Locale, key: RouteKey) {
  return paths[key][locale];
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
  { pt: "/contato", en: "/en/contact" },
  { pt: "/servicos/nacionalidade", en: "/en/services/nationality" },
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
