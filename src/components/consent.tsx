"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export const CONSENT_STORAGE_KEY = "gjl-consent-v1";

export type ConsentState = {
  necessary: true;
  maps: boolean;
  updatedAt: string;
};

type ConsentContextValue = {
  ready: boolean;
  consent: ConsentState | null;
  /** Google Maps may load only after an explicit opt-in. Unknown consent counts as no. */
  mapsAllowed: boolean;
  bannerOpen: boolean;
  preferencesOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (maps: boolean) => void;
  allowMaps: () => void;
  openPreferences: () => void;
  togglePreferences: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

function readConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (typeof parsed.maps !== "boolean") return null;
    return { necessary: true, maps: parsed.maps, updatedAt: parsed.updatedAt ?? "" };
  } catch {
    return null;
  }
}

function writeConsent(maps: boolean): ConsentState {
  const next: ConsentState = { necessary: true, maps, updatedAt: new Date().toISOString() };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* private mode */
  }
  return next;
}

export function openConsentPreferences() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("gjl-open-consent"));
  }
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setBannerOpen(stored === null);
    setReady(true);
    const open = () => {
      setBannerOpen(true);
      setPreferencesOpen(true);
    };
    window.addEventListener("gjl-open-consent", open);
    return () => window.removeEventListener("gjl-open-consent", open);
  }, []);

  const acceptAll = useCallback(() => {
    setConsent(writeConsent(true));
    setBannerOpen(false);
    setPreferencesOpen(false);
  }, []);

  const rejectAll = useCallback(() => {
    setConsent(writeConsent(false));
    setBannerOpen(false);
    setPreferencesOpen(false);
  }, []);

  const savePreferences = useCallback((maps: boolean) => {
    setConsent(writeConsent(maps));
    setBannerOpen(false);
    setPreferencesOpen(false);
  }, []);

  const allowMaps = useCallback(() => {
    setConsent(writeConsent(true));
  }, []);

  const openPreferences = useCallback(() => {
    setBannerOpen(true);
    setPreferencesOpen(true);
  }, []);

  const togglePreferences = useCallback(() => {
    setBannerOpen(true);
    setPreferencesOpen((open) => !open);
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      ready,
      consent,
      mapsAllowed: ready && consent?.maps === true,
      bannerOpen: ready && bannerOpen,
      preferencesOpen,
      acceptAll,
      rejectAll,
      savePreferences,
      allowMaps,
      openPreferences,
      togglePreferences,
    }),
    [
      ready,
      consent,
      bannerOpen,
      preferencesOpen,
      acceptAll,
      rejectAll,
      savePreferences,
      allowMaps,
      openPreferences,
      togglePreferences,
    ],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const value = useContext(ConsentContext);
  if (!value) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return value;
}
