import { Reveal } from "@/components/ui/Reveal";

export function AtlasProblem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">
          01 / The Problem
        </p>

        <h2
          id="problem-heading"
          className="mt-8 max-w-4xl text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.03em]"
        >
          Environmental exposure is fragmented.
          <br />
          Risk models need it to be usable.
        </h2>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
          <div className="max-w-xl space-y-6 text-base leading-[1.7] text-ink md:col-span-6 md:text-lg">
            <p>
              Healthcare and insurance models already contain conventional
              claims, demographic, socioeconomic and property variables.
            </p>
            <p>
              Environmental evidence is different — fragmented across scientific
              datasets, inconsistent in space and time, computationally
              expensive, and difficult to audit.
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <ul className="space-y-4 border-l border-border pl-6 text-sm uppercase tracking-[0.14em] text-muted">
              <li>Fragmented scientific datasets</li>
              <li>Inconsistent in space</li>
              <li>Inconsistent in time</li>
              <li>Computationally expensive</li>
              <li>Difficult to audit</li>
            </ul>
          </div>
        </div>

        <p className="mt-16 type-pull-quote max-w-3xl md:mt-24">
          The problem was not simply to create a score.
          <br />
          The problem was to make environmental evidence reproducible enough to
          survive validation.
        </p>
      </Reveal>
    </section>
  );
}
