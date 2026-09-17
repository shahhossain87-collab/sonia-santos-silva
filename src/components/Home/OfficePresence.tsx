"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import Reveal from "@/components/Reveal";
import { mapsLink, site } from "@/config/site";
import { officeExterior } from "@/data/content";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";

export default function OfficePresence() {
  const { copy } = useCopy();

  return (
    <section id="em-lisboa" className="scroll-mt-28 bg-cream py-16 pb-24 md:py-20">
      <div className="container grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <Reveal className="order-2 lg:order-1">
          <figure className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={officeExterior.src}
              alt={copy.home.presenceImageAlt}
              fill
              className="object-cover object-[50%_42%]"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </figure>
        </Reveal>
        <Reveal delay={0.08} className="order-1 lg:order-2">
          <p className="gold-rule">{copy.home.presenceLocation}</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            {copy.home.presenceTitle}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-body-color">
            {copy.home.presenceLead}
          </p>
          <p className="mt-6 max-w-sm text-sm text-navy">{site.addressLine}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaLink href={mapsLink}>{copy.home.presenceMapCta}</CtaLink>
            <CtaLink variant="outline-navy">
              <WhatsAppIcon />
              {copy.home.presenceBookCta}
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
