import { Reveal } from "@/components/ui/Reveal";
import { marginaiTechnologies } from "@/content/marginai";

export function MarginAITechnology() {
  return (
    <section
      id="technology"
      aria-labelledby="technology-heading"
      className="section-y bg-border-subtle"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">
          12 / Technology
        </p>

        <h2
          id="technology-heading"
          className="mt-8 type-h2"
        >
          Implemented stack
          <br />
          across the request path.
        </h2>

        <ul
          className="mt-14 flex flex-wrap gap-3"
          aria-label="Implemented technologies"
        >
          {marginaiTechnologies.map((tech) => (
            <li
              key={tech}
              className="border border-accent/30 bg-canvas px-4 py-2 text-sm tracking-[0.04em] text-ink"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
