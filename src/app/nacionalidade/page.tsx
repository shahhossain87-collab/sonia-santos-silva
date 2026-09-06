import ServiceTemplate from "@/components/ServiceTemplate";
import { nacionalidade } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nacionalidade portuguesa",
  description: nacionalidade.summary,
};

export default function NacionalidadePage() {
  return (
    <div>
      <ServiceTemplate content={nacionalidade} />
      <section className="container grid gap-6 pb-16 md:grid-cols-3">
        <article id="descendencia" className="scroll-mt-28 bg-white p-6 shadow-one">
          <h2 className="font-display text-2xl">Por descendência</h2>
          <p className="mt-3 text-sm text-body-color">
            O pedido assenta na prova da filiação e, quando necessário, na
            reconstituição de assentos portugueses.
          </p>
        </article>
        <article id="casamento" className="scroll-mt-28 bg-white p-6 shadow-one">
          <h2 className="font-display text-2xl">Por casamento ou união</h2>
          <p className="mt-3 text-sm text-body-color">
            Além do prazo legal, importa demonstrar o vínculo e, nos termos da
            lei, a ligação efetiva à comunidade portuguesa.
          </p>
        </article>
        <article id="residencia" className="scroll-mt-28 bg-white p-6 shadow-one">
          <h2 className="font-display text-2xl">Por residência</h2>
          <p className="mt-3 text-sm text-body-color">
            A naturalização exige tempo de residência legal e o cumprimento dos
            demais requisitos em vigor à data do pedido.
          </p>
        </article>
      </section>
    </div>
  );
}
