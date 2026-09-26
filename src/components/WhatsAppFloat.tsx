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
      className="fixed right-6 bottom-10 z-50 hidden items-center gap-2 rounded-sm bg-[#128C7E] px-4 py-3 text-sm font-semibold text-white shadow-two transition hover:bg-[#0e7a6e] lg:flex"
      aria-label={`${copy.common.whatsappFloat} — ${copy.brand.lockupLabel}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
