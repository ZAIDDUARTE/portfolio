/**
 * Public-safe Satori case-study content.
 * Describes verified contribution areas only — no proprietary source or unverified outcomes.
 */

export const satoriMeta = {
  caseNumber: "002",
  title: "Satori",
  subtitle: "AI-Enabled SaaS Platform",
  platformTitle: "AI-Enabled SaaS Platform",
  role: "Frontend & Backend Contributor",
  domain: "React · FastAPI · PostgreSQL · Auth · Reporting",
  href: "/work/satori",
  statement:
    "An AI-enabled SaaS platform case study focused on React frontend workflows, FastAPI backend systems, PostgreSQL data, API integration, authentication, and reporting.",
  oneLine:
    "SaaS application work across React frontends, FastAPI services, PostgreSQL, authentication, API integration, and reporting.",
  scopeNote:
    "This case study covers verified contribution areas. It does not expose private repositories, proprietary source, credentials, or confidential infrastructure details.",
} as const;

export const satoriAssets = {
  demoVideo: null as string | null,
  demoPoster: null as string | null,
  youtubeUrl: null as string | null,
  vimeoUrl: null as string | null,
  preview: "/images/satori/satori-preview.svg",
} as const;

export const satoriProblem = {
  title: "The problem",
  body: "AI-enabled SaaS products need dependable application layers: authenticated users, React workflows that match backend contracts, FastAPI services that persist cleanly in PostgreSQL, and reporting that operators can trust.",
} as const;

export const satoriRole = {
  title: "My role",
  body: "Contributed across frontend and backend surfaces — React workflows, FastAPI systems, PostgreSQL-backed data, API integration, authentication, and reporting.",
  columns: [
    {
      title: "Frontend",
      body: "Built and refined React workflows for product and operational surfaces.",
    },
    {
      title: "Backend",
      body: "Worked with FastAPI services, PostgreSQL persistence, and API contracts.",
    },
    {
      title: "Product delivery",
      body: "Supported authentication, reporting, and SaaS application delivery paths.",
    },
  ],
} as const;

export const satoriWork = [
  "Developed and iterated React frontend workflows for SaaS product surfaces.",
  "Contributed to FastAPI backend systems and API integration.",
  "Worked with PostgreSQL for application data and reporting needs.",
  "Supported authentication flows and access-aware application behavior.",
  "Helped deliver reporting and operational views used inside the SaaS product.",
] as const;

export const satoriTechnologies = [
  "React",
  "FastAPI",
  "PostgreSQL",
  "REST API integration",
  "Authentication",
  "Reporting",
] as const;

export const satoriStatus = {
  title: "Current status",
  body: "Documented as an AI-enabled SaaS platform contribution covering frontend workflows, backend systems, data, auth, and reporting within verified scope.",
  outcomes: [
    "React and FastAPI contribution areas verified for public description",
    "Authentication and reporting work included where performed",
    "No proprietary source, private infrastructure, or commercial metrics disclosed",
  ],
} as const;

export const satoriMissingAssets = [
  "Demo video file (recommended path: public/videos/satori/satori-demo.mp4) or YouTube/Vimeo URL",
  "Optional poster/thumbnail image (recommended: public/images/satori/satori-demo-poster.jpg)",
  "Public-safe screenshots of dashboards or reporting views (no customer PII)",
] as const;
