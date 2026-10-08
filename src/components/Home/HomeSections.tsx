import { WhatsAppIcon } from "@/components/CtaLink";
import Reveal from "@/components/Reveal";
import { mapsLink, site, whatsappHref } from "@/config/site";
import { practiceAreas } from "@/data/practice-areas";
import { serviceThumbnails } from "@/data/service-thumbnails";
import { team } from "@/data/team";
import { getCopy, getServiceFinder } from "@/i18n/copy";
import type { Locale } from "@/i18n/locales";
import { pathFor } from "@/i18n/routes";
import Image from "next/image";
import Link from "next/link";
import { areaTitle, homeText, immigrationLine } from "./homeText";

const areaKeyById = {
  "clientes-internacionais": "internationalClients",
  nacionalidade: "nationality",
  arrendamento: "tenancy",
  "recuperacao-credito": "debtRecovery",
  sociedades: "companyLaw",
  patrimonio: "propertyInheritance",
  penal: "criminalLaw",
  administrativo: "administrativeLaw",
} as const;

function areaLine(locale: Locale, id: string, fallback: string) {
  if (id === "imigracao") return immigrationLine[locale];
  const key = areaKeyById[id as keyof typeof areaKeyById];
  return practiceAreas.find((area) => area.key === key)?.line[locale] ?? fallback;
}

