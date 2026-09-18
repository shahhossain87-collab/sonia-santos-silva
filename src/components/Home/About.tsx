"use client";

import CtaLink from "@/components/CtaLink";
import { pathFor } from "@/i18n/routes";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";

export default function About() {
  const { locale, copy } = useCopy();

  return (
    <section className="py-10 md:py-12">
      <div className="container grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="gold-rule">{copy.home.aboutEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            {copy.home.aboutTitle}
          </h2>
          <ul className="mt-6 space-y-3">
            {copy.home.aboutPoints.map((item) => (
              <li key={item.title} className="flex items-baseline gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <p className="text-sm">
                  <span className="font-semibold text-navy">{item.title}.</span>{" "}
                  <span className="text-body-color">{item.text}</span>
                </p>
              </li>
            ))}
          </ul>
          <CtaLink href={pathFor(locale, "about")} variant="outline-navy" className="mt-8">
            {copy.home.aboutCta}
          </CtaLink>
        </div>
        <figure className="relative aspect-[3/2] overflow-hidden">
          <Image
            src="/images/team/equipa.jpg"
            alt={copy.home.teamGroupAlt}
            fill
            className="object-cover object-[50%_18%]"
            sizes="(min-width: 992px) 50vw, 100vw"
          />
        </figure>
      </div>
    </section>
  );
}
