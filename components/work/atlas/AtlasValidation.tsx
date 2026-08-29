import { Reveal } from "@/components/ui/Reveal";
import { acoValidation, medicareValidation } from "@/content/atlas";

export function AtlasValidation() {
  return (
    <section
      id="validation"
      aria-labelledby="validation-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          09 / Validation
        </p>

        <h2
          id="validation-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Validation,
          <br />
          not marketing.
        </h2>

        <div className="mt-14 md:mt-16">
          <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Medicare County Validation
          </h3>

          <p className="mt-8 max-w-3xl text-base leading-[1.7] text-ink md:text-lg">
            {medicareValidation.framing}
          </p>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            {medicareValidation.disclaimer}
          </p>
        </div>

        <div className="mt-16 border-t border-border pt-14 md:mt-20 md:pt-16">
          <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Prospective ACO Validation
          </h3>

          <p className="mt-8 max-w-3xl text-base leading-[1.7] text-ink md:text-lg">
            {acoValidation.framing}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {acoValidation.interpretation}
          </p>
        </div>

        <p className="mt-16 max-w-3xl font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.2] tracking-[-0.015em] md:mt-24">
          We did not retune the methodology after seeing the result.
        </p>
      </Reveal>
    </section>
  );
}
