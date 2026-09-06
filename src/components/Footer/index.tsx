import BrandMark from "@/components/BrandMark";
import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import { footerLinks, site } from "@/config/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandMark inverted />
          <p className="mt-6 max-w-xs text-sm text-white/70">
            {site.tagline}
          </p>
          <CtaLink className="mt-6">
            <WhatsAppIcon />
            WhatsApp
          </CtaLink>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-semibold tracking-[0.18em] text-gold uppercase">
            Escritório
          </h2>
          <ul className="space-y-3 text-sm text-white/75">
            {footerLinks.escritorio.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-semibold tracking-[0.18em] text-gold uppercase">
            Áreas
          </h2>
          <ul className="space-y-3 text-sm text-white/75">
            {footerLinks.areas.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-semibold tracking-[0.18em] text-gold uppercase">
            Contacto
          </h2>
          <ul className="space-y-3 text-sm text-white/75">
            <li>{site.addressLine}</li>
            <li>
              <a href={`tel:+${site.phoneDigits}`} className="hover:text-gold">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li>Cédula {site.license}</li>
            <li>NIF {site.nif}</li>
            <li>{site.hours}</li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/50">
            {footerLinks.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-3 py-6 text-xs leading-relaxed text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.title}. Todos os direitos reservados.
          </p>
          <p className="max-w-xl">{site.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
