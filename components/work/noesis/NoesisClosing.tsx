import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { marginaiProject } from "@/content/projects";
import { noesisMeta } from "@/content/noesis";
import { siteConfig } from "@/content/site";

export function NoesisClosing() {
  return (
    <section
      aria-labelledby="closing-heading"
      className="section-y bg-[#e8eef4] text-ink"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <h2 id="closing-heading" className="sr-only">
          Closing
        </h2>

        <p className="max-w-3xl font-serif text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.25] tracking-[-0.015em]">
          Operational healthcare demand becomes more understandable when
          environmental and behavioral context is visible — not because
          variability disappears, but because the sequence behind it becomes
          easier to interpret.
        </p>

        <div className="mt-16 flex flex-col gap-10 border-t border-border pt-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              Case / {noesisMeta.caseNumber}
            </p>
            <p className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-medium tracking-[-0.03em]">
              {noesisMeta.title}
            </p>
          </div>

          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.16em] text-muted">
              Case Study {marginaiProject.caseNumber}
            </p>
            <Link
              href={marginaiProject.href}
              data-cursor="next"
              data-cursor-label="NEXT"
              className="text-[clamp(1.25rem,3vw,1.75rem)] font-medium tracking-[-0.02em] link-underline"
            >
              Next System
              <br />
              {marginaiProject.title} →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-8 md:mt-16 md:flex-row md:items-center md:justify-between">
          <Link
            href="/connect"
            data-cursor="view"
            className="text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
          >
            Connect ↗
          </Link>

          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              Have a reason to talk?
            </p>
            <Magnetic maxOffset={5}>
              <a
                href={`mailto:${siteConfig.email}`}
                data-cursor="talk"
                className="mt-3 inline-flex min-h-12 items-center text-lg link-underline"
              >
                {siteConfig.email} ↗
              </a>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
