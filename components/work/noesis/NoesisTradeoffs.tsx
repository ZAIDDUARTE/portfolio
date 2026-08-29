import { Reveal } from "@/components/ui/Reveal";
import { noesisTradeoffs } from "@/content/noesis";

export function NoesisTradeoffs() {
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
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Every intelligence system
          <br />
          chooses what to sacrifice.
        </h2>

        <ul className="mt-14 space-y-0 border-t border-border md:mt-16">
          {noesisTradeoffs.map((item) => (
            <li
              key={item.title}
              className="grid gap-3 border-b border-border py-8 md:grid-cols-[minmax(10rem,0.8fr)_1.4fr] md:gap-12 md:py-10"
            >
              <h3 className="text-lg font-medium tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
