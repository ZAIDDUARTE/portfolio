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
    year: "2025",
    phase: "PRODUCTS",
    title: "Lead Full-Stack Developer",
    organization: "International Clients",
    description: "Owned end-to-end SaaS and product delivery.",
  },
  {
    year: "2025—NOW",
    phase: "SYSTEMS",
    title: "CTO / Technical Lead",
    organization: "Beyond Intelligence",
    description:
      "Leading technical direction across AI, data, SaaS, geospatial and risk systems.",
  },
];

export const experienceProgression = [
  "COMMERCE",
  "INTERFACES",
  "PRODUCTS",
  "SYSTEMS",
] as const;

export const capabilities = [
  {
    group: "TECHNICAL LEADERSHIP",
    items: [
      "Technical strategy",
      "Architecture",
      "Delivery planning",
      "Product scoping",
      "QA & governance",
      "Cross-functional execution",
    ],
  },
  {
    group: "SYSTEMS",
    items: [
      "Backend systems",
      "SaaS architecture",
      "APIs",
      "Authentication",
      "Integrations",
      "Cloud infrastructure",
    ],
  },
  {
    group: "DATA & INTELLIGENCE",
    items: [
      "Geospatial systems",
      "Environmental data",
      "Data pipelines",
      "Predictive workflows",
      "Applied AI / LLM systems",
    ],
  },
  {
    group: "ENGINEERING",
    items: [
      "Python",
      "FastAPI",
      "Flask",
      "PostgreSQL / PostGIS",
      "React",
      "Next.js",
      "TypeScript",
      "AWS",
      "Docker",
    ],
  },
] as const;

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
