"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import Reveal from "@/components/Reveal";
import { mapsLink, site } from "@/config/site";
import { useCopy } from "@/i18n/use-locale";

function splitOfficeAddress(line: string) {
  const separator = line.lastIndexOf(", ");
  if (separator === -1) return { street: line, postal: "" };
  return {
    street: line.slice(0, separator),
    postal: line.slice(separator + 2),
  };
}

function LocationPin() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-gold"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
      />
      <circle cx="12" cy="10" r="2.25" />
    </svg>
  );
}

export default function OfficePresence() {
  const { copy } = useCopy();
  const { street, postal } = splitOfficeAddress(site.addressLine);

  return (
    <section
      id="em-lisboa"
      className="scroll-mt-20 bg-white py-16 md:scroll-mt-28 md:py-24"
    >
      <div className="container grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">{copy.home.presenceEyebrow}</p>
          <h2 className="mt-4 font-display text-[40px] leading-[1.08] font-medium text-navy sm:text-5xl">
            {copy.home.presenceTitle}
          </h2>
          <span className="ornament mt-6 ml-0" aria-hidden="true">
            <span />
          </span>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-body-color">
            {copy.home.presenceLead}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaLink href={mapsLink}>{copy.home.presenceMapCta}</CtaLink>
            <CtaLink variant="outline-navy">
              <WhatsAppIcon />
              {copy.home.presenceBookCta}
            </CtaLink>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative bg-navy p-3 shadow-[0_40px_80px_-40px_rgba(26,34,56,0.55)]">
            <div className="relative flex min-h-[300px] flex-col items-center justify-center border border-gold/40 px-5 py-12 text-center sm:px-8 text-white sm:min-h-[340px]">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50">
                <LocationPin />
              </span>
              <address className="not-italic">
                <p className="mt-6 text-[12px] font-semibold tracking-[0.26em] text-gold-light uppercase">
                  {copy.home.presenceLocation}
                </p>
                <p className="mt-4 font-display text-[23px] leading-snug sm:text-[30px] lg:text-[32px]">
                  {street}
                  <br />
                  <span className="text-white/75">{postal}</span>
                </p>
              </address>
              <span className="ornament mt-7 w-20" aria-hidden="true">
                <span />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
