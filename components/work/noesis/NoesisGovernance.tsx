import { Reveal } from "@/components/ui/Reveal";
import { noesisGovernancePrinciples } from "@/content/noesis";

export function NoesisGovernance() {
  return (
    <section
      id="governance"
      aria-labelledby="governance-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">
          11 / Governance & Safety
        </p>

        <h2
          id="governance-heading"
          className="mt-8 type-h2"
        >
          Boundaries are part
          <br />
          of the architecture.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          In environmental-health intelligence touching pediatric contexts,
          privacy, appropriate use, and non-diagnostic limits are not
          afterthoughts — they shape what the system is allowed to say.
        </p>

        <div className="mt-14 border border-border md:mt-16">
          <div className="border-b border-border px-6 py-5 md:px-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              Safety Principles
            </p>
          </div>

          <ul className="grid sm:grid-cols-2">
            {noesisGovernancePrinciples.map((item, index) => (
              <li
                key={item.title}
                className={`px-6 py-6 md:px-8 ${
                  index < noesisGovernancePrinciples.length - 2 ? "border-b border-border" : ""
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
      </Reveal>
    </section>
  );
}
