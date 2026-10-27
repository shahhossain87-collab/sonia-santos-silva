"use client";

import { absoluteUrl } from "@/i18n/metadata";
import { usePathname } from "next/navigation";

export type Crumb = { label: string; href?: string };

/** BreadcrumbList for inner pages. The current page uses the URL when the last crumb has no href. */
export function BreadcrumbJsonLd({ crumbs }: { crumbs: readonly Crumb[] }) {
  const pathname = usePathname();
  if (crumbs.length < 2) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => {
      const href = crumb.href ?? (index === crumbs.length - 1 ? pathname || "/" : undefined);
      return {
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        ...(href ? { item: absoluteUrl(href.split("#")[0] || "/") } : {}),
      };
    }),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function FaqJsonLd({ items }: { items: readonly { q: string; a: string }[] }) {
  if (!items.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
