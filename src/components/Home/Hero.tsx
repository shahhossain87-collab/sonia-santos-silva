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
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-center lg:gap-12">
          <div className="max-w-2xl">
          <p className="gold-rule">{copy.home.heroKicker}</p>
          <Image
            src="/images/logo/gjl-lockup-on-dark.png"
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
          <p className="mt-4 text-sm font-semibold tracking-[0.08em] text-gold sm:mt-5">
            {copy.brand.name}
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
          <figure className="mx-auto w-56 text-center lg:mx-0 lg:justify-self-end">
            <div className="relative h-48 overflow-hidden border border-white/20 bg-white/5">
              <Image
                src="/images/home/sonia-santos-da-silva.jpeg"
                alt={copy.home.heroPortraitAlt}
                fill
                priority
                sizes="224px"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 text-sm font-semibold text-gold">
              Dra. Sónia Santos da Silva
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
