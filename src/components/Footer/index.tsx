"use client";

import BrandMark from "@/components/BrandMark";
import { WhatsAppIcon } from "@/components/CtaLink";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { mapsLink, site, whatsappHref } from "@/config/site";
import { getServiceFinder, immigrationItems } from "@/i18n/copy";
import { pathFor } from "@/i18n/routes";
import { areaTitle } from "@/components/Home/homeText";
import { licenceLine } from "@/data/team";
import { useCopy } from "@/i18n/use-locale";
import Link from "next/link";

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 border-b border-white/10 pb-3 font-sans text-[12px] font-semibold tracking-[0.22em] text-gold-light uppercase">
      {children}
    </h2>
  );
}

export default function Footer() {
  const { locale, copy } = useCopy();
  const areas = getServiceFinder(locale);
  const t =
    locale === "pt"
      ? { immigration: "Imigração e Vistos", phone: "Telefone / WhatsApp", hours: "Horário", address: "Morada", map: "Ver no mapa" }
      : { immigration: "Immigration & Visas", phone: "Phone / WhatsApp", hours: "Hours", address: "Address", map: "View on map" };
  const officeLinks = [
    { title: locale === "pt" ? "Início" : "Home", href: pathFor(locale, "home") },
    ...copy.footer.officeLinks,
  ];
  const legalLinks = locale === "pt" ? copy.footer.legalLinks : copy.footer.legalLinks.filter((item) => item.href !== "/faq");

  return (
    <footer className="relative bg-navy-deep pb-20 text-white lg:pb-0">
      <div className="azulejo-rule opacity-70" aria-hidden="true" />
      <div className="container grid max-w-[1240px] grid-cols-2 gap-x-6 gap-y-12 py-16 md:py-20 lg:grid-cols-[1.35fr_0.8fr_1fr_1fr_1.25fr] lg:gap-10">
        <div className="col-span-2 lg:col-span-1">
          <BrandMark inverted />
          <p className="mt-6 max-w-xs font-display text-[18px] leading-relaxed text-white/80">{copy.footer.tagline}</p>
          <p className="mt-6 text-[13px] leading-relaxed text-white/55">
            {site.lawyerName} · {copy.home.heroRole}
            <br />
            {licenceLine[locale]}
          </p>
        </div>

        <nav aria-label={copy.footer.office}>
          <ColumnTitle>{copy.footer.office}</ColumnTitle>
          <ul className="space-y-3 text-[15px] text-white/75">
            {officeLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-light">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={copy.footer.areas}>
          <ColumnTitle>{copy.footer.areas}</ColumnTitle>
          <ul className="space-y-3 text-[15px] text-white/75">
            {areas.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="hover:text-gold-light">
                  {areaTitle(locale, item.id, item.title)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t.immigration} className="col-span-2 sm:col-span-1">
          <ColumnTitle>{t.immigration}</ColumnTitle>
          <ul className="space-y-3 text-[15px] text-white/75">
            {immigrationItems[locale].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-2 sm:col-span-1">
          <ColumnTitle>{copy.footer.contact}</ColumnTitle>
          <dl className="space-y-4 text-[15px] text-white/75">
            <div>
              <dt className="text-[11px] font-semibold tracking-[0.2em] text-white/45 uppercase">{t.address}</dt>
              <dd className="mt-1">
                <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">
                  {site.addressLine}
                </a>
                <span className="mt-1 block text-[13.5px] text-white/55">{site.landmark[locale]}</span>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold tracking-[0.2em] text-white/45 uppercase">{t.phone}</dt>
              <dd className="mt-1">
                <a href={`tel:+${site.phoneDigits}`} className="hover:text-gold-light">{site.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold tracking-[0.2em] text-white/45 uppercase">{copy.contactPage.email}</dt>
              <dd className="mt-1 break-all">
                <a href={`mailto:${site.email}`} className="hover:text-gold-light">{site.email}</a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold tracking-[0.2em] text-white/45 uppercase">{t.hours}</dt>
              <dd className="mt-1">{copy.home.hours}</dd>
            </div>
          </dl>
          <a href={whatsappHref(copy.home.heroWhatsapp)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-7 min-h-11 px-5 text-[14px]">
            <WhatsAppIcon />
            {copy.home.presenceBookCta}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex max-w-[1240px] flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <a
              href="https://www.livroreclamacoes.pt/Inicio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Livro de Reclamações"
              className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-white text-center text-[8.5px] leading-tight font-semibold tracking-[0.04em] text-navy transition hover:bg-gold"
            >
              <span>
                <span className="block">LIVRO DE</span>
                <span className="block">RECLAMAÇÕES</span>
              </span>
            </a>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-white/60">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold-light">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <LanguageSwitcher className="[&_a]:text-white/60 [&_a:hover]:text-gold-light [&_a[aria-current=true]]:text-white [&_span]:text-white/25" />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex max-w-[1240px] flex-col gap-3 py-6 text-xs leading-relaxed text-white/45 md:flex-row md:items-start md:justify-between md:gap-10">
          <p className="shrink-0">
            © {new Date().getFullYear()} {site.officeName}. {copy.footer.rights}
          </p>
          <p className="max-w-2xl md:text-right">{site.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
