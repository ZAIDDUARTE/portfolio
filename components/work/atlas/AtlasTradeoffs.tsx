import { Reveal } from "@/components/ui/Reveal";
import { atlasTradeoffs } from "@/content/atlas";

export function AtlasTradeoffs() {
  return (
    <section
      id="tradeoffs"
      aria-labelledby="tradeoffs-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          13 / Trade-offs
        </p>

        <h2
          id="tradeoffs-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          The hard part wasn&rsquo;t
          <br />
          the happy path.
        </h2>

        <ul className="mt-14 space-y-0 border-t border-border md:mt-16">
          {atlasTradeoffs.map((item) => (
            <li
              key={item.index}
              className="grid gap-4 border-b border-border py-8 md:grid-cols-[4rem_minmax(12rem,22rem)_1fr] md:gap-10 md:py-10"
            >
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted">
                {item.index}
              </span>
              <h3 className="text-lg font-medium leading-snug tracking-[-0.02em] md:text-xl">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
