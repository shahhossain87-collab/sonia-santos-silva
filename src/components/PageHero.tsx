import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="bg-navy py-16 text-white md:py-20">
      <div className="container">
        <nav aria-label="Navegação estrutural" className="mb-6 text-sm text-white/50">
          <ol className="flex flex-wrap items-center gap-2">
            {crumbs.map((crumb, i) => (
              <li key={`${crumb.label}-${i}`} className="flex items-center gap-2">
                {i > 0 && <span className="text-gold/50">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gold">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="gold-rule">{eyebrow}</p>}
        <h1 className="mt-4 max-w-3xl font-display text-3xl sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 mb-8 max-w-2xl text-base leading-relaxed text-white/75">
          {description}
        </p>
        <CtaLink>
          <WhatsAppIcon />
          Falar no WhatsApp
        </CtaLink>
      </div>
    </section>
  );
}
