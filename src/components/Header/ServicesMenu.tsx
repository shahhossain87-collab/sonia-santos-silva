"use client";

import { getNavServiceMenu } from "@/i18n/copy";
import type { Locale } from "@/i18n/locales";
import Link from "next/link";

function isExactPathActive(pathname: string, href: string) {
  const path = href.split("#")[0] ?? href;
  if (href.includes("#")) {
    return false;
  }
  return pathname === path || pathname.startsWith(`${path}/`);
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3 w-3 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesMenu({
  locale,
  pathname,
  href,
  title,
  active,
  linkClassName,
  allServicesLabel,
  openLabel,
  closeLabel,
  open,
  onToggle,
  onOpen,
  onClose,
}: {
  locale: Locale;
  pathname: string;
  href: string;
  title: string;
  active: boolean;
  linkClassName: string;
  allServicesLabel: string;
  openLabel: string;
  closeLabel: string;
  open: boolean;
  onToggle: () => void;
  onOpen: () => void;
  onClose: () => void;
}) {
  const menu = getNavServiceMenu(locale);
  const groups = [menu.immigration, menu.other];

  const isDesktop = () =>
    typeof window !== "undefined" && window.matchMedia("(min-width: 992px)").matches;

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (isDesktop()) onOpen();
      }}
      onMouseLeave={() => {
        if (isDesktop()) onClose();
      }}
      onFocus={() => {
        if (isDesktop()) onOpen();
      }}
      onBlur={(event) => {
        if (isDesktop() && !event.currentTarget.contains(event.relatedTarget as Node | null)) {
          onClose();
        }
      }}
    >
      <div className="flex items-center">
        <Link href={href} aria-current={active ? "page" : undefined} className={linkClassName}>
          {title}
        </Link>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="header-services-menu"
          aria-label={open ? closeLabel : openLabel}
          onClick={onToggle}
        >
          <Chevron open={open} />
        </button>
        <span className="pointer-events-none hidden pl-0.5 text-navy/40 lg:inline" aria-hidden="true">
          <Chevron open={false} />
        </span>
      </div>

      <div
        id="header-services-menu"
        className={`${
          open ? "block" : "hidden"
        } border-t border-navy/10 pb-3 lg:absolute lg:top-full lg:left-1/2 lg:z-50 lg:w-[34rem] lg:-translate-x-1/2 lg:border lg:border-navy/10 lg:bg-white lg:p-5 lg:shadow-two`}
      >
        <div className="grid gap-5 pt-2 lg:grid-cols-2 lg:gap-6 lg:pt-0">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="px-3 text-[11px] font-semibold tracking-[0.16em] text-gold uppercase lg:px-0">
                {group.title}
              </p>
              <ul className="mt-2 space-y-0.5">
                {group.items.map((item) => {
                  const itemActive = isExactPathActive(pathname, item.href);

                  return (
                    <li key={`${group.title}-${item.href}-${item.title}`}>
                      <Link
                        href={item.href}
                        aria-current={itemActive ? "page" : undefined}
                        className={`block min-h-11 px-3 py-3 text-base transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:min-h-0 lg:px-2 lg:py-2 lg:text-sm ${
                          itemActive
                            ? "font-semibold text-gold-dark"
                            : "text-navy hover:text-gold-dark"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <Link
          href={href}
          className="mt-3 block px-3 text-sm font-semibold text-gold-dark hover:text-navy lg:px-2"
        >
          {allServicesLabel}
        </Link>
      </div>
    </div>
  );
}
