import { Reveal } from "@/components/ui/Reveal";

export function MarginAICostOfInference() {
  return (
    <section
      id="cost"
      aria-labelledby="cost-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">
          01 / The Cost of Inference
        </p>

        <h2
          id="cost-heading"
          className="mt-8 max-w-4xl text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.03em]"
        >
          Usage grows faster
          <br />
          than margins can absorb.
        </h2>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
          <div className="max-w-xl space-y-6 text-base leading-[1.7] text-ink md:col-span-6 md:text-lg">
            <p>
              AI-native products depend on LLM APIs for core functionality. As
              adoption increases, inference spending directly compresses gross
              margins — even when providers reduce token prices over time.
            </p>
            <p>
              The problem is not only expensive models. It is avoidable waste:
              repeated identical requests, duplicated context, unnecessarily long
              histories, poor cache structure, and synchronous execution of
              batch-eligible work.
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <ul className="space-y-4 border-l border-border pl-6 text-sm uppercase tracking-[0.14em] text-muted">
              <li>Repeated identical requests</li>
              <li>Duplicate instructions</li>
              <li>Long conversation histories</li>
              <li>Suboptimal cache prefixes</li>
              <li>Batch-eligible synchronous calls</li>
            </ul>
          </div>
        </div>

        <p className="mt-16 type-pull-quote max-w-3xl md:mt-24">
          Using the most capable model for every request is rarely the most
          economical choice — but manual optimization does not scale across
          production traffic.
        </p>
      </Reveal>
    </section>
  );
}
