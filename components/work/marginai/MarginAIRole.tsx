import { Reveal } from "@/components/ui/Reveal";
import {
  marginaiContributions,
  marginaiMeta,
  marginaiRoleColumns,
  type MarginAIStatusTone,
} from "@/content/marginai";

const toneBadge: Record<MarginAIStatusTone, string> = {
  designed: "border-accent/40 text-accent",
  proposed: "border-light/25 text-light/55",
  excluded: "border-light/20 text-light/45",
  "not-evidenced": "border-light/20 text-light/45",
};

export function MarginAIRole() {
  return (
    <section
      id="role"
      aria-labelledby="role-heading"
      className="section-y bg-[#12141a] text-light"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-light/55">
          04 / My Role
        </p>

        <h2
          id="role-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          {marginaiMeta.role} —
          <br />
          architecture to economics.
        </h2>

        <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-3">
          {marginaiRoleColumns.map((col) => (
            <div key={col.title} className="border-t border-light/15 pt-6">
              <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                {col.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-light/75">
                {col.body}
              </p>
            </div>
          ))}
        </div>

        <ul className="mt-14 space-y-4 border-t border-light/15 pt-10 md:mt-16">
          {marginaiContributions.map((item) => (
            <li
              key={item.body}
              className="grid gap-3 border-b border-light/10 pb-4 md:grid-cols-[auto_1fr] md:items-start md:gap-6"
            >
              <span
                className={`inline-block w-fit border px-2 py-0.5 text-[9px] uppercase tracking-[0.14em] ${toneBadge[item.tone]}`}
              >
                {item.tone === "designed" ? "Designed" : "Proposed"}
              </span>
              <span className="text-base leading-relaxed text-light/80">
                {item.body}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
