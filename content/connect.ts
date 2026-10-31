import { featuredProjects, projects } from "@/content/projects";
import { isConfiguredUrl, siteConfig } from "@/content/site";

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
    id: "react-next",
    label: "React / Next.js delivery",
  },
  {
    id: "wordpress-saas",
    label: "WordPress and SaaS frontend",
  },
  {
    id: "ai-integrations",
    label: "API and AI integrations",
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

export const connectCaseStudies = featuredProjects.map((project) => ({
  id: project.id,
  title: project.title,
  href: project.href,
  caseNumber: project.caseNumber,
}));

export const connectSecondaryActions: ConnectAction[] = [
  ...featuredProjects.map((project) => ({
    id: project.id,
    label: `VIEW ${project.title.toUpperCase()}`,
    href: project.href,
    cursor: "view" as const,
  })),
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
  ...(isConfiguredUrl(siteConfig.upwork)
    ? [
        {
          id: "upwork",
          label: "HIRE ON UPWORK",
          href: siteConfig.upwork,
          external: true,
          cursor: "visit" as const,
        },
      ]
    : []),
  ...projects
    .filter((project) => project.featured === false)
    .map((project) => ({
      id: project.id,
      label: `VIEW ${project.title.toUpperCase()}`,
      href: project.href,
      cursor: "view" as const,
    })),
];

export const visitorNoteCopy = {
  title: "Leave a note",
  description:
    "Share an introduction, project brief, or reason to continue the conversation. Submissions are private and reviewed personally.",
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
