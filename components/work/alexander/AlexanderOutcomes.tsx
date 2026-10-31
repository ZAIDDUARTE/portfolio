import { Reveal } from "@/components/ui/Reveal";
import {
  alexanderMeta,
  alexanderNotClaimed,
  alexanderStatus,
  alexanderVerified,
} from "@/content/alexander";

export function AlexanderOutcomes() {
  return (
    <section
      aria-labelledby="alexander-outcomes-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">06 / Outcomes & status</p>
        <h2
          id="alexander-outcomes-heading"
          className="mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          {alexanderStatus.title}
        </h2>
        <p className="type-prose mt-6 max-w-3xl text-base text-ink md:text-lg">
          {alexanderStatus.body}
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.12em] text-accent">
              Verified / confidently claimable
            </h3>
            <ul className="mt-5 space-y-3">
              {alexanderVerified.map((item) => (
                <li
                  key={item}
                  className="border border-border bg-canvas px-4 py-3 text-sm leading-relaxed text-ink md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.12em] text-muted">
              Not claimed without new evidence
            </h3>
            <ul className="mt-5 space-y-3">
              {alexanderNotClaimed.map((item) => (
                <li
                  key={item}
                  className="border border-dashed border-border px-4 py-3 text-sm leading-relaxed text-muted md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 type-meta normal-case tracking-normal leading-relaxed text-muted">
              {alexanderMeta.scopeNote}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
