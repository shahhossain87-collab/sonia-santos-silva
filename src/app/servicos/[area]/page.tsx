import { PracticeAreaLanding } from "@/components/PracticeAreaPages";
import { getPracticeArea, practiceAreas } from "@/data/practice-areas";
import { pageMetadata } from "@/i18n/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
type Props = { params: Promise<{ area: string }> };
export function generateStaticParams() { return practiceAreas.map((area) => ({ area: area.slug.pt })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { area: slug } = await params; const area = getPracticeArea("pt", slug); return area ? pageMetadata("pt", area.key, { title: area.title.pt, description: area.line.pt }) : {}; }
export default async function Page({ params }: Props) { const { area: slug } = await params; const area = getPracticeArea("pt", slug); if (!area) notFound(); return <PracticeAreaLanding locale="pt" area={area} />; }
