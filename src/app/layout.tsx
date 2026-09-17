import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HtmlLang from "@/components/HtmlLang";
import LanguageHeadLinks from "@/components/LanguageHeadLinks";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/config/site";
import { localeHtmlLang, localeOg, type Locale } from "@/i18n/locales";
import { getLocaleFromPathname } from "@/i18n/routes";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { headers } from "next/headers";
import { Providers } from "./providers";
import "../styles/index.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.title} | Imigração em Portugal`,
    template: `%s | ${site.title}`,
  },
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo/jgl-icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/logo/jgl-icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/images/logo/jgl-icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/images/logo/jgl-icon-180.png", sizes: "180x180" }],
  },
  openGraph: {
    title: site.title,
    description: site.description,
    locale: localeOg.pt,
    type: "website",
  },
};

async function readLocale(): Promise<Locale> {
  const headerList = await headers();
  const fromHeader = headerList.get("x-locale");
  if (fromHeader === "en" || fromHeader === "pt") {
    return fromHeader;
  }

  const nextUrl = headerList.get("next-url") ?? headerList.get("x-url") ?? "";
  try {
    if (nextUrl.startsWith("http")) {
      return getLocaleFromPathname(new URL(nextUrl).pathname);
    }
  } catch {
    /* ignore */
  }
  return getLocaleFromPathname(nextUrl || "/");
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await readLocale();

  return (
    <html
      lang={localeHtmlLang[locale]}
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <LanguageHeadLinks />
      </head>
      <body className="bg-cream font-sans text-navy antialiased">
        <Providers>
          <HtmlLang />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
          <ScrollToTop />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
