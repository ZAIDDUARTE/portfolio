import { Reveal } from "@/components/ui/Reveal";

/**
 * The single deliberately unusual composition on the site. Offsets only resolve
 * from `md` up; narrow screens fall back to a clean left-aligned stack.
 */
export function ReproducibilityStatement() {
  return (
    <section aria-labelledby="reproducibility-heading" className="section-y">
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <h2 id="reproducibility-heading" className="sr-only">
          Built around reproducibility, not assumption
        </h2>

        <div className="md:grid md:grid-cols-12">
          <p className="type-eyebrow text-muted md:col-span-4 md:col-start-5">
            Built around
          </p>

          <p
            aria-hidden="true"
            className="mt-4 text-[clamp(2.25rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.035em] text-balance text-ink md:col-span-9 md:col-start-1 md:mt-6"
          >
            Reproducibility
          </p>

          <p
            aria-hidden="true"
            className="type-display-serif mt-2 text-[clamp(2.25rem,7vw,5.5rem)] leading-[0.95] text-muted md:col-span-3 md:col-start-9 md:mt-4 md:text-right"
          >
            not
          </p>

          <p
            aria-hidden="true"
            className="mt-2 text-[clamp(2.25rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.035em] text-balance text-ink md:col-span-7 md:col-start-6 md:mt-4"
          >
            Assumption.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/** Quiet serif pause between the technical sections. */
export function ArchitectureStatement() {
  return (
    <section aria-labelledby="architecture-heading" className="section-y">
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <h2 id="architecture-heading" className="sr-only">
          On architecture
        </h2>
        <p className="type-editorial-lg max-w-3xl text-ink">
          Architecture earns trust
          <br />
          when its assumptions, constraints, and evidence are{" "}
          <span className="type-serif-italic">explicit.</span>
        </p>
      </Reveal>
    </section>
  );
}
