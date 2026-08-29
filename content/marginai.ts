/**
 * Public-safe MarginAI case-study content for /work/marginai.
 * Describes the implemented system, safety boundaries, and scope limits —
 * not proprietary routing logic or unverified commercial outcomes.
 */

export const marginaiMeta = {
  caseNumber: "003",
  title: "MarginAI",
  subtitle: "LLM Inference Optimization",
  platformTitle: "LLM Cost-Optimization Infrastructure",
  role: "CTO & Technical Lead",
  domain: "AI Infrastructure + Inference Economics",
  href: "/work/marginai",
  statement:
    "An OpenAI-compatible inference optimization system that evaluates request-level optimization strategies, applies only defensible changes, and preserves the original request when confidence is insufficient.",
  oneLine:
    "Built as an OpenAI-compatible API proxy that evaluates each request against controlled optimization strategies and forwards the original payload unchanged whenever modeled impact cannot be justified with sufficient confidence.",
  scopeNote:
    "Technical implementation is complete within the documented system scope. No claims are made about customer adoption, achieved cost savings or commercial performance.",
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
    body: "Applications change one API endpoint — not their core architecture.",
  },
  {
    title: "Invisible infrastructure",
    body: "Optimization runs automatically without continuous manual tuning.",
  },
  {
    title: "Transparent economics",
    body: "Modeled cost impact, processed tokens, and fees remain measurable.",
  },
] as const;

export const marginaiGapLayers = [
  {
    label: "Visibility",
    body: "Token spend and repeated request patterns are captured at ingress.",
  },
  {
    label: "Recommendation",
    body: "Candidate optimizations are identified before any transformation is applied.",
  },
  {
    label: "Automated decision",
    body: "Only changes that pass independent safety checks are applied.",
  },
  {
    label: "Execution",
    body: "Optimized or original requests forward through a compatible proxy path.",
  },
  {
    label: "Verification",
    body: "Decisions, usage, and modeled cost impact are recorded for audit and billing.",
  },
] as const;

export const marginaiDecisionCriteria = [
  { label: "Quality preservation", body: "Will the transformation materially change model behavior?" },
  { label: "Latency contract", body: "Does the request require synchronous response?" },
  { label: "Cost impact", body: "Are input tokens reducible without losing required context?" },
  { label: "Reliability", body: "Can the optimization fail open to the original request?" },
  { label: "Context length", body: "Does history trimming risk removing dependencies?" },
  { label: "Capability requirements", body: "Do tools, parameters, or streaming constraints apply?" },
  { label: "Policy constraints", body: "Is the customer configuration compatible with this strategy?" },
] as const;

export const marginaiArchitectureLayers = [
  {
    id: "proxy",
    label: "Compatible Proxy",
    body: "OpenAI-compatible ingress for existing HTTP clients and SDKs with endpoint-level integration.",
  },
  {
    id: "auth",
    label: "Authentication & Metering",
    body: "API-key validation, organization boundaries, usage capture, and request identity.",
  },
  {
    id: "engine",
    label: "Optimization Engine",
    body: "Independent evaluators for each strategy with per-strategy confidence thresholds.",
  },
  {
    id: "provider",
    label: "Provider Forwarding",
    body: "Optimized or pass-through requests sent to the LLM provider with streaming support.",
  },
  {
    id: "ledger",
    label: "Usage & Cost Ledger",
    body: "Token accounting, baseline-versus-candidate comparison, billing events, and dashboard metrics.",
  },
] as const;

export const marginaiOptimizationStrategies = [
  {
    index: "01",
    title: "Exact-request caching",
    body: "Return a cached response when an identical eligible request was already processed.",
    benefit: "Cost avoidance and lower latency for cache-safe workloads.",
  },
  {
    index: "02",
    title: "Duplicate-context removal",
    body: "Detect repeated system prompts or context blocks and remove redundant tokens.",
    benefit: "Reduces input-token waste without removing semantic information.",
  },
  {
    index: "03",
    title: "Safe conversation trimming",
    body: "Remove older messages only when confidence is high they no longer affect the current turn.",
    benefit: "Controls long-history cost while preserving tool context when uncertain.",
  },
  {
    index: "04",
    title: "Cache-prefix shaping",
    body: "Structure stable prompt prefixes to benefit from provider-side prompt caching.",
    benefit: "Structural optimization — not unrestricted semantic rewriting.",
  },
  {
    index: "05",
    title: "Batch-eligibility detection",
    body: "Identify workloads that may suit asynchronous batch pathways when explicitly enabled.",
    benefit: "Applied only when latency contracts allow — never silently by default.",
  },
] as const;

