import { PracticeTopicPage } from "@/components/PracticeAreaPages";
import { getPracticeArea, getPracticeTopic, practiceAreas } from "@/data/practice-areas";
import { pageMetadata } from "@/i18n/metadata";
import { getPracticeTopicDetail } from "@/data/practice-topic-details";
import { practiceTopicPath } from "@/i18n/routes";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
type Props = { params: Promise<{ area: string; topic: string }> };
export function generateStaticParams() { return practiceAreas.flatMap((area) => area.topics.map((topic) => ({ area: area.slug.pt, topic: topic.slug.pt }))); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area: areaSlug, topic: topicSlug } = await params;
  const area = getPracticeArea("pt", areaSlug);
  const topic = area && getPracticeTopic(area, "pt", topicSlug);
  if (!area || !topic) return {};
  const detail = getPracticeTopicDetail(area, topic);
  return pageMetadata("pt", { pt: practiceTopicPath("pt", area, topic), en: practiceTopicPath("en", area, topic) }, {
    title: detail?.text.pt.bannerTitle ?? topic.title.pt,
    description: detail?.metaDescription.pt ?? topic.whoFor.pt,
  });
}
export default async function Page({ params }: Props) { const { area: areaSlug, topic: topicSlug } = await params; const area = getPracticeArea("pt", areaSlug); const topic = area && getPracticeTopic(area, "pt", topicSlug); if (!area || !topic) notFound(); return <PracticeTopicPage locale="pt" area={area} topic={topic} />; }
