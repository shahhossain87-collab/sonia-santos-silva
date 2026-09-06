"use client";

import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <Reveal>
          <div className="relative min-h-[240px] overflow-hidden md:min-h-[280px]">
            <Image
              src="/images/home/testimonial-legal.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/70" />
            <div className="relative z-[1] flex min-h-[240px] flex-col items-center justify-center px-6 py-12 text-center text-white md:min-h-[280px]">
              <p className="gold-rule">Testemunhos</p>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl">
                Avaliações reais, quando autorizadas.
              </h2>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
