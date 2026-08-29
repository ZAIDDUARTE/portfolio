import { Reveal } from "@/components/ui/Reveal";
import { atlasStatusRows, type AtlasStatusTone } from "@/content/atlas";

const toneClass: Record<AtlasStatusTone, string> = {
  locked: "text-ink",
  implemented: "text-ink",
  completed: "text-accent",
  ongoing: "text-muted",
  "not-evidenced": "text-muted/80",
};

const toneBadge: Record<AtlasStatusTone, string> = {
  locked: "border-border text-ink",
  implemented: "border-border text-ink",
  completed: "border-accent/40 text-accent",
  ongoing: "border-border text-muted",
  "not-evidenced": "border-border text-muted",
};

export function AtlasStatus() {
  return (
    <section
      id="status"
      aria-labelledby="status-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          14 / Completed vs Ongoing
        </p>

        <h2
          id="status-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Status without theatre
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Locked, implemented, completed, ongoing, and not evidenced — kept
          distinct so validation is not silently promoted into deployment.
        </p>

        <ul className="mt-14 space-y-0 border-t border-border md:mt-16">
          {atlasStatusRows.map((row) => (
            <li
              key={row.workstream}
              className="grid gap-3 border-b border-border py-6 md:grid-cols-[minmax(12rem,1.2fr)_minmax(9rem,0.7fr)_1.4fr] md:items-baseline md:gap-8 md:py-7"
            >
              <p className={`text-base font-medium ${toneClass[row.tone]}`}>
                {row.workstream}
              </p>
              <p>
                <span
                  className={`inline-block border px-3 py-1 text-[10px] uppercase tracking-[0.14em] ${toneBadge[row.tone]}`}
                >
                  {row.status}
                </span>
              </p>
              <p className="text-sm leading-relaxed text-muted md:text-base">
                {row.claim}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
