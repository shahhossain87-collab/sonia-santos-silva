"use client";

import { site } from "@/config/site";
import { pathFor } from "@/i18n/routes";
import { useLocale } from "@/i18n/use-locale";
import Link from "next/link";

type BrandMarkProps = {
  inverted?: boolean;
  compact?: boolean;
};

export default function BrandMark({ inverted, compact }: BrandMarkProps) {
  const locale = useLocale();
  const nameColor = inverted ? "text-white" : "text-navy";
  const box = inverted
    ? "border-gold text-gold"
    : "border-gold text-navy";

  return (
    <Link href={pathFor(locale, "home")} className="flex items-center gap-3" aria-label={site.title}>
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center border ${box} font-display text-lg`}
      >
        S
      </span>
      <span className={compact ? "hidden sm:block" : "block"}>
        <span className={`block font-display text-[17px] leading-tight ${nameColor}`}>
          {site.shortName}
        </span>
        <span className="mt-0.5 block text-[10px] font-semibold tracking-[0.22em] text-gold uppercase">
          {site.role}
        </span>
      </span>
    </Link>
  );
}
