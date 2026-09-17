"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import { site } from "@/config/site";
import { pathFor } from "@/i18n/routes";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";

export default function Hero() {
  const { locale, copy } = useCopy();

  return (
    <section className="relative isolate min-h-[calc(100svh-7.25rem)] overflow-hidden text-white">
      <Image
        src="/images/office/05-establishing.jpg"
        alt={copy.aboutPage.galleryDisclaimer}
        fill
        priority
        className="animate-hero-zoom object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 z-[1] bg-navy/50" />
      <div className="absolute inset-0 z-[1] bg-linear-to-t from-navy via-navy/40 to-transparent" />

      <div className="container relative z-[2] flex min-h-[calc(100svh-7.25rem)] items-end pb-20 pt-10 sm:pb-24">
        <div className="hero-copy max-w-2xl">
          <p className="gold-rule">{site.title}</p>
          <h1 className="mt-4 font-display text-[2.15rem] leading-[1.12] sm:text-5xl lg:text-[3.4rem]">
            {copy.home.heroTitle}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-snug text-white/80 sm:text-base">
            {copy.home.heroLead}
            <br />
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
    </section>
  );
}
