import { Reveal } from "@/components/ui/Reveal";
import { marginaiStatusRows, type MarginAIStatusTone } from "@/content/marginai";

const toneClass: Record<MarginAIStatusTone, string> = {
  designed: "text-light",
  proposed: "text-light/85",
  excluded: "text-light/70",
  "not-evidenced": "text-light/70",
};

const toneBadge: Record<MarginAIStatusTone, string> = {
  designed: "border-accent/40 text-accent",
  proposed: "border-light/30 text-light/70",
  excluded: "border-light/20 text-light/55",
  "not-evidenced": "border-light/20 text-light/55",
};

export function MarginAIStatus() {
  return (
    <section
      id="status"
      aria-labelledby="status-heading"
      className="section-y bg-[#12141a] text-light"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-light/55">
          14 / Status
        </p>

        <h2
          id="status-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Designed architecture —
          <br />
          unverified outcomes.
        </h2>

        <ul className="mt-14 space-y-0 border-t border-light/15 md:mt-16">
          {marginaiStatusRows.map((row) => (
            <li
              key={row.workstream}
              className="grid gap-3 border-b border-light/15 py-6 md:grid-cols-[minmax(12rem,1.2fr)_minmax(9rem,0.7fr)_1.4fr] md:items-baseline md:gap-8 md:py-7"
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
              <p className="text-sm leading-relaxed text-light/65 md:text-base">
                {row.claim}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
