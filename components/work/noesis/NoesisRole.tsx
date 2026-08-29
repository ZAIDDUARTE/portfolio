import { Reveal } from "@/components/ui/Reveal";
import { noesisContributions, noesisRoleColumns } from "@/content/noesis";

export function NoesisRole() {
  return (
    <section
      id="role"
      aria-labelledby="role-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">
          05 / My Role
        </p>

        <h2
          id="role-heading"
          className="mt-8 type-h2"
        >
          Architecture, geospatial engineering,
          <br />
          and scientific rigor.
        </h2>

        <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-3">
          {noesisRoleColumns.map((col) => (
            <div key={col.title} className="border-t border-border pt-6">
              <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                {col.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink">
                {col.body}
              </p>
            </div>
          ))}
        </div>

        <ul className="mt-14 space-y-4 border-t border-border pt-10 md:mt-16">
          {noesisContributions.map((item) => (
            <li
              key={item}
              className="grid gap-2 border-b border-border pb-4 text-base leading-relaxed text-ink md:grid-cols-[1rem_1fr] md:gap-6"
            >
              <span className="text-accent" aria-hidden="true">
                —
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
