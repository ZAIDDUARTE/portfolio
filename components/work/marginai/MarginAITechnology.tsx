import { Reveal } from "@/components/ui/Reveal";
import {
  marginaiTechnologiesDesigned,
  marginaiTechnologiesProposed,
} from "@/content/marginai";

export function MarginAITechnology() {
  return (
    <section
      id="technology"
      aria-labelledby="technology-heading"
      className="section-y bg-border-subtle"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          12 / Technology
        </p>

        <h2
          id="technology-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Architecture concepts,
          <br />
          clearly separated from proposals.
        </h2>

        <div className="mt-14 space-y-10">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              Designed architecture
            </p>
            <ul className="mt-4 flex flex-wrap gap-3" aria-label="Designed architecture technologies">
              {marginaiTechnologiesDesigned.map((tech) => (
                <li
                  key={tech}
                  className="border border-accent/30 bg-canvas px-4 py-2 text-sm tracking-[0.04em] text-ink"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              Proposed product layer
            </p>
            <ul className="mt-4 flex flex-wrap gap-3" aria-label="Proposed product technologies">
              {marginaiTechnologiesProposed.map((tech) => (
                <li
                  key={tech}
                  className="border border-dashed border-border bg-canvas px-4 py-2 text-sm tracking-[0.04em] text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
