"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import { whatsappHref } from "@/config/site";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";

export default function Hero() {
  const { copy } = useCopy();

  return (
    <section className="relative bg-navy/95 py-10 text-white md:py-14">
      <div className="container">
        <div className="max-w-2xl">
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
            <CtaLink href={whatsappHref(copy.home.heroWhatsapp)}>
              <WhatsAppIcon />
              {copy.home.heroTalk}
            </CtaLink>
            <CtaLink href="#areas" variant="outline-light">
              {copy.home.heroServices}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
