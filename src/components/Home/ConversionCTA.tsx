"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import Reveal from "@/components/Reveal";
import { pathFor } from "@/i18n/routes";
import { useCopy } from "@/i18n/use-locale";

export default function ConversionCta() {
  const { locale, copy } = useCopy();

  return (
    <section className="bg-navy py-12 text-white md:py-14">
      <div className="container">
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
