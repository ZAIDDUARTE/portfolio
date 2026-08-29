import { Reveal } from "@/components/ui/Reveal";
import { atlasProperty } from "@/content/atlas";

export function AtlasProperty() {
  return (
    <section
      id="property"
      aria-labelledby="property-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          10 / Property Workstream
        </p>

        <h2
          id="property-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          From bounded canary
          <br />
          toward national validation
        </h2>

        <div className="mt-14 grid gap-10 border-t border-border pt-10 md:mt-16 md:grid-cols-3 md:gap-12">
          <div>
            <p className="font-mono text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-none tracking-[-0.04em] text-ink">
              {atlasProperty.lookbackDates}
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-muted">
              Governed Dates
            </p>
          </div>
          <div>
            <p className="font-mono text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-none tracking-[-0.04em] text-ink">
              {atlasProperty.aggregateRowsLabel}
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-muted">
              Aggregate Records
            </p>
          </div>
          <div>
            <p className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-none tracking-[-0.02em] text-accent">
              {atlasProperty.status}
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-muted">
              Bounded Property-Scale Canary
            </p>
          </div>
        </div>

        <p className="mt-12 max-w-3xl text-base leading-[1.7] text-ink md:text-lg">
          {atlasProperty.framing}
        </p>

        <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-2">
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              Completed
            </h3>
            <ul className="mt-5 space-y-3 text-base text-ink">
              {atlasProperty.completed.map((item) => (
                <li key={item} className="border-t border-border pt-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              Ongoing
            </h3>
            <ul className="mt-5 space-y-3 text-base text-ink">
              {atlasProperty.ongoing.map((item) => (
                <li key={item} className="border-t border-border pt-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
