"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import Reveal from "@/components/Reveal";
import { site } from "@/config/site";
import { team, type TeamMember } from "@/data/content";
import { useCopy } from "@/i18n/use-locale";
import Image from "next/image";

function memberAlt(member: TeamMember, fallback: string) {
  if (member.name && member.role) {
    return `${member.name}, ${member.role.toLowerCase()}`;
  }
  if (member.name) return member.name;
  return fallback;
}

function TeamPhoto({
  member,
  sizes,
  fallbackAlt,
  priority = false,
}: {
  member: TeamMember;
  sizes: string;
  fallbackAlt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={member.photo}
      alt={memberAlt(member, fallbackAlt)}
      fill
      priority={priority}
      className="object-cover object-center"
      sizes={sizes}
    />
  );
}

export default function Team() {
  const { copy } = useCopy();
  const featured = team.find((member) => member.featured) ?? team[0];
  const rest = team.filter((member) => member !== featured);

  return (
    <section id="equipa" className="bg-white py-10 md:py-12">
      <div className="container">
        <Reveal>
          <p className="gold-rule">{copy.home.teamEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">{copy.home.teamTitle}</h2>
        </Reveal>
        <Reveal delay={0.06}>
          <figure className="card-lift relative mt-10 aspect-[3/2] overflow-hidden">
            <Image
              src="/images/team/equipa.jpg"
              alt={copy.home.teamGroupAlt}
              fill
              className="object-cover object-[50%_30%]"
              sizes="100vw"
            />
          </figure>
        </Reveal>
        {featured ? (
          <Reveal delay={0.1}>
            <article className="card-lift mt-10 grid overflow-hidden md:grid-cols-[300px_1fr]">
              <div className="relative aspect-square min-h-[280px] md:min-h-0">
                <TeamPhoto
                  member={featured}
                  sizes="300px"
                  fallbackAlt={copy.home.teamFallbackAlt}
                  priority
                />
              </div>
              <div className="flex flex-col justify-center p-8">
                <p className="text-xs tracking-[0.2em] text-gold uppercase">
                  {featured.role ?? site.role}
                </p>
                <h3 className="mt-2 font-display text-3xl">
                  {featured.name ?? site.lawyerName}
                </h3>
                {featured.license ? (
                  <p className="mt-2 text-sm text-body-color">{featured.license}</p>
                ) : null}
                {featured.bio ? (
                  <p className="mt-1 text-sm text-body-color">{featured.bio}</p>
                ) : null}
                <CtaLink className="mt-6 w-fit">
                  <WhatsAppIcon />
                  WhatsApp
                </CtaLink>
              </div>
            </article>
          </Reveal>
        ) : null}

        {rest.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((member, index) => (
              <Reveal key={member.photo} delay={0.08 * (index + 1)}>
                <article className="card-lift overflow-hidden bg-cream">
                  <div className="relative aspect-square">
                    <TeamPhoto
                      member={member}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      fallbackAlt={copy.home.teamFallbackAlt}
                    />
                  </div>
                  {member.name || member.role ? (
                    <div className="p-5">
                      {member.role ? (
                        <p className="text-xs tracking-[0.2em] text-gold uppercase">
                          {member.role}
                        </p>
                      ) : null}
                      {member.name ? (
                        <h3 className="mt-2 font-display text-xl">{member.name}</h3>
                      ) : null}
                    </div>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
