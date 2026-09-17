"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import { site, whatsappHref } from "@/config/site";
import { pathFor } from "@/i18n/routes";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";

export default function Hero() {
  const { locale, copy } = useCopy();

  return (
    <section className="relative isolate overflow-hidden bg-navy pb-8 text-white">
      <div className="grid lg:min-h-[calc(100svh-7.25rem)] lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="flex items-end">
          <div className="w-full px-4 py-8 pb-10 sm:px-6 sm:py-12 lg:px-12 lg:py-20 lg:pb-24 xl:px-16">
            <p className="gold-rule">{copy.home.heroKicker}</p>
            <Image
              src="/images/logo/jgl-lockup-on-dark.png"
              alt={copy.brand.lockupLabel}
              width={963}
              height={416}
              priority
              className="mt-4 h-12 w-auto sm:mt-5 sm:h-16 lg:h-[4.85rem] xl:h-[5.15rem]"
              style={{ width: "auto" }}
            />
            <p className="mt-2 text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
              {copy.brand.descriptor}
            </p>
            <h1 className="mt-6 max-w-xl font-display text-[1.85rem] leading-[1.14] sm:mt-8 sm:text-5xl lg:text-[2.85rem] xl:text-[3.05rem]">
              {copy.home.heroTitle}
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base">
              {copy.home.heroLead}
            </p>
            <p className="mt-4 max-w-md pr-20 text-sm leading-relaxed text-white/55 sm:mt-5 sm:pr-0">
              {copy.home.heroNote}
            </p>
            <div className="mt-6 flex flex-col gap-3 pr-20 sm:mt-8 sm:flex-row sm:pr-0">
              <CtaLink href={`${pathFor(locale, "home")}#areas`} variant="outline-light">
                {copy.home.heroServices}
              </CtaLink>
              <CtaLink href={whatsappHref(copy.home.heroWhatsapp)}>
                <WhatsAppIcon />
                {copy.home.heroTalk}
              </CtaLink>
            </div>
          </div>
        </div>

        <figure className="group relative overflow-hidden lg:h-auto lg:min-h-full">
          <div className="relative h-[13.5rem] sm:h-[20rem] lg:absolute lg:inset-0 lg:h-auto">
            <Image
              src="/images/team/sonia-santos.jpg"
              alt={copy.home.heroPortraitAlt}
              fill
              priority
              className="img-zoom object-cover object-[50%_12%]"
              sizes="(min-width: 992px) 34vw, 100vw"
            />
          </div>
          <figcaption className="relative bg-navy/90 px-4 py-3 lg:absolute lg:inset-x-0 lg:bottom-0 lg:px-6 lg:py-4">
            <p className="font-display text-lg leading-tight lg:text-xl">{site.lawyerName}</p>
            <p className="mt-0.5 text-[10px] tracking-[0.18em] text-gold uppercase">
              {copy.home.heroRole}
            </p>
            <p className="mt-0.5 text-[11px] text-white/65">
              {copy.home.heroLicense} {site.license}
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
