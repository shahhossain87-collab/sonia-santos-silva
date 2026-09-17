"use client";

import { WhatsAppIcon } from "@/components/CtaLink";
import { isNavActive } from "@/components/Header/navActive";
import { whatsappHref } from "@/config/site";
import { getNavServiceMenu } from "@/i18n/copy";
import { useCopy } from "@/i18n/use-locale";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function HomeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 10.5 12 4l8 6.5V20H4v-9.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServicesIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 7h14M5 12h14M5 17h10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 7.5h14v9H5v-9Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m5 8 7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MobileDock() {
  const pathname = usePathname() ?? "/";
  const { locale, copy } = useCopy();
  const [open, setOpen] = useState(false);
  const menu = getNavServiceMenu(locale);
  const home = copy.nav.find((item) => item.id === "inicio");
  const services = copy.nav.find((item) => item.id === "servicos");
  const contact = copy.nav.find((item) => item.id === "contato");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!home || !services || !contact) {
    return null;
  }

  const homeActive = isNavActive(pathname, home.href, home.id);
  const servicesActive = open || isNavActive(pathname, services.href, services.id);
  const contactActive = isNavActive(pathname, contact.href, contact.id);

  return (
    <div className="lg:hidden">
      {open ? (
        <div className="fixed inset-0 z-40">
          <button
            type="button"
            className="absolute inset-0 bg-navy/40"
            aria-label={copy.header.closeServices}
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-x-0 bottom-14 max-h-[70vh] overflow-y-auto border-t border-navy/10 bg-white px-4 py-4 shadow-two">
            <div className="grid gap-5">
              {[menu.immigration, menu.other].map((group) => (
                <div key={group.title}>
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">
                    {group.title}
                  </p>
                  <ul className="mt-2">
                    {group.items.map((item) => (
                      <li key={`${group.title}-${item.href}-${item.title}`}>
                        <Link
                          href={item.href}
                          className="block min-h-11 py-3 text-base text-navy"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link
              href={services.href}
              className="mt-1 block min-h-11 py-3 text-base font-semibold text-gold-dark"
            >
              {copy.header.allServices}
            </Link>
          </div>
        </div>
      ) : null}

      <nav
        className="fixed inset-x-0 bottom-0 z-50 border-t border-navy/10 bg-white pb-[max(0.4rem,env(safe-area-inset-bottom))]"
        aria-label={copy.header.mobileNav}
      >
        <ul className="grid grid-cols-4">
          <li>
            <Link
              href={home.href}
              aria-current={homeActive ? "page" : undefined}
              className={`flex min-h-14 flex-col items-center justify-center gap-1 text-[10px] font-semibold tracking-[0.12em] uppercase ${
                homeActive ? "text-gold-dark" : "text-navy"
              }`}
            >
              <HomeIcon />
              {home.title}
            </Link>
          </li>
          <li>
            <button
              type="button"
              aria-expanded={open}
              aria-current={servicesActive ? "page" : undefined}
              className={`flex min-h-14 w-full flex-col items-center justify-center gap-1 text-[10px] font-semibold tracking-[0.12em] uppercase ${
                servicesActive ? "text-gold-dark" : "text-navy"
              }`}
              onClick={() => setOpen((value) => !value)}
            >
              <ServicesIcon />
              {services.title}
            </button>
          </li>
          <li>
            <Link
              href={contact.href}
              aria-current={contactActive ? "page" : undefined}
              className={`flex min-h-14 flex-col items-center justify-center gap-1 text-[10px] font-semibold tracking-[0.12em] uppercase ${
                contactActive ? "text-gold-dark" : "text-navy"
              }`}
            >
              <ContactIcon />
              {contact.title}
            </Link>
          </li>
          <li>
            <a
              href={whatsappHref(copy.home.heroWhatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 flex-col items-center justify-center gap-1 text-[10px] font-semibold tracking-[0.12em] text-[#128C7E] uppercase"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
