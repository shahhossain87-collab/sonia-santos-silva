"use client";

import { getServiceFinder } from "@/i18n/copy";
import { useCopy } from "@/i18n/use-locale";
import Link from "next/link";

export default function ServiceFinder() {
  const { locale, copy } = useCopy();
  const items = getServiceFinder(locale);

  return (
    <section className="scroll-mt-24 py-5 md:py-6" id="areas">
      <div className="container">
        <h2 className="font-display text-2xl text-navy sm:text-3xl">{copy.home.finderTitle}</h2>
        <p className="mt-2 max-w-xl text-sm text-body-color">{copy.home.finderLead}</p>
        <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="flex min-h-12 cursor-pointer items-center border border-navy/10 bg-white px-3 py-2 text-sm font-semibold text-navy transition hover:border-gold hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
