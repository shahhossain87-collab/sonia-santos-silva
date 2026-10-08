import { WhatsAppIcon } from "@/components/CtaLink";
import { site, whatsappHref } from "@/config/site";
import { getCopy } from "@/i18n/copy";
import type { Locale } from "@/i18n/locales";
import Image from "next/image";
import { barAssociation, licenceNumber } from "@/data/team";
import { homeText } from "./homeText";
import styles from "./HomeHero.module.css";

function LawyerIdentity({ locale, decorative = false }: { locale: Locale; decorative?: boolean }) {
  const copy = getCopy(locale);
  return (
    <>
      <span className={styles.portrait}>
        <Image src="/images/team/sonia-santos.jpg" alt={decorative ? "" : copy.home.heroPortraitAlt} fill sizes="64px" />
      </span>
      <span>
        <span className={`${styles.name} block`}>Dra. {site.lawyerName}</span>
        <span className={`${styles.meta} block`}>
          {copy.home.heroRole} · <b>{licenceNumber[locale]}</b>
        </span>
        <span className={`${styles.bar} block`}>{barAssociation[locale]}</span>
      </span>
    </>
  );
}

export default function HomeHero({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const t = homeText[locale];
  const [street, postal] = [site.addressLine.slice(0, site.addressLine.lastIndexOf(", ")), site.addressLine.slice(site.addressLine.lastIndexOf(", ") + 2)];

  return (
    <section className={styles.hero} aria-labelledby="home-heading">
      <div className={styles.scene} aria-hidden="true">
        <Image src="/images/home/lisboa-editorial.webp" alt="" fill sizes="100vw" preload className={styles.image} />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{t.heroEyebrow}</p>
          <h1 id="home-heading" className={styles.heading}>
            {copy.home.heroTitle}
          </h1>
          <span className={styles.ornament} aria-hidden="true">
            <span />
          </span>
          <p className={styles.lead}>{t.heroLead}</p>
          <p className={styles.lawyer}>
            <LawyerIdentity locale={locale} />
          </p>
          <div className={styles.actions}>
            <a href={whatsappHref(copy.home.heroWhatsapp)} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <WhatsAppIcon />
              {copy.home.presenceBookCta}
            </a>
            <a href="#areas" className="btn-outline-light">
              {t.heroAreas}
            </a>
          </div>
        </div>

        <div className={styles.strip}>
          <dl className={styles.facts}>
            <div>
              <dt>{t.addressLabel}</dt>
              <dd>
                {street}, {postal}
                <small>{site.landmark[locale]}</small>
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
          <p className={styles.card}>
            <LawyerIdentity locale={locale} decorative />
          </p>
        </div>
      </div>
    </section>
  );
}
