import { Reveal } from "@/components/ui/Reveal";

const verifiedFlow = [
  { id: "site", label: "WordPress", detail: "Marketing / WP Engine" },
  { id: "billing", label: "Stripe", detail: "Test checkout verified" },
  { id: "app", label: "Next.js", detail: "Onboarding on Vercel" },
  { id: "api", label: "AWS Lambda", detail: "Lifecycle + routes" },
] as const;

const dataPlane = [
  { id: "db", label: "PostgreSQL", detail: "Canonical company state" },
  { id: "s3", label: "Amazon S3", detail: "Immutable artifacts" },
  { id: "email", label: "Amazon SES", detail: "Lifecycle email" },
  { id: "truth", label: "Company Truth", detail: "Versioned policies" },
] as const;

const voicePlane = [
  { id: "voice", label: "Trillet Voice", detail: "Agent + call flow" },
  { id: "poll", label: "Call Ingestion", detail: "Idempotent requests" },
  { id: "dash", label: "Request Dashboard", detail: "Staging operations" },
] as const;

const staged = [
  { id: "jobber", label: "Jobber", detail: "Test / restricted" },
  { id: "calendar", label: "Google Calendar", detail: "Availability QA" },
] as const;

function NodeCard({
  label,
  detail,
  dashed = false,
}: {
  label: string;
  detail: string;
  dashed?: boolean;
}) {
  return (
    <div
      className={`min-h-[88px] border bg-canvas px-4 py-3 ${
        dashed ? "border-dashed border-border" : "border-border"
      }`}
    >
      <p className="text-sm font-medium tracking-[-0.02em] text-ink">{label}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted">{detail}</p>
    </div>
  );
}

export function AlexanderArchitectureDiagram() {
  return (
    <section
      aria-labelledby="alexander-diagram-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">04B / System map</p>
        <h2
          id="alexander-diagram-heading"
          className="mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          How the platform connects
        </h2>
        <p className="type-prose mt-6 max-w-3xl text-base text-muted md:text-lg">
          Acquisition, configuration, canonical data, voice, and operations are
          separated on purpose. Dashed nodes are integration pathways still in
          staged QA — not claimed as fully verified production automation.
        </p>

        <div className="mt-12 space-y-8 border border-border bg-border-subtle/40 p-5 md:p-8">
          <div>
            <p className="type-meta text-muted">Verified acquisition → app path</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {verifiedFlow.map((node) => (
                <NodeCard key={node.id} label={node.label} detail={node.detail} />
              ))}
            </div>
          </div>

          <div>
            <p className="type-meta text-muted">Canonical data & communications</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {dataPlane.map((node) => (
                <NodeCard key={node.id} label={node.label} detail={node.detail} />
              ))}
            </div>
          </div>

          <div>
            <p className="type-meta text-muted">Voice → request operations</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {voicePlane.map((node) => (
                <NodeCard key={node.id} label={node.label} detail={node.detail} />
              ))}
            </div>
          </div>

          <div>
            <p className="type-meta text-muted">Staged integrations (QA)</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
              {staged.map((node) => (
                <NodeCard
                  key={node.id}
                  label={node.label}
                  detail={node.detail}
                  dashed
                />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-5 text-[10px] uppercase tracking-[0.16em] text-muted">
          Fig. 03 — Conceptual architecture · secrets and private network details omitted
        </p>
      </Reveal>
    </section>
  );
}
