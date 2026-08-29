/**
 * Public-safe ATLAS case-study content for /work/atlas.
 * Describes outcomes, judgment and evidence — not a reconstruction recipe.
 */

export const atlasMeta = {
  caseNumber: "001",
  title: "ATLAS",
  subtitle: "Environmental Risk Intelligence",
  platformTitle: "Environmental Risk Intelligence Platform",
  role: "Technical Lead / Lead Developer",
  domain: "Healthcare + Insurance + Geospatial",
  status: "Active Validation",
  href: "/work/atlas",
  statement:
    "Turning planetary-scale environmental evidence into governed, reproducible risk intelligence.",
  oneLine:
    "A production-grade environmental intelligence platform that transforms institutional environmental and geospatial evidence into governed, reproducible risk signals for healthcare and insurance applications.",
  modelExplanation:
    "ATLAS represents environmental burden across multiple time scales and geographic contexts. It combines broad environmental conditions with controlled place-based context to produce consistent, explainable risk intelligence. The underlying feature engineering, normalization, and scoring methodology remain proprietary.",
} as const;

export const atlasAssets = {
  heroVideo: "/videos/atlas/atlas-hero.mp4",
  heroPoster: "/images/atlas/atlas-hero-poster.jpg",
  demoVideo: "/videos/atlas/atlas-demo.mp4",
  demoPoster: "/images/atlas/atlas-demo-poster.jpg",
  tech01: "/images/atlas/atlas-tech-01.webp",
  tech02: "/images/atlas/atlas-tech-02.webp",
  resolution: "/images/atlas/atlas-resolution.webp",
} as const;

/** Four abstract public layers — no internal transformation recipe. */
export const atlasLayers = [
  {
    index: "01",
    title: "Scientific Evidence",
    body: "Institutional environmental and geospatial evidence assembled into longitudinal environmental histories.",
  },
  {
    index: "02",
    title: "Governed Intelligence",
    body: "Version-controlled normalization and governed environmental intelligence with reproducible releases.",
  },
  {
    index: "03",
    title: "Contextual Evaluation",
    body: "Canonical spatial representation with controlled local context and population-aware geographic aggregation.",
  },
  {
    index: "04",
    title: "Validation and Delivery",
    body: "Honest validation across positive and negative results, with explicit integrity and quality gates before release.",
  },
] as const;

export const atlasRoleColumns = [
  {
    title: "Architecture",
    body: "Translated scientific and actuarial requirements into executable system boundaries, contracts and governed workflows.",
  },
  {
    title: "Execution",
    body: "Built and coordinated large-scale evidence processing, governed releases, cloud delivery and national-scale execution.",
  },
  {
    title: "Validation",
    body: "Developed reproducible healthcare and property-validation workflows while preserving locked methodology after results were known.",
  },
] as const;

export const atlasContributions = [
  "Translated scientific specifications into governed, reproducible production systems.",
  "Architected evidence acquisition, intelligence governance, contextual evaluation and release verification.",
  "Led incremental large-scale processing for national environmental intelligence workloads.",
  "Designed controlled local-context evaluation and population-aware geographic views.",
  "Developed reproducible Medicare and property-validation workflows.",
  "Coordinated versioned evidence, quality gates and long-running national execution.",
  "Investigated and reported positive, weak and failed validation outcomes without altering locked methods after results were known.",
] as const;

/** Abstract architecture layers for the scroll narrative — not a computation recipe. */
export const atlasArchitectureLayers = [
  {
    id: "evidence",
    label: "Scientific Evidence",
    body: "Institutional environmental and geospatial sources become longitudinal environmental histories under explicit data contracts.",
  },
  {
    id: "intelligence",
    label: "Governed Intelligence",
    body: "Version-controlled normalization produces governed environmental intelligence that can be released reproducibly.",
  },
  {
    id: "context",
    label: "Contextual Evaluation",
    body: "Canonical spatial representation and controlled local context support consistent evaluation without inventing false precision.",
  },
  {
    id: "delivery",
    label: "Validation and Delivery",
    body: "Each release passes integrity and quality gates before healthcare and property evaluation.",
  },
] as const;

