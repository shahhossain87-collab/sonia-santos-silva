"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import { site } from "@/config/site";
import { pathFor } from "@/i18n/routes";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";

export default function Hero() {
  const { locale, copy } = useCopy();

  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="grid lg:min-h-[calc(100svh-7.25rem)] lg:grid-cols-2">
        <div className="flex items-end">
          <div className="w-full px-4 py-14 pb-20 sm:px-6 sm:pb-24 lg:px-12 lg:py-20 lg:pb-28 xl:px-16">
            <p className="gold-rule">{site.officeName}</p>
            <h1 className="mt-4 max-w-xl font-display text-[2.15rem] leading-[1.12] sm:text-5xl lg:text-[3.15rem]">
              {copy.home.heroTitle}
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
              {copy.home.heroLead}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
              {copy.home.heroNote}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink>
                <WhatsAppIcon />
                {copy.home.heroTalk}
              </CtaLink>
              <CtaLink href={pathFor(locale, "services")} variant="outline-light">
                {copy.home.heroServices}
              </CtaLink>
            </div>
          </div>
        </div>

        <figure className="relative aspect-[4/5] min-h-[22rem] sm:aspect-[5/4] lg:aspect-auto lg:min-h-full">
          <Image
            src="/images/team/sonia-santos.jpg"
            alt={copy.home.heroPortraitAlt}
            fill
            priority
            className="object-cover object-[50%_12%]"
            sizes="(min-width: 992px) 50vw, 100vw"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy/80 to-transparent px-5 pb-10 pt-16 lg:px-8 lg:pb-14">
            <p className="font-display text-2xl leading-tight">{site.lawyerName}</p>
            <p className="mt-1 text-xs tracking-[0.2em] text-gold uppercase">{site.role}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
