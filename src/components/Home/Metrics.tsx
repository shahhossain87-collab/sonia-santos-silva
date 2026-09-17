"use client";

import Reveal from "@/components/Reveal";
import { useCopy } from "@/i18n/use-locale";

export default function Metrics() {
  const { copy } = useCopy();

  return (
    <section className="relative z-10 -mt-7 px-4">
      <div className="container">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-sm bg-white px-5 py-3.5 text-[13px] text-navy shadow-two">
            {copy.home.metrics.map((item, index) => (
              <span key={item} className="contents">
                {index > 0 ? (
                  <span
                    className={`hidden h-4 w-px bg-navy/10 ${index === 2 ? "md:block" : "sm:block"}`}
                  />
                ) : null}
                <p className={`flex items-center gap-2 ${index === 2 ? "hidden md:flex" : ""}`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {item}
                </p>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
