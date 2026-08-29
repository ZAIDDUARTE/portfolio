import { Reveal } from "@/components/ui/Reveal";
import { atlasAco, atlasMedicare } from "@/content/atlas";

function R2Bar({
  label,
  value,
  max,
}: {
  label: string;
  value: number;
  max: number;
}) {
  const width = Math.max(4, (value / max) * 100);
  return (
    <div className="grid gap-3 md:grid-cols-[minmax(10rem,14rem)_1fr_auto] md:items-center md:gap-6">
      <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
        {label}
      </p>
      <div
        className="h-3 w-full bg-border-subtle"
        role="img"
        aria-label={`${label}: R-squared ${value.toFixed(6)}`}
      >
        <div
          className="h-full bg-accent transition-[width] duration-700 ease-out motion-reduce:transition-none"
          style={{ width: `${width}%` }}
        />
      </div>
      <p className="font-mono text-sm tabular-nums text-ink">
        R² = {value.toFixed(6)}
      </p>
    </div>
  );
}

export function AtlasValidation() {
  const max = atlasMedicare.baselinePlusAtlasR2 * 1.08;

  return (
    <section
      id="validation"
      aria-labelledby="validation-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          09 / Validation
        </p>

        <h2
          id="validation-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Validation,
          <br />
          not marketing.
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-[1.7] text-ink md:text-lg">
          {atlasMedicare.framing}
        </p>

        <div className="mt-14 md:mt-16">
          <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Medicare County Validation — Completed
          </h3>

          <div className="mt-10 space-y-6">
            <R2Bar
              label="Baseline"
              value={atlasMedicare.baselineR2}
              max={max}
            />
            <R2Bar
              label="Baseline + Atlas"
              value={atlasMedicare.baselinePlusAtlasR2}
              max={max}
            />
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.16em] text-muted">
                Absolute Delta
              </dt>
              <dd className="mt-1 font-mono text-lg tabular-nums text-ink">
                +{atlasMedicare.absoluteDelta.toFixed(6)}
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.16em] text-muted">
                Relative Increase
              </dt>
              <dd className="mt-1 font-mono text-lg tabular-nums text-ink">
                ~ +{atlasMedicare.relativeIncreasePct}%
              </dd>
            </div>
          </dl>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            {atlasMedicare.disclaimer}
          </p>
        </div>

        <div className="mt-16 border-t border-border pt-14 md:mt-20 md:pt-16">
          <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Prospective ACO Validation — Completed
          </h3>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
                Pooled Primary MAE Improvement
              </p>
              <p className="mt-2 font-mono text-2xl tabular-nums text-ink">
                ~ {atlasAco.pooledMaeImprovementPct.toFixed(2)}%
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
                Individual Years
              </p>
              <p className="mt-2 font-mono text-2xl tabular-nums text-ink">
                ~ {atlasAco.yearlyRangePct[0]}% to {atlasAco.yearlyRangePct[1]}%
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
                Beneficiary-Weighted Sensitivity
              </p>
              <p className="mt-2 font-mono text-2xl tabular-nums text-ink">
                ~ +{atlasAco.beneficiaryWeightedSensitivityPct}%
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink">
            {atlasAco.coefficients}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {atlasAco.interpretation}
          </p>
        </div>

        <p className="mt-16 max-w-3xl font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.2] tracking-[-0.015em] md:mt-24">
          We did not retune the methodology after seeing the result.
        </p>
      </Reveal>
    </section>
  );
}
