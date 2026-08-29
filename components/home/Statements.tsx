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
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted md:col-span-4 md:col-start-5">
            Built around
          </p>

          <p
            aria-hidden="true"
            className="mt-4 text-[clamp(2.25rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.035em] text-ink md:col-span-9 md:col-start-1 md:mt-6"
          >
            Reproducibility
          </p>

          <p
            aria-hidden="true"
            className="mt-2 text-[clamp(2.25rem,8vw,6rem)] font-serif leading-[0.95] tracking-[-0.02em] text-muted md:col-span-3 md:col-start-9 md:mt-4 md:text-right"
          >
            not
          </p>

          <p
            aria-hidden="true"
            className="mt-2 text-[clamp(2.25rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.035em] text-ink md:col-span-7 md:col-start-6 md:mt-4"
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
        <p className="max-w-4xl font-serif text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.12] tracking-[-0.02em] text-ink">
          Architecture is only useful
          <br />
          when it survives production.
        </p>
      </Reveal>
    </section>
  );
}
