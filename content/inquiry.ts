/**
 * Project inquiry form — primary lead-gen path on /connect.
 * Delivery uses Formspree (or compatible) when configured;
 * otherwise mailto fallback with no false success state.
 */

export const projectTypeOptions = [
  "Next.js / React support",
  "WordPress development",
  "AI integrations",
  "SaaS frontend",
  "API integrations",
  "Debugging / maintenance",
  "Other",
] as const;

export type ProjectType = (typeof projectTypeOptions)[number];

export const budgetOptions = [
  "Not sure yet",
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000+",
] as const;

export type BudgetRange = (typeof budgetOptions)[number];

export const inquiryCopy = {
  title: "Project inquiry",
  description:
    "Share what you need built or fixed. I review every inquiry personally and reply when a fit looks realistic.",
  descriptionEmailOnly:
    "Online form delivery is not connected yet. Fill in the details below, then open a pre-filled email in your mail client. Nothing is submitted to a server from this page.",
  privacy:
    "Your inquiry is used only to evaluate fit and reply. It is not shared, sold, or published. Optional details (budget, deadline) help scoping and are never required to contact me.",
  privacyEmailOnly:
    "Opening email uses your device’s mail client. No form data is posted to this website until online delivery is configured.",
  successTitle: "Inquiry sent",
  successBody:
    "Thank you — your project inquiry was delivered privately. I’ll review it and respond if there’s a clear next step.",
  errorTitle: "Could not send",
  errorBody:
    "Something went wrong sending the form. Please try again, or use the email fallback below.",
  mailtoSubject: "Portfolio project inquiry",
  submitLabel: "Send inquiry",
  submittingLabel: "Sending…",
  emailFallbackLabel: "Email inquiry",
  emailPrimaryLabel: "Open email inquiry",
  directEmailLabel: "Or email directly",
  spamSilentDiscardMs: 2500,
} as const;
