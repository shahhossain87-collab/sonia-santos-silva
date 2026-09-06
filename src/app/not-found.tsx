import CtaLink from "@/components/CtaLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <section className="container py-28 text-center">
      <p className="gold-rule mx-auto justify-center">404</p>
      <h1 className="mt-4 font-display text-4xl">Página não encontrada</h1>
      <p className="mt-4 text-body-color">
        O endereço não existe ou foi alterado.
      </p>
      <CtaLink href="/" variant="navy" className="mt-8">
        Voltar ao início
      </CtaLink>
    </section>
  );
}
