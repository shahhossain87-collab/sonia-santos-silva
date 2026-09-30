"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import { whatsappHref } from "@/config/site";
import { serviceThumbnails } from "@/data/service-thumbnails";
import { getServiceFinder } from "@/i18n/copy";
import { pathFor } from "@/i18n/routes";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";
import Link from "next/link";

export default function ServiceFinder() {
  const { locale, copy } = useCopy();
  const items = getServiceFinder(locale);

  return (
    <section className="scroll-mt-20 py-8 md:scroll-mt-28 md:py-10" id="areas">
      <div className="container">
        <p className="gold-rule">{copy.home.servicesEyebrow}</p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">{copy.home.finderTitle}</h2>
            <p className="mt-2 max-w-xl text-sm text-body-color">{copy.home.finderLead}</p>
          </div>
        </div>

        <ul className="mt-6 space-y-6">
          {items.map((item) => {
            const thumbnail = serviceThumbnails[item.id as keyof typeof serviceThumbnails];
            const message =
              locale === "pt"
                ? `Olá, preciso de ajuda com ${item.title}.`
                : `Hello, I need help with ${item.title}.`;
            const serviceHref = item.id === "imigracao" ? pathFor(locale, "immigration") : null;

            return (
              <li key={item.id}>
                <article className="overflow-hidden border border-navy/10 bg-white shadow-one">
                  {serviceHref ? (
                    <Link href={serviceHref} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
                      {thumbnail ? (
                        <div className="relative aspect-[16/7]">
                          <Image
                            src={thumbnail.src}
                            alt={thumbnail.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 1120px"
                            className="object-cover"
                          />
                        </div>
                      ) : null}
                      <div className="p-5 md:p-6">
                        <h3 className="font-display text-2xl text-navy group-hover:text-gold-dark">{item.title}</h3>
                        <p className="mt-2 text-sm text-body-color">{item.description}</p>
                      </div>
                    </Link>
                  ) : (
                    <>
                      {thumbnail ? (
                        <div className="relative aspect-[16/7]">
                          <Image
                            src={thumbnail.src}
                            alt={thumbnail.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 1120px"
                            className="object-cover"
                          />
                        </div>
                      ) : null}
                      <div className="p-5 md:p-6">
                        <h3 className="font-display text-2xl text-navy">{item.title}</h3>
                        <p className="mt-2 text-sm text-body-color">{item.description}</p>
                      </div>
                    </>
                  )}
                  <div className="px-5 pb-5 md:px-6 md:pb-6">
                    <CtaLink href={whatsappHref(message)} className="flex w-full justify-center">
                      <WhatsAppIcon />
                      {copy.common.whatsapp}
                    </CtaLink>
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
