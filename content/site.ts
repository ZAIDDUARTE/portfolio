function emptyToNull(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : null;
}

export const siteConfig = {
  name: "Zaid Duartee",
  title: "Zaid Duartee — React & Next.js Developer",
  description:
    "React & Next.js developer specializing in SaaS frontends, WordPress, API integrations, and AI-powered web applications. Available for Upwork and direct projects.",
  url: "https://zaid-portfolio-dusky.vercel.app",
  email: "zaidduartee@gmail.com",
  linkedin: "https://www.linkedin.com/in/zaidduartee",
  github: "https://github.com/ZAIDDUARTE",
  /** Set NEXT_PUBLIC_UPWORK_URL to your public Upwork profile URL */
  upwork: emptyToNull(process.env.NEXT_PUBLIC_UPWORK_URL),
  cv: "/cv/Zaid_Duartee_Executive_CV_2026.pdf",
  vcard: "/contact/zaid-duartee.vcf",
  location: "Islamabad / Riyadh",
  currentLocation: "Riyadh",
  year: "2026",
  role: "React & Next.js Developer",
  descriptor: "SaaS, WordPress & AI Integrations",
  positioning:
    "React & Next.js Developer | SaaS, WordPress & AI Integrations",
  rateLabel: "$15/hour",
  upworkHours: "459+",
  connectDescription:
    "Book a conversation, explore case studies, or leave a private note.",
  connectTitle: "Connect with Zaid Duartee",
  /** Cal.com booking URL — override via NEXT_PUBLIC_BOOKING_URL */
  booking:
    emptyToNull(process.env.NEXT_PUBLIC_BOOKING_URL) ??
    "https://cal.com/zaidduartee/20min",
  /** WhatsApp click-to-chat URL — override via NEXT_PUBLIC_WHATSAPP_URL */
  whatsapp:
    emptyToNull(process.env.NEXT_PUBLIC_WHATSAPP_URL) ??
    "https://wa.me/923289771651",
  /** Formspree (or compatible) endpoint — set via NEXT_PUBLIC_FEEDBACK_FORM_ENDPOINT */
  feedbackFormEndpoint: emptyToNull(process.env.NEXT_PUBLIC_FEEDBACK_FORM_ENDPOINT),
} as const;

export function siteHostname(): string {
  return new URL(siteConfig.url).hostname;
}

export function isConfiguredUrl(value: string | null): value is string {
  if (!value) return false;
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}
