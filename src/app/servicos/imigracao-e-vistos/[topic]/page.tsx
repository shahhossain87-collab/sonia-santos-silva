import { ImmigrationTopicPage } from "@/components/ImmigrationPages";
import { getImmigrationTopic, immigrationTopics } from "@/data/immigration";
import { pageMetadata } from "@/i18n/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ topic: string }> };

export function generateStaticParams() {
  return immigrationTopics.map((topic) => ({ topic: topic.slug.pt }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = getImmigrationTopic("pt", slug);

  if (!topic) return {};

  return pageMetadata("pt", topic.key, {
    title: topic.title.pt,
    description: topic.summary.pt,
  });
}

export default async function ImmigrationTopicRoute({ params }: PageProps) {
  const { topic: slug } = await params;
  const topic = getImmigrationTopic("pt", slug);

  if (!topic) notFound();

  return <ImmigrationTopicPage locale="pt" topic={topic} />;
}
