import { headers } from "next/headers";
import { absoluteUrl } from "@/i18n/metadata";
import { getLocaleFromPathname, pathFor, paths, type RouteKey } from "@/i18n/routes";

function routeKeyFromPath(pathname: string): RouteKey | null {
  const current =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname || "/";

  for (const [key, pair] of Object.entries(paths)) {
    if (pair.pt === current || pair.en === current) {
      return key as RouteKey;
    }
  }

  return null;
}

export default async function LanguageHeadLinks() {
  const headerList = await headers();
  const pathname = headerList.get("x-pathname") ?? "/";
  const key = routeKeyFromPath(pathname);

  if (!key) {
    return null;
  }

  const locale = getLocaleFromPathname(pathname);
  const pt = absoluteUrl(pathFor("pt", key));
  const en = absoluteUrl(pathFor("en", key));
  const canonical = locale === "en" ? en : pt;

  return (
    <>
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="pt-PT" href={pt} />
      <link rel="alternate" hrefLang="en" href={en} />
      <link rel="alternate" hrefLang="x-default" href={pt} />
    </>
  );
}
