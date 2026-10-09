import { WhatsAppIcon } from "@/components/CtaLink";
import { site, whatsappHref } from "@/config/site";
import { getCopy, getServiceFinder } from "@/i18n/copy";
import type { Locale } from "@/i18n/locales";
import { pathFor } from "@/i18n/routes";
import Image from "next/image";
import Link from "next/link";
import { barAssociation, licenceNumber } from "@/data/team";
import { areaTitle, homeText } from "./homeText";
import styles from "./HomeHero.module.css";
import TypedHeadline from "./TypedHeadline";

/** Areas cycled in the animated headline. */
const typedAreaIds = ["penal", "imigracao", "nacionalidade", "arrendamento", "sociedades", "patrimonio"] as const;

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

function heroAreas(locale: Locale) {
  const items = getServiceFinder(locale);
  return heroAreaOrder.flatMap((id) => {
    const item = items.find((entry) => entry.id === id);
    return item ? [{ id, href: item.href, label: areaTitle(locale, id, item.title) }] : [];
  });
}

export default function HomeHero({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const t = homeText[locale];
  const areas = heroAreas(locale);
  const typedPhrases = typedAreaIds.flatMap((id) => areas.filter((area) => area.id === id).map((area) => area.label));
  const [street, postal] = [site.addressLine.slice(0, site.addressLine.lastIndexOf(", ")), site.addressLine.slice(site.addressLine.lastIndexOf(", ") + 2)];

  return (
    <section className={styles.hero} aria-labelledby="home-heading">
      <div className={styles.scene} aria-hidden="true">
        <Image src="/images/home/lisboa-editorial.webp" alt="" fill sizes="100vw" preload className={styles.image} />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>{t.heroEyebrow}</p>
            <h1 id="home-heading" className={styles.heading}>
              <span className="sr-only">{t.heroTitle}</span>
              <TypedHeadline prefix={t.heroPrefix} phrases={typedPhrases} fallback={t.heroTitleRest} />
            </h1>
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
                <li key={area.id}>
                  <Link href={area.href} className={styles.areaLink}>
                    <span className={styles.marker} aria-hidden="true" />
                    <span className={styles.areaText}>{area.label}</span>
                    <span className={styles.areaArrow} aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actionsBlock}>
            <div className={styles.actions}>
              <a href={whatsappHref(copy.home.heroWhatsapp)} target="_blank" rel="noopener noreferrer" className={`btn-gold ${styles.primary}`}>
                <WhatsAppIcon />
                {copy.home.presenceBookCta}
              </a>
              <Link href={pathFor(locale, "services")} className={styles.textLink}>
                {t.heroAreasAll} <span aria-hidden="true">→</span>
              </Link>
            </div>
            <p className={styles.lawyer}>
              <span className={styles.portrait}>
                <Image src="/images/team/sonia-santos.jpg" alt={copy.home.heroPortraitAlt} fill sizes="56px" />
              </span>
              <span className={styles.lawyerText}>
                <span className={styles.name}>Dra. {site.lawyerName}</span>
                <span className={styles.meta}>
                  {copy.home.heroRole} · <b>{licenceNumber[locale]}</b> · {barAssociation[locale]}
                </span>
              </span>
            </p>
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
