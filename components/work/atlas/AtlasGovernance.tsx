import { Reveal } from "@/components/ui/Reveal";
import { atlasTrustPrinciples } from "@/content/atlas";

export function AtlasGovernance() {
  return (
    <section
      id="governance"
      aria-labelledby="governance-heading"
      className="section-y bg-dark text-light"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-light/55">
          12 / Governance
        </p>

        <h2
          id="governance-heading"
          className="mt-8 type-h2"
        >
          Trust is part of the product
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-light/70 md:text-lg">
          In high-stakes risk systems, provenance and honesty are as important
          as predictive signal.
        </p>

        <div className="mt-14 border border-light/15 md:mt-16">
          <div className="border-b border-light/15 px-6 py-5 md:px-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-light/60">
              Trust Principles
            </p>
          </div>

          <ul className="grid sm:grid-cols-2">
            {atlasTrustPrinciples.map((item, index) => (
              <li
                key={item.title}
                className={`border-light/10 px-6 py-6 md:px-8 ${
                  index < atlasTrustPrinciples.length - 2 ? "border-b" : ""
                } ${index % 2 === 0 ? "sm:border-r" : ""}`}
              >
                <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-light/75">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
