import Image from "next/image";
import Link from "next/link";
import { ActionRow, PendingActionRow } from "@/components/connect/ActionRow";
import { BookingExperience } from "@/components/connect/BookingExperience";
import {
  connectAssets,
  connectCaseStudies,
  connectSecondaryActions,
  conversationTopics,
  hasConnectQr,
} from "@/content/connect";
import { siteConfig } from "@/content/site";

export function ConnectHero() {
  return (
    <header className="max-w-3xl">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
        Connect
      </p>
      <h1 className="mt-5 text-[clamp(2.75rem,10vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.03em] text-ink">
        {siteConfig.name}
      </h1>
      <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
        {siteConfig.role}
      </p>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink md:text-lg">
        {siteConfig.positioning}
      </p>
      <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-muted">
        {siteConfig.currentLocation}
        <span className="mx-2 text-border">/</span>
        {siteConfig.year}
      </p>
    </header>
  );
}

export function ConnectPrimaryGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <BookingExperience />
      </div>
      <ActionRow
        label="SAVE CONTACT"
        href={siteConfig.vcard}
        download
        cursor="save"
      />
      {siteConfig.whatsapp ? (
        <ActionRow
          label="WHATSAPP"
          href={siteConfig.whatsapp}
          external
          cursor="visit"
        />
      ) : (
        <PendingActionRow label="WHATSAPP" />
      )}
      <ActionRow
        label="EMAIL"
        href={`mailto:${siteConfig.email}`}
        cursor="talk"
        className="sm:col-span-2"
      />
    </div>
  );
}

export function ConnectConversationTopics() {
  return (
    <section aria-labelledby="connect-topics-heading" className="mt-12 md:mt-16">
      <h2
        id="connect-topics-heading"
        className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted"
      >
        What should we discuss?
      </h2>
      <ul className="mt-5 flex flex-wrap gap-3">
        {conversationTopics.map((topic) => (
          <li
            key={topic.id}
            className="border border-border bg-canvas px-4 py-2 text-sm leading-snug text-ink"
          >
            {topic.label}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ConnectCaseStudyLinks() {
  return (
    <section
      aria-labelledby="connect-systems-heading"
      className="mt-12 border-t border-border pt-10 md:mt-16"
    >
      <h2
        id="connect-systems-heading"
        className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted"
      >
        Selected systems
      </h2>
      <ul className="mt-5 space-y-3">
        {connectCaseStudies.map((study) => (
          <li key={study.id}>
            <Link
              href={study.href}
              data-cursor="view"
              className="group flex flex-wrap items-baseline justify-between gap-3 border border-border px-4 py-4 transition-colors hover:border-ink"
            >
              <span className="text-base font-medium tracking-[-0.01em] text-ink group-hover:text-accent">
                {study.title}
              </span>
              <span className="text-[10px] uppercase tracking-[0.14em] text-muted">
                {study.status}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ConnectSecondaryNav() {
  return (
    <nav
      aria-label="Additional connect actions"
      className="mt-10 border-t border-border"
    >
      {connectSecondaryActions.map((action) =>
        action.href ? (
          <ActionRow
            key={action.id}
            label={action.label}
            href={action.href}
            external={action.external}
            download={action.download}
            cursor={action.cursor}
            variant="list"
          />
        ) : (
          <PendingActionRow key={action.id} label={action.label} />
        ),
      )}
    </nav>
  );
}

export function ConnectQrSection() {
  if (!hasConnectQr() || !connectAssets.qrPng || !connectAssets.qrSvg) {
    return null;
  }

  return (
    <section
      aria-labelledby="connect-qr-heading"
      className="mt-12 border-t border-border pt-10 md:mt-16"
    >
      <h2
        id="connect-qr-heading"
        className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted"
      >
        QR connect card
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Scan or download this code to return to this page — the stable entry
        point for booking, contact, and private notes.
      </p>
      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="border border-border bg-canvas p-4">
          <Image
            src={connectAssets.qrPng}
            alt={connectAssets.qrAlt}
            width={240}
            height={240}
            className="h-auto w-[min(100%,240px)]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <a
            href={connectAssets.qrPng}
            download="zaid-duartee-connect-qr.png"
            className="tap-active inline-flex min-h-12 items-center justify-center border border-ink px-5 text-sm font-medium tracking-[0.04em] text-ink transition-colors hover:bg-ink hover:text-light"
          >
            Download QR
          </a>
          <a
            href={connectAssets.qrSvg}
            download="zaid-duartee-connect-qr.svg"
            className="tap-active inline-flex min-h-12 items-center justify-center border border-border px-5 text-sm tracking-[0.04em] text-muted transition-colors hover:border-ink hover:text-ink"
          >
            Download SVG
          </a>
          <p className="text-xs leading-relaxed text-muted">
            Permanent destination: /connect
          </p>
        </div>
      </div>
    </section>
  );
}

export function ConnectPortrait() {
  return (
    <figure className="hidden w-[128px] shrink-0 xl:block">
      <div className="overflow-hidden bg-border-subtle">
        <Image
          src="/images/profile/zaid.svg"
          alt=""
          width={621}
          height={481}
          className="h-auto w-full grayscale"
          sizes="128px"
        />
      </div>
    </figure>
  );
}
