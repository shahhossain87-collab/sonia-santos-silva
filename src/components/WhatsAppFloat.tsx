"use client";

import { whatsappHref } from "@/config/site";
import { useCopy } from "@/i18n/use-locale";
import { WhatsAppIcon } from "./CtaLink";

export default function WhatsAppFloat() {
  const { copy } = useCopy();

  return (
    <a
      href={whatsappHref(copy.home.heroWhatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-3 bottom-[calc(var(--bottom-chrome-height)+max(0.75rem,env(safe-area-inset-bottom)))] z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#128C7E]/90 text-white shadow-[0_6px_18px_-6px_rgba(0,0,0,0.45)] transition-colors hover:bg-[#0e7a6e] focus-visible:outline-offset-4 lg:right-6"
      aria-label={`${copy.common.whatsappFloat} — ${copy.brand.lockupLabel}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
    </a>
  );
}
