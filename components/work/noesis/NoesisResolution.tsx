import { Reveal } from "@/components/ui/Reveal";

export function NoesisResolution() {
  return (
    <section
      id="resolution"
      aria-labelledby="resolution-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">
          09 / Resolution & Geography
        </p>

        <h2
          id="resolution-heading"
          className="mt-8 type-h2"
        >
          Hyperlocal grids.
          <br />
          Aggregated interpretation.
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6 text-base leading-[1.7] text-ink md:text-lg">
            <p>
              Noesis organizes environmental intelligence around geographic
              grids — square, hexagonal, and Voronoi geometries — each with
              persistent spatial metadata, neighbor relationships, and station
              placement context.
            </p>
            <p>
              Temporal resolution spans hourly observations through multi-day
              baselines and seasonal context. The system distinguishes a single
              abnormal reading from recurring patterns, sustained increases, and
              rapidly accelerating events.
            </p>
          </div>

          <div className="border border-border bg-canvas p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              Public-safe boundaries
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
              <li>
                Geographic outputs remain at grid and population-aggregated
                levels — not patient- or household-identifiable resolution.
              </li>
              <li>
                Interpolation fills spatial gaps where monitoring is sparse, with
                explicit certainty scoring per pollutant.
              </li>
              <li>
                Neighbor-aware modeling supports regional context without
                exposing proprietary weighting formulas publicly.
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-16 overflow-hidden border border-border"
          role="img"
          aria-label="Conceptual grid map showing hyperlocal cells with varying signal intensity"
        >
          <svg viewBox="0 0 800 200" className="h-auto w-full" aria-hidden="true">
            <defs>
              <pattern
                id="noesis-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="800" height="200" fill="url(#noesis-grid)" />
            {[
              [120, 80, 0.2],
              [200, 60, 0.35],
              [280, 100, 0.15],
              [360, 70, 0.45],
              [440, 90, 0.3],
              [520, 50, 0.55],
              [600, 110, 0.25],
              [680, 80, 0.4],
            ].map(([cx, cy, op], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={28}
                fill="var(--accent)"
                opacity={op}
              />
            ))}
          </svg>
          <p className="border-t border-border bg-canvas px-6 py-3 text-center text-[10px] uppercase tracking-[0.16em] text-muted">
            Conceptual — spatial signal intensity across a grid (not measured data)
          </p>
        </div>
      </Reveal>
    </section>
  );
}
