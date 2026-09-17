import type { Metadata } from "next";
import { localeOg, type Locale } from "./locales";
import { pathFor, type RouteKey } from "./routes";
import { ui } from "./copy";

export function languageAlternates(locale: Locale, key: RouteKey): NonNullable<Metadata["alternates"]> {
  const pt = pathFor("pt", key);
  const en = pathFor("en", key);

  return {
    canonical: locale === "en" ? en : pt,
    languages: {
      "pt-PT": pt,
      en,
      "x-default": pt,
    },
  };
}

export function pageMetadata(
  locale: Locale,
  key: RouteKey,
  extras: {
    title: string;
    description: string;
  },
): Metadata {
  return {
    title: extras.title,
    description: extras.description,
    alternates: languageAlternates(locale, key),
    openGraph: {
      title: extras.title,
      description: extras.description,
      locale: localeOg[locale],
      alternateLocale: locale === "en" ? ["pt_PT"] : ["en"],
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
