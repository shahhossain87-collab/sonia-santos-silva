"use client";

import { useCopy } from "@/i18n/use-locale";
import { pathFor, switchLocalePath } from "@/i18n/routes";
import type { Locale } from "@/i18n/locales";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const pathname = usePathname() ?? "/";
  const { locale, copy } = useCopy();

  const options: { locale: Locale; label: string; href: string }[] = [
    {
      locale: "pt",
      label: copy.header.portuguese,
      href: switchLocalePath(pathname, "pt"),
    },
    {
      locale: "en",
      label: copy.header.english,
      href: switchLocalePath(pathname, "en"),
    },
  ];

  return (
    <nav
      className={`flex items-center gap-1 text-[11px] font-semibold tracking-[0.16em] uppercase ${className}`}
      aria-label={copy.header.languageLabel}
    >
      {options.map((option, index) => {
        const active = option.locale === locale;
        return (
          <span key={option.locale} className="flex items-center gap-1">
            {index > 0 ? <span className="text-navy/25" aria-hidden="true">/</span> : null}
            <Link
              href={option.href || pathFor(option.locale, "home")}
              hrefLang={option.locale === "pt" ? "pt-PT" : "en"}
              aria-current={active ? "true" : undefined}
              className={
                active
                  ? "text-navy"
                  : "text-navy/45 transition hover:text-gold-dark"
              }
            >
              {option.label}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
