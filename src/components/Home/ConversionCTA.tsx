"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function ConversionCta() {
  return (
    <section className="relative overflow-hidden py-20 text-white">
      <Image
        src="/images/home/office.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="container relative">
        <Reveal>
          <p className="gold-rule">Consulta</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl sm:text-4xl">
            Vamos falar do seu próximo passo.
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink>
              <WhatsAppIcon />
              WhatsApp
            </CtaLink>
            <CtaLink href="/contato" variant="outline-light">
              Formulário
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
