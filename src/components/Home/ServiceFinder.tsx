"use client";

import { getServiceFinder } from "@/i18n/copy";
import { pathFor } from "@/i18n/routes";
import { useCopy } from "@/i18n/use-locale";
import Link from "next/link";

export default function ServiceFinder() {
  const { locale, copy } = useCopy();
  const items = getServiceFinder(locale);

  return (
    <section className="scroll-mt-20 bg-cream py-10 md:scroll-mt-28 md:py-12" id="areas">
      <div className="container">
        <p className="gold-rule">{copy.home.servicesEyebrow}</p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">{copy.home.finderTitle}</h2>
            <p className="mt-2 max-w-xl text-sm text-body-color">{copy.home.finderLead}</p>
          </div>
          <Link
            href={pathFor(locale, "services")}
            className="inline-flex items-center gap-1 text-sm font-semibold text-gold-dark transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {copy.home.finderAll}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="group flex h-full min-h-[3.25rem] cursor-pointer items-center justify-between gap-3 border border-navy/10 bg-white px-4 py-3 text-left transition duration-200 hover:border-gold hover:shadow-one focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <span>
                  <span className="block font-semibold text-navy">{item.title}</span>
                  {item.overview ? (
                    <span className="mt-0.5 block text-[11px] tracking-[0.12em] text-body-color uppercase">
                      {copy.home.finderOverview}
                    </span>
                  ) : null}
                </span>
                <span
                  className="inline-block shrink-0 text-gold-dark transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
