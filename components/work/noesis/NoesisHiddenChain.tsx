import { Reveal } from "@/components/ui/Reveal";
import { noesisDemandChain } from "@/content/noesis";

export function NoesisHiddenChain() {
  return (
    <section
      id="hidden-chain"
      aria-labelledby="hidden-chain-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          03 / The Hidden Chain
        </p>

        <h2
          id="hidden-chain-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          An analytical framing —
          <br />
          not a universal causal law.
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-[1.7] text-ink md:text-lg">
          The following chain describes how environmental intelligence research
          often frames pediatric respiratory demand. Individual visits remain
          clinically unique. This is a systems lens for understanding
          operational patterns — not a claim that every visit follows the same
          pathway.
        </p>

        <ol className="mt-14 space-y-0 md:mt-16">
          {noesisDemandChain.map((step, index) => (
            <li
              key={step.index}
              className="relative grid gap-4 border-t border-border py-8 md:grid-cols-[4rem_1fr] md:gap-8 md:py-10"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                {step.index}
              </p>
              <div>
                <h3 className="text-xl font-medium tracking-[-0.02em] md:text-2xl">
                  {step.label}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
              {index < noesisDemandChain.length - 1 ? (
                <span
                  className="absolute bottom-0 left-8 hidden h-8 w-px -translate-x-1/2 bg-border md:block"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>

        <div
          className="mt-14 border border-border bg-canvas p-6 md:mt-16 md:p-8"
          role="img"
          aria-label="Diagram showing five linked stages from environmental conditions through clinic demand"
        >
          <svg
            viewBox="0 0 900 140"
            className="h-auto w-full"
            aria-hidden="true"
          >
            {noesisDemandChain.map((step, i) => {
              const x = 50 + i * 170;
              return (
                <g key={step.index}>
                  {i > 0 ? (
                    <line
                      x1={x - 95}
                      y1={70}
                      x2={x - 35}
                      y2={70}
                      stroke="var(--border)"
                      strokeWidth="1"
                    />
                  ) : null}
                  <rect
                    x={x - 35}
                    y={40}
                    width={70}
                    height={60}
                    rx="2"
                    fill="color-mix(in srgb, var(--accent) 8%, var(--canvas))"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x={x}
                    y={78}
                    textAnchor="middle"
                    className="fill-ink text-[9px] font-medium uppercase"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </text>
                </g>
              );
            })}
          </svg>
          <p className="sr-only">
            Environmental conditions, household exposure and context, symptoms or
            parental concern, care-seeking behavior, clinic demand — presented
            as a sequential analytical framing.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