export const atlasProductionPhases = [
  {
    index: "01",
    title: "Evidence Acquired",
    body: "Heterogeneous scientific evidence is acquired under versioned contracts.",
  },
  {
    index: "02",
    title: "Intelligence Governed",
    body: "Environmental intelligence is produced through a governed, version-controlled system.",
  },
  {
    index: "03",
    title: "Context Evaluated",
    body: "Controlled place-based context is evaluated alongside broader environmental conditions.",
  },
  {
    index: "04",
    title: "Release Verified",
    body: "Each release passes defined integrity, consistency and reproducibility gates before downstream evaluation.",
  },
] as const;

export const atlasProductionStatement =
  "ATLAS transforms heterogeneous scientific evidence through a governed, version-controlled system. Each release passes defined integrity, consistency, and reproducibility gates before downstream evaluation.";

export const atlasTrustPrinciples = [
  {
    title: "Version-Controlled Evidence",
    body: "Inputs and releases remain attributable across time.",
  },
  {
    title: "Reproducible Processing",
    body: "The same governed release can be reconstructed from recorded evidence.",
  },
  {
    title: "Traceable Releases",
    body: "Downstream evaluation points to a known, attributable release.",
  },
  {
    title: "Explicit Quality Gates",
    body: "Integrity and consistency checks must pass before delivery.",
  },
  {
    title: "Immutable Validation Records",
    body: "Validation outcomes are retained as part of the evidence trail.",
  },
  {
    title: "Honest Reporting",
    body: "Positive and negative results are disclosed without retuning methodology after the fact.",
  },
] as const;

export const atlasMedicare = {
  baselineR2: 0.12354,
  baselinePlusAtlasR2: 0.203197,
  absoluteDelta: 0.079657,
  relativeIncreasePct: 64.5,
  framing:
    "In a held-out county-level study, adding ATLAS to a locked conventional baseline increased R² from 0.123540 to 0.203197. A later prospective ACO study produced only marginal improvement and no statistically clear ATLAS coefficient. The methodology was not retuned after either result.",
  disclaimer:
    "This did not establish causality, universal performance, or production actuarial readiness.",
} as const;

export const atlasAco = {
  pooledMaeImprovementPct: -0.4,
  yearlyRangePct: [-0.26, -0.58] as const,
  coefficients:
    "ATLAS coefficients were not statistically distinguishable from zero.",
  beneficiaryWeightedSensitivityPct: 0.12,
  interpretation:
    "The signal did not generalize strongly to the more demanding prospective design.",
} as const;

export const atlasProperty = {
  lookbackDates: 365,
  aggregateRowsLabel: "42.2M+",
  status: "Canary Certified",
  framing:
    "A bounded property-scale canary processed 365 governed dates and more than 42.2 million aggregate records through the complete controlled workflow. That milestone validated the execution architecture at scale; the national predictive-validation study remains ongoing.",
  completed: [
    "Bounded property-scale canary",
    "365 governed dates",
    "More than 42.2 million aggregate records through the controlled workflow",
  ],
  ongoing: [
    "National property processing",
    "Downstream quality review",
    "Remaining study controls",
    "Final study execution",
    "Final predictive conclusions",
  ],
} as const;

