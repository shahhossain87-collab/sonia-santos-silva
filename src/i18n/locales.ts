export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export const localeHtmlLang: Record<Locale, string> = {
  pt: "pt-PT",
  en: "en",
};

export const localeOg: Record<Locale, string> = {
  pt: "pt_PT",
  en: "en",
};

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "pt" || value === "en";
}
