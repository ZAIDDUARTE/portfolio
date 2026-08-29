/**
 * Public-safe MarginAI case-study content for /work/marginai.
 * Describes architecture, judgment, and evidence boundaries —
 * not proprietary routing logic, benchmarks, or unverified savings claims.
 */

export const marginaiMeta = {
  caseNumber: "003",
  title: "MarginAI",
  subtitle: "LLM Inference Optimization",
  platformTitle: "LLM Cost-Optimization Infrastructure",
  role: "CTO & Technical Lead",
  domain: "AI Infrastructure + Inference Economics",
  status: "Product Architecture & MVP Design",
  href: "/work/marginai",
  evidenceNotice:
    "Architecture and MVP design only — not production-validated. No cost outcomes claimed.",
  statement:
    "A safety-first, OpenAI-compatible proxy architecture for reducing avoidable LLM inference cost — designed so applications change an API endpoint rather than their core architecture.",
  oneLine:
    "Designed as an OpenAI-compatible API proxy that evaluates each request against narrowly controlled optimization strategies and forwards the original request unchanged whenever modeled cost impact cannot be justified with sufficient confidence.",
  disclaimer:
    "This case study documents product and engineering architecture. It does not claim implementation, production validation, customer adoption, compatibility breadth, or achieved cost outcomes.",
} as const;

export const marginaiAssets = {
  hero: "/images/marginai/marginai-hero.svg",
  heroWidth: 1600,
  heroHeight: 900,
  preview: "/images/marginai/marginai-preview.svg",
  previewWidth: 1600,
  previewHeight: 900,
  og: "/og/marginai-case-study.png",
  ogWidth: 1200,
  ogHeight: 630,
} as const;

export const marginaiPrinciples = [
  {
    title: "Safety before cost reduction",
    body: "Never modify a request unless optimization confidence is sufficiently high.",
  },
  {
    title: "Output preservation",
    body: "Cost reduction is unacceptable if it meaningfully changes response quality or application behavior.",
  },
  {
    title: "Minimal integration",
    body: "Designed so customers change one API endpoint — not their application architecture.",
  },
  {
    title: "Invisible infrastructure",
    body: "Optimization is intended to run automatically without continuous manual tuning.",
  },
  {
    title: "Transparent economics",
    body: "Modeled cost impact, processed tokens, and fees are designed to remain measurable.",
  },
] as const;

export const marginaiGapLayers = [
  {
    label: "Visibility",
    body: "Understanding where tokens are spent and which requests repeat.",
  },
  {
    label: "Recommendation",
    body: "Identifying candidate optimizations without automatically applying them.",
  },
  {
    label: "Automated decision",
    body: "Applying only transformations that pass independent safety checks — as designed, not yet production-validated.",
  },
  {
    label: "Execution",
    body: "Forwarding optimized or original requests through a compatible proxy path.",
  },
  {
    label: "Verification",
    body: "Recording decisions, usage, and modeled cost impact for audit and billing.",
  },
] as const;

export const marginaiDecisionCriteria = [
  { label: "Quality preservation", body: "Will the transformation materially change model behavior?" },
  { label: "Latency contract", body: "Does the request require synchronous response?" },
  { label: "Cost impact", body: "Are input tokens reducible without losing required context?" },
  { label: "Reliability", body: "Can the optimization fail open to the original request?" },
  { label: "Context length", body: "Does history trimming risk removing dependencies?" },
  { label: "Capability requirements", body: "Do tools, parameters, or streaming constraints apply?" },
  { label: "Policy constraints", body: "Is the customer’s configuration compatible with this strategy?" },
] as const;

export const marginaiArchitectureLayers = [
  {
    id: "proxy",
    label: "Compatible Proxy",
    body: "OpenAI-compatible ingress designed for existing HTTP clients and SDKs with minimal integration change.",
  },
  {
    id: "auth",
    label: "Authentication & Metering",
    body: "API-key validation, organization boundaries, usage capture, and request identity — specified as platform requirements.",
  },
  {
    id: "engine",
    label: "Optimization Engine",
    body: "Independent evaluators for each optimization strategy with per-strategy confidence thresholds.",
  },
  {
    id: "provider",
    label: "Provider Forwarding",
    body: "Optimized or pass-through requests sent to the LLM provider; streaming compatibility specified among production requirements.",
  },
  {
    id: "ledger",
    label: "Usage & Cost Ledger",
    body: "Token accounting, baseline-versus-candidate cost comparison, billing events, and dashboard metrics.",
  },
] as const;

