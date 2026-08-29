import { Reveal } from "@/components/ui/Reveal";
import { noesisStatusRows, type NoesisStatusTone } from "@/content/noesis";

const toneClass: Record<NoesisStatusTone, string> = {
  implemented: "text-ink",
  designed: "text-ink",
  exploratory: "text-muted",
  "not-evidenced": "text-muted/80",
};

const toneBadge: Record<NoesisStatusTone, string> = {
  implemented: "border-accent/40 text-accent",
  designed: "border-border text-ink",
  exploratory: "border-border text-muted",
  "not-evidenced": "border-border text-muted",
};

export function NoesisStatus() {
  return (
    <section
      id="status"
      aria-labelledby="status-heading"
      className="section-y bg-border-subtle"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          14 / Status
        </p>

        <h2
          id="status-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          What exists now —
          <br />
          and what does not.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Implemented engineering, designed architecture, exploratory framing,
          and not-evidenced claims are kept distinct so the portfolio remains
          defensible.
        </p>

        <ul className="mt-14 space-y-0 border-t border-border md:mt-16">
          {noesisStatusRows.map((row) => (
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
