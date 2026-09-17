"use client";

import BrandMark from "@/components/BrandMark";
import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { site } from "@/config/site";
import { getCopy, homeServiceHref, homeServiceIds } from "@/i18n/copy";
import { useCopy } from "@/i18n/use-locale";
import Link from "next/link";

export default function Footer() {
  const { locale, copy } = useCopy();
  const cards = getCopy(locale).cards;

  return (
    <footer className="bg-navy text-white">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandMark inverted />
          <p className="mt-6 max-w-xs text-sm text-white/70">
            {copy.footer.tagline}
          </p>
          <CtaLink className="mt-6">
            <WhatsAppIcon />
            WhatsApp
          </CtaLink>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-semibold tracking-[0.18em] text-gold uppercase">
            {copy.footer.office}
          </h2>
          <ul className="space-y-3 text-sm text-white/75">
            {copy.footer.officeLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-semibold tracking-[0.18em] text-gold uppercase">
            {copy.footer.areas}
          </h2>
          <ul className="space-y-3 text-sm text-white/75">
            {homeServiceIds.map((id) => (
              <li key={id}>
                <Link href={homeServiceHref(locale, id)} className="hover:text-gold">
                  {cards[id].title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-semibold tracking-[0.18em] text-gold uppercase">
            {copy.footer.contact}
          </h2>
          <ul className="space-y-3 text-sm text-white/75">
            <li>{site.addressLine}</li>
            <li>
              <a href={`tel:+${site.phoneDigits}`} className="hover:text-gold">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li>
              {copy.contactPage.license} {site.license}
            </li>
            <li>
              {copy.contactPage.nif} {site.nif}
            </li>
            <li>{copy.home.hours}</li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/50">
            {copy.footer.legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher className="mt-6 [&_a]:text-white/70 [&_a:hover]:text-gold [&_a[aria-current=true]]:text-white [&_span]:text-white/25" />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-3 py-6 text-xs leading-relaxed text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.officeName}. {copy.footer.rights}
          </p>
          <p className="max-w-xl">{site.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
