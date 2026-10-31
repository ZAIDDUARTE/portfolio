/**
 * Public-safe Alexander case-study content.
 * Source: ALEXANDER_COMPLETE_CASE_STUDY_CURSOR_HANDOFF.md (PUBLIC COPY).
 * Do not invent metrics, live production claims, or unverified integrations.
 */

export const alexanderMeta = {
  caseNumber: "001",
  title: "Alexander",
  subtitle: "AI Receptionist & Business Automation SaaS",
  platformTitle: "Alexander — AI Voice Receptionist & Business Automation SaaS",
  role: "CTO, Product Architect & Lead Full-Stack Developer",
  domain: "AI SaaS · Voice AI · Business Automation",
  industry: "U.S. plumbing & field-service businesses",
  href: "/work/alexander",
  website: "https://meetalexander.ai",
  websiteLabel: "meetalexander.ai",
  pullQuote:
    "The hard engineering problem wasn't getting an AI to answer a call. It was getting the AI to respect a real company's rules—and only claim an action happened after the system confirmed it.",
  statement:
    "A business-aware AI receptionist platform for U.S. plumbing companies — connecting subscription onboarding, structured company policy, conversational voice AI, service-request capture, and operational workflows.",
  oneLine:
    "Full-stack SaaS and voice-AI engineering for a business-aware AI receptionist serving U.S. plumbing businesses.",
  scopeNote:
    "Engineering foundations and selected QA are proven. Automated tenant provisioning and a complete self-service production lifecycle are not yet fully verified. Dashboard metrics shown in screenshots are illustrative product UI, not claimed business results.",
} as const;

export const alexanderAssets = {
  dashboard: "/images/alexander/alexander-dashboard.webp",
  dashboardPng: "/images/alexander/alexander-dashboard.png",
  card: "/images/alexander/alexander-dashboard-card.webp",
  og: "/images/alexander/alexander-dashboard-og.jpg",
  preview: "/images/alexander/alexander-dashboard-card.webp",
  dashboardAlt:
    "Alexander AI customer dashboard showing call activity, appointments, recent calls, and receptionist status for a plumbing business. Interface labeled illustrative data.",
  dashboardWidth: 2400,
  dashboardHeight: 1350,
  cardWidth: 1600,
  cardHeight: 900,
  ogWidth: 1200,
  ogHeight: 675,
  demoVideo: null as string | null,
  demoPoster: null as string | null,
  youtubeUrl: null as string | null,
  vimeoUrl: null as string | null,
} as const;

export const alexanderProblems = [
  {
    title: "Missed calls when staff are unavailable",
    body: "Field teams and closed offices leave inbound inquiries unanswered — especially outside business hours — while urgent callers still need a truthful next step.",
  },
  {
    title: "Generic AI lacks company rules",
    body: "A public website cannot encode ZIP coverage, tenant authorization, travel fees, emergency contacts, or booking authority. The receptionist must use approved business facts, not guesses.",
  },
  {
    title: "Unverified promises create risk",
    body: "Arrival times, bookings, pricing, warranties, and dispatch claims must be gated by policy and confirmed system state — never invented mid-call.",
  },
  {
    title: "Transcripts are not workflows",
    body: "Plumbing operators need structured caller context, urgency, callbacks, and request records that can move into operational systems safely.",
  },
  {
    title: "One bot ≠ a repeatable SaaS product",
    body: "Scaling requires payment verification, secure onboarding, versioned company profiles, tenant isolation, recoverable failures, and bounded integrations.",
  },
] as const;

export const alexanderLayers = [
  {
    index: "01",
    title: "Acquisition & checkout",
    body: "WordPress marketing presence with Stripe subscription checkout in a validated test payment flow.",
    status: "Verified foundation",
  },
  {
    index: "02",
    title: "Business onboarding & policies",
    body: "Eight-section Next.js questionnaire with conditional questions, save/resume, validation, and canonical company policy persistence.",
    status: "Verified foundation",
  },
  {
    index: "03",
    title: "Voice AI receptionist",
    body: "Trillet-hosted conversational agents with business-specific instructions, real call tests, structured extraction, and human handoff rules.",
    status: "Verified with selected QA",
  },
  {
    index: "04",
    title: "Operational backend",
    body: "AWS-backed customer lifecycle, immutable submissions, profile revisions, SES communications, and completed-call request handling.",
    status: "Verified foundation",
  },
  {
    index: "05",
    title: "Business integrations",
    body: "Jobber and Google Calendar connectors designed with staged testing, permission checks, and no-false-success safeguards.",
    status: "Staged / QA in progress",
  },
] as const;

export const alexanderRole = {
  title: "My role",
  body: "Technical leadership and hands-on implementation across product architecture, full-stack delivery, voice configuration, integrations, and QA — not a claim that one person exclusively authored every line of every subsystem.",
  columns: [
    {
      title: "Architecture",
      body: "Defined how marketing, Stripe, Next.js onboarding, AWS persistence, Trillet voice, and external tools form one SaaS journey with explicit boundaries.",
    },
    {
      title: "Full-stack delivery",
      body: "Built and coordinated the Next.js/TypeScript onboarding app, server routes, signed access, autosave/resume, validation, submission, and Vercel/AWS deployment paths.",
    },
    {
      title: "Data & lifecycle",
      body: "Designed customer identity, immutable questionnaire submissions, canonical profiles and revisions, duplicate-safe writes, and recovery-friendly state transitions.",
    },
    {
      title: "Voice & safety",
      body: "Configured Trillet agents and call flows; validated real conversations, summaries, and extraction; designed emergency, pricing, booking, and escalation boundaries.",
    },
    {
      title: "Integrations",
      body: "Worked Stripe test checkout, SES messaging, completed-call ingestion, Jobber test connection, and Google Calendar QA — keeping authority separate from execution proof.",
    },
    {
      title: "QA & honesty",
      body: "Defined acceptance flows, idempotency and isolation checks, and truthful failure handling rather than declaring the full platform finished prematurely.",
    },
  ],
} as const;

