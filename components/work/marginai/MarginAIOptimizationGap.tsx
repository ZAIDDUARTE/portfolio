import { Reveal } from "@/components/ui/Reveal";
import { marginaiGapLayers } from "@/content/marginai";

export function MarginAIOptimizationGap() {
  return (
    <section
      id="gap"
      aria-labelledby="gap-heading"
      className="section-y bg-border-subtle"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          02 / The Optimization Gap
        </p>

        <h2
          id="gap-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Dashboards show spend.
          <br />
          They rarely remove waste.
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-[1.7] text-muted md:text-lg">
          Cost visibility alone does not eliminate inefficiency. MarginAI
          separates visibility, recommendation, designed automated
          decision-making, execution, and verification — with automation applied
          only where safety thresholds are met.
        </p>

        <ol className="mt-14 space-y-0 border-t border-border md:mt-16">
          {marginaiGapLayers.map((layer, index) => (
            <li
              key={layer.label}
              className="grid gap-3 border-b border-border py-8 md:grid-cols-[10rem_1fr] md:gap-8 md:py-10"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                {String(index + 1).padStart(2, "0")} / {layer.label}
              </p>
              <p className="text-base leading-relaxed text-ink">{layer.body}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
