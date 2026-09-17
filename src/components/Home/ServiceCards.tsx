"use client";

import Reveal from "@/components/Reveal";
import {
  homeServiceHref,
  homeServiceIds,
  homeServiceImages,
} from "@/i18n/copy";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCards() {
  const { locale, copy } = useCopy();

  return (
    <section className="scroll-mt-20 py-14 md:scroll-mt-28 md:py-20" id="areas">
      <div className="container">
        <Reveal>
          <p className="gold-rule">{copy.home.servicesEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            {copy.home.servicesTitle}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeServiceIds.map((id, index) => {
            const card = copy.cards[id];
            const href = homeServiceHref(locale, id);

            return (
              <Reveal key={id} delay={index * 0.05}>
                <Link
                  href={href}
                  className="card-lift group block border border-transparent bg-white hover:border-navy/10"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={homeServiceImages[id]}
                      alt=""
                      fill
                      className="img-zoom object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-navy">{card.title}</h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-body-color">
                      {card.blurb}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark">
                      {copy.home.servicesMore}
                      <span
                        className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