export const alexanderContributions = [
  "Led product architecture connecting WordPress acquisition, Stripe checkout, Next.js onboarding, AWS persistence, and Trillet voice.",
  "Built the custom eight-section onboarding experience with conditional logic, save/resume, final submission, and backend persistence.",
  "Designed Company Truth / policy modeling so the voice agent uses approved business rules instead of improvising.",
  "Configured and tested conversational voice agents, including real calls with structured post-call extraction and summaries.",
  "Implemented operational groundwork for completed-call polling, deduplicated service requests, and a staging request dashboard.",
  "Integrated and QA'd third-party pathways (Stripe test mode, SES, Jobber, Google Calendar) with explicit capability boundaries.",
] as const;

export const alexanderArchitecture = [
  {
    title: "WordPress + WP Engine",
    body: "Marketing, education, and conversion entry — not the SaaS source of truth.",
  },
  {
    title: "Next.js + React + TypeScript",
    body: "Secure onboarding UX, validation, save/resume, and application API routes on Vercel.",
  },
  {
    title: "AWS Lambda + PostgreSQL + S3",
    body: "Lifecycle processing, canonical relational state via RDS/RDS Proxy, and immutable submission artifacts.",
  },
  {
    title: "Amazon SES",
    body: "Welcome/onboarding and setup-related transactional messaging with staged production-domain QA.",
  },
  {
    title: "Trillet + LiveKit",
    body: "Hosted voice agents, call flows, knowledge, and conversational transport for receptionist experiences.",
  },
  {
    title: "Stripe · Jobber · Google Calendar",
    body: "Billing, field-service CRM, and scheduling pathways — verified only where permissions and writes are proven.",
  },
] as const;

export const alexanderTechnologies = [
  "Next.js",
  "React",
  "TypeScript",
  "WordPress",
  "AWS Lambda",
  "PostgreSQL",
  "Amazon RDS / RDS Proxy",
  "Amazon S3",
  "Amazon SES",
  "Vercel",
  "Stripe",
  "Trillet",
  "LiveKit",
  "Jobber",
  "Google Calendar",
  "REST APIs",
] as const;

export const alexanderQuestionnaire = {
  title: "Structured business onboarding",
  body: "Frozen questionnaire specification (October 4, 2026): eight sections that capture company facts, services, emergencies, scheduling, pricing, customer care, voice preferences, and integration setup — so Alexander uses approved policy instead of guessing.",
  stats: [
    { label: "Sections", value: "8" },
    { label: "Root questions", value: "93" },
    { label: "Conditional children", value: "44" },
    { label: "Logical Q-IDs", value: "137" },
  ],
  note: "137 counts registered logical IDs in the frozen specification — not 137 questions shown to every company. Conditional fields appear only when relevant.",
} as const;

export const alexanderVerified = [
  "WordPress/WP Engine marketing site and customer journey shell developed.",
  "Stripe test-mode subscription checkout and payment-verified customer/onboarding path demonstrated.",
  "Custom eight-section Next.js onboarding with invitation, save/resume, final submit, and AWS-backed persistence (recorded test: September 30, 2026).",
  "Questionnaire submissions with normalized canonical profile/revision foundations demonstrated.",
  "Manually configured Trillet plumbing receptionist conducted real calls with structured summaries and 13-field extraction in project history.",
  "Completed-call polling / deduplicated request processing foundation and staging dashboard exist.",
  "Jobber connected/tested in a constrained environment; Google Calendar availability/booking experiments conducted under QA limits.",
  "QA checklists cover billing retries, duplicate submissions, customer isolation, safe call completion, human handoff, and integration failure.",
] as const;

export const alexanderNotClaimed = [
  "Fully unattended checkout-to-live-AI onboarding for every customer.",
  "Successful auto-provisioning of each customer's Trillet workspace, agent, knowledge base, call flow, and portal invitation.",
  "A live production customer dashboard with fully verified tenant-restricted access for all accounts.",
  "Jobber production record mutations, live Google Calendar appointment writes, or unrestricted two-way sync.",
  "Numeric lead recovery, ROI, call-handling rates, customer counts, revenue, or AI accuracy metrics.",
] as const;

export const alexanderStatus = {
  title: "Current status",
  body: "Built and validated the core technical foundation for a business-specific AI receptionist SaaS — custom onboarding, cloud persistence, voice-agent call handling, structured call data, and operational request-management groundwork. Continued work focuses on fully automated provisioning, verified customer access, provider integration QA, and production activation.",
  outcomes: [
    "Engineering foundations proven across onboarding, persistence, and voice QA",
    "Integrations explicitly staged where production writes are unverified",
    "Dashboard screenshot is product UI with illustrative data — not claimed KPIs",
  ],
} as const;

export const alexanderMissingAssets = [
  "Optional product demo video (local MP4 or YouTube/Vimeo URL)",
  "Optional additional public-safe screenshots beyond the branded dashboard",
] as const;
