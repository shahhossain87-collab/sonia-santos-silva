"use client";

import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
import Reveal from "@/components/Reveal";
import { site } from "@/config/site";
import { team, type TeamMember } from "@/data/content";
import Image from "next/image";

function memberAlt(member: TeamMember) {
  if (member.name && member.role) {
    return `${member.name}, ${member.role.toLowerCase()}`;
  }
  if (member.name) return member.name;
  return "Membro da equipa do escritório";
}

function TeamPhoto({
  member,
  sizes,
  priority = false,
}: {
  member: TeamMember;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={member.photo}
      alt={memberAlt(member)}
      fill
      priority={priority}
      className="object-cover object-top"
      sizes={sizes}
    />
  );
}

export default function Team() {
  const featured = team.find((member) => member.featured) ?? team[0];
  const rest = team.filter((member) => member !== featured);

  return (
    <section id="equipa" className="bg-white py-16 md:py-20">
      <div className="container">
        <Reveal>
          <p className="gold-rule">Equipa</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">A equipa</h2>
        </Reveal>
        {featured ? (
          <Reveal delay={0.1}>
            <article className="card-lift mt-10 grid overflow-hidden md:grid-cols-[300px_1fr]">
              <div className="relative min-h-[360px] md:min-h-[420px]">
                <TeamPhoto
                  member={featured}
                  sizes="300px"
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
                ) : (
                  <p className="mt-1 text-sm text-body-color">
                    Nacionalidade, vistos e reagrupamento.
                  </p>
                )}
                <CtaLink className="mt-6 w-fit">
                  <WhatsAppIcon />
                  WhatsApp
                </CtaLink>
              </div>
            </article>
          </Reveal>
        ) : null}

        {rest.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((member, index) => (
              <Reveal key={member.photo} delay={0.08 * (index + 1)}>
                <article className="card-lift overflow-hidden bg-cream">
                  <div className="relative aspect-[4/5]">
                    <TeamPhoto
                      member={member}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
