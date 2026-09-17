"use client";

import { site, whatsappHref } from "@/config/site";
import { useCopy } from "@/i18n/use-locale";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const { copy } = useCopy();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nome = String(data.get("nome") || "");
    const email = String(data.get("email") || "");
    const telefone = String(data.get("telefone") || "");
    const assunto = String(data.get("assunto") || "");
    const mensagem = String(data.get("mensagem") || "");
    const text = [
      copy.form.prefix,
      `${copy.form.name}: ${nome}`,
      `${copy.form.email}: ${email}`,
      `${copy.form.phone}: ${telefone}`,
      `${copy.form.subject}: ${assunto}`,
      `${copy.form.message}: ${mensagem}`,
    ].join("\n");
    window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field label={copy.form.name} name="nome" required />
      <Field label={copy.form.email} name="email" type="email" required />
      <Field label={copy.form.phone} name="telefone" type="tel" />
      <div>
        <label htmlFor="assunto" className="mb-1 block text-sm font-medium">
          {copy.form.subject}
        </label>
        <select
          id="assunto"
          name="assunto"
          className="w-full rounded-sm border border-gold/30 bg-white px-3 py-3 text-sm dark:bg-navy-soft"
          defaultValue={copy.form.subjects[0]}
        >
          {copy.form.subjects.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="mensagem" className="mb-1 block text-sm font-medium">
          {copy.form.message}
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
        {copy.form.notice} ({site.phoneDisplay})
      </p>
      <button type="submit" className="btn-gold w-full sm:w-auto">
        {copy.form.submit}
      </button>
      {sent && (
        <p className="text-sm text-navy dark:text-cream">{copy.form.fallback}</p>
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
