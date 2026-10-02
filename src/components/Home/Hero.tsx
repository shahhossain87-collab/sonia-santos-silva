"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import { whatsappHref } from "@/config/site";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";
import { useEffect, useState } from "react";

const serviceAreas = [
  "Imigração e vistos",
  "Nacionalidade portuguesa",
  "Arrendamento",
  "Direito das sociedades",
] as const;

export default function Hero() {
  const { copy } = useCopy();
  const [reducedMotion, setReducedMotion] = useState(true);
  const [displayText, setDisplayText] = useState<string>(serviceAreas[0]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    let phraseIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const phrase = serviceAreas[phraseIndex];

      if (deleting) {
        characterIndex -= 1;
        setDisplayText(phrase.slice(0, characterIndex));

        if (characterIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % serviceAreas.length;
          timer = setTimeout(tick, 360);
        } else {
          timer = setTimeout(tick, 42);
        }
        return;
      }

      characterIndex += 1;
      setDisplayText(phrase.slice(0, characterIndex));

      if (characterIndex === phrase.length) {
        deleting = true;
        timer = setTimeout(tick, 1700);
      } else {
        timer = setTimeout(tick, 78);
      }
    };

    setDisplayText("");
    timer = setTimeout(tick, 650);

    return () => clearTimeout(timer);
  }, [reducedMotion]);

  return (
    <section className="relative bg-navy/95 py-10 text-white md:py-14">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-center lg:gap-12">
          <div className="max-w-2xl">
            <p className="gold-rule">{copy.home.heroKicker}</p>
            <p className="mt-3 text-sm font-semibold tracking-[0.08em] text-gold sm:mt-5">
              {copy.brand.name}
            </p>
            <p className="mt-2 text-[11px] font-semibold tracking-[0.22em] text-white/65 uppercase">
              {copy.brand.descriptor}
            </p>
            <h1 className="mt-5 font-display text-[1.7rem] leading-[1.14] sm:mt-6 sm:text-4xl lg:text-[2.45rem]">
              {copy.home.heroTitle}
            </h1>
            <div className="mt-4 text-sm leading-relaxed text-white/85 sm:mt-5 sm:text-base">
              <span className="font-semibold text-gold">Áreas de atuação:</span>{" "}
              <span
                aria-hidden="true"
                className="inline-block min-w-[24ch] align-baseline font-medium text-white"
              >
                {reducedMotion ? serviceAreas.join(" · ") : displayText}
              </span>
              <span className="sr-only">
                Áreas de atuação: {serviceAreas.join(", ")}.
              </span>
            </div>
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
