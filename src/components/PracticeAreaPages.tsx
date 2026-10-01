import { site, whatsappHref } from "@/config/site";
import type { Locale } from "@/i18n/locales";
import { pathFor, practiceAreaPath, practiceTopicPath } from "@/i18n/routes";
import type { PracticeArea, PracticeTopic } from "@/data/practice-areas";
import Image from "next/image";
import Link from "next/link";

const labels = {
  pt: { services: "Serviços", support: "Como podemos ajudar?", whoFor: "A quem se destina", whatsapp: "Abrir WhatsApp", email: "Enviar e-mail" },
  en: { services: "Services", support: "How we can help", whoFor: "Who this is for", whatsapp: "Open WhatsApp", email: "Send email" },
} as const;

function imagePath(image: string) {
  return `/images/services/subcards/${image}.jpg`;
}

function topicImageAlt(locale: Locale, title: string) {
  return locale === "pt" ? `Imagem ilustrativa de ${title}` : `Illustrative image of ${title}`;
}

function WhatsAppMark() {
  return <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.3-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.2.7.7-3.1-.2-.3a9.1 9.1 0 1 1 7.6 4.2Zm5-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.6 11.5 11.5 0 0 0 4.4 3.9 15 15 0 0 0 1.5.5 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.2-.3-.2-.6-.3Z" /></svg>;
}

function Crumbs({ locale, area, current }: { locale: Locale; area: PracticeArea; current: string }) {
  return <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/50"><ol className="flex flex-wrap items-center gap-2"><li><Link href={pathFor(locale, "home")} className="hover:text-gold">{locale === "pt" ? "Início" : "Home"}</Link></li><li className="flex items-center gap-2"><span>/</span><Link href={pathFor(locale, "services")} className="hover:text-gold">{labels[locale].services}</Link></li><li className="flex items-center gap-2"><span>/</span><Link href={practiceAreaPath(locale, area)} className="hover:text-gold">{area.title[locale]}</Link></li>{current !== area.title[locale] ? <li className="flex items-center gap-2"><span>/</span><span className="text-gold">{current}</span></li> : null}</ol></nav>;
}

export function PracticeAreaLanding({ locale, area }: { locale: Locale; area: PracticeArea }) {
  const copy = labels[locale];
  return <><section className="bg-navy py-8 text-white md:py-10"><div className="container"><Crumbs locale={locale} area={area} current={area.title[locale]} /><p className="gold-rule">{copy.services}</p><h1 className="mt-3 max-w-3xl font-display text-3xl leading-tight md:text-4xl">{area.headline?.[locale] ?? area.title[locale]}</h1><p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">{area.line[locale]}</p></div></section><section className="py-10 md:py-12"><div className="container"><div className="max-w-3xl"><h2 className="font-display text-3xl text-navy">{copy.support}</h2><p className="mt-3 text-sm leading-relaxed text-body-color">{area.support?.[locale] ?? area.line[locale]}</p></div><ol className="mt-8 grid gap-5 md:grid-cols-2">{area.topics.map((topic, index) => <li key={topic.slug[locale]}><article className="overflow-hidden border border-navy/10 bg-white transition hover:border-gold hover:shadow-one"><Link href={practiceTopicPath(locale, area, topic)} className="group block"><div className="relative aspect-[16/8]"><Image src={imagePath(topic.image)} alt={topicImageAlt(locale, topic.title[locale])} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div><div className="p-5"><p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-2 font-display text-2xl text-navy group-hover:text-gold-dark">{topic.title[locale]}</h3><p className="mt-2 text-sm leading-relaxed text-body-color">{topic.whoFor[locale]}</p></div></Link></article></li>)}</ol></div></section></>;
}

export function PracticeTopicPage({ locale, area, topic }: { locale: Locale; area: PracticeArea; topic: PracticeTopic }) {
  const copy = labels[locale];
  const message = locale === "pt" ? `Olá, preciso de ajuda com ${topic.title.pt}.` : `Hello, I need help with ${topic.title.en}.`;
  return <><section className="bg-navy py-8 text-white md:py-10"><div className="container"><div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between"><div><Crumbs locale={locale} area={area} current={topic.title[locale]} /><p className="gold-rule">{area.title[locale]}</p><h1 className="mt-3 max-w-3xl font-display text-3xl leading-tight md:text-4xl">{topic.title[locale]}</h1></div><aside className="flex shrink-0 items-center gap-3 rounded-sm border border-white/20 px-3 py-2 text-white/80"><a href={whatsappHref(message)} target="_blank" rel="noopener noreferrer" aria-label={copy.whatsapp} title={copy.whatsapp} className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#128C7E] text-white hover:bg-[#0e7a6e]"><WhatsAppMark /></a><a href={`mailto:${site.email}`} className="text-xs hover:text-gold hover:underline">{site.email}</a></aside></div></div></section><section className="py-10 md:py-12"><div className="container max-w-3xl"><div className="relative aspect-[16/8]"><Image src={imagePath(topic.image)} alt={topicImageAlt(locale, topic.title[locale])} fill sizes="(max-width: 1024px) 100vw, 768px" className="object-cover" /></div><h2 className="mt-8 font-display text-3xl text-navy">{copy.whoFor}</h2><p className="mt-3 text-sm leading-relaxed text-body-color">{topic.whoFor[locale]}</p></div></section></>;
}
