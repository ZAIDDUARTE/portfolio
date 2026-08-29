/**
 * Public-safe Noesis case-study content for /work/noesis.
 * Describes system intent, engineering judgment, and evidence boundaries —
 * not proprietary formulas, internal infrastructure, or clinical claims.
 */

export const noesisMeta = {
  caseNumber: "002",
  title: "Noesis",
  subtitle: "Environmental Health Intelligence",
  platformTitle: "Environmental Health Intelligence Platform",
  role: "Lead Developer / AI & Geospatial Data Engineer",
  organization: "Beyond Intelligence",
  domain: "Environmental Health + Geospatial Systems",
  status: "Engineering Foundation",
  href: "/work/noesis",
  statement:
    "Making environmental context traceable enough to inform how operational healthcare demand may be understood — without confusing association with diagnosis.",
  oneLine:
    "A modular environmental-health intelligence platform exploring how atmospheric, geospatial, temporal, and demographic context can be unified into confidence-aware spatial intelligence for decision support.",
  disclaimer:
    "This case study describes an intelligence and decision-support engineering effort. It is not medical advice, not a diagnostic tool, and does not claim clinical validation or causal proof of health outcomes.",
} as const;

export const noesisAssets = {
  hero: "/images/noesis/noesis-hero.webp",
  heroWidth: 1693,
  heroHeight: 929,
  preview: "/images/noesis/noesis-preview.webp",
  previewWidth: 1600,
  previewHeight: 878,
  og: "/images/noesis/noesis-hero.webp",
} as const;

/** Analytical framing — not a universal causal law. */
export const noesisDemandChain = [
  {
    index: "01",
    label: "Environmental conditions",
    body: "Air quality, weather, pollen, and related atmospheric context shifting across hours and days.",
  },
  {
    index: "02",
    label: "Household exposure & context",
    body: "How environmental change may interact with a child's sensitivity, prior history, and local setting.",
  },
  {
    index: "03",
    label: "Symptoms or parental concern",
    body: "Gradual symptom development or uncertainty that parents observe before care is sought.",
  },
  {
    index: "04",
    label: "Care-seeking behavior",
    body: "Calls, messages, and visit requests often driven by the need to reduce uncertainty — not only severity.",
  },
  {
    index: "05",
    label: "Clinic demand",
    body: "Operational pressure visible only when many independent decisions converge in time.",
  },
] as const;

export const noesisArchitectureLayers = [
  {
    id: "observations",
    label: "Observation Layer",
    body: "Air-monitoring readings, meteorology, temporal encodings, and provenance flags — distinguishing measured values from interpolated estimates.",
  },
  {
    id: "spatial",
    label: "Spatial Context Layer",
    body: "Grid-based geographic identity: geometry, land composition, terrain, proximity, and environmental context scores.",
  },
  {
    id: "connectivity",
    label: "Connectivity Layer",
    body: "Relationships between neighboring regions — distance, environmental similarity, and terrain-sensitive dispersion — modeled as a spatial network rather than isolated points.",
  },
  {
    id: "temporal",
    label: "Temporal Intelligence Layer",
    body: "Multi-scale baselines, daily windows, first-order changes, and acceleration features that separate spikes from sustained trends.",
  },
  {
    id: "inference",
    label: "Inference Layer",
    body: "A proposed modular learning pipeline combining per-timestamp feature fusion, sequence modeling, and multi-source contextual inference into structured risk profiles.",
  },
] as const;

export const noesisSignalLayers = [
  {
    title: "Atmospheric observations",
    body: "Pollutant channels, weather variables, and cyclical time encodings from monitoring networks and related sources.",
  },
  {
    title: "Geographic structure",
    body: "Grid geometries, land-cover composition, elevation, and urban–rural context mapped into consistent spatial units.",
  },
  {
    title: "Spatial relationships",
    body: "Neighbor-aware connectivity supporting interpolation, spatial attention, and cross-region anomaly awareness.",
  },
  {
    title: "Temporal behavior",
    body: "Hourly histories expanded into daily windows, baselines, deltas, and acceleration signals across multiple horizons.",
  },
  {
    title: "Confidence & provenance",
    body: "Source traceability, interpolation flags, and pollutant-specific certainty — so estimated values are not treated as equivalent to direct measurements.",
  },
  {
    title: "Population context",
    body: "Demographic framing intended to support health-oriented interpretation — always at aggregated, public-safe levels of abstraction.",
  },
] as const;

