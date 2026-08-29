"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  noteContextOptions,
  visitorNoteCopy,
  type NoteContext,
} from "@/content/connect";
import { isConfiguredUrl, siteConfig } from "@/content/site";

type FormState = {
  name: string;
  email: string;
  company: string;
  context: NoteContext | "";
  note: string;
  permission: boolean;
  honeypot: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  context: "",
  note: "",
  permission: false,
  honeypot: "",
};

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedCompany = values.company.trim();
  const trimmedNote = values.note.trim();

  if (!trimmedName) errors.name = "Name is required.";
  else if (trimmedName.length > 80) errors.name = "Name must be 80 characters or fewer.";

  if (!trimmedEmail) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = "Enter a valid email address.";
  }

  if (trimmedCompany.length > 120) {
    errors.company = "Company or role must be 120 characters or fewer.";
  }

  if (!values.context) errors.context = "Select a context.";
  if (!trimmedNote) errors.note = "Note is required.";
  else if (trimmedNote.length < 20) {
    errors.note = "Note must be at least 20 characters.";
  } else if (trimmedNote.length > 1200) {
    errors.note = "Note must be 1,200 characters or fewer.";
  }

  return errors;
}

export function VisitorNoteForm() {
  const endpoint = siteConfig.feedbackFormEndpoint;
  const configured = isConfiguredUrl(endpoint);
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [formError, setFormError] = useState<string | null>(null);

  const mailtoFallback = useMemo(() => {
    const body = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      values.company.trim() ? `Company or role: ${values.company.trim()}` : null,
      values.context ? `Context: ${values.context}` : null,
      "",
      values.note.trim(),
      values.permission
        ? "\n\nPermission granted to discuss as a public testimonial."
        : null,
    ]
      .filter(Boolean)
      .join("\n");

    return `mailto:${siteConfig.email}?subject=${encodeURIComponent(visitorNoteCopy.mailtoSubject)}&body=${encodeURIComponent(body)}`;
  }, [values]);

  const updateField = <K extends keyof FormState>(
    key: K,
    value: FormState[K],
  ) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setFormError(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading" || status === "success") return;

    if (values.honeypot.trim()) {
      setStatus("success");
      return;
    }

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    if (!configured || !endpoint) {
      setFormError(visitorNoteCopy.unconfiguredBody);
      setStatus("error");
      return;
    }

    setStatus("loading");
    setFormError(null);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim() || undefined,
          context: values.context,
          note: values.note.trim(),
          testimonial_permission: values.permission,
          _gotcha: values.honeypot,
          _subject: visitorNoteCopy.mailtoSubject,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setFormError(visitorNoteCopy.errorBody);
    }
  };

  const fieldClass = (field: keyof FormState) =>
    `mt-2 w-full border bg-canvas px-4 py-3 text-base text-ink outline-none transition-colors focus-visible:border-accent ${
      errors[field] ? "border-accent" : "border-border"
    }`;

  return (
    <section
      id="leave-a-note"
      aria-labelledby="leave-a-note-heading"
      className="border-t border-border pt-12 md:pt-16"
    >
      <h2
        id="leave-a-note-heading"
        className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-[-0.03em] text-ink"
      >
        {visitorNoteCopy.title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        {visitorNoteCopy.description}
      </p>

      <div
        aria-live="polite"
        aria-atomic="true"
        className="mt-6"
      >
        {status === "success" ? (
          <div className="border border-border bg-border-subtle p-6">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-ink">
              {visitorNoteCopy.successTitle}
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {visitorNoteCopy.successBody}
            </p>
          </div>
        ) : (
          <form
            noValidate
            onSubmit={handleSubmit}
            className="mt-8 grid gap-6"
          >
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="visitor-company-website">Company website</label>
              <input
                id="visitor-company-website"
                name="company_website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.honeypot}
                onChange={(event) => updateField("honeypot", event.target.value)}
              />
            </div>

            <div>
              <label htmlFor="visitor-name" className="text-sm font-medium text-ink">
                Name <span className="text-accent">*</span>
              </label>
              <input
                id="visitor-name"
                name="name"
                type="text"
                required
                maxLength={80}
                autoComplete="name"
                value={values.name}
                onChange={(event) => updateField("name", event.target.value)}
                className={fieldClass("name")}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "visitor-name-error" : undefined}
              />
              {errors.name ? (
                <p id="visitor-name-error" className="mt-2 text-sm text-accent">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="visitor-email" className="text-sm font-medium text-ink">
                Email <span className="text-accent">*</span>
              </label>
              <input
                id="visitor-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={values.email}
                onChange={(event) => updateField("email", event.target.value)}
                className={fieldClass("email")}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "visitor-email-error" : undefined}
              />
              {errors.email ? (
                <p id="visitor-email-error" className="mt-2 text-sm text-accent">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="visitor-company" className="text-sm font-medium text-ink">
                Company or role
              </label>
              <input
                id="visitor-company"
                name="company"
                type="text"
                maxLength={120}
                autoComplete="organization"
                value={values.company}
                onChange={(event) => updateField("company", event.target.value)}
                className={fieldClass("company")}
                aria-invalid={Boolean(errors.company)}
                aria-describedby={errors.company ? "visitor-company-error" : undefined}
              />
              {errors.company ? (
                <p id="visitor-company-error" className="mt-2 text-sm text-accent">
                  {errors.company}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="visitor-context" className="text-sm font-medium text-ink">
                Context <span className="text-accent">*</span>
              </label>
              <select
                id="visitor-context"
                name="context"
                required
                value={values.context}
                onChange={(event) =>
                  updateField("context", event.target.value as NoteContext | "")
                }
                className={fieldClass("context")}
                aria-invalid={Boolean(errors.context)}
                aria-describedby={errors.context ? "visitor-context-error" : undefined}
              >
                <option value="">Select one</option>
                {noteContextOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.context ? (
                <p id="visitor-context-error" className="mt-2 text-sm text-accent">
                  {errors.context}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="visitor-note" className="text-sm font-medium text-ink">
                Note <span className="text-accent">*</span>
              </label>
              <textarea
                id="visitor-note"
                name="note"
                required
                rows={6}
                minLength={20}
                maxLength={1200}
                value={values.note}
                onChange={(event) => updateField("note", event.target.value)}
                className={`${fieldClass("note")} resize-y`}
                aria-invalid={Boolean(errors.note)}
                aria-describedby={errors.note ? "visitor-note-error" : "visitor-note-hint"}
              />
              <p id="visitor-note-hint" className="mt-2 text-sm text-muted">
                20–1,200 characters. Plain text only.
              </p>
              {errors.note ? (
                <p id="visitor-note-error" className="mt-2 text-sm text-accent">
                  {errors.note}
                </p>
              ) : null}
            </div>

            <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
              <input
                type="checkbox"
                name="permission"
                checked={values.permission}
                onChange={(event) => updateField("permission", event.target.checked)}
                className="mt-1 h-4 w-4 accent-[var(--accent)]"
              />
              <span>{visitorNoteCopy.permissionLabel}</span>
            </label>

            {status === "error" && formError ? (
              <p className="text-sm text-accent" role="alert">
                {formError}
              </p>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === "loading"}
                className="tap-active inline-flex min-h-12 items-center justify-center border border-ink bg-ink px-6 text-sm font-medium tracking-[0.04em] text-light transition-colors hover:bg-accent hover:border-accent disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Send note"}
              </button>
              {!configured ? (
                <a
                  href={mailtoFallback}
                  className="tap-active inline-flex min-h-12 items-center justify-center border border-border px-6 text-sm tracking-[0.04em] text-ink transition-colors hover:border-ink"
                >
                  Email instead
                </a>
              ) : null}
            </div>

            <p className="text-sm leading-relaxed text-muted">
              {visitorNoteCopy.privacy}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
