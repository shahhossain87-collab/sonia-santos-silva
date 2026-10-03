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
      className="fixed right-4 bottom-[calc(var(--bottom-chrome-height)+1rem)] z-40 hidden h-12 w-12 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-two transition hover:bg-[#0e7a6e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:flex"
      aria-label={`${copy.common.whatsappFloat} — ${copy.brand.lockupLabel}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
    </a>
  );
}
