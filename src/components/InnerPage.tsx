import { WhatsAppIcon } from "@/components/CtaLink";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type Crumb = { label: string; href?: string };

/** Title banner for inner pages: photo, navy overlay, breadcrumb, heading. */
export function PageBanner({
  image,
  imageAlt,
  eyebrow,
  title,
  lead,
  crumbs,
  breadcrumbLabel,
}: {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  lead: string;
  crumbs: Crumb[];
  breadcrumbLabel: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image src={image} alt={imageAlt} fill preload sizes="100vw" className="banner-zoom object-cover object-[60%_center]" />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,26,44,0.95)_0%,rgba(18,26,44,0.86)_45%,rgba(26,34,56,0.55)_100%)] max-md:bg-[linear-gradient(180deg,rgba(18,26,44,0.88),rgba(18,26,44,0.9))]"
        aria-hidden="true"
      />
      <div className="container max-w-[1240px] py-16 md:py-24 lg:py-28">
        <nav aria-label={breadcrumbLabel} className="text-[13px] text-white/60">
          <ol className="flex flex-wrap items-center gap-2">
            {crumbs.map((crumb, index) => (
              <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                {index > 0 ? <span className="text-gold/60" aria-hidden="true">/</span> : null}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gold-light">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold-light" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="banner-rise mt-10 flex items-center gap-3 text-[12px] font-semibold tracking-[0.24em] text-gold-light uppercase">
          <span className="block h-px w-8 bg-gold" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="banner-rise mt-5 max-w-3xl font-display text-[44px] leading-[1.04] font-medium sm:text-[60px] lg:text-[72px]">
          {title}
        </h1>
        <p className="banner-rise mt-6 max-w-2xl text-[17px] leading-relaxed text-white/80 sm:text-[19px]">{lead}</p>
      </div>
    </section>
  );
}

/** Image and text side by side; `flip` puts the image on the right. */
export function AlternatingRow({
  index,
  image,
  imageAlt,
  flip,
  children,
}: {
  index: number;
  image: string;
  imageAlt: string;
  flip: boolean;
  children: ReactNode;
}) {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-20">
      <Reveal className={`relative ${flip ? "md:order-2" : ""}`}>
        <div
          className={`absolute -top-4 hidden h-full w-full border border-gold/45 sm:block ${flip ? "-right-4" : "-left-4"}`}
          aria-hidden="true"
        />
        <figure className="photo-zoom relative aspect-[4/3] overflow-hidden bg-cream-dark">
          <Image src={image} alt={imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </figure>
        <span
          className={`absolute -bottom-5 bg-navy px-4 py-2 font-display text-[22px] text-gold-light ${flip ? "left-5 sm:-left-5" : "right-5 sm:-right-5"}`}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </Reveal>
      <Reveal delay={0.08}>{children}</Reveal>
    </div>
  );
}

export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-navy/10 border-y border-navy/10">
      {items.map((item) => (
        <details key={item.q} className="faq-item group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-display text-[21px] leading-snug text-navy marker:hidden hover:text-gold-dark sm:text-[23px]">
            {item.q}
            <span
              className="relative mt-2 block h-4 w-4 shrink-0 before:absolute before:top-1/2 before:left-0 before:h-px before:w-4 before:bg-gold after:absolute after:top-0 after:left-1/2 after:h-4 after:w-px after:bg-gold after:transition-transform after:duration-300 group-open:after:scale-y-0"
              aria-hidden="true"
            />
          </summary>
          <p className="max-w-3xl pb-7 text-[16px] leading-relaxed text-body-color">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  eyebrow,
  title,
  button,
  href,
}: {
  eyebrow: string;
  title: string;
  button: string;
  href: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white md:py-20">
      <div className="azulejo-texture-light absolute inset-0" aria-hidden="true" />
      <div className="container relative flex max-w-[1240px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Reveal>
          <p className="eyebrow-light flex items-center gap-3">
            <span className="block h-px w-8 bg-gold" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[34px] leading-[1.1] font-medium sm:text-[44px]">{title}</h2>
        </Reveal>
        <Reveal delay={0.08} className="shrink-0">
          <a href={href} target="_blank" rel="noopener noreferrer" className="btn-gold w-full sm:w-auto">
            <WhatsAppIcon />
            {button}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
