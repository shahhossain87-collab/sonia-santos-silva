"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import { whatsappHref } from "@/config/site";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";

export default function Hero() {
  const { copy } = useCopy();

  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/team/equipa.jpg"
          alt={copy.home.teamGroupAlt}
          fill
          priority
          className="hero-backdrop object-cover object-[50%_18%] lg:object-[68%_20%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/88 via-navy/58 to-navy/20 sm:via-navy/50 sm:to-navy/10" />
      </div>

      <div className="relative flex min-h-[30rem] items-end sm:min-h-[34rem] lg:min-h-[36rem]">
        <div className="w-full max-w-xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-2xl lg:px-12 lg:py-12 xl:px-16">
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
