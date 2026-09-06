"use client";

import Reveal from "@/components/Reveal";
import { homeServiceCards } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCards() {
  return (
    <section className="py-16 md:py-20" id="residencia">
      <div className="container">
        <Reveal>
          <p className="gold-rule">Áreas</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Serviços de imigração
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeServiceCards.map((card, index) => (
            <Reveal key={card.href} delay={index * 0.08}>
              <Link href={card.href} className="card-lift group block bg-white">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover transition duration-500 ease-out group-hover:scale-[1.05]"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-navy">{card.title}</h3>
                  <p className="mt-1.5 line-clamp-1 text-sm text-body-color">
                    {card.blurb}
                  </p>
                  <span className="mt-3 inline-block text-sm font-semibold text-gold-dark">
                    Saber mais →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
