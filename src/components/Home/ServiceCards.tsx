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
    <section className="py-16 md:py-20" id="areas">
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
              <Reveal key={id} delay={index * 0.08}>
                <Link href={href} className="card-lift group block bg-white">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={homeServiceImages[id]}
                      alt=""
                      fill
                      className="object-cover transition duration-500 ease-out group-hover:scale-[1.05]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-navy">{card.title}</h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-body-color">
                      {card.blurb}
                    </p>
                    <span className="mt-3 inline-block text-sm font-semibold text-gold-dark">
                      {copy.home.servicesMore}
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
