import BottomChrome from "@/components/BottomChrome";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HtmlLang from "@/components/HtmlLang";
import JsonLd from "@/components/JsonLd";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/config/site";
import { localeHtmlLang, localeOg, type Locale } from "@/i18n/locales";
import { getLocaleFromPathname } from "@/i18n/routes";
import type { Metadata } from "next";
import { EB_Garamond, Source_Sans_3 } from "next/font/google";
import { headers } from "next/headers";
import { Providers } from "./providers";
import "../styles/index.css";
import "../styles/site.css";

const sans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const serif = EB_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.documentTitle.pt,
    template: `%s | ${site.officeName}`,
  },
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo/gjl-icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/logo/gjl-icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/images/logo/gjl-icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/images/logo/gjl-icon-180.png", sizes: "180x180" }],
  },
  openGraph: {
    title: site.documentTitle.pt,
    description: site.description,
    siteName: site.officeName,
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
      className={`${sans.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks that JavaScript runs, so scroll reveals may start hidden. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <JsonLd locale={locale} />
      </head>
      <body className="bg-cream font-sans text-navy antialiased">
        <Providers>
          <HtmlLang />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
          <ScrollToTop />
          <BottomChrome />
        </Providers>
      </body>
    </html>
  );
}
