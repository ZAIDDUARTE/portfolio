import { Reveal } from "@/components/ui/Reveal";
import { noesisProcessingPhases } from "@/content/noesis";

export function NoesisProcessingFlow() {
  return (
    <section
      id="processing"
      aria-labelledby="processing-heading"
      className="section-y bg-border-subtle"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          08 / From Signals to Operational Context
        </p>

        <h2
          id="processing-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Raw observations in.
          <br />
          Decision context out.
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-[1.7] text-muted md:text-lg">
          The public-safe processing flow separates raw environmental
          observations, derived spatial-temporal context, and structured outputs
          intended for interpretation — never collapsing estimated values into
          measured certainty.
        </p>

        <ol className="mt-14 space-y-0 border-t border-border md:mt-16">
          {noesisProcessingPhases.map((phase) => (
            <li
              key={phase.index}
              className="grid gap-4 border-b border-border py-8 md:grid-cols-[4rem_12rem_1fr] md:items-baseline md:gap-8 md:py-10"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                {phase.index}
              </p>
              <h3 className="text-lg font-medium tracking-[-0.02em] md:text-xl">
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
