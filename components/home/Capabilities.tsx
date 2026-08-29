import { SectionLabel } from "@/components/layout/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { capabilities } from "@/content/experience";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <SectionLabel number="04" title="Capabilities" />

        <h2 id="capabilities-heading" className="sr-only">
          Capabilities
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-14 lg:grid-cols-4">
          {capabilities.map((group) => (
            <div key={group.group}>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                {group.group}
              </h3>
              <ul className="mt-5 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-base leading-relaxed text-ink md:text-[17px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
