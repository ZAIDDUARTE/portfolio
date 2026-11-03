import { projects } from "@/content/projects";

export type ServiceCaseStudyLink = {
  id: string;
  title: string;
  href: string;
  subtitle: string;
  relevance: string;
};

export type ServicePageContent = {
  slug: string;
  title: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  problems: string[];
  capabilities: string[];
  outOfScope: string[];
  scopeNotes: string[];
  caseStudies: ServiceCaseStudyLink[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string; external?: boolean };
};

function caseStudy(
  id: string,
  relevance: string,
): ServiceCaseStudyLink | null {
  const project = projects.find((item) => item.id === id);
  if (!project) return null;
  return {
    id: project.id,
    title: project.title,
    href: project.href,
    subtitle: project.subtitle,
    relevance,
  };
}

function requireCaseStudies(
  links: Array<ServiceCaseStudyLink | null>,
): ServiceCaseStudyLink[] {
  return links.filter((link): link is ServiceCaseStudyLink => Boolean(link));
}

export const servicePages: ServicePageContent[] = [
  {
    slug: "nextjs-support",
    title: "Next.js support & development",
    eyebrow: "Service",
    metaTitle: "Next.js Support & Development",
    metaDescription:
      "React and Next.js delivery for SaaS UIs, marketing sites, and application frontends — fixes, features, and maintainable shipping at $15/hr.",
    summary:
      "Practical React and Next.js work for product UIs, marketing sites, and application frontends that need clean delivery without over-engineering.",
    problems: [
      "Existing Next.js apps with bugs, regressions, or flaky production behavior",
      "SaaS dashboards and marketing sites that need reliable UI delivery",
      "Auth flows, forms, and multi-step workflows that break under real use",
      "Codebases that are hard to extend because structure and typing drifted",
    ],
    capabilities: [
      "App Router / Pages Router feature work in React and Next.js",
      "UI implementation, responsive polish, and accessibility basics",
      "API route and client-side data-fetching integration",
      "Debugging build, runtime, and hydration issues",
      "Incremental refactors that keep shipping unblocked",
    ],
    outOfScope: [
      "Invented performance or SEO guarantees without measuring your stack",
      "Full redesign systems unless scoped as a separate engagement",
      "Unmanaged hosting, DNS, or brand strategy work",
    ],
    scopeNotes: [
      "Typical engagements: bugfix sprints, feature slices, or ongoing frontend support.",
      "Rate: $15/hour via Upwork or direct arrangement after fit is clear.",
      "Kickoff needs: repo access (or clear screenshots), goal, and constraints.",
    ],
    caseStudies: requireCaseStudies([
      caseStudy(
        "alexander",
        "Next.js questionnaire, dashboard surfaces, and product architecture for an AI SaaS platform.",
      ),
      caseStudy(
        "satori",
        "React application surface with API-backed workflows and reporting views.",
      ),
    ]),
    primaryCta: { label: "Start a project inquiry", href: "/connect#project-inquiry" },
    secondaryCta: {
      label: "Hire on Upwork",
      href: "upwork",
      external: true,
    },
  },
  {
    slug: "wordpress-development",
    title: "WordPress development & troubleshooting",
    eyebrow: "Service",
    metaTitle: "WordPress Development & Troubleshooting",
    metaDescription:
      "WordPress customization, plugin/theme fixes, and launch-blocking troubleshooting for businesses that need a stable site without inventing claims.",
    summary:
      "Fix, customize, and extend WordPress sites when themes, plugins, or workflows are blocking launches or day-to-day operations.",
    problems: [
      "Broken layouts, forms, or checkout paths after theme/plugin updates",
      "Custom page templates or content workflows that editors cannot maintain",
      "Integration issues between WordPress and external APIs or CRMs",
      "Performance and stability problems that need careful diagnosis first",
    ],
    capabilities: [
      "Theme and plugin customization within existing WordPress setups",
      "Troubleshooting launch blockers and production regressions",
      "Form, booking, and third-party embed integrations",
      "Content structure improvements that editors can actually use",
      "Safe incremental changes instead of unnecessary full rebuilds",
    ],
    outOfScope: [
      "Guaranteed Core Web Vitals scores without auditing your host and assets",
      "Building a custom page builder or enterprise multisite platform from scratch unless scoped",
      "Copywriting, photography, or brand identity packages",
    ],
    scopeNotes: [
      "Best fit: existing WordPress sites that need reliable fixes or focused customization.",
      "Access typically required: wp-admin, hosting panel or staging, and a clear reproduction path.",
      "If a rebuild is wiser than patches, that recommendation is stated before large spend.",
    ],
    caseStudies: requireCaseStudies([
      caseStudy(
        "satori",
        "Application UI and workflow discipline transferable to structured WordPress delivery.",
      ),
      caseStudy(
        "alexander",
        "Form-driven configuration and validation patterns useful for complex WordPress intake flows.",
      ),
    ]),
    primaryCta: { label: "Start a project inquiry", href: "/connect#project-inquiry" },
    secondaryCta: {
      label: "Hire on Upwork",
      href: "upwork",
      external: true,
    },
  },
  {
    slug: "ai-integrations",
    title: "AI chatbot & voice integrations",
    eyebrow: "Service",
    metaTitle: "AI Chatbot & Voice Integrations",
    metaDescription:
      "Integrate AI chat and voice assistants into web products with careful UI wiring, provider hooks, and honest scope — no invented outcome metrics.",
    summary:
      "Wire AI chat and voice experiences into web products — providers, workflows, and UI — with testing discipline and clear limits on what the system can claim.",
    problems: [
      "Chat or voice demos that look good but cannot respect business rules",
      "Frontends that need to call AI providers without leaking secrets",
      "Assistants that over-promise actions the backend cannot confirm",
      "Product teams that need a reliable UI + API integration path, not slideware",
    ],
    capabilities: [
      "Chat and voice UI integration into React / Next.js products",
      "Provider wiring, webhook/event handling, and safe client boundaries",
      "Conversation flows constrained by verified business data",
      "Dashboard views for calls, sessions, or assistant activity where needed",
      "Debugging flaky integrations between frontend, APIs, and AI vendors",
    ],
    outOfScope: [
      "Claims of autonomous business outcomes, revenue lift, or “set and forget” AI",
      "Training proprietary foundation models from scratch",
      "Telephony carrier contracts or unverified production telephony claims",
    ],
    scopeNotes: [
      "Work stays grounded in what the system can actually confirm and execute.",
      "Relevant proof: Alexander (AI receptionist SaaS) and related product UI work.",
      "Kickoff needs: provider choice (or shortlist), product surface, and policy constraints.",
    ],
    caseStudies: requireCaseStudies([
      caseStudy(
        "alexander",
        "AI receptionist SaaS — Next.js product surface, policy-aware assistant design, and dashboard operations.",
      ),
      caseStudy(
        "satori",
        "AI-enabled SaaS application work spanning React UI and backend services.",
      ),
      caseStudy(
        "marginai",
        "Inference routing and cost-aware request paths — technical system design, not commercial outcomes.",
      ),
    ]),
    primaryCta: { label: "Start a project inquiry", href: "/connect#project-inquiry" },
    secondaryCta: {
      label: "Hire on Upwork",
      href: "upwork",
      external: true,
    },
  },
];

export function getServicePage(slug: string): ServicePageContent | undefined {
  return servicePages.find((page) => page.slug === slug);
}

export const servicePageSlugs = servicePages.map((page) => page.slug);
