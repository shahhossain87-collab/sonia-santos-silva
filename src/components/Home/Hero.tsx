"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import { site, whatsappHref } from "@/config/site";
import { officeVisuals, team } from "@/data/content";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";
import Link from "next/link";

const officeBackdrop = officeVisuals[4];
const teamThumbs = team.filter((member) => !member.featured);

export default function Hero() {
  const { copy } = useCopy();

  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={officeBackdrop.src}
          alt=""
          fill
          priority
          className="hero-backdrop object-cover object-[40%_50%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/58 lg:bg-navy/68" />
      </div>
      <span className="sr-only">{officeBackdrop.alt}</span>

      <div className="relative grid min-h-[28.5rem] grid-cols-[minmax(0,1fr)_8.25rem] sm:min-h-[32rem] sm:grid-cols-[minmax(0,1.35fr)_12rem] lg:min-h-0 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="flex items-end">
          <div className="w-full px-4 py-7 sm:px-6 sm:py-10 lg:px-12 lg:py-10 lg:pb-12 xl:px-16">
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
            <h1 className="mt-4 max-w-xl font-display text-[1.7rem] leading-[1.14] sm:mt-6 sm:text-4xl lg:text-[2.45rem]">
              {copy.home.heroTitle}
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base">
              {copy.home.heroLead}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55 sm:mt-5">
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
            <ul className="mt-5 flex gap-1.5 lg:hidden">
              {teamThumbs.map((member) => (
                <li key={member.photo}>
                  <Link
                    href="#equipa"
                    className="relative block h-11 w-11 overflow-hidden border border-white/30"
                  >
                    <Image
                      src={member.photo}
                      alt={member.name ?? copy.home.teamFallbackAlt}
                      fill
                      className="object-cover object-top"
                      sizes="40px"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="group relative min-h-full overflow-hidden">
          <Image
            src="/images/team/sonia-santos.jpg"
            alt={copy.home.heroPortraitAlt}
            fill
            priority
            className="img-zoom object-cover object-[50%_12%]"
            sizes="(min-width: 992px) 34vw, 32vw"
          />
          <figcaption className="absolute inset-x-0 bottom-0 hidden bg-navy/90 px-4 py-3 lg:block lg:px-6 lg:py-4">
            <p className="font-display text-lg leading-tight lg:text-xl">{site.lawyerName}</p>
            <p className="mt-0.5 text-[10px] tracking-[0.18em] text-gold uppercase">
              {copy.home.heroRole}
            </p>
            <p className="mt-0.5 text-[11px] text-white/65">
              {copy.home.heroLicense} {site.license}
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