export const noesisProcessingPhases = [
  {
    index: "01",
    title: "Ingest & standardize",
    body: "Heterogeneous environmental observations normalized into consistent schemas, units, and ordering.",
  },
  {
    index: "02",
    title: "Spatialize & connect",
    body: "Events mapped to grids; neighbor relationships and environmental metadata attached.",
  },
  {
    index: "03",
    title: "Temporalize",
    body: "Multi-horizon aggregates, baselines, and change features computed with leakage-aware controls.",
  },
  {
    index: "04",
    title: "Contextualize",
    body: "Derived environmental context assembled with confidence, provenance, and masking for variable geometry.",
  },
  {
    index: "05",
    title: "Support decisions",
    body: "Structured outputs intended for operational interpretation — not autonomous clinical action.",
  },
] as const;

export const noesisRoleColumns = [
  {
    title: "Architecture",
    body: "Translated scientific specifications into executable schemas, pipeline boundaries, and modular data layers.",
  },
  {
    title: "Geospatial engineering",
    body: "Built grid processing, adjacency modeling, hotspot workflows, interpolation, and deterministic tensorization.",
  },
  {
    title: "Scientific rigor",
    body: "Implemented leakage-safe preprocessing, QA controls, provenance tracking, and reproducible CLI tooling.",
  },
] as const;

export const noesisContributions = [
  "Designed unified schemas for environmental, spatial, adjacency, and temporal data layers.",
  "Implemented grid-based geospatial processing across multiple geometry types.",
  "Built pollutant-specific interpolation, hotspot detection, and certainty workflows.",
  "Engineered multi-horizon temporal aggregates, deltas, and acceleration features.",
  "Developed deterministic tensorization with ordering, padding, and masks for variable geometry.",
  "Implemented leakage-safe normalization, chronological splitting, and future-information flags.",
  "Produced reproducible command-line tools and scientist-friendly handover documentation.",
  "Supported architecture of a modular Feature Adapter–TCN–Transformer inference pipeline.",
] as const;

export const noesisGovernancePrinciples = [
  {
    title: "Privacy by aggregation",
    body: "Interpretation stays at geographic and population-safe levels — never patient-level exposure in public systems.",
  },
  {
    title: "Provenance & traceability",
    body: "Measured and interpolated values remain distinguishable, with source metadata preserved for audit.",
  },
  {
    title: "Reproducibility",
    body: "Frozen preprocessing parameters, schema enforcement, and documented pipelines support repeatable runs.",
  },
  {
    title: "Non-diagnostic boundaries",
    body: "Outputs support contextual understanding and operational preparedness — not diagnosis or treatment decisions.",
  },
  {
    title: "Appropriate use",
    body: "Associations and signals are presented with uncertainty; causal clinical conclusions are out of scope.",
  },
  {
    title: "Leakage prevention",
    body: "Training-only fitting, chronological splits, and explicit flags for future-contaminated interpolation.",
  },
] as const;

export const noesisTechnologies = [
  "Python",
  "PyTorch",
  "Pandas",
  "NumPy",
  "DuckDB",
  "Parquet",
  "Geospatial data engineering",
  "Time-series engineering",
  "AWS",
  "Docker",
] as const;

export const noesisTradeoffs = [
  {
    title: "Coverage vs precision",
    body: "Sparse monitoring requires interpolation — but interpolated estimates must remain visibly less certain than direct measurements.",
  },
  {
    title: "Timeliness vs stability",
    body: "Faster signals can help operational awareness, but unstable estimates erode trust in decision support.",
  },
  {
    title: "Interpretability vs complexity",
    body: "Rich spatial-temporal models add capability; layered abstractions keep outputs explainable to scientific users.",
  },
  {
    title: "Association vs causality",
    body: "Environmental context may correlate with symptom timing without proving causal clinical mechanisms.",
  },
  {
    title: "Granularity vs privacy",
    body: "Hyperlocal intelligence must not collapse into identifiable household or patient-level inference.",
  },
] as const;

export type NoesisStatusTone =
  | "implemented"
  | "designed"
  | "exploratory"
  | "not-evidenced";