export const marginaiOptimizationStrategies = [
  {
    index: "01",
    title: "Exact-request caching",
    body: "Return a cached response when an identical eligible request was already processed — accounting for parameters that affect determinism.",
    benefit: "Immediate cost avoidance and lower latency for cache-safe workloads.",
  },
  {
    index: "02",
    title: "Duplicate-context removal",
    body: "Detect repeated system prompts, instructions, or context blocks and remove redundant tokens before forwarding.",
    benefit: "Reduces input-token waste without intentionally removing semantic information.",
  },
  {
    index: "03",
    title: "Safe conversation trimming",
    body: "Remove older messages only when confidence is extremely high that they no longer affect the current turn.",
    benefit: "Controls long-history cost while preserving tool context and user preferences when uncertain.",
  },
  {
    index: "04",
    title: "Cache-prefix shaping",
    body: "Structure stable prompt prefixes so repeated system content can benefit from provider-side prompt caching.",
    benefit: "Structural optimization — not unrestricted semantic rewriting.",
  },
  {
    index: "05",
    title: "Batch-eligibility detection",
    body: "Identify workloads that may suit asynchronous batch pathways when the customer explicitly enables that behavior.",
    benefit: "Cost reduction only when latency contracts allow — never applied silently by default.",
  },
] as const;

export const marginaiProcessingPhases = [
  { index: "01", title: "Receive request", body: "Validate compatibility and capture baseline token estimates." },
  { index: "02", title: "Evaluate strategies", body: "Run each optimization independently against safety thresholds." },
  { index: "03", title: "Apply or bypass", body: "Transform only validated changes; otherwise preserve the original payload." },
  { index: "04", title: "Forward to provider", body: "Send optimized or unchanged requests; streaming compatibility specified as a production requirement." },
  { index: "05", title: "Record & respond", body: "Log usage, modeled cost impact, and return the provider response transparently." },
] as const;

export const marginaiRoleColumns = [
  {
    title: "Product & architecture",
    body: "Translated commercial inference-cost goals into a scoped MVP with explicit safety boundaries.",
  },
  {
    title: "Engineering design",
    body: "Defined proxy compatibility, optimization engine structure, metering, and production reliability requirements.",
  },
  {
    title: "Commercial translation",
    body: "Shaped proposed metered billing, trial mechanics, and dashboard metrics around provable customer value.",
  },
] as const;

export type MarginAIStatusTone =
  | "designed"
  | "proposed"
  | "excluded"
  | "not-evidenced";

export const marginaiContributions: ReadonlyArray<{
  body: string;
  tone: MarginAIStatusTone;
}> = [
  {
    body: "Architected an OpenAI-compatible proxy designed for endpoint-level integration.",
    tone: "designed",
  },
  {
    body: "Defined five safety-controlled optimization strategies with independent bypass logic.",
    tone: "designed",
  },
  {
    body: "Established fail-open execution: original requests forward unchanged when confidence is insufficient.",
    tone: "designed",
  },
  {
    body: "Specified production requirements for streaming compatibility, retries, rate limits, audit logging, and graceful degradation.",
    tone: "designed",
  },
  {
    body: "Maintained strict MVP scope — excluding model routing, autonomous rewriting, RAG, and multi-provider support in v1.",
    tone: "designed",
  },
  {
    body: "Designed authentication via GitHub OAuth and automatic organization/API-key provisioning.",
    tone: "proposed",
  },
  {
    body: "Specified usage metering, cost-impact attribution, and customer dashboard requirements.",
    tone: "proposed",
  },
  {
    body: "Defined Stripe-based metered billing and credit-card-free trial mechanics as product hypotheses.",
    tone: "proposed",
  },
];

export const marginaiGovernancePrinciples = [
  {
    title: "Fail-open by default",
    body: "Prefer zero cost reduction over unsafe optimization — the original request path must always remain available.",
  },
  {
    title: "Per-strategy isolation",
    body: "Each optimization disables itself independently when its confidence threshold is not met.",
  },
  {
    title: "Auditability",
    body: "Request IDs, structured logs, and optimization decision records support post-hoc review.",
  },
  {
    title: "Billing integrity",
    body: "Token accounting and cost-difference calculations must be reproducible for invoicing and trial controls.",
  },
  {
    title: "Security boundaries",
    body: "Encrypted keys, HTTPS-only traffic, no secrets in logs, and strict organization separation.",
  },
  {
    title: "Scope discipline",
    body: "The MVP excludes features that would dilute the core optimization proof point.",
  },
] as const;

