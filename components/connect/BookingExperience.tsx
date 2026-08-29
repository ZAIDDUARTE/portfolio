"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { bookingCopy } from "@/content/connect";
import { isConfiguredUrl, siteConfig } from "@/content/site";

function getBookingEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url);
    if (!parsed.searchParams.has("embed")) {
      parsed.searchParams.set("embed", "true");
    }
    return parsed.toString();
  } catch {
    return url;
  }
}

export function BookingExperience({
  className = "",
  label = "Book a conversation",
}: {
  className?: string;
  label?: string;
}) {
  const bookingUrl = siteConfig.booking;
  const configured = isConfiguredUrl(bookingUrl);
  const [open, setOpen] = useState(false);
  const [embedVisible, setEmbedVisible] = useState(false);

  const closeModal = () => {
    setOpen(false);
    setEmbedVisible(false);
  };

  if (!configured) {
    return (
      <div className={className}>
        <button
          type="button"
          disabled
          className="tap-active inline-flex min-h-12 w-full items-center justify-center border border-border bg-border-subtle px-5 text-sm font-medium tracking-[0.06em] text-muted"
          aria-disabled="true"
        >
          {bookingCopy.pending}
        </button>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {bookingCopy.pendingHint}
        </p>
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-cursor="visit"
        className={`tap-active inline-flex min-h-12 w-full items-center justify-center border border-ink bg-ink px-5 text-sm font-medium tracking-[0.06em] text-light transition-colors hover:bg-accent hover:border-accent focus-visible:bg-accent focus-visible:border-accent ${className}`}
      >
        {label}
      </button>

      <Modal
        isOpen={open}
        onClose={closeModal}
        title={bookingCopy.title}
        description={bookingCopy.description}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="tap-active inline-flex min-h-12 flex-1 items-center justify-center border border-ink bg-ink px-4 text-sm font-medium tracking-[0.04em] text-light transition-colors hover:bg-accent hover:border-accent"
          >
            {bookingCopy.openExternal} ↗
          </a>
          <button
            type="button"
            onClick={() => setEmbedVisible(true)}
            className="tap-active inline-flex min-h-12 flex-1 items-center justify-center border border-border px-4 text-sm tracking-[0.04em] text-ink transition-colors hover:border-ink"
          >
            {bookingCopy.loadEmbed}
          </button>
        </div>

        {embedVisible ? (
          <div className="mt-6 border border-border bg-canvas">
            <iframe
              title="Booking calendar"
              src={getBookingEmbedUrl(bookingUrl)}
              className="h-[min(70svh,560px)] w-full border-0"
              loading="lazy"
            />
          </div>
        ) : (
          <p className="mt-4 text-sm text-muted">{bookingCopy.embedHint}</p>
        )}
      </Modal>
    </>
  );
}
