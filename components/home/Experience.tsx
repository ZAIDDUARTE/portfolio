import { SectionLabel } from "@/components/layout/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { experience, experienceProgression } from "@/content/experience";

function ProgressionBand() {
  return (
    <div
      aria-hidden="true"
      className="mt-10 hidden items-center md:flex md:mt-12"
    >
      {experienceProgression.map((phase, index) => (
        <div key={phase} className="flex flex-1 items-center last:flex-none">
          <span
            className={`whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] lg:text-xs ${
              index === experienceProgression.length - 1
                ? "text-accent"
                : "text-muted"
            }`}
          >
            {phase}
          </span>
          {index < experienceProgression.length - 1 ? (
            <span className="mx-4 h-px flex-1 bg-border lg:mx-6" />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <SectionLabel number="03" title="Experience" />

        <h2 id="experience-heading" className="sr-only">
          Experience
        </h2>

        <ProgressionBand />

        <div className="mt-12 flex flex-col md:mt-16">
          {experience.map((entry) => (
            <article
              key={`${entry.year}-${entry.phase}`}
              className="grid gap-4 border-t border-border py-10 first:border-t-0 first:pt-0 md:grid-cols-[minmax(140px,220px)_1fr] md:gap-12 md:py-14"
            >
              <p className="text-[clamp(2rem,5vw,3.5rem)] font-medium leading-none tracking-[-0.03em] text-ink">
                {entry.year}
              </p>

              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
                  {entry.phase}
                </p>
                <h3 className="mt-3 text-xl font-medium md:text-2xl">
                  {entry.title}
                </h3>
                {entry.organization ? (
                  <p className="mt-1 text-base text-muted">
                    {entry.organization}
                  </p>
                ) : null}
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink md:text-lg">
                  {entry.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
