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
    <section id="vamos-falar" className="relative isolate overflow-hidden bg-navy-deep py-20 text-white md:py-28">
      <Image
        src="/images/home/lisboa-editorial.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[60%_center] opacity-40"
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(26,34,56,0.82)_0%,rgba(18,26,44,0.96)_70%)]"
        aria-hidden="true"
      />
      <div className="container max-w-[1100px] text-center">
        <Reveal>
          <p className="eyebrow-light">{copy.home.conversionEyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-[40px] leading-[1.08] font-medium sm:text-[56px]">
            {copy.home.conversionTitle}
          </h2>
          <span className="ornament mt-7" aria-hidden="true">
            <span />
          </span>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaLink>
              <WhatsAppIcon />
              WhatsApp
            </CtaLink>
            <CtaLink href={pathFor(locale, "contact")} variant="outline-light">
              {copy.home.conversionForm}
            </CtaLink>
          </div>
        </Reveal>
        <div className="mx-auto mt-16 max-w-3xl border-t border-white/12 pt-10">
          <ul className="flex flex-wrap justify-center gap-x-2 gap-y-8 sm:flex-nowrap sm:gap-4">
            {team.map((member) => (
              <li key={member.photo} className="w-[31%] min-w-0 text-center sm:w-1/5">
                <Link href={`${pathFor(locale, "about")}#equipa`} className="group block">
                  <span className="mx-auto block h-20 w-20 rounded-full border border-gold/60 p-1 transition-colors duration-300 group-hover:border-gold-light sm:h-24 sm:w-24">
                    <Image
                      src={member.photo}
                      alt=""
                      width={96}
                      height={96}
                      sizes="96px"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </span>
                  <span className="mt-3 block font-display text-[17px] leading-snug text-white/90 group-hover:text-gold-light">
                    {member.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={`${pathFor(locale, "about")}#equipa`}
            className="mt-10 inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.18em] text-gold-light uppercase hover:text-white"
          >
            {locale === "pt" ? "Conheça a equipa" : "Meet the team"} →
          </Link>
        </div>
      </div>
    </section>
  );
}
