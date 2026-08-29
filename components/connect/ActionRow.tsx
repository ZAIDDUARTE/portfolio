import { Magnetic } from "@/components/ui/Magnetic";

type ActionRowProps = {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
  primary?: boolean;
  cursor?: string;
  className?: string;
  variant?: "card" | "list";
};

export function ActionRow({
  label,
  href,
  external = false,
  download = false,
  primary = false,
  cursor,
  className = "",
  variant = "card",
}: ActionRowProps) {
  const surfaceClass =
    variant === "list"
      ? "border-t border-border py-4 md:py-5"
      : "border border-border px-4 py-4 md:py-5";

  const row = (
    <a
      href={href}
      data-cursor={cursor}
      className={`connect-row group flex min-h-[3.25rem] items-center justify-between gap-4 transition-[background-color,color,border-color] duration-200 ease-out motion-reduce:transition-none md:min-h-[3.75rem] ${surfaceClass} ${
        primary
          ? "text-[clamp(1rem,2.5vw,1.125rem)] font-medium tracking-[0.06em]"
          : "text-sm tracking-[0.1em] md:text-[15px]"
      } hover:border-ink hover:bg-ink hover:text-light focus-visible:border-ink focus-visible:bg-ink focus-visible:text-light ${className}`}
      {...(download ? { download: true } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="transition-transform duration-200 ease-out motion-reduce:transition-none motion-reduce:transform-none group-hover:translate-x-1 group-focus-visible:translate-x-1 group-active:translate-x-0.5">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="shrink-0 text-base transition-transform duration-200 ease-out motion-reduce:transition-none motion-reduce:transform-none group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5 group-active:translate-x-1 md:text-lg"
      >
        ↗
      </span>
    </a>
  );

  if (primary) {
    return <Magnetic maxOffset={6}>{row}</Magnetic>;
  }

  return row;
}

type PendingActionRowProps = {
  label: string;
};

export function PendingActionRow({ label }: PendingActionRowProps) {
  return (
    <div
      className="flex min-h-[3.25rem] items-center justify-between gap-4 border border-border px-4 py-4 md:min-h-[3.75rem] md:py-5"
      aria-label={`${label} — link pending setup`}
    >
      <span className="text-sm tracking-[0.1em] text-muted md:text-[15px]">
        {label}
      </span>
      <span className="shrink-0 text-[10px] uppercase tracking-[0.16em] text-muted">
        Pending
      </span>
    </div>
  );
}
