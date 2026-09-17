import { defaultLocale, type Locale } from "./locales";

export const paths = {
  home: { pt: "/", en: "/en" },
  about: { pt: "/o-escritorio", en: "/en/about" },
  contact: { pt: "/contato", en: "/en/contact" },
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

const ptFallbacks: { prefix: string; en: string }[] = [
  { prefix: "/servicos", en: paths.services.en },
  { prefix: "/o-escritorio", en: paths.about.en },
  { prefix: "/contato", en: paths.contact.en },
  { prefix: "/nacionalidade", en: paths.services.en },
  { prefix: "/visto-d7", en: paths.services.en },
  { prefix: "/visto-d2", en: paths.services.en },
  { prefix: "/reagrupamento", en: paths.services.en },
];

const enFallbacks: { prefix: string; pt: string }[] = [
  { prefix: "/en/services", pt: paths.services.pt },
  { prefix: "/en/about", pt: paths.about.pt },
  { prefix: "/en/contact", pt: paths.contact.pt },
];

export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const currentPath = stripTrailingSlash(pathname || "/");
  const currentLocale = getLocaleFromPathname(currentPath);

  if (currentLocale === nextLocale) {
    return currentPath;
  }

  const exact = routePairs.find((pair) => pair[currentLocale] === currentPath);
  if (exact) {
    return exact[nextLocale];
  }

  if (nextLocale === "en") {
    const fallback = ptFallbacks.find(
      (item) => currentPath === item.prefix || currentPath.startsWith(`${item.prefix}/`),
    );
    return fallback?.en ?? paths.home.en;
  }

  const fallback = enFallbacks.find(
    (item) => currentPath === item.prefix || currentPath.startsWith(`${item.prefix}/`),
  );
  return fallback?.pt ?? paths.home.pt;
}
