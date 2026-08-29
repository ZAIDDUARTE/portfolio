import { Reveal } from "@/components/ui/Reveal";

export function NoesisDemandRandom() {
  return (
    <section
      id="demand-random"
      aria-labelledby="demand-random-heading"
      className="section-y bg-border-subtle"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          02 / Why Demand Feels Random
        </p>

        <h2
          id="demand-random-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Noise is often missing context,
          <br />
          not absence of structure.
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <p className="text-base leading-[1.7] text-ink md:text-lg">
            Pediatric clinics often experience days that shift quickly — quiet
            mornings giving way to clustered calls, compressed schedules, and
            late-day surges. From inside the clinic, each interaction feels
            isolated. Without upstream visibility, variability can feel random.
          </p>
          <p className="text-base leading-[1.7] text-ink md:text-lg">
            That unpredictability is not proof that demand lacks structure. It
            may indicate that the sequence begins earlier — in changing
            environmental conditions, evolving symptoms at home, and parallel
            family decisions converging in time. Noesis does not claim to have
            solved randomness. It asks whether better environmental context can
            make patterns more explainable.
          </p>
        </div>

        <div
          className="mt-16 overflow-hidden border border-border bg-canvas p-8 md:mt-20 md:p-12"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 800 120"
            className="h-auto w-full text-accent/30"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C80,75 120,20 200,35 S320,95 400,50 S520,10 600,40 S720,90 800,55 L800,120 L0,120 Z"
              fill="currentColor"
              opacity="0.15"
            />
            <path
              d="M0,70 C100,65 150,30 250,45 S380,85 480,55 S600,25 700,50 S760,75 800,60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </svg>
          <p className="mt-4 text-center text-[10px] uppercase tracking-[0.16em] text-muted">
            Conceptual — operational demand variability without upstream context
          </p>
        </div>
      </Reveal>
    </section>
  );
}
