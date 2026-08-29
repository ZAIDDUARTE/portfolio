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

export const connectActions: ConnectAction[] = [
  {
    id: "vcard",
    label: "SAVE CONTACT",
    href: siteConfig.vcard,
    download: true,
    primary: true,
    cursor: "save",
  },
  {
    id: "work",
    label: "VIEW SELECTED WORK",
    href: "/#work",
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
    id: "whatsapp",
    label: "WHATSAPP",
    href: siteConfig.whatsapp,
    external: true,
    cursor: "visit",
  },
  {
    id: "email",
    label: "EMAIL",
    href: `mailto:${siteConfig.email}`,
    cursor: "talk",
  },
  {
    id: "calendar",
    label: "BOOK MEETING",
    href: siteConfig.calendar,
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
