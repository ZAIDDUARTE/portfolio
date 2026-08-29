import { Reveal } from "@/components/ui/Reveal";
import { noesisMeta } from "@/content/noesis";

export function NoesisWhatItIs() {
  return (
    <section
      id="what-it-is"
      aria-labelledby="what-it-is-heading"
      className="section-y bg-[#1a2332] text-light"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-light/55">
          04 / What Noesis Is
        </p>

        <h2
          id="what-it-is-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Environmental context,
          <br />
          made traceable.
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <p className="text-base leading-[1.7] text-light/80 md:text-lg">
            {noesisMeta.oneLine}
          </p>
          <div className="space-y-6 text-base leading-relaxed text-light/70">
            <p>
              Rather than treating pollution as an isolated sensor reading, the
              platform models how environmental risk may develop, move between
              neighboring regions, change over time, and interact with
              population context — always with confidence and provenance
              attached.
            </p>
            <p>
              The intended purpose is decision support: helping interpret
              hyperlocal environmental-health context for applications including
              public health awareness, operational preparedness, and research —
              not autonomous clinical diagnosis.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
