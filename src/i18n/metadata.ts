import { site } from "@/config/site";
import type { Metadata } from "next";
import { localeOg, type Locale } from "./locales";
import { pathFor, paths, type RouteKey } from "./routes";
import { ui } from "./copy";

export function absoluteUrl(path: string) {
  const origin = site.url.replace(/\/$/, "");
  if (!path || path === "/") {
    return origin;
  }
  return new URL(path, `${origin}/`).toString().replace(/\/$/, "");
}

export function languageAlternates(locale: Locale, key: RouteKey): NonNullable<Metadata["alternates"]> {
  const pt = absoluteUrl(pathFor("pt", key));
  const englishPath = (paths[key] as { en?: string }).en;
  const en = englishPath ? absoluteUrl(englishPath) : undefined;
  const canonical = locale === "en" && en ? en : pt;

  return {
    canonical,
    languages: {
      "pt-PT": pt,
      ...(en ? { en, "x-default": pt } : {}),
    },
  };
}

function absoluteTitle(_locale: Locale, title: string) {
  const suffix = site.officeName;
  return title.includes(suffix) ? title : `${title} | ${suffix}`;
}

export function pageMetadata(
  locale: Locale,
  key: RouteKey,
  extras: {
    title: string;
    description: string;
  },
): Metadata {
  const title = absoluteTitle(locale, extras.title);
  const englishPath = (paths[key] as { en?: string }).en;
  const currentPath = locale === "en" && englishPath ? englishPath : pathFor("pt", key);
  return {
    title: { absolute: title },
    description: extras.description,
    alternates: languageAlternates(locale, key),
    openGraph: {
      title,
      description: extras.description,
      siteName: site.officeName,
      locale: localeOg[locale],
      alternateLocale: locale === "en" ? ["pt_PT"] : ["en"],
      url: absoluteUrl(currentPath),
    },
  };
}

export function homeMetadata(locale: Locale): Metadata {
  const copy = ui[locale].meta;
  return pageMetadata(locale, "home", {
    title: copy.homeTitle,
    description: copy.homeDescription,
  });
}