export const marginaiCommercialNote =
  "Metered billing tied to optimized or eliminated input tokens was explored as a product hypothesis — including credit-card-free trial, Stripe invoicing, and pausing optimization (not application traffic) when trials end. These mechanics are proposed strategy, not verified operating billing.";

export const marginaiExcludedFromMvp = [
  "Model routing across providers",
  "Autonomous or semantic prompt rewriting",
  "RAG systems and vector databases",
  "AI agents and workflow builders",
  "Full observability platforms",
  "Browser extensions and prompt editors",
  "Multi-provider support in version one",
] as const;

export const marginaiTechnologiesDesigned = [
  "OpenAI-compatible API proxy",
  "HTTPS / TLS",
  "Request caching",
  "Structured logging",
  "Usage metering",
  "Fail-open optimization engine",
] as const;

export const marginaiTechnologiesProposed = [
  "GitHub OAuth",
  "Stripe metered billing",
  "Credit-card-free trial",
  "Customer dashboard",
] as const;

export const marginaiTradeoffs = [
  {
    title: "Cost reduction vs correctness",
    body: "Aggressive optimization lowers cost but risks silent behavior change — the architecture biases toward conservative bypass.",
  },
  {
    title: "Latency vs transformation",
    body: "Evaluation and rewriting add proxy overhead; optimizations must justify their cost in milliseconds and complexity.",
  },
  {
    title: "Automation vs control",
    body: "Invisible infrastructure reduces operational burden but requires transparent decision records when things bypass.",
  },
  {
    title: "Breadth vs focus",
    body: "A general AI gateway would expand scope — the MVP deliberately optimizes inference economics only.",
  },
  {
    title: "Trial generosity vs metering precision",
    body: "Free value demonstration requires accurate token accounting before payment — billing units must be standardized.",
  },
] as const;

export const marginaiStatusRows: ReadonlyArray<{
  workstream: string;
  status: string;
  tone: MarginAIStatusTone;
  claim: string;
}> = [
  {
    workstream: "OpenAI-compatible proxy architecture",
    status: "Designed",
    tone: "designed",
    claim: "Endpoint-level integration, error handling, and pass-through compatibility specified — not broadly compatibility-tested.",
  },
  {
    workstream: "Five optimization strategies",
    status: "Designed",
    tone: "designed",
    claim: "Caching, deduplication, trimming, prefix shaping, and batch detection specified with independent safety gates.",
  },
  {
    workstream: "Fail-open optimization engine",
    status: "Designed",
    tone: "designed",
    claim: "Per-strategy confidence thresholds with automatic bypass to the original request.",
  },
  {
    workstream: "Auth, provisioning & dashboard",
    status: "Proposed",
    tone: "proposed",
    claim: "GitHub OAuth, organization creation, API keys, and value-focused dashboard metrics specified — not built or deployed.",
  },
  {
    workstream: "Metered billing model",
    status: "Proposed",
    tone: "proposed",
    claim: "Usage-based pricing hypothesis defined — subject to billing-unit standardization and production validation.",
  },
  {
    workstream: "Model routing & multi-provider",
    status: "Excluded",
    tone: "excluded",
    claim: "Deliberately out of MVP scope to preserve focus on measurable inference optimization.",
  },
  {
    workstream: "Verified production cost outcomes at scale",
    status: "Not evidenced",
    tone: "not-evidenced",
    claim: "No claim of deployed customer cost outcomes, adoption metrics, or benchmark-proven quality preservation.",
  },
];

export const marginaiOnboardingSteps: ReadonlyArray<{
  index: string;
  title: string;
  body: string;
  tone: MarginAIStatusTone;
}> = [
  {
    index: "01",
    title: "Authenticate",
    body: "Designed GitHub sign-in with automatic user and organization provisioning.",
    tone: "proposed",
  },
  {
    index: "02",
    title: "Replace endpoint",
    body: "Designed integration: swap the OpenAI base URL for the MarginAI proxy endpoint.",
    tone: "designed",
  },
  {
    index: "03",
    title: "Measure value",
    body: "Dashboard designed to surface usage, eliminated tokens, and modeled cost impact during trial.",
    tone: "proposed",
  },
];

export const marginaiReflection =
  "The product lesson was constraint: an optimization layer in the request path cannot afford to be clever at the expense of trust. MarginAI’s architecture only works if engineers believe that when the system is uncertain, their request is identical to what they would have sent directly — and that belief has to be engineered, not marketed.";
