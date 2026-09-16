"use client";

import Reveal from "@/components/Reveal";
import { officeVisualDisclaimer, officeVisuals } from "@/data/content";
import Image from "next/image";

export default function OfficeGallery() {
  const [hero, ...rest] = officeVisuals;

  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="container">
        <Reveal>
          <p className="gold-rule">Laranjeiras</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            O espaço de trabalho
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-body-color">
            {officeVisualDisclaimer}
          </p>
        </Reveal>

        {hero ? (
          <Reveal delay={0.08}>
            <figure className="card-lift relative mt-10 aspect-[16/9] overflow-hidden">
              <Image
                src={hero.src}
                alt={hero.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </figure>
          </Reveal>
        ) : null}

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {rest.map((image, index) => (
            <Reveal key={image.src} delay={0.06 * (index + 1)}>
              <figure className="card-lift relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
