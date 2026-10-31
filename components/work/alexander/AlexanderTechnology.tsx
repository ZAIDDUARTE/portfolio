import { Reveal } from "@/components/ui/Reveal";
import { alexanderTechnologies } from "@/content/alexander";

export function AlexanderTechnology() {
  return (
    <section
      aria-labelledby="alexander-tech-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">05 / Stack</p>
        <h2
          id="alexander-tech-heading"
          className="mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Technologies
        </h2>
        <p className="type-prose mt-6 max-w-3xl text-base text-muted md:text-lg">
          A multi-system stack spanning marketing, SaaS application delivery,
          cloud persistence, conversational voice, billing, and field-service
          integrations.
        </p>
        <ul className="mt-10 flex flex-wrap gap-3">
          {alexanderTechnologies.map((tech) => (
            <li
              key={tech}
              className="border border-border px-4 py-2.5 text-sm tracking-[0.02em] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
