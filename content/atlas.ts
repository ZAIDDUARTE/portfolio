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
  href: "/work/atlas",
  statement:
    "A completed environmental risk intelligence system that transforms institutional environmental and geospatial evidence into governed, reproducible intelligence for healthcare and insurance evaluation.",
  oneLine:
    "A completed environmental risk intelligence system that transforms institutional environmental and geospatial evidence into governed, reproducible intelligence for healthcare and insurance evaluation.",
  modelExplanation:
    "ATLAS represents environmental burden across time scales and geographic contexts. It combines broad environmental conditions with controlled place-based context to produce consistent, explainable risk intelligence. Feature engineering, normalization, and scoring methodology remain proprietary.",
  scopeNote:
    "Technical implementation is complete within the documented system scope. This case study does not claim customer adoption, commercial outcomes, or market performance.",
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
    body: "Honest validation across positive and negative results, with integrity and quality gates before release.",
  },
] as const;

export const atlasRoleColumns = [
  {
    title: "Architecture",
    body: "Translated scientific and actuarial requirements into system boundaries, contracts, and governed workflows.",
  },
  {
    title: "Execution",
    body: "Built large-scale evidence processing, governed releases, cloud delivery, and national-scale execution.",
  },
  {
    title: "Validation",
    body: "Developed reproducible healthcare and property-validation workflows while preserving locked methodology after results were known.",
  },
] as const;

export const atlasContributions = [
  "Translated scientific specifications into governed, reproducible production systems.",
  "Architected evidence acquisition, intelligence governance, contextual evaluation, and release verification.",
  "Led incremental large-scale processing for national environmental intelligence workloads.",
  "Built controlled local-context evaluation and population-aware geographic views.",
  "Developed reproducible Medicare and property-validation workflows with honest reporting of weak findings.",
] as const;

/** Abstract architecture layers for the scroll narrative — not a computation recipe. */
export const atlasArchitectureLayers = [
  {
    id: "evidence",
    label: "Scientific Evidence",
    body: "Institutional environmental and geospatial sources become longitudinal histories under explicit data contracts.",
  },
  {
    id: "intelligence",
    label: "Governed Intelligence",
    body: "Version-controlled normalization produces governed environmental intelligence released reproducibly.",
  },
  {
    id: "context",
    label: "Contextual Evaluation",
    body: "Canonical spatial representation and controlled local context support consistent evaluation without false precision.",
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
    body: "Heterogeneous scientific evidence acquired under versioned contracts.",
  },
  {
    index: "02",
    title: "Intelligence Governed",
    body: "Environmental intelligence produced through a governed, version-controlled system.",
  },
  {
    index: "03",
    title: "Context Evaluated",
    body: "Controlled place-based context evaluated alongside broader environmental conditions.",
  },
  {
    index: "04",
    title: "Release Verified",
    body: "Each release passes integrity, consistency, and reproducibility gates before downstream evaluation.",
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
    title: "Honest Reporting",
    body: "Positive and negative results are disclosed without retuning methodology after the fact.",
  },
] as const;

export const medicareValidation = {
  framing:
    "In a held-out county-level study, adding ATLAS to a locked conventional baseline produced measurable explanatory improvement. The methodology was not retuned after results were known.",
  disclaimer:
    "This did not establish causality, universal performance, or production actuarial readiness.",
} as const;

export const acoValidation = {
  framing:
    "A later prospective ACO study produced only marginal improvement. ATLAS coefficients were not statistically distinguishable from zero.",
  interpretation:
    "The signal did not generalize strongly to the more demanding prospective design.",
} as const;

export const atlasProperty = {
  framing:
    "A bounded property-scale evaluation exercised the complete controlled workflow—from governed evidence through geographic aggregation to release verification—within documented system scope.",
  completed: [
    "Bounded property-scale evaluation",
    "End-to-end governed workflow",
    "Integrity and quality gates before release",
  ],
} as const;

export const atlasTradeoffs = [
  {
    index: "01",
    title: "Spatial Resolution vs Scientific Honesty",
    body: "Preserve broader scientific signals. Add controlled local context. Do not manufacture false precision.",
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
] as const;

export const atlasTechnicalDelivery = [
  {
    capability: "Governed Evidence Acquisition",
    detail:
      "Heterogeneous scientific sources acquired under versioned contracts with explicit provenance and attribution.",
  },
  {
    capability: "Reproducible Intelligence Pipeline",
    detail:
      "Version-controlled normalization produces governed environmental intelligence that can be released and reconstructed reproducibly.",
  },
  {
    capability: "Geographic Evaluation",
    detail:
      "Canonical spatial representation with controlled local context and population-aware aggregation across operational contexts.",
  },
  {
    capability: "Healthcare Validation Workflow",
    detail:
      "Locked-baseline Medicare and ACO study designs with immutable validation records and honest reporting of weak findings.",
  },
  {
    capability: "Property Evaluation Workflow",
    detail:
      "Bounded property-scale evaluation through the complete controlled workflow from evidence to release verification.",
  },
  {
    capability: "Integrity and Release Controls",
    detail:
      "Defined integrity, consistency, and reproducibility gates before any release reaches downstream evaluation.",
  },
] as const;

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
    group: "Reproducible Scientific Computing",
    body: "Versioned evidence, quality gates, and attributable releases.",
  },
] as const;

export const atlasMicroExposureCopy = {
  headline: "Controlled local context.",
  body: "Regional conditions do not fully describe how exposure varies between places. ATLAS incorporates bounded local context while preserving the integrity of the broader scientific signal.",
} as const;

export const atlasResolutionCopy = {
  headline: "One system. Multiple operational contexts.",
  body: "ATLAS supports consistent interpretation across portfolio, territory, site, and location contexts. Resolution is governed by evidence quality and application needs.",
  contexts: ["Portfolio", "Territory", "Site", "Location"] as const,
} as const;
