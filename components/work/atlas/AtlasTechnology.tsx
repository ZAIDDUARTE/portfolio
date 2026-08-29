import { Reveal } from "@/components/ui/Reveal";
import { atlasCapabilities } from "@/content/atlas";

export function AtlasTechnology() {
  return (
    <section
      id="technology"
      aria-labelledby="technology-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          15 / Technology
        </p>

        <h2
          id="technology-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Capabilities,
          <br />
          not a recipe
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Public capability categories only. The complete scientific-source and
          tooling combination used to construct proprietary representations is
          not published here.
        </p>

        <div className="mt-14 grid gap-0 border-t border-border md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {atlasCapabilities.map((group, index) => (
            <div
              key={group.group}
              className={`border-border p-6 md:p-8 ${
                index < atlasCapabilities.length - 1 ? "border-b" : ""
              } ${index % 2 === 0 ? "md:border-r" : "md:border-r-0"} ${
                index < 3 ? "lg:border-b" : ""
              } ${index % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"}`}
            >
              <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                {group.group}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink">
                {group.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
