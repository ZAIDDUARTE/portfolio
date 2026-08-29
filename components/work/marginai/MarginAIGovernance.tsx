import { Reveal } from "@/components/ui/Reveal";
import {
  marginaiCommercialNote,
  marginaiExcludedFromMvp,
  marginaiGovernancePrinciples,
} from "@/content/marginai";

export function MarginAIGovernance() {
  return (
    <section
      id="governance"
      aria-labelledby="governance-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          11 / Governance & Scope
        </p>

        <h2
          id="governance-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Trust is engineered
          <br />
          into the request path.
        </h2>

        <div className="mt-14 border border-border md:mt-16">
          <div className="border-b border-border px-6 py-5 md:px-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              Governance Principles
            </p>
          </div>
          <ul className="grid sm:grid-cols-2">
            {marginaiGovernancePrinciples.map((item, index) => (
              <li
                key={item.title}
                className={`px-6 py-6 md:px-8 ${
                  index < marginaiGovernancePrinciples.length - 2
                    ? "border-b border-border"
                    : ""
                } ${index % 2 === 0 ? "sm:border-r sm:border-border" : ""}`}
              >
                <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 border border-dashed border-border bg-border-subtle p-6 md:p-8">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
            Proposed commercial model
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            {marginaiCommercialNote}
          </p>
        </div>

        <div className="mt-8 border border-border bg-border-subtle p-6 md:p-8">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
            Explicitly excluded from MVP
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {marginaiExcludedFromMvp.map((item) => (
              <li
                key={item}
                className="border border-border bg-canvas px-3 py-1.5 text-sm text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