export const noesisStatusRows: ReadonlyArray<{
  workstream: string;
  status: string;
  tone: NoesisStatusTone;
  claim: string;
}> = [
  {
    workstream: "Five data-layer schemas & pipelines",
    status: "Implemented",
    tone: "implemented",
    claim: "Model-ready environmental, spatial, adjacency, temporal, and label-oriented database architectures with QA controls.",
  },
  {
    workstream: "Geospatial preprocessing & tensorization",
    status: "Implemented",
    tone: "implemented",
    claim: "Grid workflows, interpolation, hotspot detection, deterministic ordering, padding, and masks.",
  },
  {
    workstream: "Leakage-safe preprocessing",
    status: "Implemented",
    tone: "implemented",
    claim: "Training-only scalers, chronological splits, provenance flags, and future-information detection.",
  },
  {
    workstream: "Triad neural architecture",
    status: "Designed",
    tone: "designed",
    claim: "Modular Feature Adapter, TCN, and Transformer pipeline specified — not evidenced as fully trained or deployed here.",
  },
  {
    workstream: "Pediatric demand context",
    status: "Exploratory",
    tone: "exploratory",
    claim: "Analytical framing connects environmental intelligence to operational demand questions — not a validated clinical product or forecasting system.",
  },
  {
    workstream: "Production real-time API",
    status: "Not evidenced",
    tone: "not-evidenced",
    claim: "No claim of live global inference API or completed end-to-end model deployment from available engineering artifacts.",
  },
  {
    workstream: "Clinical validation",
    status: "Not evidenced",
    tone: "not-evidenced",
    claim: "No claim of diagnostic accuracy, causal proof, or peer-reviewed clinical outcomes.",
  },
] as const;

export const noesisRelatedArticles = [
  {
    title: "The Missing Context in Pediatric Respiratory Visits",
    description:
      "Why a respiratory visit captures the condition — but often not the sequence that led to it.",
    href: "https://www.beyondintelligence.ai/blog/the-missing-context-in-pediatric-respiratory-visits",
    image: "/images/noesis/article-missing-context.webp",
    imageWidth: 1672,
    imageHeight: 941,
    attribution: "Beyond Intelligence",
  },
  {
    title:
      "From Parent Concern to Clinic Pressure: The Hidden Chain Behind Pediatric Respiratory Demand",
    description:
      "How synchronized care-seeking under uncertainty can compress into operational clinic pressure.",
    href: "https://www.beyondintelligence.ai/blog/from-parent-concern-to-clinic-pressure-the-hidden-chain-behind-pediatric-respiratory-demand",
    image: "/images/noesis/article-hidden-chain.webp",
    imageWidth: 1672,
    imageHeight: 941,
    attribution: "Beyond Intelligence",
  },
  {
    title:
      "Why Pediatric Demand Often Feels Random — And Why It May Not Be",
    description:
      "What looks like random demand may reflect a hidden sequence starting outside the clinic's view.",
    href: "https://www.beyondintelligence.ai/blog/why-pediatric-demand-often-feels-random-and-why-it-may-not-be",
    image: "/images/noesis/article-demand-random.webp",
    imageWidth: 1672,
    imageHeight: 941,
    attribution: "Beyond Intelligence",
  },
  {
    title: "Environmental Intelligence Is Bigger Than Climate Politics",
    description:
      "Environmental intelligence as operational visibility — helping institutions see stress before it fully propagates.",
    href: "https://www.beyondintelligence.ai/blog/environmental-intelligence-is-bigger-than-climate-politics",
    image: "/images/noesis/article-env-intelligence.webp",
    imageWidth: 1535,
    imageHeight: 1024,
    attribution: "Beyond Intelligence",
  },
] as const;

export const noesisValidationItems = [
  {
    title: "Engineering validation",
    body: "Schema enforcement, duplicate control, physical-range checks, QA automation, and reproducible pipeline runs across large environmental datasets.",
  },
  {
    title: "Spatial consistency",
    body: "Deterministic geometry ordering, adjacency integrity checks, and confidence-aware interpolation workflows.",
  },
  {
    title: "Temporal integrity",
    body: "Chronological splitting, leakage flags for future-informed values, and multi-horizon feature consistency.",
  },
  {
    title: "Model readiness",
    body: "Fixed-width tensors, masks, and multi-task output design prepared for supervised learning — separate from evidenced end-to-end training.",
  },
  {
    title: "Limitations",
    body: "Sparse monitoring, interpolation uncertainty, demographic generalization limits, and the gap between environmental association and clinical causality remain explicit constraints.",
  },
  {
    title: "Future work",
    body: "Deeper operational evaluation against healthcare demand signals, rigorous uncertainty communication, and any clinical collaboration would require separate validation design.",
  },
] as const;

export const noesisReflection =
  "The hardest part was not choosing a model architecture — it was making fragmented environmental reality legible without pretending every grid cell is equally knowable. Noesis forced a discipline I now apply everywhere: separate what was measured from what was estimated, separate what was engineered from what was merely designed, and never let decision-support outputs sound more certain than the evidence underneath them.";
