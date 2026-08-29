import { Reveal } from "@/components/ui/Reveal";
import { atlasContributions, atlasMeta, atlasRoleColumns } from "@/content/atlas";

export function AtlasRole() {
  return (
    <section
      id="role"
      aria-labelledby="role-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          03 / My Role
        </p>

        <h2
          id="role-heading"
          className="mt-8 max-w-4xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          From locked specification
          <br />
          to national-scale execution
        </h2>

        <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
          {atlasMeta.role}
        </p>

        <p className="mt-8 max-w-3xl text-base leading-[1.7] text-ink md:text-lg">
          Led technical execution across environmental-data engineering,
          geospatial computation, cloud architecture, governed pipelines,
          validation workflows and production quality.
        </p>

        <div className="mt-14 grid gap-10 border-t border-border pt-10 md:mt-16 md:grid-cols-3 md:gap-12">
          {atlasRoleColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                {column.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink">
                {column.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Selected Contributions
          </h3>
          <ul className="mt-8 space-y-0 border-t border-border">
            {atlasContributions.map((item, index) => (
              <li
                key={item}
                className="grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-5 md:grid-cols-[4rem_1fr] md:gap-8"
              >
                <span className="text-[11px] uppercase tracking-[0.16em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed text-ink md:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
