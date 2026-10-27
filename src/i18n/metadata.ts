import { site } from "@/config/site";
import type { Metadata } from "next";
import { localeOg, type Locale } from "./locales";
import { pathFor, paths, type RouteKey } from "./routes";
import { ui } from "./copy";
import { seoTitles } from "./seo-titles";

/** A route key, or the page's own PT/EN paths (used by dynamic subpages). */
export type PageRoute = RouteKey | { pt: string; en?: string };

function routePaths(route: PageRoute): { pt: string; en?: string } {
  if (typeof route !== "string") return route;
  return { pt: pathFor("pt", route), en: (paths[route] as { en?: string }).en };
}

export function absoluteUrl(path: string) {
  const origin = site.url.replace(/\/$/, "");
  if (!path || path === "/") {
    return origin;
  }
  return new URL(path, `${origin}/`).toString().replace(/\/$/, "");
}

/** Default share image. Referenced by root metadata and by every pageMetadata() call. */
export const ogImage = {
  url: "/images/og/gjl-og.png",
  width: 1200,
  height: 630,
  alt: "Gabinete Jurídico Laranjeiras — Advogados · Solicitadores, Lisboa",
} as const;

export function languageAlternates(locale: Locale, route: PageRoute): NonNullable<Metadata["alternates"]> {
  const own = routePaths(route);
  const pt = absoluteUrl(own.pt);
  const en = own.en ? absoluteUrl(own.en) : undefined;
  const canonical = locale === "en" && en ? en : pt;

  return {
    canonical,
    languages: {
      pt,
      "pt-PT": pt,
      ...(en ? { en } : {}),
      "x-default": pt,
    },
  };
}

function socialMetadata(locale: Locale, title: string, description: string, url: string): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      title,
      description,
      siteName: site.officeName,
      locale: localeOg[locale],
      alternateLocale: locale === "en" ? ["pt_PT"] : ["en"],
      type: "website",
      url,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

function absoluteTitle(_locale: Locale, title: string) {
  const suffix = site.officeName;
  return title.includes(suffix) ? title : `${title} | ${suffix}`;
}

export function pageMetadata(
  locale: Locale,
  route: PageRoute,
  extras: {
    title: string;
    description: string;
  },
): Metadata {
  const own = routePaths(route);
  const currentPath = locale === "en" && own.en ? own.en : own.pt;
  const title = absoluteTitle(locale, seoTitles[currentPath] ?? extras.title);
  return {
    title: { absolute: title },
    description: extras.description,
    alternates: languageAlternates(locale, route),
    ...socialMetadata(locale, title, extras.description, absoluteUrl(currentPath)),
  };
}

export function homeMetadata(locale: Locale): Metadata {
  const copy = ui[locale].meta;
  return pageMetadata(locale, "home", {
    title: copy.homeTitle,
    description: copy.homeDescription,
  });
}
