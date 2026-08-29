import { Reveal } from "@/components/ui/Reveal";
import { noesisMeta, noesisTechnicalDelivery } from "@/content/noesis";

export function NoesisStatus() {
  return (
    <section
      id="status"
      aria-labelledby="status-heading"
      className="section-y bg-border-subtle"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          14 / Technical Delivery
        </p>

        <h2
          id="status-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          What was built —
          <br />
          end to end.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {noesisMeta.scopeNote}
        </p>

        <ul className="mt-14 space-y-0 border-t border-border md:mt-16">
          {noesisTechnicalDelivery.map((row) => (
            <li
              key={row.capability}
              className="grid gap-3 border-b border-border py-6 md:grid-cols-[minmax(12rem,1.2fr)_1.4fr] md:items-baseline md:gap-8 md:py-7"
            >
              <p className="text-base font-medium text-ink">{row.capability}</p>
              <p className="text-sm leading-relaxed text-muted md:text-base">
                {row.detail}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
