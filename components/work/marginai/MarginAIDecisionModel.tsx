import { Reveal } from "@/components/ui/Reveal";
import { marginaiDecisionCriteria } from "@/content/marginai";

export function MarginAIDecisionModel() {
  return (
    <section
      id="decision"
      aria-labelledby="decision-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          05 / Decision Model
        </p>

        <h2
          id="decision-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Optimize only when
          <br />
          safety is demonstrable.
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-[1.7] text-muted md:text-lg">
          Each request is evaluated against independent criteria. If safe
          optimization cannot be established, the original request forwards
          unchanged — fail-open by design.
        </p>

        <div
          className="mt-14 border border-border bg-canvas p-8 md:mt-16 md:p-12"
          role="img"
          aria-label="Decision diagram: if a request can be optimized safely, reduce cost; otherwise forward unchanged"
        >
          <div className="mx-auto max-w-lg text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-light px-4 py-2 text-sm text-ink">
              <span className="text-accent" aria-hidden="true">
                ◉
              </span>
              Can this request be optimized safely?
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border border-accent/40 bg-accent/[0.06] p-6">
              <p className="text-[10px] uppercase tracking-[0.16em] text-accent">
                Yes — high confidence
              </p>
              <h3 className="mt-3 text-lg font-medium">Apply optimization</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Only validated transformations — each strategy operates
                independently.
              </p>
            </div>
            <div className="border border-border p-6">
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
                No — insufficient confidence
              </p>
              <h3 className="mt-3 text-lg font-medium">Forward unchanged</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Original request and response path preserved exactly.
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {marginaiDecisionCriteria.map((item) => (
            <li key={item.label} className="bg-canvas p-6 md:p-8">
              <h3 className="text-sm font-medium tracking-[-0.01em]">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
