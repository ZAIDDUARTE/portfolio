import { Reveal } from "@/components/ui/Reveal";
import { alexanderLayers } from "@/content/alexander";

export function AlexanderSolution() {
  return (
    <section
      aria-labelledby="alexander-solution-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">02 / Solution</p>
        <h2
          id="alexander-solution-heading"
          className="mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Five product layers, deliberately separated
        </h2>
        <p className="type-prose mt-6 max-w-3xl text-base text-muted md:text-lg">
          Acquisition, configuration, voice, backend operations, and integrations
          are designed as connected systems with explicit failure boundaries —
          not a single monolithic chatbot.
        </p>

        <div className="mt-12 flex flex-col">
          {alexanderLayers.map((layer) => (
            <article
              key={layer.index}
              className="grid gap-4 border-t border-border py-8 md:grid-cols-[80px_1fr_auto] md:items-start md:gap-10 md:py-10"
            >
              <p className="type-section-index text-muted">{layer.index}</p>
              <div>
                <h3 className="text-xl font-medium tracking-[-0.02em] text-ink md:text-2xl">
                  {layer.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink md:text-lg">
                  {layer.body}
                </p>
              </div>
              <p className="type-meta self-start text-accent md:pt-2">
                {layer.status}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
