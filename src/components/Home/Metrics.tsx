"use client";

import Reveal from "@/components/Reveal";

export default function Metrics() {
  return (
    <section className="relative z-10 -mt-7 px-4">
      <div className="container">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-sm bg-white px-5 py-3.5 text-[13px] text-navy shadow-two">
            <p className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Português e inglês
            </p>
            <span className="hidden h-4 w-px bg-navy/10 sm:block" />
            <p className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Escritório em Portugal
            </p>
            <span className="hidden h-4 w-px bg-navy/10 md:block" />
            <p className="hidden items-center gap-2 md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Atendimento com marcação
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
