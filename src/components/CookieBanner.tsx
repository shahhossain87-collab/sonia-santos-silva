"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "sss-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(localStorage.getItem(STORAGE_KEY) !== "accepted");
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-navy/95 px-3 py-1.5 text-cream backdrop-blur-sm">
      <div className="container flex items-center justify-between gap-3">
        <p className="min-w-0 truncate text-[11px] leading-none text-cream/80 sm:text-xs">
          Cookies técnicos.{" "}
          <Link href="/cookies" className="text-gold hover:underline">
            Cookies
          </Link>
          {" · "}
          <Link href="/privacidade" className="text-gold hover:underline">
            Privacidade
          </Link>
        </p>
        <button
          type="button"
          className="shrink-0 rounded-sm bg-gold px-3 py-1 text-[11px] font-semibold tracking-wide text-navy uppercase"
          onClick={() => {
            try {
              localStorage.setItem(STORAGE_KEY, "accepted");
            } catch {
              /* ignore */
            }
            setVisible(false);
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}
