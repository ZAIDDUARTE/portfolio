import Image from "next/image";
import { ActionRow, PendingActionRow } from "@/components/connect/ActionRow";
import { connectActions } from "@/content/connect";
import { siteConfig } from "@/content/site";

export function ConnectActions() {
  return (
    <nav aria-label="Connect actions" className="border-b border-border">
      {connectActions.map((action) =>
        action.href ? (
          <ActionRow
            key={action.id}
            label={action.label}
            href={action.href}
            external={action.external}
            download={action.download}
            primary={action.primary}
            cursor={action.cursor}
          />
        ) : (
          <PendingActionRow key={action.id} label={action.label} />
        ),
      )}
    </nav>
  );
}

export function ConnectPortrait() {
  return (
    <figure className="mb-8 hidden w-[128px] shrink-0 lg:block">
      <div className="overflow-hidden bg-border-subtle">
        <Image
          src="/images/profile/zaid.svg"
          alt="Zaid Duartee"
          width={621}
          height={481}
          className="h-auto w-full grayscale"
          sizes="128px"
        />
      </div>
    </figure>
  );
}

export function ConnectIdentity() {
  return (
    <header>
      <h1 className="text-[clamp(2.75rem,10vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.03em] text-ink">
        ZAID
        <br />
        DUARTEE
      </h1>

      <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
        {siteConfig.role}
      </p>

      <p className="mt-2 text-base text-ink md:text-lg">
        {siteConfig.descriptor}
      </p>

      <p className="mt-8 hidden text-[10px] uppercase tracking-[0.18em] text-muted md:mt-12 md:block">
        {siteConfig.location.toUpperCase()}
        <span className="mx-2 text-border">/</span>
        {siteConfig.year}
      </p>
    </header>
  );
}

export function ConnectFooter() {
  return (
    <footer className="mt-16 md:mt-24">
      <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
        {siteConfig.name.toUpperCase()} / {siteConfig.year}
      </p>
      <a
        href={`mailto:${siteConfig.email}`}
        data-cursor="talk"
        className="mt-3 inline-block text-sm text-muted link-underline"
      >
        {siteConfig.email}
      </a>
    </footer>
  );
}
