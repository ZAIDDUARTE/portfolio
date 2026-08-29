import { Reveal } from "@/components/ui/Reveal";
import { marginaiOnboardingSteps } from "@/content/marginai";

export function MarginAIPlatform() {
  return (
    <section
      id="platform"
      aria-labelledby="platform-heading"
      className="section-y bg-[#12141a] text-light"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-light/55">
          10 / Platform Experience
        </p>

        <h2
          id="platform-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Built for developer
          <br />
          onboarding.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-light/70">
          GitHub authentication, automatic provisioning, and a dashboard focused
          on modeled cost impact rather than overwhelming analytics.
        </p>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {marginaiOnboardingSteps.map((step) => (
            <li
              key={step.index}
              className="border border-light/15 p-6 md:p-8"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
                {step.index}
              </p>
              <h3 className="mt-4 text-lg font-medium tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-light/65">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 border border-light/15 p-6 md:p-8">
          <p className="text-[11px] uppercase tracking-[0.18em] text-light/50">
            Dashboard focus
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-light/70 sm:grid-cols-2 lg:grid-cols-3">
            <li>Modeled cost impact</li>
            <li>Input tokens received vs forwarded</li>
            <li>Tokens eliminated</li>
            <li>Projected provider cost difference</li>
            <li>Optimization status</li>
            <li>Projected monthly cost difference</li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
