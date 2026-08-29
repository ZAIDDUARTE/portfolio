import { Reveal } from "@/components/ui/Reveal";
import { marginaiMeta, marginaiRoleColumns } from "@/content/marginai";

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
          system delivery end to end.
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
      </Reveal>
    </section>
  );
}
