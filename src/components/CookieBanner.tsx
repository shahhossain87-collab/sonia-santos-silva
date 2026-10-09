"use client";

import { useCopy } from "@/i18n/use-locale";
import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "sss-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { copy } = useCopy();

  useEffect(() => {
    try {
      setVisible(localStorage.getItem(STORAGE_KEY) !== "accepted");
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="relative z-50 border-t border-gold/20 bg-navy/95 px-3 pt-1 pb-[max(0.25rem,env(safe-area-inset-bottom))] text-cream backdrop-blur-sm">
      <div className="container flex items-center justify-between gap-3">
        <p className="min-w-0 text-[10.5px] leading-snug text-cream/75 sm:text-[11.5px]">
          {copy.common.cookies}{" "}
          <Link href="/cookies" className="text-gold hover:underline">
            Cookies
          </Link>
          {" · "}
          <Link href="/privacidade" className="text-gold hover:underline">
            {copy.common.privacy}
          </Link>
        </p>
        <button
          type="button"
          className="min-h-8 shrink-0 rounded-sm border border-gold/70 px-3 py-1 text-[10.5px] font-semibold tracking-wide text-gold-light uppercase hover:bg-gold hover:text-navy"
          onClick={() => {
            try {
              localStorage.setItem(STORAGE_KEY, "accepted");
            } catch {
              /* ignore */
            }
            setVisible(false);
          }}
        >
          {copy.common.cookieOk}
        </button>
      </div>
    </div>
  );
}
