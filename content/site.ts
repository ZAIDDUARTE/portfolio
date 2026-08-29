function emptyToNull(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : null;
}

export const siteConfig = {
  name: "Zaid Duartee",
  title: "Zaid Duartee — CTO & Technical Lead",
  description:
    "Technical leader working across product, engineering, data systems, geospatial intelligence, SaaS and AI infrastructure.",
  url: "https://zaidduartee.com",
  email: "zaidduartee@gmail.com",
  linkedin: "https://www.linkedin.com/in/zaidduartee",
  github: "https://github.com/ZAIDDUARTE",
  cv: "/cv/Zaid_Duartee_Executive_CV_2026.pdf",
  vcard: "/contact/zaid-duartee.vcf",
  location: "Islamabad / Riyadh",
  currentLocation: "Riyadh",
  year: "2026",
  role: "CTO / Technical Lead",
  descriptor: "Product & Engineering",
  positioning:
    "Technical leadership across AI, data, SaaS and geospatial systems.",
  connectDescription:
    "Book a conversation, save Zaid Duartee’s contact details, explore selected technical systems, or leave a private note.",
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

export function isConfiguredUrl(value: string | null): value is string {
  if (!value) return false;
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}
