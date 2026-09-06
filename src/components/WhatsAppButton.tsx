import { whatsappHref, whatsappUrl } from "@/config/site";

type Variant = "gold" | "outline" | "navy" | "cream";

const variants: Record<Variant, string> = {
  gold: "btn-gold",
  outline: "btn-outline-navy",
  navy: "btn-navy",
  cream:
    "inline-flex items-center justify-center gap-2 rounded-sm bg-cream px-6 py-3 text-sm font-semibold tracking-wide text-navy uppercase transition duration-300 hover:bg-white",
};

export default function WhatsAppButton({
  label = "Falar no WhatsApp",
  message,
  variant = "gold",
  className = "",
}: {
  label?: string;
  message?: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={message ? whatsappHref(message) : whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variants[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
