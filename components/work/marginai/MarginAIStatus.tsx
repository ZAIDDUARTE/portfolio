import { Reveal } from "@/components/ui/Reveal";
import { marginaiMeta, marginaiTechnicalDelivery } from "@/content/marginai";

export function MarginAIStatus() {
  return (
    <section
      id="status"
      aria-labelledby="status-heading"
      className="section-y bg-[#12141a] text-light"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-light/55">
          14 / Technical Delivery
        </p>

        <h2
          id="status-heading"
          className="mt-8 type-h2"
        >
          Implemented system —
          <br />
          scoped and defensible.
        </h2>

        <p className="mt-6 max-w-2xl border-l-2 border-accent/70 pl-4 text-sm leading-relaxed text-light/75">
          {marginaiMeta.scopeNote}
        </p>

        <ul className="mt-14 space-y-0 border-t border-light/15 md:mt-16">
          {marginaiTechnicalDelivery.map((row) => (
            <li
              key={row.capability}
              className="grid gap-3 border-b border-light/15 py-6 md:grid-cols-[minmax(12rem,1fr)_1.6fr] md:items-baseline md:gap-8 md:py-7"
            >
              <p className="text-base font-medium text-light">
                {row.capability}
              </p>
              <p className="text-sm leading-relaxed text-light/65 md:text-base">
                {row.detail}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
