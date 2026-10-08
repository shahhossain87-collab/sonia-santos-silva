"use client";

import { WhatsAppIcon } from "@/components/CtaLink";
import { whatsappHref } from "@/config/site";
import { serviceThumbnails } from "@/data/service-thumbnails";
import { getServiceFinder } from "@/i18n/copy";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";
import Link from "next/link";

export default function ServiceFinder() {
  const { locale, copy } = useCopy();
  const items = getServiceFinder(locale);

  return (
    <section
      className="relative scroll-mt-20 bg-cream py-16 md:scroll-mt-28 md:py-24"
      id="areas"
    >
      <div className="container max-w-[1240px]">
        <header className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{copy.home.servicesEyebrow}</p>
          <h2 className="mt-4 font-display text-[40px] leading-[1.08] font-medium text-navy sm:text-5xl">
            {copy.home.finderTitle}
          </h2>
          <span className="ornament mt-6" aria-hidden="true">
            <span />
          </span>
          <p className="mt-6 text-[17px] leading-relaxed text-body-color">{copy.home.finderLead}</p>
        </header>

        <ul className="mt-10 grid gap-5 md:mt-16 md:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {items.map((item) => {
            const thumbnail = serviceThumbnails[item.id as keyof typeof serviceThumbnails];
            const message =
              locale === "pt"
                ? `Olá, preciso de ajuda com ${item.title}.`
                : `Hello, I need help with ${item.title}.`;

            return (
              <li key={item.id} className="flex">
                <article className="service-card group/card relative flex w-full flex-col overflow-hidden border border-navy/10 bg-white">
                  <Link
                    href={item.href}
                    className="flex flex-1 flex-col focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold"
                  >
                    {thumbnail ? (
                      <div className="relative aspect-[16/8] overflow-hidden bg-cream-dark md:aspect-[16/10]">
                        <Image
                          src={thumbnail.src}
                          alt={thumbnail.alt}
                          fill
                          sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 400px"
                          className="service-card__image object-cover"
                        />
                        <span
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent"
                          aria-hidden="true"
                        />
                      </div>
                    ) : null}
                    <div className="flex flex-1 flex-col border-l-2 border-gold/70 px-5 pt-5 pb-4 sm:px-6 md:px-7 md:pt-6 md:pb-5">
                      <h3 className="font-display text-[27px] leading-tight font-medium text-navy transition-colors duration-300 group-hover/card:text-gold-dark">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-[15.5px] leading-relaxed text-body-color">{item.description}</p>
                      {item.subcardCount > 0 ? (
                        <p className="mt-auto pt-5 text-[13px] font-semibold tracking-[0.14em] text-gold-dark uppercase">
                          {`${item.subcardCount} ${locale === "pt" ? "serviços" : "services"}`}{" "}
                          <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover/card:translate-x-1">→</span>
                        </p>
                      ) : null}
                    </div>
                  </Link>
                  <div className="border-l-2 border-gold/70 px-5 pb-5 sm:px-6 md:px-7 md:pb-6">
                    <a
                      href={whatsappHref(message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-gold w-full"
                    >
                      <WhatsAppIcon />
                      {copy.common.whatsapp}
                    </a>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
