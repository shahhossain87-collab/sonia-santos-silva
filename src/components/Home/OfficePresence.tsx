"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import Reveal from "@/components/Reveal";
import { mapsLink, site } from "@/config/site";
import { officeExterior } from "@/data/content";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";

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
      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
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
      className="scroll-mt-20 overflow-x-clip bg-white pt-10 pb-16 md:scroll-mt-28 md:py-20"
    >
      <div className="container grid min-w-0 items-stretch gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
        <Reveal className="order-2 min-w-0 max-w-full lg:order-1">
          <figure className="group min-w-0 max-w-full">
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[4/5] lg:min-h-[34rem]">
              <Image
                src={officeExterior.src}
                alt={copy.home.presenceImageAlt}
                fill
                className="max-w-none origin-[16%_42%] scale-[1.72] object-cover object-[16%_42%] transition duration-700 ease-out group-hover:scale-[1.78] motion-reduce:transition-none motion-reduce:group-hover:scale-[1.72] lg:origin-[14%_40%] lg:scale-[1.55] lg:object-[14%_40%] lg:group-hover:scale-[1.6] motion-reduce:lg:group-hover:scale-[1.55]"
                sizes="(min-width: 992px) 55vw, 100vw"
                priority
              />
            </div>
          </figure>
        </Reveal>
        <Reveal delay={0.08} className="order-1 flex min-w-0 max-w-full flex-col justify-center lg:order-2">
          <p className="gold-rule">{copy.home.presenceEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            {copy.home.presenceTitle}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-body-color">
            {copy.home.presenceLead}
          </p>
          <div className="mt-7 flex max-w-sm items-start gap-3 border-l border-gold pl-4">
            <LocationPin />
            <address className="not-italic">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-gold uppercase">
                {copy.home.presenceLocation}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy">
                {street}
                <br />
                {postal}
              </p>
            </address>
          </div>
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
