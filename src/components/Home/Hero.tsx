"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import { whatsappHref } from "@/config/site";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";

export default function Hero() {
  const { copy } = useCopy();

  return (
    <section className="relative bg-navy/95 py-5 text-white md:py-6">
      <div className="container">
        <div className="grid grid-cols-[minmax(0,1fr)_5.75rem] items-start gap-3 sm:items-center sm:gap-8">
          <div className="max-w-2xl">
          <p className="gold-rule">{copy.home.heroKicker}</p>
          <Image
            src="/images/logo/gjl-lockup-on-dark.png"
            alt={copy.brand.lockupLabel}
            width={963}
            height={416}
            priority
            className="mt-2 h-9 w-auto sm:h-11"
            style={{ width: "auto" }}
          />
          <p className="mt-2 text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
            {copy.brand.descriptor}
          </p>
          <p className="mt-4 text-sm font-semibold tracking-[0.08em] text-gold sm:mt-5">
            {copy.brand.name}
          </p>
          <h1 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">
            {copy.home.heroTitle}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-white/80">
            {copy.home.heroLead}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/55">
            {copy.home.heroNote}
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={whatsappHref(copy.home.heroWhatsapp)}>
              <WhatsAppIcon />
              {copy.home.heroTalk}
            </CtaLink>
            <CtaLink href="#areas" variant="outline-light">
              {copy.home.heroServices}
            </CtaLink>
          </div>
          </div>
          <figure className="w-[5.75rem] text-center sm:justify-self-end">
            <div className="relative h-24 overflow-hidden border border-white/20 bg-white/5 sm:h-28">
              <Image
                src="/images/home/sonia-santos-da-silva.jpeg"
                alt={copy.home.heroPortraitAlt}
                fill
                priority
                sizes="92px"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-2 text-[11px] font-semibold leading-tight text-gold">
              Dra. Sónia Santos da Silva
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
