import { Reveal } from "@/components/ui/Reveal";
import { noesisValidationItems } from "@/content/noesis";

export function NoesisValidation() {
  return (
    <section
      id="validation"
      aria-labelledby="validation-heading"
      className="section-y bg-[#1a2332] text-light"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-light/55">
          10 / Validation & Uncertainty
        </p>

        <h2
          id="validation-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          What was tested.
          <br />
          What remains open.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-light/70 md:text-lg">
          Engineering validation, spatial consistency, and temporal integrity are
          evidenced in the data-layer work. Clinical validation, causal proof,
          and production model performance are not claimed here.
        </p>

        <ul className="mt-14 grid gap-px bg-light/10 sm:grid-cols-2 lg:grid-cols-3">
          {noesisValidationItems.map((item) => (
            <li
              key={item.title}
              className="bg-[#1a2332] p-6 md:p-8"
            >
              <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-light/75">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
