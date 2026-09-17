import { site } from "@/config/site";
import { getCopy } from "@/i18n/copy";
import { localeOg } from "@/i18n/locales";
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
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