export const marginaiProcessingPhases = [
  { index: "01", title: "Receive request", body: "Validate compatibility and capture baseline token estimates." },
  { index: "02", title: "Evaluate strategies", body: "Run each optimization independently against safety thresholds." },
  { index: "03", title: "Apply or bypass", body: "Transform only validated changes; otherwise preserve the original payload." },
  { index: "04", title: "Forward to provider", body: "Send optimized or unchanged requests with streaming support." },
  { index: "05", title: "Record & respond", body: "Log usage, modeled cost impact, and return the provider response." },
] as const;

export const marginaiRoleColumns = [
  {
    title: "Product & architecture",
    body: "Translated inference-cost goals into a scoped system with explicit safety boundaries.",
  },
  {
    title: "Engineering delivery",
    body: "Built proxy compatibility, optimization engine, metering, and production reliability paths.",
  },
  {
    title: "Platform operations",
    body: "Implemented auth provisioning, usage ledger, dashboard, and audit observability.",
  },
] as const;

export const marginaiGovernancePrinciples = [
  {
    title: "Fail-open by default",
    body: "Prefer zero cost reduction over unsafe optimization — the original request path always remains available.",
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
    body: "Token accounting and cost-difference calculations are reproducible for invoicing.",
  },
  {
    title: "Security boundaries",
    body: "Encrypted keys, HTTPS-only traffic, no secrets in logs, and strict organization separation.",
  },
  {
    title: "Scope discipline",
    body: "The system excludes features that would dilute the core optimization proof point.",
  },
] as const;

export const marginaiExcludedFromMvp = [
  "Model routing across providers",
  "Autonomous or semantic prompt rewriting",
  "RAG systems and vector databases",
  "AI agents and workflow builders",
  "Full observability platforms",
  "Browser extensions and prompt editors",
  "Multi-provider support in version one",
] as const;

export const marginaiTechnologies = [
  "OpenAI-compatible API proxy",
  "HTTPS / TLS",
  "Request caching",
  "Structured logging",
  "Usage metering",
  "Fail-open optimization engine",
  "GitHub OAuth",
  "Organization & API-key provisioning",
  "Usage & cost-impact ledger",
  "Customer dashboard",
  "Audit & observability",
] as const;

export const marginaiTradeoffs = [
  {
    title: "Cost reduction vs correctness",
    body: "Aggressive optimization lowers cost but risks silent behavior change — the system biases toward conservative bypass.",
  },
  {
    title: "Latency vs transformation",
    body: "Evaluation and rewriting add proxy overhead; optimizations must justify their cost.",
  },
  {
    title: "Automation vs control",
    body: "Automatic optimization reduces operational burden but requires transparent decision records when strategies bypass.",
  },
  {
    title: "Breadth vs focus",
    body: "A general AI gateway would expand scope — this system optimizes inference economics only.",
  },
] as const;

export const marginaiTechnicalDelivery: ReadonlyArray<{
  capability: string;
  detail: string;
}> = [
  {
    capability: "API proxy",
    detail: "OpenAI-compatible ingress with endpoint-level integration, error handling, and pass-through forwarding.",
  },
  {
    capability: "Compatibility layer",
    detail: "HTTP client and SDK support within a defined compatibility scope — not unrestricted provider parity.",
  },
  {
    capability: "Optimization engine",
    detail: "Five request-level strategies evaluated independently with per-strategy confidence thresholds.",
  },
  {
    capability: "Independent safety gates",
    detail: "Each strategy applies only when its safety checks pass; otherwise the original payload is preserved.",
  },
  {
    capability: "Fail-open path",
    detail: "Insufficient confidence always routes the unmodified request to the provider.",
  },
  {
    capability: "Auth & org provisioning",
    detail: "GitHub OAuth, automatic organization creation, and API-key issuance.",
  },
  {
    capability: "Usage & cost-impact ledger",
    detail: "Token accounting, baseline-versus-candidate comparison, and billing event capture.",
  },
  {
    capability: "Dashboard",
    detail: "Usage metrics, eliminated tokens, modeled cost impact, and optimization status.",
  },
  {
    capability: "Audit & observability",
    detail: "Request IDs, structured logs, optimization decision records, and post-hoc review support.",
  },
];

export const marginaiOnboardingSteps: ReadonlyArray<{
  index: string;
  title: string;
  body: string;
}> = [
  {
    index: "01",
    title: "Authenticate",
    body: "GitHub sign-in with automatic user and organization provisioning.",
  },
  {
    index: "02",
    title: "Replace endpoint",
    body: "Swap the OpenAI base URL for the MarginAI proxy endpoint.",
  },
  {
    index: "03",
    title: "Measure impact",
    body: "Dashboard surfaces usage, eliminated tokens, and modeled cost impact.",
  },
];

export const marginaiReflection =
  "The product lesson was constraint: an optimization layer in the request path cannot afford to be clever at the expense of trust. MarginAI only works if engineers believe that when the system is uncertain, their request is identical to what they would have sent directly — and that belief has to be engineered, not marketed.";
