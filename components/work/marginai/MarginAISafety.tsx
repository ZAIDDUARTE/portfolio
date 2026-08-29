import { Reveal } from "@/components/ui/Reveal";
import { marginaiPrinciples } from "@/content/marginai";

export function MarginAISafety() {
  return (
    <section
      id="safety"
      aria-labelledby="safety-heading"
      className="section-y bg-border-subtle"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          08 / Safety & Fail-Open
        </p>

        <h2
          id="safety-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Prefer zero cost reduction
          <br />
          over unsafe optimization.
        </h2>

        <p className="mt-8 max-w-3xl font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] leading-snug tracking-[-0.01em] text-ink">
          If any required guarantee cannot be established, the original request
          follows the unchanged path to the provider.
        </p>

        <ul className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {marginaiPrinciples.map((item) => (
            <li key={item.title} className="bg-canvas p-6 md:p-8">
              <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
