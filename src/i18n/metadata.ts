import { site } from "@/config/site";
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

function absoluteTitle(locale: Locale, title: string) {
  const suffix = locale === "en" ? site.lawyerName : site.title;
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
  return {
    title: { absolute: title },
    description: extras.description,
    alternates: languageAlternates(locale, key),
    openGraph: {
      title,
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
