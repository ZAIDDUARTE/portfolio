"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import {
  budgetOptions,
  inquiryCopy,
  projectTypeOptions,
  type BudgetRange,
  type ProjectType,
} from "@/content/inquiry";
import { isConfiguredUrl, siteConfig } from "@/content/site";

type FormState = {
  name: string;
  email: string;
  projectType: ProjectType | "";
  brief: string;
  budget: BudgetRange | "";
  deadline: string;
  honeypot: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  projectType: "",
  brief: "",
  budget: "",
  deadline: "",
  honeypot: "",
};

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const brief = values.brief.trim();
  const deadline = values.deadline.trim();

  if (!name) errors.name = "Name is required.";
  else if (name.length > 80) errors.name = "Name must be 80 characters or fewer.";

  if (!email) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.projectType) errors.projectType = "Select a project type.";

  if (!brief) errors.brief = "Project brief is required.";
  else if (brief.length < 40) {
    errors.brief = "Brief must be at least 40 characters.";
  } else if (brief.length > 2000) {
    errors.brief = "Brief must be 2,000 characters or fewer.";
  }

  if (deadline.length > 120) {
    errors.deadline = "Deadline must be 120 characters or fewer.";
  }

  return errors;
}

function buildMailto(values: FormState): string {
  const body = [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    values.projectType ? `Project type: ${values.projectType}` : null,
    values.budget ? `Budget: ${values.budget}` : null,
    values.deadline.trim() ? `Deadline: ${values.deadline.trim()}` : null,
    "",
    "Brief:",
    values.brief.trim(),
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(inquiryCopy.mailtoSubject)}&body=${encodeURIComponent(body)}`;
}

export function ProjectInquiryForm() {
  const endpoint = siteConfig.feedbackFormEndpoint;
  const configured = isConfiguredUrl(endpoint);
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [formError, setFormError] = useState<string | null>(null);
  const mountedAt = useRef<number>(0);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const mailtoHref = useMemo(() => buildMailto(values), [values]);

  const updateField = <K extends keyof FormState>(
    key: K,
    value: FormState[K],
  ) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setFormError(null);
  };

  const handleEmailCompose = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (values.honeypot.trim()) return;

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    // Opens the visitor's mail client — does not claim server delivery.
    window.location.href = buildMailto(values);
  };

  const handleEndpointSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading" || status === "success") return;

    if (values.honeypot.trim()) {
      setStatus("idle");
      return;
    }

    const elapsed = Date.now() - mountedAt.current;
    if (elapsed < inquiryCopy.spamSilentDiscardMs) {
      setFormError("Please take a moment to review your inquiry, then try again.");
      setStatus("error");
      return;
    }

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    if (!configured || !endpoint) {
      setFormError(inquiryCopy.errorBody);
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
          project_type: values.projectType,
          brief: values.brief.trim(),
          budget: values.budget || undefined,
          deadline: values.deadline.trim() || undefined,
          _gotcha: values.honeypot,
          _subject: inquiryCopy.mailtoSubject,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setFormError(inquiryCopy.errorBody);
    }
  };

  const fieldClass = (field: keyof FormState) =>
    `mt-2 w-full border bg-canvas px-4 py-3 text-base text-ink outline-none transition-colors focus-visible:border-accent ${
      errors[field] ? "border-accent" : "border-border"
    }`;

  return (
    <section
      id="project-inquiry"
      aria-labelledby="project-inquiry-heading"
      className="border-t border-border pt-12 md:pt-16"
    >
      <h2
        id="project-inquiry-heading"
        className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-[-0.03em] text-ink"
      >
        {inquiryCopy.title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        {configured ? inquiryCopy.description : inquiryCopy.descriptionEmailOnly}
      </p>

      <div aria-live="polite" aria-atomic="true" className="mt-6">
        {configured && status === "success" ? (
          <div className="border border-border bg-border-subtle p-6">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-ink">
              {inquiryCopy.successTitle}
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {inquiryCopy.successBody}
            </p>
          </div>
        ) : (
          <form
            noValidate
            onSubmit={configured ? handleEndpointSubmit : handleEmailCompose}
            className="mt-8 grid gap-6"
          >
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="inquiry-company-website">Company website</label>
              <input
                id="inquiry-company-website"
                name="company_website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.honeypot}
                onChange={(event) => updateField("honeypot", event.target.value)}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="inquiry-name" className="text-sm font-medium text-ink">
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  id="inquiry-name"
                  name="name"
                  type="text"
                  required
                  maxLength={80}
                  autoComplete="name"
                  value={values.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className={fieldClass("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "inquiry-name-error" : undefined}
                />
                {errors.name ? (
                  <p id="inquiry-name-error" className="mt-2 text-sm text-accent">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="inquiry-email" className="text-sm font-medium text-ink">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  id="inquiry-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={values.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className={fieldClass("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "inquiry-email-error" : undefined}
                />
                {errors.email ? (
                  <p id="inquiry-email-error" className="mt-2 text-sm text-accent">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor="inquiry-project-type" className="text-sm font-medium text-ink">
                Project type <span className="text-accent">*</span>
              </label>
              <select
                id="inquiry-project-type"
                name="projectType"
                required
                value={values.projectType}
                onChange={(event) =>
                  updateField("projectType", event.target.value as ProjectType | "")
                }
                className={fieldClass("projectType")}
                aria-invalid={Boolean(errors.projectType)}
                aria-describedby={
                  errors.projectType ? "inquiry-project-type-error" : undefined
                }
              >
                <option value="">Select one</option>
                {projectTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.projectType ? (
                <p id="inquiry-project-type-error" className="mt-2 text-sm text-accent">
                  {errors.projectType}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="inquiry-brief" className="text-sm font-medium text-ink">
                Project brief <span className="text-accent">*</span>
              </label>
              <textarea
                id="inquiry-brief"
                name="brief"
                required
                rows={7}
                minLength={40}
                maxLength={2000}
                value={values.brief}
                onChange={(event) => updateField("brief", event.target.value)}
                className={`${fieldClass("brief")} resize-y`}
                aria-invalid={Boolean(errors.brief)}
                aria-describedby={
                  errors.brief ? "inquiry-brief-error" : "inquiry-brief-hint"
                }
                placeholder="What needs to be built or fixed? Current stack, constraints, and success criteria help."
              />
              <p id="inquiry-brief-hint" className="mt-2 text-sm text-muted">
                40–2,000 characters. Plain text only.
              </p>
              {errors.brief ? (
                <p id="inquiry-brief-error" className="mt-2 text-sm text-accent">
                  {errors.brief}
                </p>
              ) : null}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="inquiry-budget" className="text-sm font-medium text-ink">
                  Budget <span className="font-normal text-muted">(optional)</span>
                </label>
                <select
                  id="inquiry-budget"
                  name="budget"
                  value={values.budget}
                  onChange={(event) =>
                    updateField("budget", event.target.value as BudgetRange | "")
                  }
                  className={fieldClass("budget")}
                >
                  <option value="">Prefer not to say</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="inquiry-deadline" className="text-sm font-medium text-ink">
                  Deadline <span className="font-normal text-muted">(optional)</span>
                </label>
                <input
                  id="inquiry-deadline"
                  name="deadline"
                  type="text"
                  maxLength={120}
                  autoComplete="off"
                  placeholder="e.g. Soft launch in 3 weeks"
                  value={values.deadline}
                  onChange={(event) => updateField("deadline", event.target.value)}
                  className={fieldClass("deadline")}
                  aria-invalid={Boolean(errors.deadline)}
                  aria-describedby={
                    errors.deadline ? "inquiry-deadline-error" : undefined
                  }
                />
                {errors.deadline ? (
                  <p id="inquiry-deadline-error" className="mt-2 text-sm text-accent">
                    {errors.deadline}
                  </p>
                ) : null}
              </div>
            </div>

            {configured && status === "error" && formError ? (
              <p className="text-sm text-accent" role="alert">
                {formError}
              </p>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
              {configured ? (
                <>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="tap-active inline-flex min-h-12 items-center justify-center border border-ink bg-ink px-6 text-sm font-medium tracking-[0.04em] text-light transition-colors hover:bg-accent hover:border-accent disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "loading"
                      ? inquiryCopy.submittingLabel
                      : inquiryCopy.submitLabel}
                  </button>
                  <a
                    href={mailtoHref}
                    className="tap-active inline-flex min-h-12 items-center justify-center border border-border px-6 text-sm tracking-[0.04em] text-ink transition-colors hover:border-ink"
                  >
                    {inquiryCopy.emailFallbackLabel}
                  </a>
                </>
              ) : (
                <>
                  <button
                    type="submit"
                    className="tap-active inline-flex min-h-12 items-center justify-center border border-ink bg-ink px-6 text-sm font-medium tracking-[0.04em] text-light transition-colors hover:bg-accent hover:border-accent"
                  >
                    {inquiryCopy.emailPrimaryLabel}
                  </button>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="tap-active inline-flex min-h-12 items-center justify-center border border-border px-6 text-sm tracking-[0.04em] text-ink transition-colors hover:border-ink"
                  >
                    {inquiryCopy.directEmailLabel}: {siteConfig.email}
                  </a>
                </>
              )}
            </div>

            <p className="text-sm leading-relaxed text-muted">
              {configured ? inquiryCopy.privacy : inquiryCopy.privacyEmailOnly}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
