"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import OfficeMap from "@/components/OfficeMap";
import Reveal from "@/components/Reveal";
import { site } from "@/config/site";
import { useCopy } from "@/i18n/use-locale";

export default function Office() {
  const { copy } = useCopy();

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container grid min-w-0 gap-8 lg:grid-cols-2 lg:items-center">
        <Reveal className="min-w-0 max-w-full">
          <p className="gold-rule">{copy.home.officeEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            {copy.home.officeTitle}
          </h2>
          <p className="mt-3 text-sm text-body-color">{site.addressLine}</p>
          <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="tracking-[0.16em] text-gold uppercase">WhatsApp</dt>
              <dd className="mt-1">{site.phoneDisplay}</dd>
            </div>
            <div>
              <dt className="tracking-[0.16em] text-gold uppercase">
                {copy.contactPage.email}
              </dt>
              <dd className="mt-1">{site.email}</dd>
            </div>
          </dl>
          <CtaLink className="mt-8">
            <WhatsAppIcon />
            {copy.home.officeCta}
          </CtaLink>
        </Reveal>
        <Reveal delay={0.1} className="min-w-0 max-w-full overflow-hidden">
          <OfficeMap className="aspect-[4/3] min-h-[280px]" />
        </Reveal>
      </div>
    </section>
  );
}
