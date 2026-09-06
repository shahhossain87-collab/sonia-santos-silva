"use client";

import CtaLink from "@/components/CtaLink";
import Reveal from "@/components/Reveal";
import Image from "next/image";

const points = [
  { title: "Caso concreto", text: "Documentos, prazos, objetivo." },
  { title: "Linguagem clara", text: "O que a lei permite — e o que falta." },
  { title: "Acompanhamento", text: "Da consulta à instrução." },
];

export default function About() {
  return (
    <section className="py-16 md:py-20">
      <div className="container grid items-center gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden sm:min-h-[380px] sm:aspect-auto">
            <Image
              src="/images/home/about-books.jpg"
              alt="Livros numa estante de escritório. Fotografia Unsplash."
              fill
              className="object-cover"
              sizes="(min-width: 992px) 50vw, 100vw"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="gold-rule">O escritório</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Acompanhamento próximo, sem atalhos.
          </h2>
          <ul className="mt-8 space-y-3">
            {points.map((item) => (
              <li key={item.title} className="flex items-baseline gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <p className="text-sm">
                  <span className="font-semibold text-navy">{item.title}.</span>{" "}
                  <span className="text-body-color">{item.text}</span>
                </p>
              </li>
            ))}
          </ul>
          <CtaLink href="/o-escritorio" variant="outline-navy" className="mt-8">
            O escritório
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