export const atlasTradeoffs = [
  {
    index: "01",
    title: "Spatial Resolution vs Scientific Honesty",
    body: "Preserve the integrity of broader scientific signals. Add controlled local context. Do not manufacture false precision.",
  },
  {
    index: "02",
    title: "Accuracy vs Compute Cost",
    body: "Prefer incremental large-scale processing over needless full recomputation while keeping governed results stable.",
  },
  {
    index: "03",
    title: "Missing Data vs False Precision",
    body: "Retain coverage and sensitivity analysis rather than silently inventing missing values.",
  },
  {
    index: "04",
    title: "Fresh Inputs vs Upstream Revisions",
    body: "Support versioned evidence and governed updates when upstream scientific inputs change.",
  },
  {
    index: "05",
    title: "Positive Results vs Generalization",
    body: "Preserve locked methods when later validation is weaker.",
  },
  {
    index: "06",
    title: "Completeness vs Integrity",
    body: "A partially completed certified release is preferable to a complete release with uncertain integrity.",
  },
] as const;

export type AtlasStatusTone =
  | "locked"
  | "implemented"
  | "completed"
  | "ongoing"
  | "not-evidenced";

export const atlasStatusRows: {
  workstream: string;
  status: string;
  tone: AtlasStatusTone;
  claim: string;
}[] = [
  {
    workstream: "Scientific Evidence Contracts",
    status: "Locked Specification",
    tone: "locked",
    claim: "Methodology boundaries and evidence contracts defined",
  },
  {
    workstream: "Version-Controlled Normalization",
    status: "Implemented",
    tone: "implemented",
    claim: "Governed normalization infrastructure in place",
  },
  {
    workstream: "Population-Aware Geographic Views",
    status: "Implemented",
    tone: "implemented",
    claim: "Consistent geographic evaluation used in Medicare validation",
  },
  {
    workstream: "Medicare County Study",
    status: "Completed",
    tone: "completed",
    claim: "Strong held-out improvement in the exact study",
  },
  {
    workstream: "Prospective ACO Study",
    status: "Completed",
    tone: "completed",
    claim: "Marginal, statistically unclear result",
  },
  {
    workstream: "Property Canary",
    status: "Completed",
    tone: "completed",
    claim: "365 governed dates and 42.2M+ aggregate records through controlled workflow",
  },
  {
    workstream: "National Property Processing",
    status: "Ongoing",
    tone: "ongoing",
    claim: "National-scale execution and quality review in progress",
  },
  {
    workstream: "Full Property Validation",
    status: "Ongoing",
    tone: "ongoing",
    claim: "Do not claim a final predictive result",
  },
  {
    workstream: "Commercial Insurer Deployment",
    status: "Not Evidenced",
    tone: "not-evidenced",
    claim: "Do not claim production adoption by insurers",
  },
];

export const atlasCapabilities = [
  {
    group: "Python Data Systems",
    body: "Large-scale scientific data engineering and reproducible analysis.",
  },
  {
    group: "Cloud Infrastructure",
    body: "Governed cloud delivery for national-scale environmental workloads.",
  },
  {
    group: "Geospatial Computation",
    body: "Canonical spatial representation and geographic evaluation at multiple contexts.",
  },
  {
    group: "Statistical Validation",
    body: "Locked-baseline healthcare and property validation designs.",
  },
  {
    group: "Columnar Analytics",
    body: "Efficient analytical processing for large governed releases.",
  },
  {
    group: "API Engineering",
    body: "Delivery interfaces for downstream evaluation workflows.",
  },
  {
    group: "Reproducible Scientific Computing",
    body: "Versioned evidence, quality gates and attributable releases.",
  },
] as const;

export const atlasMicroExposureCopy = {
  headline: "Controlled local context.",
  body: "Regional environmental conditions do not fully describe how exposure varies between places. ATLAS incorporates bounded local context from the surrounding physical and built environment while preserving the integrity of the broader scientific signal.",
} as const;

export const atlasResolutionCopy = {
  headline: "One system. Multiple operational contexts.",
  body: "ATLAS supports consistent interpretation across portfolio, territory, site, and location contexts. Resolution is governed by evidence quality and application needs rather than artificial precision.",
  contexts: ["Portfolio", "Territory", "Site", "Location"] as const,
} as const;