function SectionHeading({
  eyebrow,
  title,
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className={`flex items-center gap-3 ${light ? "eyebrow-light" : "eyebrow"}`}>
        <span className="block h-px w-8 bg-gold" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className={`mt-5 font-display text-[38px] leading-[1.08] font-medium sm:text-[48px] ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
    </div>
  );
}

export function PracticeAreas({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const t = homeText[locale];
  const items = getServiceFinder(locale);

  return (
    <section id="areas" className="azulejo-texture relative scroll-mt-24 bg-cream py-20 md:py-28">
      <div className="container grid max-w-[1240px] gap-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-[calc(var(--site-header-height)+48px)] lg:self-start">
          <SectionHeading eyebrow={t.areasEyebrow} title={copy.home.finderTitle} />
          <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-body-color">{copy.home.finderLead}</p>
          <Link
            href={pathFor(locale, "services")}
            className="link-arrow mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-[13px] font-semibold tracking-[0.16em] text-navy uppercase hover:text-gold-dark"
          >
            {t.areasAll} <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <ol className="border-b border-navy/12">
          {items.map((item, index) => {
            const thumbnail = serviceThumbnails[item.id as keyof typeof serviceThumbnails];
            return (
              <li key={item.id} className="area-row border-t border-navy/12">
                <Reveal delay={Math.min(index, 4) * 0.05}>
                  <Link
                    href={item.href}
                    className="group grid grid-cols-[minmax(0,1fr)_68px] items-center gap-x-5 py-6 sm:grid-cols-[64px_minmax(0,1fr)_112px] sm:gap-x-7 md:py-7"
                  >
                    <span className="hidden self-start pt-1 font-display text-[34px] leading-none text-gold sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span className="mb-1.5 block font-display text-[17px] leading-none text-gold sm:hidden" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="block font-display text-[24px] leading-tight text-navy transition-colors duration-300 group-hover:text-gold-dark sm:text-[29px]">
                        {areaTitle(locale, item.id, item.title)}
                      </span>
                      <span className="mt-2 block max-w-xl text-[15px] leading-relaxed text-body-color sm:text-[16px]">
                        {areaLine(locale, item.id, item.description)}
                      </span>
                      <span className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-[12px] font-semibold tracking-[0.16em] uppercase">
                        <span className="text-body-color/80">
                          {item.subcardCount} {t.services}
                        </span>
                        <span className="inline-flex items-center gap-2 text-gold-dark">
                          {t.more} <span className="area-row__arrow inline-block" aria-hidden="true">→</span>
                        </span>
                      </span>
                    </span>
                    {thumbnail ? (
                      <span className="area-row__thumb relative block aspect-square overflow-hidden bg-cream-dark sm:aspect-[4/3]">
                        <Image src={thumbnail.src} alt={thumbnail.alt} fill sizes="(min-width: 576px) 112px, 72px" className="object-cover" />
                      </span>
                    ) : (
                      <span />
                    )}
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function OfficeIntro({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const t = homeText[locale];
  const numerals = ["I", "II", "III"];

  return (
    <section className="overflow-hidden bg-white py-20 md:py-28">
      <div className="container grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -top-4 -left-4 hidden h-full w-full border border-gold/50 sm:block" aria-hidden="true" />
          <figure className="photo-zoom relative aspect-[4/3] overflow-hidden bg-cream-dark">
            <Image
              src="/images/team/equipa.jpg"
              alt={copy.home.teamGroupAlt}
              fill
              sizes="(min-width: 992px) 560px, 100vw"
              className="object-cover object-[50%_18%]"
            />
          </figure>
          <p className="absolute right-0 -bottom-5 bg-navy px-5 py-3 text-[11px] font-semibold tracking-[0.22em] text-gold-light uppercase sm:-right-5">
            {t.city}
          </p>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={0.08}>
          <SectionHeading eyebrow={copy.home.aboutEyebrow} title={copy.home.aboutTitle} />
          <p className="mt-6 text-[17px] leading-relaxed text-body-color">{copy.aboutPage.mission[0]}</p>
          <p className="mt-4 text-[17px] leading-relaxed text-body-color">{copy.aboutPage.mission[2]}</p>
          <ul className="mt-9 grid gap-6 border-t border-navy/10 pt-8 sm:grid-cols-3">
            {copy.aboutPage.values.map((value, index) => (
              <li key={value.title}>
                <span className="font-display text-[22px] text-gold">{numerals[index]}</span>
                <p className="mt-2 font-display text-[19px] leading-snug text-navy">{value.title}</p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-body-color">{value.text}</p>
              </li>
            ))}
          </ul>
          <Link
            href={pathFor(locale, "about")}
            className="link-arrow mt-10 inline-flex items-center gap-2 border-b border-gold pb-1 text-[13px] font-semibold tracking-[0.16em] text-navy uppercase hover:text-gold-dark"
          >
            {t.officeLink} <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function TeamPreview({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const t = homeText[locale];
  const teamHref = `${pathFor(locale, "about")}#equipa`;

  return (
    <section className="relative bg-navy py-20 text-white md:py-28">
      <div className="azulejo-texture-light absolute inset-0" aria-hidden="true" />
      <div className="container relative max-w-[1240px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading eyebrow={copy.home.teamEyebrow} title={copy.home.teamTitle} light />
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href={teamHref}
              className="link-arrow inline-flex items-center gap-2 border-b border-gold pb-1 text-[13px] font-semibold tracking-[0.16em] text-white uppercase hover:text-gold-light"
            >
              {t.teamLink} <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-x-3 gap-y-8 md:mt-16 lg:flex-nowrap lg:gap-x-6">
          {team.map((member, index) => (
            <li key={member.photo} className="w-[calc((100%-1.5rem)/3)] lg:w-1/5">
              <Reveal delay={index * 0.07}>
                <Link href={teamHref} className="group block">
                  <span className="photo-zoom relative block aspect-[4/5] overflow-hidden bg-navy-soft">
                    <Image
                      src={member.photo}
                      alt={member.name && member.role ? `${member.name}, ${member.role.toLowerCase()}` : copy.home.teamFallbackAlt}
                      fill
                      sizes="(min-width: 992px) 230px, (min-width: 576px) 33vw, 50vw"
                      className="object-cover object-center"
                    />
                    <span className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/60 to-transparent" aria-hidden="true" />
                  </span>
                  <span className="mt-4 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" aria-hidden="true" />
                  <span className="mt-3 block font-display text-[16px] leading-snug text-white group-hover:text-gold-light sm:text-[20px]">
                    {member.name}
                  </span>
                  <span className="mt-1 block text-[12px] leading-snug text-white/65 sm:text-[13px]">{member.role}</span>
                  {member.license ? (
                    <span className="mt-1 block text-[11.5px] leading-snug text-gold-light/90 sm:text-[12.5px]">{member.license}</span>
                  ) : null}
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function VisitOffice({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const t = homeText[locale];
  const separator = site.addressLine.lastIndexOf(", ");
  const street = site.addressLine.slice(0, separator);
  const postal = site.addressLine.slice(separator + 2);

  return (
    <section id="em-lisboa" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <SectionHeading eyebrow={copy.home.presenceEyebrow} title={copy.home.presenceTitle} />
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-body-color">{copy.home.presenceLead}</p>
          <dl className="mt-9 grid gap-x-10 gap-y-6 border-t border-navy/10 pt-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <dt className="eyebrow">{t.addressLabel}</dt>
              <dd className="mt-2 text-[16px] leading-relaxed text-navy">
                {site.addressLine}
                <span className="block text-body-color">{site.landmark[locale]}</span>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">{t.hoursLabel}</dt>
              <dd className="mt-2 text-[16px] leading-relaxed text-navy">{copy.home.hours}</dd>
            </div>
            <div>
              <dt className="eyebrow">{t.phoneLabel}</dt>
              <dd className="mt-2 text-[16px] leading-relaxed">
                <a href={`tel:+${site.phoneDigits}`} className="text-navy hover:text-gold-dark">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="eyebrow">{t.emailLabel}</dt>
              <dd className="mt-2 text-[16px] leading-relaxed break-all">
                <a href={`mailto:${site.email}`} className="text-navy hover:text-gold-dark">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
          <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn-navy mt-10">
            {t.mapLink}
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden bg-navy-deep p-3 shadow-[0_40px_80px_-40px_rgba(26,34,56,0.55)]">
            <div className="azulejo-texture-light absolute inset-0" aria-hidden="true" />
            <div className="relative flex min-h-[280px] flex-col justify-between gap-10 border border-gold/40 p-7 text-white sm:min-h-[420px] sm:p-10">
              <p className="text-[12px] font-semibold tracking-[0.26em] text-gold-light uppercase">{copy.home.presenceLocation} · {site.city}</p>
              <address className="not-italic">
                <p className="font-display text-[30px] leading-[1.15] sm:text-[40px]">{street}</p>
                <p className="mt-2 font-display text-[22px] text-white/75 sm:text-[26px]">{postal}</p>
                <span className="azulejo-rule mt-7 block w-40" aria-hidden="true" />
                <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/75">{site.landmark[locale]}</p>
              </address>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ConsultationBand({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const t = homeText[locale];

  return (
    <section id="vamos-falar" className="relative isolate overflow-hidden bg-navy-deep py-20 text-white md:py-28">
      <Image src="/images/home/lisboa-editorial.webp" alt="" fill sizes="100vw" className="-z-20 object-cover object-[60%_center] opacity-35" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,26,44,0.96)_0%,rgba(18,26,44,0.86)_55%,rgba(18,26,44,0.7)_100%)]" aria-hidden="true" />
      <div className="container grid max-w-[1240px] items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <SectionHeading eyebrow={copy.home.conversionEyebrow} title={copy.home.conversionTitle} light />
          <p className="mt-6 max-w-lg text-[18px] leading-relaxed text-white/80">{copy.home.midCta}</p>
        </Reveal>
        <Reveal delay={0.08} className="lg:justify-self-end">
          <a href={whatsappHref(copy.home.heroWhatsapp)} target="_blank" rel="noopener noreferrer" className="btn-gold w-full sm:w-auto">
            <WhatsAppIcon />
            {copy.home.presenceBookCta}
          </a>
          <Link href={pathFor(locale, "contact")} className="link-arrow mt-5 flex items-center gap-2 text-[14px] text-white/75 hover:text-gold-light">
            {t.formLink} <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
