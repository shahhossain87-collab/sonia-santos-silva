"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import Reveal from "@/components/Reveal";
import { site } from "@/config/site";
import Image from "next/image";

export default function Team() {
  return (
    <section id="equipa" className="bg-white py-16 md:py-20">
      <div className="container">
        <Reveal>
          <p className="gold-rule">Equipa</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">A advogada</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="card-lift mt-10 grid overflow-hidden md:grid-cols-[300px_1fr]">
            <div className="relative min-h-[240px]">
              <Image
                src="/images/home/desk.jpg"
                alt="Secretária de trabalho. Fotografia Unsplash."
                fill
                className="object-cover"
                sizes="300px"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <p className="text-xs tracking-[0.2em] text-gold uppercase">
                {site.role}
              </p>
              <h3 className="mt-2 font-display text-3xl">{site.lawyerName}</h3>
              <p className="mt-2 text-sm text-body-color">
                Cédula profissional {site.license}
              </p>
              <p className="mt-1 text-sm text-body-color">
                Nacionalidade, vistos e reagrupamento.
              </p>
              <CtaLink className="mt-6 w-fit">
                <WhatsAppIcon />
                WhatsApp
              </CtaLink>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
