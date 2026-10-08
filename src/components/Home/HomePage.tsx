import type { Locale } from "@/i18n/locales";
import HomeHero from "./HomeHero";
import { ConsultationBand, OfficeIntro, PracticeAreas, TeamPreview, VisitOffice } from "./HomeSections";

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <div className="home-page">
      <HomeHero locale={locale} />
      <PracticeAreas locale={locale} />
      <OfficeIntro locale={locale} />
      <TeamPreview locale={locale} />
      <VisitOffice locale={locale} />
      <ConsultationBand locale={locale} />
    </div>
  );
}
