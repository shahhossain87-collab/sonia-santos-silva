"use client";

import { useConsent } from "@/components/consent";
import { pathFor } from "@/i18n/routes";
import { useCopy } from "@/i18n/use-locale";
import Link from "next/link";
import { useEffect, useState } from "react";

const choiceButton =
  "inline-flex min-h-10 w-full min-w-[8.75rem] flex-1 items-center justify-center border border-gold/80 px-4 text-[11px] font-semibold tracking-[0.14em] text-gold-light uppercase hover:bg-gold hover:text-navy sm:w-[8.75rem] sm:flex-none";

export default function CookieBanner() {
  const { copy, locale } = useCopy();
  const { bannerOpen, preferencesOpen, consent, acceptAll, rejectAll, savePreferences, togglePreferences } = useConsent();
  const [maps, setMaps] = useState(consent?.maps ?? false);

  useEffect(() => {
    if (preferencesOpen) setMaps(consent?.maps ?? false);
  }, [preferencesOpen, consent?.maps]);

  if (!bannerOpen) return null;

  return (
    <div
      role="region"
      aria-label={copy.common.cookieTitle}
      className="border-t border-gold/20 bg-navy/95 px-3 py-3 text-cream backdrop-blur-sm"
    >
      <div className="container flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0 lg:max-w-3xl">
          <p className="text-[12.5px] leading-snug text-cream/80 sm:text-[13px]">
            {copy.common.cookies}{" "}
            <Link href={pathFor(locale, "cookies")} className="text-gold hover:underline">
              Cookies
            </Link>
            {" · "}
            <Link href={pathFor(locale, "privacy")} className="text-gold hover:underline">
              {copy.common.privacy}
            </Link>
          </p>
          {preferencesOpen ? (
            <fieldset className="mt-3 space-y-3 border border-white/15 p-3">
              <legend className="px-1 text-[11px] font-semibold tracking-[0.16em] text-gold-light uppercase">
                {copy.common.cookiePreferences}
              </legend>
              <label className="flex items-start gap-2 text-[12.5px] leading-snug text-cream/80">
                <input type="checkbox" checked disabled className="mt-0.5" />
                <span>
                  <span className="font-semibold text-cream">{copy.common.cookieNecessary}</span>
                  <span className="mt-0.5 block text-cream/65">{copy.common.cookieNecessaryHelp}</span>
                </span>
              </label>
              <label className="flex items-start gap-2 text-[12.5px] leading-snug text-cream/80">
                <input
                  type="checkbox"
                  checked={maps}
                  onChange={(event) => setMaps(event.target.checked)}
                  className="mt-0.5"
                />
                <span>
                  <span className="font-semibold text-cream">{copy.common.cookieMaps}</span>
                  <span className="mt-0.5 block text-cream/65">{copy.common.cookieMapsHelp}</span>
                </span>
              </label>
              <button type="button" className={choiceButton} onClick={() => savePreferences(maps)}>
                {copy.common.cookieSave}
              </button>
            </fieldset>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" className={choiceButton} onClick={rejectAll}>
            {copy.common.cookieReject}
          </button>
          <button type="button" className={choiceButton} onClick={acceptAll}>
            {copy.common.cookieAccept}
          </button>
          <button type="button" className={choiceButton} onClick={togglePreferences}>
            {copy.common.cookiePreferences}
          </button>
        </div>
      </div>
    </div>
  );
}

export function ManageCookiesButton({ label, className = "" }: { label: string; className?: string }) {
  const { openPreferences } = useConsent();
  return (
    <button type="button" className={className} onClick={openPreferences}>
      {label}
    </button>
  );
}
