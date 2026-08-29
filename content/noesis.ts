/**
 * Public-safe Noesis case-study content for /work/noesis.
 * Describes system intent, engineering judgment, and product boundaries —
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
  href: "/work/noesis",
  statement:
    "Making environmental context traceable enough to inform how operational healthcare demand may be understood — without confusing association with diagnosis.",
  oneLine:
    "A modular environmental-health intelligence system that unifies atmospheric, geospatial, temporal and demographic context into traceable, confidence-aware decision support.",
  disclaimer:
    "Decision-support engineering only — not medical advice, not a diagnostic tool, and not a claim of causal proof or clinical validation.",
  scopeNote:
    "The platform described here is technically complete as a modular intelligence system. This case study does not claim commercial adoption, clinical deployment, or validated health outcomes.",
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
    body: "Air quality, weather, pollen, and atmospheric context shifting across hours and days.",
  },
  {
    index: "02",
    label: "Household exposure & context",
    body: "How environmental change may interact with sensitivity, history, and local setting.",
  },
  {
    index: "03",
    label: "Symptoms or parental concern",
    body: "Gradual symptom development or uncertainty parents observe before care is sought.",
  },
  {
    index: "04",
    label: "Care-seeking behavior",
    body: "Calls and visit requests driven by uncertainty as much as severity.",
  },
  {
    index: "05",
    label: "Clinic demand",
    body: "Operational pressure visible when many independent decisions converge in time.",
  },
] as const;

export const noesisArchitectureLayers = [
  {
    id: "observations",
    label: "Observation Layer",
    body: "Monitoring readings, meteorology, temporal encodings, and provenance flags — measured values distinguished from interpolated estimates.",
  },
  {
    id: "spatial",
    label: "Spatial Context Layer",
    body: "Grid-based geographic identity: geometry, land composition, terrain, proximity, and environmental context scores.",
  },
  {
    id: "connectivity",
    label: "Connectivity Layer",
    body: "Neighbor relationships — distance, environmental similarity, terrain-sensitive dispersion — modeled as a spatial network.",
  },
  {
    id: "temporal",
    label: "Temporal Intelligence Layer",
    body: "Multi-scale baselines, daily windows, first-order changes, and acceleration features separating spikes from sustained trends.",
  },
  {
    id: "inference",
    label: "Inference Layer",
    body: "A modular learning pipeline — per-timestamp feature fusion, sequence modeling, and multi-source contextual inference into structured risk profiles.",
  },
] as const;

export const noesisSignalLayers = [
  {
    title: "Atmospheric observations",
    body: "Pollutant channels, weather variables, and cyclical time encodings from monitoring networks.",
  },
  {
    title: "Geographic structure",
    body: "Grid geometries, land-cover composition, elevation, and urban–rural context in consistent spatial units.",
  },
  {
    title: "Spatial relationships",
    body: "Neighbor-aware connectivity for interpolation, spatial attention, and cross-region anomaly awareness.",
  },
  {
    title: "Temporal behavior",
    body: "Hourly histories expanded into daily windows, baselines, deltas, and acceleration across horizons.",
  },
  {
    title: "Confidence & provenance",
    body: "Source traceability, interpolation flags, and pollutant-specific certainty — estimates never treated as direct measurements.",
  },
  {
    title: "Population context",
    body: "Demographic framing at aggregated, public-safe levels of abstraction.",
  },
] as const;

export const noesisProcessingPhases = [
  {
    index: "01",
    title: "Ingest & standardize",
    body: "Heterogeneous observations normalized into consistent schemas, units, and ordering.",
  },
  {
    index: "02",
    title: "Spatialize & connect",
    body: "Events mapped to grids; neighbor relationships and environmental metadata attached.",
  },
  {
    index: "03",
    title: "Temporalize",
    body: "Multi-horizon aggregates, baselines, and change features with leakage-aware controls.",
  },
  {
    index: "04",
    title: "Contextualize",
    body: "Environmental context assembled with confidence, provenance, and masks for variable geometry.",
  },
  {
    index: "05",
    title: "Support decisions",
    body: "Structured outputs for operational interpretation — not autonomous clinical action.",
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
    body: "Leakage-safe preprocessing, QA controls, provenance tracking, and reproducible CLI tooling.",
  },
] as const;

export const noesisContributions = [
  "Unified schemas for environmental, spatial, adjacency, and temporal data layers.",
  "Grid-based geospatial processing across multiple geometry types.",
  "Pollutant-specific interpolation, hotspot detection, and certainty workflows.",
  "Multi-horizon temporal aggregates, deltas, and acceleration features.",
  "Deterministic tensorization with ordering, padding, and masks for variable geometry.",
  "Leakage-safe normalization, chronological splitting, and future-information flags.",
  "Reproducible command-line tools and scientist-friendly handover documentation.",
  "Modular Feature Adapter–TCN–Transformer inference pipeline.",
] as const;

export const noesisGovernancePrinciples = [
  {
    title: "Privacy by aggregation",
    body: "Interpretation stays at geographic and population-safe levels — never patient-level exposure.",
  },
  {
    title: "Provenance & traceability",
    body: "Measured and interpolated values remain distinguishable, with source metadata preserved.",
  },
  {
    title: "Reproducibility",
    body: "Frozen preprocessing parameters, schema enforcement, and documented pipelines for repeatable runs.",
  },
  {
    title: "Non-diagnostic boundaries",
    body: "Outputs support contextual understanding and operational preparedness — not diagnosis or treatment.",
  },
  {
    title: "Appropriate use",
    body: "Signals presented with uncertainty; causal clinical conclusions are out of scope.",
  },
  {
    title: "Leakage prevention",
    body: "Training-only fitting, chronological splits, and flags for future-contaminated interpolation.",
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
    body: "Sparse monitoring requires interpolation — interpolated estimates must remain visibly less certain than direct measurements.",
  },
  {
    title: "Timeliness vs stability",
    body: "Faster signals aid operational awareness, but unstable estimates erode trust in decision support.",
  },
  {
    title: "Interpretability vs complexity",
    body: "Rich spatial-temporal models add capability; layered abstractions keep outputs explainable.",
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

export const noesisTechnicalDelivery = [
  {
    capability: "Data contracts",
    detail:
      "Unified schemas for environmental, spatial, adjacency, temporal, and label-oriented layers with enforced QA controls.",
  },
  {
    capability: "Geospatial grid",
    detail:
      "Grid processing, adjacency modeling, hotspot workflows, interpolation, and deterministic tensorization across geometry types.",
  },
  {
    capability: "Environmental & temporal processing",
    detail:
      "Multi-horizon aggregates, baselines, deltas, and acceleration features with leakage-aware chronological controls.",
  },
  {
    capability: "Provenance & quality",
    detail:
      "Source traceability, interpolation flags, physical-range checks, duplicate control, and reproducible pipeline runs.",
  },
  {
    capability: "Confidence-aware spatial intelligence",
    detail:
      "Pollutant-specific certainty workflows, neighbor-aware connectivity, and masks for variable geometry.",
  },
  {
    capability: "Decision-support outputs",
    detail:
      "Structured risk profiles and operational context assembled for interpretation — not autonomous clinical action.",
  },
  {
    capability: "Governed delivery",
    detail:
      "Reproducible CLI tooling, frozen preprocessing parameters, scientist-friendly documentation, and non-diagnostic product boundaries.",
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
    body: "Schema enforcement, duplicate control, physical-range checks, QA automation, and reproducible runs across large environmental datasets.",
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
    title: "Product boundaries",
    body: "Sparse monitoring, interpolation uncertainty, demographic generalization limits, and the distinction between environmental association and clinical causality remain explicit constraints.",
  },
] as const;

export const noesisReflection =
  "The hardest part was not choosing a model architecture — it was making fragmented environmental reality legible without pretending every grid cell is equally knowable. Noesis forced a discipline I now apply everywhere: separate what was measured from what was estimated, and never let decision-support outputs sound more certain than the evidence underneath them.";
