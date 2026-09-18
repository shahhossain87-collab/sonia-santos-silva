"use client";

import { site } from "@/config/site";
import { pathFor } from "@/i18n/routes";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  inverted?: boolean;
  compact?: boolean;
  className?: string;
};

const monogram = {
  light: {
    src: "/images/logo/jgl-monogram-header.png",
    width: 500,
    height: 287,
  },
  dark: {
    src: "/images/logo/jgl-monogram-header-on-dark.png",
    width: 500,
    height: 287,
  },
} as const;

const lockup = {
  light: {
    src: "/images/logo/jgl-lockup.png",
    width: 963,
    height: 416,
  },
  dark: {
    src: "/images/logo/jgl-lockup-on-dark.png",
    width: 963,
    height: 416,
  },
} as const;

export default function BrandMark({ inverted, compact, className = "" }: BrandMarkProps) {
  const { locale, copy } = useCopy();
  const palette = inverted ? "dark" : "light";
  const asset = compact ? monogram[palette] : lockup[palette];
  const descriptorClass = inverted ? "text-gold" : "text-gold-dark";

  return (
    <Link
      href={pathFor(locale, "home")}
      className={`inline-flex shrink-0 ${compact ? "items-center" : "flex-col items-start"} ${className}`.trim()}
      aria-label={copy.brand.lockupLabel}
    >
      <Image
        src={asset.src}
        alt={compact ? "" : copy.brand.name}
        width={asset.width}
        height={asset.height}
        priority={compact}
        quality={100}
        sizes={compact ? "112px" : "384px"}
        className={
          compact
            ? "h-8 w-auto sm:h-9 lg:h-10"
            : "h-20 w-auto max-w-[20rem] sm:h-24 sm:max-w-[24rem]"
        }
        style={{ width: "auto" }}
      />
      {compact ? (
        <span className="ml-3 hidden min-w-0 flex-col xl:flex">
          <span className="font-display text-[15px] leading-tight text-navy">
            {copy.brand.name}
          </span>
          <span className={`mt-0.5 text-[10px] font-semibold tracking-[0.16em] uppercase ${descriptorClass}`}>
            {copy.brand.descriptor}
          </span>
        </span>
      ) : (
        <span className={`mt-2 text-[11px] font-semibold tracking-[0.18em] uppercase ${descriptorClass}`}>
          {copy.brand.descriptor}
        </span>
      )}
    </Link>
  );
}
