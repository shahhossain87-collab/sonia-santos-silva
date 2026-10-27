"use client";

import { useConsent } from "@/components/consent";
import { mapsEmbedUrl, mapsLink, site } from "@/config/site";
import type { Locale } from "@/i18n/locales";
import { useState } from "react";

const labels = {
  pt: {
    title: "Mapa do escritório",
    note: "O mapa da Google só é carregado depois do seu consentimento. Pode abri-lo no Google Maps sem o incorporar nesta página.",
    load: "Carregar mapa",
    open: "Abrir no Google Maps",
  },
  en: {
    title: "Office map",
    note: "The Google map loads only after you consent. You can open it in Google Maps without embedding it on this page.",
    load: "Load map",
    open: "Open in Google Maps",
  },
} as const;

export function OfficeMapFrame({ locale, className = "" }: { locale: Locale; className?: string }) {
  const { mapsAllowed, allowMaps } = useConsent();
  const [loaded, setLoaded] = useState(false);
  const showMap = mapsAllowed || loaded;
  const copy = labels[locale];
  const mapSrc = locale === "en" ? mapsEmbedUrl.replace("hl=pt", "hl=en") : mapsEmbedUrl;
  const mapTitle = `${locale === "en" ? "Google Map" : "Mapa Google"}: ${site.officeName}, ${site.addressLine}`;

  if (!showMap) {
    return (
      <div className={`flex flex-col items-center justify-center gap-4 bg-navy-deep px-6 py-8 text-center text-white ${className}`.trim()}>
        <p className="font-display text-[26px] leading-tight text-gold-light">{copy.title}</p>
        <p className="max-w-sm text-[14px] leading-relaxed text-white/75">
          {site.addressLine}
          <span className="mt-1 block text-white/55">{site.landmark[locale]}</span>
        </p>
        <p className="max-w-sm text-[13px] leading-relaxed text-white/60">{copy.note}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="inline-flex min-h-10 items-center justify-center border border-gold/80 px-4 text-[11px] font-semibold tracking-[0.14em] text-gold-light uppercase hover:bg-gold hover:text-navy"
            onClick={() => {
              allowMaps();
              setLoaded(true);
            }}
          >
            {copy.load}
          </button>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center justify-center border border-gold/80 px-4 text-[11px] font-semibold tracking-[0.14em] text-gold-light uppercase hover:bg-gold hover:text-navy"
          >
            {copy.open}
          </a>
        </div>
      </div>
    );
  }

  return (
    <iframe
      title={mapTitle}
      src={mapSrc}
      className={`block w-full max-w-full border-0 ${className}`.trim()}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}
