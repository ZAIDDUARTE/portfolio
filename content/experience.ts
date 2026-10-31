export type ExperienceEntry = {
  year: string;
  phase: string;
  title: string;
  organization: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    year: "2023",
    phase: "COMMERCE",
    title: "Shopify / Affiliate Marketing",
    organization: "",
    description: "Early commercial and digital product work.",
  },
  {
    year: "2024",
    phase: "INTERFACES",
    title: "Frontend Lead",
    organization: "Beachy Marketing",
    description: "Led frontend delivery for client and product work.",
  },
  {
    year: "2024—NOW",
    phase: "CLIENTS",
    title: "Freelance Frontend & Integrations",
    organization: "Upwork",
    description:
      "459+ recorded hours delivering React/Next.js, WordPress, SaaS frontend, and integration work across multiple 5-star frontend contracts.",
  },
  {
    year: "2025",
    phase: "PRODUCTS",
    title: "Lead Full-Stack Developer",
    organization: "International Clients",
    description: "Owned end-to-end SaaS and product delivery for commercial software projects.",
  },
  {
    year: "2025—NOW",
    phase: "SYSTEMS",
    title: "Technical Lead",
    organization: "Beyond Intelligence",
    description:
      "Technical delivery across AI, data, SaaS, geospatial and risk systems — including ATLAS and related platforms.",
  },
];

export const experienceProgression = [
  "COMMERCE",
  "INTERFACES",
  "CLIENTS",
  "PRODUCTS",
  "SYSTEMS",
] as const;

export const capabilities = [
  {
    group: "FRONTEND",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Dashboards & admin panels",
      "WordPress customization",
      "Responsive UI",
    ],
  },
  {
    group: "INTEGRATIONS",
    items: [
      "REST APIs",
      "GraphQL",
      "Authentication flows",
      "AI chatbot integrations",
      "Voice assistant wiring",
      "Third-party services",
    ],
  },
  {
    group: "SAAS & BACKEND",
    items: [
      "SaaS frontend maintenance",
      "FastAPI",
      "PostgreSQL",
      "Reporting workflows",
      "API contracts",
      "Debugging existing apps",
    ],
  },
  {
    group: "SYSTEMS",
    items: [
      "Data processing",
      "Geospatial / environmental systems",
      "Applied AI workflows",
      "Cloud delivery",
      "QA & validation",
      "Product scoping",
    ],
  },
] as const;

/** Existing public-safe attributions already published on the portfolio. */
export const testimonials = [
  {
    quote:
      "Exceptional front-end developer… clean code and ability to bring ideas to life.",
    attribution: "International SaaS client",
  },
  {
    quote: "High-quality deliverables and willing to go beyond the ask.",
    attribution: "API strategy client",
  },
] as const;
