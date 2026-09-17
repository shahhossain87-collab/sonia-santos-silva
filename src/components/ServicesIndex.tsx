import CtaLink from "@/components/CtaLink";
import Reveal from "@/components/Reveal";
import {
  getCopy,
  homeServiceHref,
  homeServiceIds,
  immigrationItems,
} from "@/i18n/copy";
import { pathFor } from "@/i18n/routes";
import type { Locale } from "@/i18n/locales";
import Link from "next/link";

export default function ServicesIndex({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const items = immigrationItems[locale];

  return (
    <section className="py-10 md:py-12">
      <div className="container">
        <p className="max-w-2xl text-sm leading-relaxed text-body-color">
          {copy.servicesPage.intro}
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {homeServiceIds.map((id) => {
            const card = copy.cards[id];
            const href = homeServiceHref(locale, id);
            const hasDedicatedPage = locale === "pt" && id === "nacionalidade";
            const isImmigration = id === "imigracao";

            return (
              <article
                key={id}
                id={id}
                className="group scroll-mt-28 border border-navy/10 bg-white p-6 transition duration-200 hover:border-gold hover:shadow-one"
              >
                <Link
                  href={href}
                  className="flex cursor-pointer items-start justify-between gap-4 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <span>
                    <h2 className="font-display text-2xl text-navy group-hover:text-gold-dark">
                      {card.title}
                    </h2>
                    <p className="mt-2 text-sm text-body-color">{card.blurb}</p>
                  </span>
                  <span
                    className="mt-1 inline-block shrink-0 text-gold-dark transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>

                {isImmigration ? (
                  <div className="mt-5">
                    <p className="text-xs tracking-[0.16em] text-gold uppercase">
                      {copy.servicesPage.immigrationNote}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm">
                      {items.map((item) => (
                        <li key={item.label}>
                          {"href" in item && item.href ? (
                            <Link
                              href={item.href}
                              className="inline-flex cursor-pointer items-center gap-1 font-medium text-navy underline-offset-4 hover:text-gold-dark hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                            >
                              {item.label}
                              <span aria-hidden="true">→</span>
                            </Link>
                          ) : (
                            <span>{item.label}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : hasDedicatedPage ? (
                  <Link
                    href={href}
                    className="mt-4 inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-gold-dark hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    {copy.home.servicesMore}
                    <span aria-hidden="true">→</span>
                  </Link>
                ) : (
                  <p className="mt-4 text-sm text-body-color">
                    {copy.servicesPage.moreWhenReady}
                  </p>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-10">
          <CtaLink href={pathFor(locale, "contact")} variant="outline-navy">
            {copy.servicesPage.contact}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
