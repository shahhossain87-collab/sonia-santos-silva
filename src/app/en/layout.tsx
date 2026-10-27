import { site } from "@/config/site";
import { getCopy } from "@/i18n/copy";
import { localeOg } from "@/i18n/locales";
import { ogImage } from "@/i18n/metadata";
import type { Metadata } from "next";

const copy = getCopy("en");

export const metadata: Metadata = {
  title: {
    default: site.documentTitle.en,
    template: `%s | ${site.officeName}`,
  },
  description: copy.meta.homeDescription,
  openGraph: {
    title: site.documentTitle.en,
    description: copy.meta.homeDescription,
    siteName: site.officeName,
    locale: localeOg.en,
    alternateLocale: ["pt_PT"],
    url: `${site.url}/en`,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.documentTitle.en,
    description: copy.meta.homeDescription,
    images: [ogImage.url],
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
