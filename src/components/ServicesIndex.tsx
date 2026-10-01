import CtaLink from "@/components/CtaLink";
import { practiceAreas } from "@/data/practice-areas";
import { serviceThumbnails } from "@/data/service-thumbnails";
import { getCopy } from "@/i18n/copy";
import { pathFor, practiceAreaPath } from "@/i18n/routes";
import type { Locale } from "@/i18n/locales";
import Image from "next/image";
import Link from "next/link";

function Arrow() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-gold-dark transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesIndex({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const areas = [
    {
      key: "imigracao",
      title: copy.cards.imigracao.title,
      line: copy.cards.imigracao.blurb,
      href: pathFor(locale, "immigration"),
    },
    ...practiceAreas.map((area) => ({
      key: area.slug.pt,
      title: area.title[locale],
      line: area.line[locale],
      href: practiceAreaPath(locale, area),
    })),
  ];

  return (
    <section className="py-10 md:py-12">
      <div className="container">
        <p className="max-w-2xl text-sm leading-relaxed text-body-color">
          {copy.servicesPage.intro}
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {areas.map((area) => {
            const thumbnail = serviceThumbnails[area.key as keyof typeof serviceThumbnails];

            return (
              <article
                key={area.key}
                id={area.key}
                className="group scroll-mt-28 border border-navy/10 bg-white p-6 transition duration-200 hover:border-gold hover:shadow-one"
              >
                <Link
                  href={area.href}
                  className="flex cursor-pointer items-start justify-between gap-4 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <Image
                    src={thumbnail.src}
                    alt={thumbnail.alt}
                    width={112}
                    height={80}
                    sizes="112px"
                    className="h-16 w-24 shrink-0 object-cover sm:h-20 sm:w-28"
                  />
                  <span className="min-w-0 flex-1">
                    <h2 className="font-display text-2xl text-navy group-hover:text-gold-dark">
                      {area.title}
                    </h2>
                    <p className="mt-2 text-sm text-body-color">{area.line}</p>
                  </span>
                  <Arrow />
                </Link>

              </article>
            );
          })}
        </div>

        <div className="mt-10">
          <CtaLink href={pathFor(locale, "contact")} variant="outline-navy">
            {copy.servicesPage.contact}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
