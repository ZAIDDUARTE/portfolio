import { Reveal } from "@/components/ui/Reveal";
import { marginaiProcessingPhases } from "@/content/marginai";

export function MarginAIRequestFlow() {
  return (
    <section
      id="flow"
      aria-labelledby="flow-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">
          09 / Request Flow
        </p>

        <h2
          id="flow-heading"
          className="mt-8 type-h2"
        >
          Evaluate. Transform or bypass.
          <br />
          Forward. Record.
        </h2>

        <div
          className="mt-14 border border-border bg-canvas p-6 md:mt-16 md:p-10"
          role="img"
          aria-label="Endpoint replacement diagram: application connects through MarginAI proxy instead of directly to provider"
        >
          <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="rounded border border-dashed border-border p-6 text-center">
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
                Before
              </p>
              <p className="mt-3 font-mono text-sm text-ink/80">
                provider API endpoint
              </p>
            </div>
            <p className="text-center text-[11px] uppercase tracking-[0.16em] text-accent">
              Replace
              <br />
              endpoint →
            </p>
            <div className="rounded border border-accent/50 bg-accent/[0.04] p-6 text-center">
              <p className="text-[10px] uppercase tracking-[0.16em] text-accent">
                After
              </p>
              <p className="mt-3 font-mono text-sm text-ink">
                MarginAI proxy endpoint
              </p>
            </div>
          </div>
        </div>

        <ol className="mt-14 space-y-0 border-t border-border">
          {marginaiProcessingPhases.map((phase) => (
            <li
              key={phase.index}
              className="grid gap-4 border-b border-border py-8 md:grid-cols-[4rem_12rem_1fr] md:items-baseline md:gap-8 md:py-10"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                {phase.index}
              </p>
              <h3 className="text-lg font-medium tracking-[-0.02em]">
                {phase.title}
              </h3>
              <p className="text-base leading-relaxed text-muted">
                {phase.body}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
