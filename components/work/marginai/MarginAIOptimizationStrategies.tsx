import { Reveal } from "@/components/ui/Reveal";
import { marginaiOptimizationStrategies } from "@/content/marginai";

export function MarginAIOptimizationStrategies() {
  return (
    <section
      id="strategies"
      aria-labelledby="strategies-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          07 / Optimization Strategies
        </p>

        <h2
          id="strategies-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Five narrow strategies.
          <br />
          Independent safety gates.
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-[1.7] text-muted md:text-lg">
          The MVP deliberately excludes model routing and autonomous rewriting.
          Each strategy below operates independently and bypasses when its safety
          requirements are not met.
        </p>

        <ol className="mt-14 space-y-0 border-t border-border md:mt-16">
          {marginaiOptimizationStrategies.map((strategy) => (
            <li
              key={strategy.index}
              className="grid gap-4 border-b border-border py-10 md:grid-cols-[4rem_1fr] md:gap-8"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                {strategy.index}
              </p>
              <div>
                <h3 className="text-xl font-medium tracking-[-0.02em] md:text-2xl">
                  {strategy.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink">
                  {strategy.body}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {strategy.benefit}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
