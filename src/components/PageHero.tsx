"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import { useCopy } from "@/i18n/use-locale";
import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  crumbs: { label: string; href?: string }[];
}) {
  const { copy } = useCopy();

  return (
    <section className="bg-navy py-8 text-white md:py-10">
      <div className="container">
        <nav aria-label={copy.common.breadcrumb} className="mb-4 text-sm text-white/50">
          <ol className="flex flex-wrap items-center gap-2">
            {crumbs.map((crumb, i) => (
              <li key={`${crumb.label}-${i}`} className="flex items-center gap-2">
                {i > 0 && <span className="text-gold/50">/</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="gold-rule">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl font-display text-3xl leading-tight md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 mb-5 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
          {description}
        </p>
        <CtaLink>
          <WhatsAppIcon />
          {copy.common.whatsapp}
        </CtaLink>
      </div>
    </section>
  );
}
