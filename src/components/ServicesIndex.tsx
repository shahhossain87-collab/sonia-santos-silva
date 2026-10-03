import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import { whatsappHref } from "@/config/site";
import { getCopy, getServiceDirectory } from "@/i18n/copy";
import type { Locale } from "@/i18n/locales";
import Link from "next/link";

const linkClass =
  "cursor-pointer text-gold-dark underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export default function ServicesIndex({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const items = getServiceDirectory(locale);

  return (
    <section className="py-5 md:py-7">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-body-color">{copy.servicesPage.intro}</p>
          <CtaLink className="shrink-0">
            <WhatsAppIcon />
            {copy.home.heroTalk}
          </CtaLink>
        </div>

        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {items.map((item) => {
            const message =
              locale === "pt"
                ? `Olá, preciso de ajuda com ${item.title}.`
                : `Hello, I need help with ${item.title}.`;
            const combined = item.id === "arrendamento-patrimonio";

            return (
              <li
                key={item.id}
                id={item.id}
                className="scroll-mt-28 border border-navy/10 bg-white p-4"
              >
                <h2 className="font-display text-xl text-navy">
                  {combined ? (
                    item.title
                  ) : (
                    <Link href={item.href} className={linkClass + " text-navy no-underline hover:text-gold-dark"}>
                      {item.title}
                    </Link>
                  )}
                </h2>
                {item.overview && !combined ? (
                  <p className="mt-1 text-[11px] font-semibold tracking-[0.14em] text-gold uppercase">
                    {copy.home.finderOverview}
                  </p>
                ) : null}
                <p className="mt-2 text-sm leading-relaxed text-body-color">{item.explanation}</p>
                {item.extra ? <p className="mt-2 text-sm leading-relaxed text-body-color">{item.extra}</p> : null}
                <p className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
                  {combined ? (
                    <Link href={item.href} className={linkClass}>
                      {item.linkTitle}
                    </Link>
                  ) : null}
                  {item.related ? (
                    <Link href={item.related.href} className={linkClass}>
                      {item.related.title}
                    </Link>
                  ) : null}
                  <a href={whatsappHref(message)} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {copy.home.heroTalk}
                  </a>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
