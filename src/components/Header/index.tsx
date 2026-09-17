"use client";

import BrandMark from "@/components/BrandMark";
import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { site } from "@/config/site";
import { useCopy } from "@/i18n/use-locale";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function Header() {
  const pathname = usePathname() ?? "/";
  const { locale, copy } = useCopy();
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy text-[11px] tracking-[0.12em] text-white/70 uppercase sm:block">
        <div className="container flex items-center justify-between py-2">
          <p>{copy.header.kicker}</p>
          <p className="flex items-center gap-6">
            <span>
              {locale === "en" ? "Lisbon" : "Lisboa"} <LisbonClock />
            </span>
            <a href={`mailto:${site.email}`} className="hover:text-gold">
              {site.email}
            </a>
          </p>
        </div>
      </div>

      <div
        className={`border-b bg-white transition-shadow duration-300 ${
          sticky
            ? "border-navy/10 shadow-[0_10px_30px_rgba(11,22,40,0.10)]"
            : "border-transparent shadow-none"
        }`}
      >
        <div className="container relative flex items-center justify-between gap-4 py-3 lg:py-0">
          <BrandMark compact />

          <button
            type="button"
            className="relative z-20 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={open ? copy.header.closeMenu : copy.header.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className={`h-0.5 w-6 bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-navy transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>

          <nav
            className={`${
              open
                ? "visible top-full opacity-100"
                : "invisible top-[120%] opacity-0 lg:visible lg:opacity-100"
            } absolute top-full right-0 left-0 max-h-[80vh] overflow-y-auto border-t border-navy/10 bg-white px-4 py-4 shadow-two lg:static lg:flex lg:max-h-none lg:flex-1 lg:items-center lg:justify-center lg:overflow-visible lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-1">
              {copy.nav.map((item) => {
                const active =
                  item.href === "/" || item.href === "/en"
                    ? pathname === item.href
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-3 text-[12px] font-semibold tracking-[0.16em] uppercase ${
                        active ? "text-gold-dark" : "text-navy hover:text-gold-dark"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              <li className="flex items-center px-3 py-3 lg:hidden">
                <LanguageSwitcher />
              </li>
              <li className="lg:hidden">
                <CtaLink className="mt-3 w-full">
                  <WhatsAppIcon />
                  {copy.header.talk}
                </CtaLink>
              </li>
            </ul>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSwitcher />
            <CtaLink className="!px-4 !py-2.5 text-[11px] tracking-[0.14em] uppercase">
              <WhatsAppIcon />
              {copy.header.talk}
            </CtaLink>
          </div>
        </div>
      </div>
    </header>
  );
}
