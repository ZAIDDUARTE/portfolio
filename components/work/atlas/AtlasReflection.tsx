import { Reveal } from "@/components/ui/Reveal";

export function AtlasReflection() {
  return (
    <section
      id="reflection"
      aria-labelledby="reflection-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          16 / Reflection
        </p>

        <h2 id="reflection-heading" className="sr-only">
          Reflection
        </h2>

        <p className="mt-10 max-w-4xl font-serif text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.15] tracking-[-0.02em]">
          Building a sophisticated score
          <br />
          is only part of the problem.
        </p>

        <p className="mt-10 max-w-2xl text-base leading-[1.7] text-ink md:mt-12 md:text-lg">
          In risk systems, provenance, reproducibility, data contracts and
          validation can be as important as the model itself.
        </p>

        <p className="mt-8 max-w-2xl text-base leading-[1.7] text-muted md:text-lg">
          ATLAS reinforced that technical leadership in high-stakes data systems
          means preserving evidence, controlling methodology, exposing
          uncertainty and being willing to report when results weaken.
        </p>
      </Reveal>
    </section>
  );
}
