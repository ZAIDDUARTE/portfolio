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
};

export const projects: Project[] = [
  {
    id: "atlas",
    index: "01",
    caseNumber: "001",
    title: "ATLAS",
    subtitle: "Environmental Risk Intelligence",
    role: "Technical Lead",
    domain: "Geospatial & Risk Intelligence",
    domains: [
      "Geospatial Systems",
      "Risk Intelligence",
      "Healthcare",
      "Insurance",
      "Data Infrastructure",
    ],
    hook: "How can governed environmental and geospatial evidence become reproducible risk intelligence across operational contexts?",
    href: "/work/atlas",
    image: "/images/atlas/preview.svg",
    imageAlt: "ATLAS environmental risk intelligence system preview",
    imageWidth: 1600,
    imageHeight: 900,
    world: { frameClass: "bg-dark", dark: true },
    dominant: true,
  },
  {
    id: "noesis",
    index: "02",
    caseNumber: "002",
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
  },
  {
    id: "marginai",
    index: "03",
    caseNumber: "003",
    title: "MarginAI",
    subtitle: "Inference Optimization Infrastructure",
    role: "CTO & Technical Lead",
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
  },
];

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
