"use client";

import BrandMark from "@/components/BrandMark";
import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import { nav, site } from "@/config/site";
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
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy text-[11px] tracking-[0.12em] text-white/70 uppercase sm:block">
        <div className="container flex items-center justify-between py-2">
          <p>Portugal · Imigração e nacionalidade</p>
          <p className="flex items-center gap-6">
            <span>
              Lisboa <LisbonClock />
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
            aria-label={open ? "Fechar menu" : "Abrir menu"}
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
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                const hasMega = "columns" in item && item.columns;

                return (
                  <li
                    key={item.id}
                    className="group relative"
                  >
                    {hasMega ? (
                      <>
                        <button
                          type="button"
                          className={`flex w-full items-center justify-between gap-2 px-3 py-3 text-[12px] font-semibold tracking-[0.16em] uppercase ${
                            active ? "text-gold-dark" : "text-navy hover:text-gold-dark"
                          }`}
                          aria-expanded={openMenu === item.id}
                          onClick={() =>
                            setOpenMenu((current) => (current === item.id ? null : item.id))
                          }
                        >
                          {item.title}
                          <span className="text-[10px]">▾</span>
                        </button>
                        <div
                          className={`lg:absolute lg:top-full lg:left-1/2 lg:z-40 lg:w-[min(720px,90vw)] lg:-translate-x-1/2 lg:pt-2 ${
                            openMenu === item.id ? "block" : "hidden lg:group-hover:block"
                          }`}
                        >
                          <div className="border border-navy/10 bg-white p-5 shadow-two">
                            {item.columns?.map((column) => (
                              <div key={column.heading}>
                                <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-gold uppercase">
                                  {column.heading}
                                </p>
                                <div className="grid gap-2 sm:grid-cols-2">
                                  {column.items.map((link) => (
                                    <Link
                                      key={link.href + link.title}
                                      href={link.href}
                                      className="block rounded-sm p-3 transition hover:bg-cream"
                                    >
                                      <span className="block font-display text-lg text-navy">
                                        {link.title}
                                      </span>
                                      <span className="mt-1 block text-sm leading-relaxed text-body-color">
                                        {link.description}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href ?? "/"}
                        className={`block px-3 py-3 text-[12px] font-semibold tracking-[0.16em] uppercase ${
                          active ? "text-gold-dark" : "text-navy hover:text-gold-dark"
                        }`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                );
              })}
              <li className="lg:hidden">
                <CtaLink className="mt-3 w-full">
                  <WhatsAppIcon />
                  Fale connosco
                </CtaLink>
              </li>
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/blog"
              className="btn-navy !px-4 !py-2.5 text-[11px] tracking-[0.14em] uppercase"
            >
              Notícias
            </Link>
            <CtaLink className="!px-4 !py-2.5 text-[11px] tracking-[0.14em] uppercase">
              <WhatsAppIcon />
              Fale connosco
            </CtaLink>
          </div>
        </div>
      </div>
    </header>
  );
}
