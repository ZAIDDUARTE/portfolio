import { Reveal } from "@/components/ui/Reveal";
import { alexanderContributions, alexanderRole } from "@/content/alexander";

export function AlexanderRole() {
  return (
    <section
      aria-labelledby="alexander-role-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">03 / Contributions</p>
        <h2
          id="alexander-role-heading"
          className="mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          {alexanderRole.title}
        </h2>
        <p className="type-prose mt-6 max-w-3xl text-base text-muted md:text-lg">
          {alexanderRole.body}
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {alexanderRole.columns.map((column) => (
            <div key={column.title} className="border-t border-border pt-6">
              <h3 className="text-sm font-medium uppercase tracking-[0.12em] text-accent">
                {column.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink">
                {column.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-border bg-canvas p-6 md:p-10">
          <h3 className="type-eyebrow text-muted">Engineering highlights</h3>
          <ul className="mt-6 space-y-4">
            {alexanderContributions.map((item) => (
              <li
                key={item}
                className="border-l border-accent/40 pl-5 text-base leading-relaxed text-ink md:text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
