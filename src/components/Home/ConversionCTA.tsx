"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import Reveal from "@/components/Reveal";
import { team } from "@/data/team";
import Image from "next/image";
import Link from "next/link";
import { pathFor } from "@/i18n/routes";
import { useCopy } from "@/i18n/use-locale";

export default function ConversionCta() {
  const { locale, copy } = useCopy();

  return (
    <section id="vamos-falar" className="bg-navy/95 py-12 text-white md:py-14">
      <div className="container grid items-center gap-8 lg:grid-cols-2">
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
        <div className="w-full max-w-lg lg:justify-self-end">
          <Link href={`${pathFor(locale, "about")}#equipa`} className="text-sm font-semibold text-gold hover:underline">
            {locale === "pt" ? "Conheça a equipa" : "Meet the team"} →
          </Link>
          <ul className="mt-4 grid grid-cols-5 gap-2">
            {team.map((member) => (
              <li key={member.photo} className="min-w-0 text-center">
                <Link href={`${pathFor(locale, "about")}#equipa`} className="group block">
                  <Image
                    src={member.photo}
                    alt=""
                    width={64}
                    height={64}
                    sizes="64px"
                    className="mx-auto h-12 w-12 rounded-full object-cover ring-1 ring-white/20 group-hover:ring-gold sm:h-16 sm:w-16"
                  />
                  <span className="mt-2 block text-[11px] leading-snug text-white/85 sm:text-xs">{member.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
