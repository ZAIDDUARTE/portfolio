import { Reveal } from "@/components/ui/Reveal";
import {
  atlasProductionPhases,
  atlasProductionStatement,
} from "@/content/atlas";

export function AtlasProduction() {
  return (
    <section
      id="production"
      aria-labelledby="production-heading"
      className="section-y bg-dark text-light"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-light/55">
          08 / Production Engineering
        </p>

        <h2
          id="production-heading"
          className="mt-8 max-w-4xl text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          A score isn&rsquo;t useful
          <br />
          if you can&rsquo;t trust the release.
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-[1.7] text-light/75 md:text-lg">
          {atlasProductionStatement}
        </p>

        <ol className="mt-14 grid gap-0 border-t border-light/15 md:mt-16 md:grid-cols-4">
          {atlasProductionPhases.map((phase, index) => (
            <li
              key={phase.title}
              className={`border-light/15 py-8 md:px-5 md:py-10 ${
                index === 0 ? "md:pl-0" : "border-t md:border-l md:border-t-0"
              } ${index === atlasProductionPhases.length - 1 ? "md:pr-0" : ""}`}
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
                {phase.index}
              </p>
              <h3 className="mt-4 text-lg font-medium tracking-[-0.02em] md:text-xl">
                {phase.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-light/65 md:text-[15px]">
                {phase.body}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
