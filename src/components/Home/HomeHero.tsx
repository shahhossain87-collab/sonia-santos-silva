import { WhatsAppIcon } from "@/components/CtaLink";
import { site, whatsappHref } from "@/config/site";
import { getCopy, getServiceFinder } from "@/i18n/copy";
import type { Locale } from "@/i18n/locales";
import { pathFor } from "@/i18n/routes";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { barAssociation, licenceNumber } from "@/data/team";
import { areaTitle, homeText } from "./homeText";
import styles from "./HomeHero.module.css";

/** Order of the practice areas in the hero (no ranking implied). */
const heroAreaOrder = [
  "imigracao",
  "nacionalidade",
  "clientes-internacionais",
  "penal",
  "arrendamento",
  "recuperacao-credito",
  "sociedades",
  "patrimonio",
  "administrativo",
] as const;

/* Timing of the one-off "typing" reveal of the area names (milliseconds). */
const TYPE_START = 450;
const TYPE_BUDGET = 3200; // all names together
const TYPE_MAX_PER_CHAR = 26;
const TYPE_GAP = 70; // pause between names

function heroAreas(locale: Locale) {
  const items = getServiceFinder(locale);
  const list = heroAreaOrder.flatMap((id) => {
    const item = items.find((entry) => entry.id === id);
    return item ? [{ id, href: item.href, label: areaTitle(locale, id, item.title) }] : [];
  });
  const totalChars = list.reduce((sum, area) => sum + area.label.length, 0);
  const perChar = Math.min(TYPE_MAX_PER_CHAR, TYPE_BUDGET / Math.max(1, totalChars));
  let delay = TYPE_START;
  return list.map((area) => {
    const duration = Math.round(area.label.length * perChar);
    const timing = { delay, duration, chars: area.label.length };
    delay += duration + TYPE_GAP;
    return { ...area, timing };
  });
}

export default function HomeHero({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const t = homeText[locale];
  const areas = heroAreas(locale);
  const [street, postal] = [site.addressLine.slice(0, site.addressLine.lastIndexOf(", ")), site.addressLine.slice(site.addressLine.lastIndexOf(", ") + 2)];

  return (
    <section className={`${styles.hero} azulejo-texture-light`} aria-labelledby="home-heading">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.intro}>
            <div className={styles.headRow}>
              <h1 id="home-heading" className={styles.heading}>
                {t.heroTitle}
              </h1>
              <figure className={styles.lawyer}>
                <span className={styles.portrait}>
                  <Image
                    src="/images/team/sonia-santos-portrait.svg"
                    alt={copy.home.heroPortraitAlt}
                    width={320}
                    height={320}
                    preload
                    unoptimized
                  />
                </span>
                <figcaption className={styles.lawyerText}>
                  <span className={styles.name}>Dra. {site.lawyerName}</span>
                  <span className={styles.meta}>
                    {licenceNumber[locale]} · {barAssociation[locale]}
                  </span>
                </figcaption>
              </figure>
            </div>
            <span className={styles.ornament} aria-hidden="true">
              <span />
            </span>
            <p className={styles.lead}>
              {t.heroLead}
              <span className={styles.attendance}>{t.heroAttendance}</span>
            </p>
          </div>

          <nav className={styles.areas} aria-label={t.heroAreas}>
            <p className={styles.areasLabel}>{t.heroAreas}</p>
            <ul className={styles.areaList}>
              {areas.map((area) => (
                <li
                  key={area.id}
                  style={
                    {
                      "--type-delay": `${area.timing.delay}ms`,
                      "--type-duration": `${area.timing.duration}ms`,
                      "--type-steps": area.timing.chars,
                    } as CSSProperties
                  }
                >
                  <Link href={area.href} className={styles.areaLink}>
                    <span className={styles.marker} aria-hidden="true" />
                    <span className={styles.areaText}>{area.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <a href={whatsappHref(copy.home.heroWhatsapp)} target="_blank" rel="noopener noreferrer" className={`btn-gold ${styles.primary}`}>
              <WhatsAppIcon />
              {copy.home.presenceBookCta}
            </a>
            <Link href={pathFor(locale, "services")} className={styles.textLink}>
              {t.heroAreasAll} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <dl className={styles.facts}>
          <div>
            <dt>{t.addressLabel}</dt>
            <dd>
              {street}, {postal} · <span className={styles.muted}>{site.landmark[locale]}</span>
            </dd>
          </div>
          <div>
            <dt>{t.hoursLabel}</dt>
            <dd>{t.hoursShort}</dd>
          </div>
          <div>
            <dt>{t.languagesLabel}</dt>
            <dd>{t.languages}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
