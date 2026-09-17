"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import { site, whatsappHref } from "@/config/site";
import { extraServiceIds, homeServiceIds } from "@/i18n/copy";
import { pathFor } from "@/i18n/routes";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";

export default function Hero() {
  const { locale, copy } = useCopy();
  const areas = [
    ...homeServiceIds.map((id) => copy.cards[id].title),
    ...extraServiceIds.map((id) => copy.extraServices[id].title),
  ];

  return (
    <section className="relative isolate overflow-hidden bg-navy pb-8 text-white">
      <div className="grid lg:min-h-[calc(100svh-7.25rem)] lg:grid-cols-2">
        <div className="flex items-end">
          <div className="w-full px-4 py-14 pb-16 sm:px-6 lg:px-12 lg:py-20 lg:pb-24 xl:px-16">
            <p className="gold-rule">{copy.home.heroKicker}</p>
            <Image
              src="/images/logo/jgl-lockup-on-dark.png"
              alt={site.officeName}
              width={963}
              height={416}
              priority
              className="mt-5 h-14 w-auto sm:h-16 lg:h-[4.35rem]"
              style={{ width: "auto" }}
            />
            <h1 className="mt-8 max-w-xl font-display text-[2.15rem] leading-[1.12] sm:text-5xl lg:text-[3.15rem]">
              {copy.home.heroTitle}
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
              {copy.home.heroLead}
            </p>
            <ul className="mt-6 grid max-w-lg grid-cols-1 gap-x-10 gap-y-1.5 text-sm text-white/70 sm:grid-cols-2">
              {areas.map((area) => (
                <li key={area} className="border-l border-gold/60 pl-3">
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
              {copy.home.heroNote}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={whatsappHref(copy.home.heroWhatsapp)}>
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
          <figcaption className="absolute inset-x-0 bottom-0 bg-navy/90 px-5 py-4 lg:px-8 lg:py-5">
            <p className="font-display text-2xl leading-tight">{site.lawyerName}</p>
            <p className="mt-1 text-xs tracking-[0.18em] text-gold uppercase">
              {copy.home.heroRole}
            </p>
            <p className="mt-1 text-xs text-white/65">
              {copy.home.heroLicense} {site.license}
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
