"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function MidCta() {
  return (
    <section className="relative overflow-hidden py-16 text-white md:py-20">
      <Image
        src="/images/office/04-conference.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/75" />
      <div className="container relative">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="max-w-lg font-display text-3xl sm:text-4xl">
            Esclareça o enquadramento antes de avançar.
          </h2>
          <CtaLink>
            <WhatsAppIcon />
            Pedir uma consulta
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
