"use client";

import { useState } from "react";
import { mapsEmbedUrl, mapsLink, site } from "@/config/site";
import { useCopy } from "@/i18n/use-locale";

export default function OfficeMap({
  className,
}: {
  className?: string;
}) {
  const [mapLoaded, setMapLoaded] = useState(false);
  const { copy } = useCopy();

  return (
    <div className="min-w-0 max-w-full">
      <div
        className={`w-full min-w-0 overflow-hidden bg-cream ${className ?? "aspect-[4/3] min-h-[280px]"}`}
      >
        {mapLoaded ? (
          <iframe
            title={`${site.officeName} — ${site.addressLine}`}
            src={mapsEmbedUrl}
            className="h-full min-h-[280px] w-full max-w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-4 p-6 text-center">
            <p className="max-w-sm text-sm text-body-color">
              {copy.common.mapNotice}
            </p>
            <button
              type="button"
              onClick={() => setMapLoaded(true)}
              className="bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy/90"
            >
              {copy.common.viewMap}
            </button>
          </div>
        )}
      </div>
      <a
        href={mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-sm font-semibold text-gold-dark hover:underline"
      >
        {copy.common.openGoogleMaps}
      </a>
    </div>
  );
}
