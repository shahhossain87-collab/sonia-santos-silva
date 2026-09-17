import { mapsEmbedUrl, mapsLink, site } from "@/config/site";

export default function OfficeMap({
  className,
}: {
  className?: string;
}) {
  return (
    <div className="min-w-0 max-w-full">
      <div
        className={`w-full min-w-0 overflow-hidden bg-cream ${className ?? "aspect-[4/3] min-h-[280px]"}`}
      >
        <iframe
          title={`${site.officeName} — ${site.addressLine}`}
          src={mapsEmbedUrl}
          className="h-full min-h-[280px] w-full max-w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a
        href={mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-sm font-semibold text-gold-dark hover:underline"
      >
        Abrir no Google Maps →
      </a>
    </div>
  );
}
