import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notícias",
  description: "Artigos e notas sobre imigração e nacionalidade portuguesa — em breve.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Notícias"
        title="Notas e artigos em preparação"
        description="Este espaço receberá textos informativos sobre vistos, residência e nacionalidade. Não substitui consulta jurídica."
        crumbs={[{ label: "Início", href: "/" }, { label: "Notícias" }]}
      />
      <section className="py-16">
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            {
              title: "O que verificar antes de um pedido de nacionalidade",
              excerpt:
                "Artigo em preparação. Não será publicado conteúdo que possa ser lido como garantia de êxito.",
            },
            {
              title: "Visto D7: perguntas para levar à consulta",
              excerpt:
                "Lista de esclarecimentos úteis sobre rendimentos, alojamento e agregado — sem valores vinculativos.",
            },
            {
              title: "Reagrupamento familiar: prova do vínculo",
              excerpt:
                "Notas gerais sobre documentação. Cada família tem um enquadramento próprio.",
            },
          ].map((post) => (
            <article
              key={post.title}
              className="border border-dashed border-navy/20 bg-white p-6"
            >
              <p className="text-xs tracking-[0.16em] text-gold uppercase">
                Em breve
              </p>
              <h2 className="mt-3 font-display text-xl">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-body-color">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
