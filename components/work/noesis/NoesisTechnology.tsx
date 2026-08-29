import { Reveal } from "@/components/ui/Reveal";
import { noesisTechnologies } from "@/content/noesis";

export function NoesisTechnology() {
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
          Verified stack only.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Technologies listed here reflect verified use in the Noesis engineering
          work — not tools inferred from other projects.
        </p>

        <ul className="mt-14 flex flex-wrap gap-3">
          {noesisTechnologies.map((tech) => (
            <li
              key={tech}
              className="border border-border bg-canvas px-4 py-2 text-sm tracking-[0.04em] text-ink"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
