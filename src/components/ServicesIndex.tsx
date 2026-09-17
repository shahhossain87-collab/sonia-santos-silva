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
    <section className="py-16 md:py-20">
      <div className="container">
        <Reveal>
          <p className="max-w-2xl text-sm leading-relaxed text-body-color">
            {copy.servicesPage.intro}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {homeServiceIds.map((id, index) => {
            const card = copy.cards[id];
            const href = homeServiceHref(locale, id);

            return (
              <Reveal key={id} delay={index * 0.04}>
                <article
                  id={id}
                  className="scroll-mt-28 border border-navy/10 bg-white p-6"
                >
                  <h2 className="font-display text-2xl text-navy">{card.title}</h2>
                  <p className="mt-2 text-sm text-body-color">{card.blurb}</p>

                  {id === "imigracao" ? (
                    <div className="mt-5">
                      <p className="text-xs tracking-[0.16em] text-gold uppercase">
                        {copy.servicesPage.immigrationNote}
                      </p>
                      <ul className="mt-3 space-y-2 text-sm">
                        {items.map((item) => (
                          <li key={item.label}>
                            {"href" in item && item.href ? (
                              <Link href={item.href} className="text-navy hover:text-gold-dark">
                                {item.label}
                              </Link>
                            ) : (
                              <span>{item.label}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : locale === "pt" && id === "nacionalidade" ? (
                    <Link
                      href={href}
                      className="mt-4 inline-block text-sm font-semibold text-gold-dark"
                    >
                      {copy.home.servicesMore}
                    </Link>
                  ) : (
                    <p className="mt-4 text-sm text-body-color">
                      {copy.servicesPage.moreWhenReady}
                    </p>
                  )}
                </article>
              </Reveal>
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
