import { Reveal } from "@/components/ui/Reveal";

export function NoesisMissingContext() {
  return (
    <section
      id="missing-context"
      aria-labelledby="missing-context-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          01 / The Missing Context
        </p>

        <h2
          id="missing-context-heading"
          className="mt-8 max-w-4xl text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.03em]"
        >
          A respiratory visit shows the condition.
          <br />
          Not always the sequence.
        </h2>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
          <div className="max-w-xl space-y-6 text-base leading-[1.7] text-ink md:col-span-6 md:text-lg">
            <p>
              In a typical pediatric respiratory visit, the clinical picture
              presents itself at once — symptoms, history, exam findings. The
              diagnosis may be clear. Treatment may be straightforward.
            </p>
            <p>
              What is harder to answer with precision is timing: why symptoms
              became noticeable today. The visit captures the point where
              problems become visible — not necessarily the upstream environmental
              and behavioral context that may have preceded it.
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <ul className="space-y-4 border-l border-border pl-6 text-sm uppercase tracking-[0.14em] text-muted">
              <li>Visible clinic demand</li>
              <li>Hidden upstream sequence</li>
              <li>Environmental shifts</li>
              <li>Household sensitivity</li>
              <li>Care-seeking under uncertainty</li>
            </ul>
          </div>
        </div>

        <p className="mt-16 max-w-3xl font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.2] tracking-[-0.015em] md:mt-24">
          Noesis explores whether operational healthcare demand becomes more
          interpretable when environmental and behavioral context is visible —
          without replacing clinical judgment.
        </p>
      </Reveal>
    </section>
  );
}
