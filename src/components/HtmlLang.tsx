"use client";

import { localeHtmlLang } from "@/i18n/locales";
import { useLocale } from "@/i18n/use-locale";
import { useEffect } from "react";

export default function HtmlLang() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = localeHtmlLang[locale];
  }, [locale]);

  return null;
}
