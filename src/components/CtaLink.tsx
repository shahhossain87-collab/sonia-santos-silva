import { whatsappUrl } from "@/config/site";
import Link from "next/link";
import type { ReactNode } from "react";

type CtaLinkProps = {
  href?: string;
  variant?: "gold" | "navy" | "outline-light" | "outline-navy";
  children: ReactNode;
  className?: string;
  external?: boolean;
};

const variants = {
  gold: "btn-gold",
  navy: "btn-navy",
  "outline-light": "btn-outline-light",
  "outline-navy": "btn-outline-navy",
};

export default function CtaLink({
  href,
  variant = "gold",
  children,
  className = "",
  external,
}: CtaLinkProps) {
  const classes = `${variants[variant]} ${className}`;
  const target = href ?? whatsappUrl;
  const isExternal = external ?? target.startsWith("http");

  if (isExternal) {
    return (
      <a href={target} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={target} className={classes}>
      {children}
    </Link>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.3-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.2.7.7-3.1-.2-.3a9.1 9.1 0 1 1 7.6 4.2Zm5-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.6 11.5 11.5 0 0 0 4.4 3.9 15 15 0 0 0 1.5.5 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.2-.3-.2-.6-.3Z" />
    </svg>
  );
}
