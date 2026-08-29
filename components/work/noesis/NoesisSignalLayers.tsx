import { Reveal } from "@/components/ui/Reveal";
import { noesisSignalLayers } from "@/content/noesis";

export function NoesisSignalLayers() {
  return (
    <section
      id="signals"
      aria-labelledby="signals-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">
          07 / Signal & Data Layers
        </p>

        <h2
          id="signals-heading"
          className="mt-8 type-h2"
        >
          Verified inputs.
          <br />
          Honest uncertainty.
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-[1.7] text-muted md:text-lg">
          Noesis integrates environmental, spatial, temporal, and demographic
          context into a single governed stack — with provenance and confidence
          preserved at every layer.
        </p>

        <ul className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {noesisSignalLayers.map((item, index) => (
            <li key={item.title} className="bg-canvas p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-medium tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-[15px]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
