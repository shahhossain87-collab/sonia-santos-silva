"use client";

import { site, whatsappHref } from "@/config/site";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nome = String(data.get("nome") || "");
    const email = String(data.get("email") || "");
    const telefone = String(data.get("telefone") || "");
    const assunto = String(data.get("assunto") || "");
    const mensagem = String(data.get("mensagem") || "");
    const text = [
      "Pedido de contacto via sítio web",
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      `Telefone: ${telefone}`,
      `Assunto: ${assunto}`,
      `Mensagem: ${mensagem}`,
    ].join("\n");
    window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field label="Nome" name="nome" required />
      <Field label="E-mail" name="email" type="email" required />
      <Field label="Telefone" name="telefone" type="tel" />
      <div>
        <label htmlFor="assunto" className="mb-1 block text-sm font-medium">
          Assunto
        </label>
        <select
          id="assunto"
          name="assunto"
          className="w-full rounded-sm border border-gold/30 bg-white px-3 py-3 text-sm dark:bg-navy-soft"
          defaultValue="Nacionalidade"
        >
          <option>Nacionalidade</option>
          <option>Visto D7</option>
          <option>Visto D2</option>
          <option>Reagrupamento</option>
          <option>Outro</option>
        </select>
      </div>
      <div>
        <label htmlFor="mensagem" className="mb-1 block text-sm font-medium">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          className="w-full rounded-sm border border-gold/30 bg-white px-3 py-3 text-sm dark:bg-navy-soft"
        />
      </div>
      <p className="text-xs text-body-color dark:text-body-color-dark">
        Ao enviar, abre o WhatsApp ({site.phoneDisplay}) com a mensagem
        preenchida. Não envie documentos sensíveis neste formulário.
      </p>
      <button type="submit" className="btn-gold w-full sm:w-auto">
        Enviar para WhatsApp
      </button>
      {sent && (
        <p className="text-sm text-navy dark:text-cream">
          Se o WhatsApp não abriu, utilize o botão flutuante ou o número
          indicado.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-gold/30 bg-white px-3 py-3 text-sm dark:bg-navy-soft"
      />
    </div>
  );
}
