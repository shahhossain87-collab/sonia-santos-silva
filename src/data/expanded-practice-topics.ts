import type { PracticeAreaKey } from "@/data/practice-areas";
import type { TopicDetail } from "@/data/topic-details";
import { administrativeTopics } from "@/data/topics/administrative";
import { companyTopics } from "@/data/topics/company";
import { criminalTopics } from "@/data/topics/criminal";
import { debtTopics } from "@/data/topics/debt";
import { nationalityTopics } from "@/data/topics/nationality";
import { propertyTopics } from "@/data/topics/property";
import { tenancyTopics } from "@/data/topics/tenancy";

export const expandedPracticeTopics: Partial<Record<`${PracticeAreaKey}/${string}`, TopicDetail>> = {
  ...nationalityTopics,
  ...tenancyTopics,
  ...debtTopics,
  ...companyTopics,
  ...propertyTopics,
  ...criminalTopics,
  ...administrativeTopics,
};
