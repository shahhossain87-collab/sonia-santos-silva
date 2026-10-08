"use client";

import BrandMark from "@/components/BrandMark";
import { WhatsAppIcon } from "@/components/CtaLink";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { mapsLink, site, whatsappHref } from "@/config/site";
import { getMainNav, isNavItemActive, type NavItem } from "@/data/navigation";
import { useCopy } from "@/i18n/use-locale";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function LisbonClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("pt-PT", {
          timeZone: "Europe/Lisbon",
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date()),
      );
    };
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time || "--:--"}</span>;
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg className={`h-2.5 w-2.5 shrink-0 ${className}`} viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Pin() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.25" />
    </svg>
  );
}

function DesktopItem({ item, active }: { item: NavItem; active: boolean }) {
  const linkClass = `nav-link relative flex items-center gap-1.5 px-3 py-[30px] text-[12.5px] font-semibold tracking-[0.14em] uppercase transition-colors duration-200 2xl:px-3.5 ${
    active ? "text-gold-dark" : "text-navy hover:text-gold-dark"
  }`;

  if (!item.columns) {
    return (
      <li>
        <Link href={item.href} aria-current={active ? "page" : undefined} className={linkClass} data-active={active}>
          {item.title}
        </Link>
      </li>
    );
  }

  const wide = item.columns.length > 1;

  return (
    <li className="nav-dropdown group relative">
      <Link href={item.href} aria-current={active ? "page" : undefined} className={linkClass} aria-haspopup="true" data-active={active}>
        {item.title}
        <Chevron className="text-gold transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
      </Link>
      <div
        className={`nav-panel absolute top-full z-50 ${wide ? "left-1/2 w-[640px] -ml-[320px]" : "left-0 w-[300px]"}`}
      >
        <div className="border-t-2 border-gold bg-white shadow-[0_28px_60px_-24px_rgba(18,26,44,0.45)]">
          <div className={`grid gap-8 p-7 ${wide ? "grid-cols-2" : "grid-cols-1"}`}>
            {item.columns.map((column) => (
              <div key={column.title}>
                {column.href ? (
                  <Link href={column.href} className="font-display text-[19px] text-navy hover:text-gold-dark">
                    {column.title}
                  </Link>
                ) : (
                  <p className="font-display text-[19px] text-navy">{column.title}</p>
                )}
                <span className="mt-3 mb-2 block h-px w-10 bg-gold/70" aria-hidden="true" />
                <ul>
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group/link flex items-start gap-2 py-[7px] text-[14.5px] leading-snug text-body-color transition-colors hover:text-navy"
                      >
                        <span className="mt-[9px] h-px w-2.5 shrink-0 bg-gold/60 transition-all duration-300 group-hover/link:w-4 group-hover/link:bg-gold" aria-hidden="true" />
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {item.more ? (
            <Link
              href={item.more.href}
              className="flex items-center justify-between border-t border-navy/8 bg-cream px-7 py-3.5 text-[13px] font-semibold tracking-[0.06em] text-gold-dark transition-colors hover:text-navy"
            >
              {item.more.title}
              <span aria-hidden="true">→</span>
            </Link>
          ) : null}
        </div>
      </div>
    </li>
  );
}

function MobileGroup({ item, active, onNavigate }: { item: NavItem; active: boolean; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState(active && Boolean(item.columns));
  const id = `mobile-nav-${item.id}`;

  return (
    <li className="border-b border-navy/10">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={onNavigate}
          aria-current={active ? "page" : undefined}
          className={`flex-1 py-4 font-display text-[22px] leading-tight ${active ? "text-gold-dark" : "text-navy"}`}
        >
          {item.title}
        </Link>
        {item.columns ? (
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center border border-navy/12 text-gold-dark"
            aria-expanded={expanded}
            aria-controls={id}
            aria-label={item.title}
            onClick={() => setExpanded((value) => !value)}
          >
            <Chevron className={`h-3 w-3 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </button>
        ) : null}
      </div>
      {item.columns ? (
        <div id={id} className="mobile-collapse" data-open={expanded}>
          <div className="overflow-hidden">
            <div className="space-y-5 pb-5">
              {item.columns.map((column) => (
                <div key={column.title}>
                  {item.columns && item.columns.length > 1 ? (
                    <p className="mb-1 text-[11px] font-semibold tracking-[0.2em] text-gold-dark uppercase">{column.title}</p>
                  ) : null}
                  <ul className="border-l border-gold/50">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} onClick={onNavigate} className="block py-2.5 pl-4 text-[15.5px] leading-snug text-body-color hover:text-navy">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {item.more ? (
                <Link href={item.more.href} onClick={onNavigate} className="inline-block text-[13px] font-semibold tracking-[0.06em] text-gold-dark">
                  {item.more.title} →
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </li>
  );
}

export default function Header() {
  const pathname = usePathname() ?? "/";
  const { locale, copy } = useCopy();
  const nav = getMainNav(locale);
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const t =
    locale === "pt"
      ? { kicker: "Gabinete jurídico em Lisboa · Laranjeiras", time: "Lisboa", menu: "Menu", street: "Rua Abranches Ferrão, 11 A · Lisboa" }
      : { kicker: "Law office in Lisbon · Laranjeiras", time: "Lisbon", menu: "Menu", street: "Rua Abranches Ferrão, 11 A · Lisbon" };

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const update = () =>
      document.documentElement.style.setProperty("--site-header-height", `${header.getBoundingClientRect().height}px`);
    const observer = new ResizeObserver(update);
    observer.observe(header);
    update();
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--site-header-height");
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    // Close any dropdown that is held open by keyboard focus after navigation.
    const active = document.activeElement;
    if (active instanceof HTMLElement && active.closest(".nav-dropdown")) active.blur();
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    return () => document.documentElement.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      const active = document.activeElement;
      if (active instanceof HTMLElement && active.closest(".nav-dropdown")) active.blur();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      <div className="hidden bg-navy-deep text-[11.5px] tracking-[0.12em] text-white/70 md:block">
        <div className="container flex max-w-[1360px] items-center justify-between gap-6 py-2">
          <p className="uppercase">{t.kicker}</p>
          <div className="flex items-center gap-6">
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 hover:text-gold-light lg:flex">
              <Pin />
              {t.street}
            </a>
            <span className="hidden xl:inline">
              {t.time} <LisbonClock />
            </span>
            <a href={`mailto:${site.email}`} className="hidden hover:text-gold-light lg:inline">
              {site.email}
            </a>
            <LanguageSwitcher className="border-l border-white/15 pl-6 [&_a]:text-white/55 [&_a:hover]:text-gold-light [&_a[aria-current=true]]:text-white [&_span]:text-white/25" />
          </div>
        </div>
      </div>

      <div
        className={`relative border-b bg-white transition-shadow duration-300 ${
          sticky ? "border-navy/10 shadow-[0_10px_30px_rgba(26,34,56,0.10)]" : "border-navy/8"
        }`}
      >
        <div className="container flex max-w-[1360px] items-center justify-between gap-4 py-3 xl:py-0">
          <BrandMark compact />

          <nav aria-label={copy.header.mobileNav} className="hidden xl:block">
            <ul className="flex items-center">
              {nav.map((item) => (
                <DesktopItem key={item.id} item={item} active={isNavItemActive(pathname, item)} />
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappHref(copy.home.heroWhatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden min-h-11 px-6 py-2 text-[14px] md:inline-flex"
            >
              {copy.home.presenceBookCta}
            </a>
            <button
              type="button"
              className="flex h-11 items-center gap-2.5 border border-navy/15 px-3 text-[11px] font-semibold tracking-[0.18em] text-navy uppercase xl:hidden"
              aria-label={open ? copy.header.closeMenu : copy.header.openMenu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="hidden xs:inline">{t.menu}</span>
              <span className="relative block h-3 w-5" aria-hidden="true">
                <span className={`absolute left-0 block h-px w-5 bg-navy transition duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute top-1.5 left-0 block h-px w-5 bg-navy transition duration-300 ${open ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 block h-px w-5 bg-navy transition duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`mobile-menu absolute inset-x-0 top-full overflow-y-auto border-t border-navy/10 bg-white xl:hidden ${open ? "is-open" : ""}`}
          aria-hidden={!open}
          inert={!open}
        >
          <div className="container max-w-[640px] pt-2 pb-10">
            <ul>
              {nav.map((item) => (
                <MobileGroup key={item.id} item={item} active={isNavItemActive(pathname, item)} onNavigate={() => setOpen(false)} />
              ))}
            </ul>
            <a
              href={whatsappHref(copy.home.heroWhatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-8 w-full"
            >
              <WhatsAppIcon />
              {copy.home.presenceBookCta}
            </a>
            <div className="mt-8 space-y-2 text-[14.5px] leading-relaxed text-body-color">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-dark uppercase">{t.kicker}</p>
              <p>{site.addressLine}</p>
              <p>{site.landmark[locale]}</p>
              <p>
                <a href={`tel:+${site.phoneDigits}`} className="text-navy">{site.phoneDisplay}</a>
                {" · "}
                <a href={`mailto:${site.email}`} className="break-all text-navy">{site.email}</a>
              </p>
            </div>
            <LanguageSwitcher className="mt-6 text-[13px]" />
          </div>
        </div>
      </div>
    </header>
  );
}
