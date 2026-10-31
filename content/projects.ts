/**
 * Each project owns a "world": a restrained atmosphere applied to its media
 * containers on the homepage. The global identity (type, nav, spacing, cursor)
 * never changes — only the surface tone around project media.
 */
export type ProjectWorld = {
  /** Surface behind project media. */
  frameClass: string;
  /** True when the world is dark and needs light-on-dark treatment. */
  dark: boolean;
};

export type Project = {
  id: string;
  index: string;
  caseNumber: string;
  title: string;
  subtitle: string;
  role: string;
  domain: string;
  domains: string[];
  hook: string;
  href: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  world: ProjectWorld;
  dominant?: boolean;
  /** Featured on homepage Selected Work */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "alexander",
    index: "01",
    caseNumber: "001",
    title: "Alexander",
    subtitle: "AI Receptionist & Business Automation SaaS",
    role: "CTO, Product Architect & Lead Full-Stack Developer",
    domain: "AI SaaS · Voice AI · Business Automation",
    domains: [
      "Next.js",
      "Voice AI",
      "AWS",
      "PostgreSQL",
      "Stripe",
      "Trillet",
    ],
    hook: "How do you build a business-aware AI receptionist that answers calls, respects company policy, and only claims actions the system can confirm?",
    href: "/work/alexander",
    image: "/images/alexander/alexander-dashboard-card.webp",
    imageAlt:
      "Alexander AI customer dashboard with call activity and service requests — illustrative data",
    imageWidth: 1600,
    imageHeight: 900,
    world: { frameClass: "bg-dark", dark: true },
    dominant: true,
    featured: true,
  },
  {
    id: "satori",
    index: "02",
    caseNumber: "002",
    title: "Satori",
    subtitle: "AI-Enabled SaaS Platform",
    role: "Frontend & Backend Contributor",
    domain: "React · FastAPI · PostgreSQL",
    domains: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Authentication",
      "API Integration",
      "Reporting",
    ],
    hook: "How can React workflows, FastAPI services, and PostgreSQL reporting come together into a coherent SaaS application surface?",
    href: "/work/satori",
    image: "/images/satori/satori-preview.svg",
    imageAlt: "Satori AI-enabled SaaS platform preview",
    imageWidth: 1600,
    imageHeight: 900,
    world: { frameClass: "bg-border-subtle", dark: false },
    featured: true,
  },
  {
    id: "atlas",
    index: "03",
    caseNumber: "003",
    title: "ATLAS",
    subtitle: "Environmental Risk Intelligence",
    role: "Technical Lead",
    domain: "Geospatial & Risk Intelligence",
    domains: [
      "Geospatial Systems",
      "Risk Intelligence",
      "Data Infrastructure",
      "APIs",
      "Validation",
    ],
    hook: "How can governed environmental and geospatial evidence become reproducible risk intelligence across operational contexts?",
    href: "/work/atlas",
    image: "/images/atlas/preview.svg",
    imageAlt: "ATLAS environmental risk intelligence system preview",
    imageWidth: 1600,
    imageHeight: 900,
    world: { frameClass: "bg-canvas", dark: false },
    featured: true,
  },
  {
    id: "noesis",
    index: "04",
    caseNumber: "004",
    title: "Noesis",
    subtitle: "Environmental Health Intelligence",
    role: "Lead Developer / AI & Geospatial Data Engineer",
    domain: "Geospatial & Environmental Intelligence",
    domains: [
      "Geospatial Data",
      "Environmental Systems",
      "Time Series",
      "Healthcare Context",
    ],
    hook: "How can environmental, temporal and geographic signals become traceable healthcare-demand context without implying diagnosis?",
    href: "/work/noesis",
    image: "/images/noesis/noesis-preview.webp",
    imageAlt: "Noesis environmental health intelligence — atmospheric context preview",
    imageWidth: 1600,
    imageHeight: 878,
    world: { frameClass: "bg-border-subtle", dark: false },
    featured: false,
  },
  {
    id: "marginai",
    index: "05",
    caseNumber: "005",
    title: "MarginAI",
    subtitle: "Inference Optimization Infrastructure",
    role: "Technical Lead",
    domain: "AI Infrastructure",
    domains: [
      "AI Infrastructure",
      "API Systems",
      "Inference Economics",
      "SaaS Infrastructure",
    ],
    hook: "How can an inference proxy reduce avoidable processing while preserving correctness whenever optimization confidence is insufficient?",
    href: "/work/marginai",
    image: "/images/marginai/marginai-preview.svg",
    imageAlt: "MarginAI inference proxy optimization flow diagram",
    imageWidth: 1600,
    imageHeight: 900,
    world: { frameClass: "bg-canvas", dark: false },
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured === true);
export const archiveProjects = projects.filter((p) => p.featured === false);

export const alexanderProject = projects.find((p) => p.id === "alexander")!;
export const satoriProject = projects.find((p) => p.id === "satori")!;
export const atlasProject = projects.find((p) => p.id === "atlas")!;
export const noesisProject = projects.find((p) => p.id === "noesis")!;
export const marginaiProject = projects.find((p) => p.id === "marginai")!;

/** Abstract public labels on the ATLAS homepage visual — not a feature recipe. */
export const atlasLayers = [
  "Evidence",
  "Intelligence",
  "Context",
  "Validation",
] as const;
