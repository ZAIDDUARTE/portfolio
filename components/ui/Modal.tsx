"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  labelledBy?: string;
  describedBy?: string;
};

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  labelledBy,
  describedBy,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const resolvedLabelId = labelledBy ?? titleId;
  const resolvedDescriptionId = describedBy ?? descriptionId;

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    dialog?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialog) return;

      const focusable = dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const items = Array.from(focusable).filter(
        (node) => !node.hasAttribute("disabled") && node.tabIndex !== -1,
      );
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) onClose();
    },
    [onClose],
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/50 p-4 sm:items-center"
      onMouseDown={handleBackdropClick}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={resolvedLabelId}
        aria-describedby={description ? resolvedDescriptionId : undefined}
        tabIndex={-1}
        className="max-h-[min(90svh,820px)] w-full max-w-2xl overflow-y-auto border border-border bg-canvas p-6 shadow-none outline-none md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              id={resolvedLabelId}
              className="text-xl font-medium tracking-[-0.02em] text-ink md:text-2xl"
            >
              {title}
            </h2>
            {description ? (
              <p
                id={resolvedDescriptionId}
                className="mt-3 text-sm leading-relaxed text-muted md:text-base"
              >
                {description}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="tap-active inline-flex min-h-10 min-w-10 items-center justify-center border border-border px-3 text-sm text-muted transition-colors hover:border-ink hover:text-ink"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
