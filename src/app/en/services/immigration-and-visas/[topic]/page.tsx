import { ImmigrationTopicPage } from "@/components/ImmigrationPages";
import { getImmigrationTopic, immigrationTopics } from "@/data/immigration";
import { getTopicDetail } from "@/data/topic-details";
import { pageMetadata } from "@/i18n/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ topic: string }> };

export function generateStaticParams() {
  return immigrationTopics.map((topic) => ({ topic: topic.slug.en }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = getImmigrationTopic("en", slug);

  if (!topic) return {};

  return pageMetadata("en", topic.key, {
    title: topic.title.en,
    description: getTopicDetail(topic.key)?.metaDescription.en ?? topic.summary.en,
  });
}

export default async function EnglishImmigrationTopicRoute({ params }: PageProps) {
  const { topic: slug } = await params;
  const topic = getImmigrationTopic("en", slug);

  if (!topic) notFound();

  return <ImmigrationTopicPage locale="en" topic={topic} />;
}
