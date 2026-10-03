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
      className="fixed right-4 bottom-[calc(var(--bottom-chrome-height)+max(1rem,env(safe-area-inset-bottom)))] z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-[#128C7E] text-white shadow-two transition-colors hover:bg-[#0e7a6e] focus-visible:outline-offset-4 lg:right-6"
      aria-label={`${copy.common.whatsappFloat} — ${copy.brand.lockupLabel}`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
