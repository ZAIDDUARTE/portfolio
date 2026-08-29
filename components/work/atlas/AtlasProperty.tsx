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
        <p className="type-eyebrow text-muted">
          10 / Property Workstream
        </p>

        <h2
          id="property-heading"
          className="mt-8 type-h2"
        >
          Property evaluation
          <br />
          workflow completed
        </h2>

        <p className="mt-12 max-w-3xl text-base leading-[1.7] text-ink md:text-lg">
          {atlasProperty.framing}
        </p>

        <div className="mt-14 md:mt-16">
          <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
            Completed within scope
          </h3>
          <ul className="mt-5 max-w-2xl space-y-3 text-base text-ink">
            {atlasProperty.completed.map((item) => (
              <li key={item} className="border-t border-border pt-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
