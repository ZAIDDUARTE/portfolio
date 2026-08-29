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
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          12 / Technology
        </p>

        <h2
          id="technology-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
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
