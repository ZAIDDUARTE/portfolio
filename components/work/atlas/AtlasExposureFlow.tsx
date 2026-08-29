import { Reveal } from "@/components/ui/Reveal";
import { atlasMeta } from "@/content/atlas";

/**
 * Public model framing only — no component inventory, score topology,
 * or normalization mechanics.
 */
export function AtlasExposureFlow() {
  return (
    <section
      id="intelligence"
      aria-labelledby="score-flow-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">
          05 / Environmental Intelligence
        </p>

        <h2
          id="score-flow-heading"
          className="mt-8 type-h2"
        >
          Multiple stressors.
          <br />
          Governed intelligence.
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-[1.7] text-ink md:text-lg">
          {atlasMeta.modelExplanation}
        </p>

        <ul className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Multiple Time Scales",
              body: "Chronic and acute environmental stressors represented across longitudinal histories.",
            },
            {
              title: "Geographic Contexts",
              body: "Consistent interpretation from broad territories to specific locations.",
            },
            {
              title: "Controlled Local Context",
              body: "Bounded place-based context without inventing false atmospheric precision.",
            },
            {
              title: "Version-Controlled Normalization",
              body: "Governed environmental intelligence that can be released reproducibly.",
            },
            {
              title: "Explainable Delivery",
              body: "An environmental covariate designed for evaluation inside existing models.",
            },
            {
              title: "Proprietary Method",
              body: "Feature engineering, normalization and scoring methodology remain confidential.",
            },
          ].map((item, index) => (
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

        <p className="mt-14 max-w-3xl border-l-2 border-accent pl-6 font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] leading-snug tracking-[-0.01em] md:mt-20">
          Broad environmental conditions matter. Controlled local context
          matters. Neither requires publishing the proprietary scoring recipe.
        </p>
      </Reveal>
    </section>
  );
}
