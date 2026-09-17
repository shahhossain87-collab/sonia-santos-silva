"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import Reveal from "@/components/Reveal";
import { pathFor } from "@/i18n/routes";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";

export default function ConversionCta() {
  const { locale, copy } = useCopy();

  return (
    <section className="relative overflow-hidden py-12 text-white md:py-14">
      <Image
        src="/images/office/03-corridor-armando.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="container relative">
        <Reveal>
          <p className="gold-rule">{copy.home.conversionEyebrow}</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl sm:text-4xl">
            {copy.home.conversionTitle}
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink>
              <WhatsAppIcon />
              WhatsApp
            </CtaLink>
            <CtaLink href={pathFor(locale, "contact")} variant="outline-light">
              {copy.home.conversionForm}
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
