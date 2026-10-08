"use client";

import { WhatsAppIcon } from "@/components/CtaLink";
import { site, whatsappHref } from "@/config/site";
import { getServiceFinder } from "@/i18n/copy";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const { locale, copy } = useCopy();
  const [paused, setPaused] = useState(false);
  const services = getServiceFinder(locale);

  return (
    <section
      className={styles.hero}
      aria-labelledby="home-heading"
      data-paused={paused}
    >
      <div className={styles.scene} aria-hidden="true">
        <Image
          src="/images/home/lisboa-editorial.webp"
          alt=""
          fill
          sizes="100vw"
          preload
          className={styles.image}
        />
      </div>
      <div className={styles.light} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>{copy.brand.name}</p>
            <h1 id="home-heading" className={styles.heading}>
              {copy.home.heroTitle}
            </h1>
            <span className={styles.ornament} aria-hidden="true">
              <span />
            </span>
            <p className={styles.lead}>{copy.home.heroLead}</p>
            <div className={styles.actions}>
              <a
                href={whatsappHref(copy.home.heroWhatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <WhatsAppIcon />
                {copy.home.presenceBookCta}
              </a>
            </div>
          </div>

          <nav className={styles.services} aria-label={copy.home.heroServices}>
            <p className={styles.servicesLabel}>{copy.home.heroServices}</p>
            <ul className={styles.primary}>
              {services.slice(0, 3).map((service) => (
                <li key={service.id}>
                  <Link href={service.href}>
                    {service.id === "clientes-internacionais" && locale === "pt"
                      ? "Clientes Internacionais"
                      : service.title}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className={styles.secondary}>
              {services.slice(3).map((service) => (
                <li key={service.id}>
                  <Link href={service.href}>{service.title}</Link>
                </li>
              ))}
            </ul>
            <div className={styles.mobileGroups}>
              <a href="#areas">
                {locale === "pt"
                  ? "Arrendamento, património e empresas"
                  : "Tenancy, property and companies"}
                <span aria-hidden="true">↓</span>
              </a>
              <a href="#areas">
                {locale === "pt"
                  ? "Crédito, penal e administrativo"
                  : "Debt recovery, criminal and administrative law"}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </nav>
        </div>

        <div className={styles.identity}>
          <p>
            Dra. {site.lawyerName}
            <span>
              {copy.home.heroRole} · {copy.home.heroKicker}
            </span>
          </p>
          <button
            type="button"
            className={styles.motionControl}
            aria-pressed={paused}
            onClick={() => setPaused((value) => !value)}
          >
            <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
            {locale === "pt"
              ? paused
                ? "Retomar movimento"
                : "Pausar movimento"
              : paused
                ? "Resume motion"
                : "Pause motion"}
          </button>
        </div>
      </div>
    </section>
  );
}
