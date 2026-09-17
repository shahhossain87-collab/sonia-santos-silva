"use client";

import { site } from "@/config/site";
import { pathFor } from "@/i18n/routes";
import { useLocale } from "@/i18n/use-locale";
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
  const locale = useLocale();
  const palette = inverted ? "dark" : "light";
  const asset = compact ? monogram[palette] : lockup[palette];

  return (
    <Link
      href={pathFor(locale, "home")}
      className={`inline-flex shrink-0 items-center ${className}`.trim()}
      aria-label={site.officeName}
    >
      <Image
        src={asset.src}
        alt=""
        width={asset.width}
        height={asset.height}
        priority={compact}
        quality={100}
        sizes={compact ? "112px" : "288px"}
        className={
          compact
            ? "h-8 w-auto sm:h-9 lg:h-10"
            : "h-14 w-auto max-w-[16.5rem] sm:h-16 sm:max-w-[18rem]"
        }
        style={{ width: "auto" }}
      />
    </Link>
  );
}
