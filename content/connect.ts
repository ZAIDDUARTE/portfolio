import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";

export type CursorHint = "view" | "talk" | "open" | "visit" | "save";

export type ConnectAction = {
  id: string;
  label: string;
  href: string | null;
  external?: boolean;
  download?: boolean;
  primary?: boolean;
  cursor?: CursorHint;
};

export const connectAssets = {
  qrPng: "/contact/connect-qr.png",
  qrSvg: "/contact/connect-qr.svg",
  qrTarget: `${siteConfig.url}/connect`,
  qrAlt: `QR code linking to ${siteConfig.url}/connect`,
  og: "/og/connect.png",
  ogWidth: 1200,
  ogHeight: 630,
} as const;

export function hasConnectQr(): boolean {
  return Boolean(connectAssets.qrPng && connectAssets.qrSvg);
}

export const conversationTopics = [
  {
    id: "ai-saas",
    label: "AI, data and SaaS systems",
  },
  {
    id: "geospatial",
    label: "Geospatial and environmental intelligence",
  },
  {
    id: "product-partnerships",
    label: "Technical product, implementation and partnerships",
  },
] as const;

export const noteContextOptions = [
  "Met at LEAP",
  "Recruiter or hiring team",
  "Founder or operator",
  "Potential client or partner",
  "Colleague",
  "Other",
] as const;

export type NoteContext = (typeof noteContextOptions)[number];

export const connectCaseStudies = projects.map((project) => ({
  id: project.id,
  title: project.title,
  href: project.href,
  caseNumber: project.caseNumber,
}));

export const connectSecondaryActions: ConnectAction[] = [
  {
    id: "atlas",
    label: "VIEW ATLAS",
    href: "/work/atlas",
    cursor: "view",
  },
  {
    id: "noesis",
    label: "VIEW NOESIS",
    href: "/work/noesis",
    cursor: "view",
  },
  {
    id: "marginai",
    label: "VIEW MARGINAI",
    href: "/work/marginai",
    cursor: "view",
  },
  {
    id: "cv",
    label: "DOWNLOAD CV",
    href: siteConfig.cv,
    external: true,
    cursor: "open",
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    href: siteConfig.linkedin,
    external: true,
    cursor: "visit",
  },
  {
    id: "github",
    label: "GITHUB",
    href: siteConfig.github,
    external: true,
    cursor: "visit",
  },
];

export const visitorNoteCopy = {
  title: "Leave a note",
  description:
    "Share an introduction, observation, recommendation, or reason to continue the conversation. Submissions are private and reviewed personally.",
  privacy:
    "Your message is used only to respond or continue the conversation. It is not published without separate permission.",
  permissionLabel:
    "You may contact me about using this as a public testimonial.",
  successTitle: "Note received",
  successBody:
    "Thank you — your message was sent privately. I’ll review it personally.",
  errorTitle: "Could not send",
  errorBody:
    "Something went wrong. Please try again, or email directly if the issue continues.",
  mailtoSubject: "Portfolio visitor note",
  unconfiguredBody:
    "The private note form is not configured yet. You can still reach out by email.",
} as const;

export const bookingCopy = {
  title: "Book a conversation",
  description:
    "Choose a time that works for you. A booking is only confirmed once the calendar provider confirms it.",
  openExternal: "Open booking page",
  loadEmbed: "Load calendar here",
  embedHint: "Calendar loads only after you choose to embed it here.",
  pending: "Booking link being configured",
  pendingHint: "Email and WhatsApp remain available while scheduling is set up.",
} as const;
