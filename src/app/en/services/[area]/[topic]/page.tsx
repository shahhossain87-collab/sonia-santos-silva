import { PracticeTopicPage } from "@/components/PracticeAreaPages";
import { getPracticeArea, getPracticeTopic, practiceAreas } from "@/data/practice-areas";
import { pageMetadata } from "@/i18n/metadata";
import { practiceTopicPath } from "@/i18n/routes";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
type Props = { params: Promise<{ area: string; topic: string }> };
export function generateStaticParams() { return practiceAreas.flatMap((area) => area.topics.map((topic) => ({ area: area.slug.en, topic: topic.slug.en }))); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { area: areaSlug, topic: topicSlug } = await params; const area = getPracticeArea("en", areaSlug); const topic = area && getPracticeTopic(area, "en", topicSlug); return area && topic ? pageMetadata("en", { pt: practiceTopicPath("pt", area, topic), en: practiceTopicPath("en", area, topic) }, { title: topic.title.en, description: topic.whoFor.en }) : {}; }
export default async function Page({ params }: Props) { const { area: areaSlug, topic: topicSlug } = await params; const area = getPracticeArea("en", areaSlug); const topic = area && getPracticeTopic(area, "en", topicSlug); if (!area || !topic) notFound(); return <PracticeTopicPage locale="en" area={area} topic={topic} />; }
