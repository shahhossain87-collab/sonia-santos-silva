"use client";

import { usePathname } from "next/navigation";
import { defaultLocale, type Locale } from "./locales";
import { getLocaleFromPathname } from "./routes";
import { getCopy } from "./copy";

export function useLocale(): Locale {
  const pathname = usePathname();
  return getLocaleFromPathname(pathname ?? "/");
}

export function useCopy() {
  const locale = useLocale();
  return { locale, copy: getCopy(locale) };
}
