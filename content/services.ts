export type Service = {
  id: string;
  title: string;
  description: string;
};

/**
 * Client-facing services aligned to verified delivery areas.
 * Keep copy practical — no unverified outcomes or seniority inflation.
 */
export const services: Service[] = [
  {
    id: "react-next",
    title: "React & Next.js development",
    description:
      "Build and improve product UIs, marketing sites, and application frontends with clean, maintainable React and Next.js code.",
  },
  {
    id: "wordpress",
    title: "WordPress customization & troubleshooting",
    description:
      "Fix, customize, and extend WordPress sites — themes, plugins, workflows, and integration issues that block launches.",
  },
  {
    id: "saas-frontend",
    title: "SaaS frontend fixes & maintenance",
    description:
      "Stabilize dashboards, admin panels, and client-facing SaaS surfaces — bugs, UX polish, and ongoing feature delivery.",
  },
  {
    id: "api-integrations",
    title: "REST API & GraphQL integrations",
    description:
      "Connect frontends and backends with reliable API integrations, auth flows, and data contracts that hold under real use.",
  },
  {
    id: "ai-integrations",
    title: "AI chatbot & voice assistant integrations",
    description:
      "Integrate AI chat and voice experiences into web products — wiring providers, workflows, and UI with careful testing.",
  },
  {
    id: "dashboards",
    title: "Dashboard & admin panel development",
    description:
      "Ship reporting views, internal tools, and admin workflows that make operational data usable for teams.",
  },
  {
    id: "auth-workflows",
    title: "Authentication & workflow integrations",
    description:
      "Implement login, session, and multi-step product workflows so users can complete critical paths without friction.",
  },
  {
    id: "debugging",
    title: "Debugging existing applications",
    description:
      "Diagnose and repair production issues in existing codebases — regressions, integration failures, and delivery blockers.",
  },
];

export const credibilityPoints = [
  {
    label: "Upwork hours",
    value: "459+",
  },
  {
    label: "Rate",
    value: "$15/hr",
  },
  {
    label: "Focus",
    value: "Frontend & integrations",
  },
  {
    label: "Feedback",
    value: "Multiple 5-star contracts",
  },
] as const;
