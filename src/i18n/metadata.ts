import { site } from "@/config/site";
import type { Metadata } from "next";
import { localeOg, type Locale } from "./locales";
import { pathFor, type RouteKey } from "./routes";
import { ui } from "./copy";

export function absoluteUrl(path: string) {
  return new URL(path || "/", site.url).toString();
}

export function languageAlternates(locale: Locale, key: RouteKey): NonNullable<Metadata["alternates"]> {
  const pt = absoluteUrl(pathFor("pt", key));
  const en = absoluteUrl(pathFor("en", key));
  const canonical = locale === "en" ? en : pt;

  return {
    canonical,
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
  const alternates = languageAlternates(locale, key);
  return {
    title: { absolute: title },
    description: extras.description,
    alternates,
    openGraph: {
      title,
      description: extras.description,
      locale: localeOg[locale],
      alternateLocale: locale === "en" ? ["pt_PT"] : ["en"],
      url: alternates.canonical,
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
