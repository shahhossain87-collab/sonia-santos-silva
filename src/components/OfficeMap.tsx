import { mapsEmbedUrl, mapsLink, site } from "@/config/site";
import type { Locale } from "@/i18n/locales";

const labels = {
  pt: { title: "Mapa Google", open: "Abrir no Google Maps" },
  en: { title: "Google Map", open: "Open in Google Maps" },
} as const;

/** Google Maps embed URL for the office address, with the map labels in the page language. */
export function officeMapSrc(locale: Locale) {
  return locale === "en" ? mapsEmbedUrl.replace("hl=pt", "hl=en") : mapsEmbedUrl;
}

/** Title for the map iframe, read by screen readers. */
export function officeMapTitle(locale: Locale) {
  return `${labels[locale].title}: ${site.officeName}, ${site.addressLine}`;
}

/** Embedded Google Map, visible by default. The browser only loads it when it nears the viewport. */
export function OfficeMapFrame({ locale, className = "" }: { locale: Locale; className?: string }) {
  return (
    <iframe
      title={officeMapTitle(locale)}
      src={officeMapSrc(locale)}
      className={`block w-full max-w-full border-0 ${className}`.trim()}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}

export function OpenInMapsLink({ locale, className = "" }: { locale: Locale; className?: string }) {
  return (
    <a href={mapsLink} target="_blank" rel="noopener noreferrer" className={`link-arrow inline-flex items-center gap-2 ${className}`.trim()}>
      {labels[locale].open} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function OfficeMap({ locale, className }: { locale: Locale; className?: string }) {
  return (
    <div className="min-w-0 max-w-full">
      <div className={`w-full min-w-0 overflow-hidden bg-cream-dark ${className ?? "aspect-[4/3] min-h-[280px]"}`}>
        <OfficeMapFrame locale={locale} className="h-full min-h-[280px]" />
      </div>
      <OpenInMapsLink locale={locale} className="mt-3 text-sm font-semibold text-gold-dark hover:text-navy" />
    </div>
  );
}
