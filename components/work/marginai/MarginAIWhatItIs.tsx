import { Reveal } from "@/components/ui/Reveal";
import { marginaiMeta } from "@/content/marginai";

export function MarginAIWhatItIs() {
  return (
    <section
      id="what-it-is"
      aria-labelledby="what-it-is-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">
          03 / What MarginAI Is
        </p>

        <h2
          id="what-it-is-heading"
          className="mt-8 type-h2"
        >
          Endpoint-level integration.
          <br />
          Safety-first optimization.
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <p className="text-base leading-[1.7] text-ink md:text-lg">
            {marginaiMeta.oneLine}
          </p>
          <dl className="space-y-6 text-base leading-relaxed text-muted">
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink">
                What enters
              </dt>
              <dd className="mt-2">
                OpenAI-compatible API requests from customer applications —
                compatibility breadth is a design target, not a verified matrix.
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink">
                What it decides
              </dt>
              <dd className="mt-2">
                Whether each request can be optimized safely — applying only
                high-confidence transformations.
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink">
                What it outputs
              </dt>
              <dd className="mt-2">
                Provider responses, usage records, and modeled cost impact —
                transparently, whether optimized or forwarded unchanged.
              </dd>
            </div>
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
