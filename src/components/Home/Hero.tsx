"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import { whatsappHref } from "@/config/site";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";

export default function Hero() {
  const { copy } = useCopy();

  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="relative aspect-[3/2] sm:aspect-[16/10] lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src="/images/team/equipa.jpg"
          alt={copy.home.teamGroupAlt}
          fill
          priority
          className="hero-backdrop object-cover object-[50%_18%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy from-[12%] via-navy/35 to-transparent lg:bg-gradient-to-r lg:from-navy/78 lg:via-navy/32 lg:to-navy/5" />
      </div>

      <div className="relative lg:flex lg:min-h-[36rem] lg:items-end">
        <div className="w-full max-w-xl px-4 pt-5 pb-8 sm:px-6 sm:pt-6 sm:pb-10 lg:max-w-2xl lg:px-12 lg:py-12 xl:px-16">
          <p className="gold-rule">{copy.home.heroKicker}</p>
          <Image
            src="/images/logo/jgl-lockup-on-dark.png"
            alt={copy.brand.lockupLabel}
            width={963}
            height={416}
            priority
            className="mt-3 h-11 w-auto sm:mt-5 sm:h-14 lg:h-[3.6rem] xl:h-[3.9rem]"
            style={{ width: "auto" }}
          />
          <p className="mt-2 text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
            {copy.brand.descriptor}
          </p>
          <h1 className="mt-4 font-display text-[1.7rem] leading-[1.14] sm:mt-6 sm:text-4xl lg:text-[2.45rem]">
            {copy.home.heroTitle}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base">
            {copy.home.heroLead}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/55 sm:mt-5">
            {copy.home.heroNote}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <CtaLink href="#areas" variant="outline-light">
              {copy.home.heroServices}
            </CtaLink>
            <CtaLink href={whatsappHref(copy.home.heroWhatsapp)}>
              <WhatsAppIcon />
              {copy.home.heroTalk}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
