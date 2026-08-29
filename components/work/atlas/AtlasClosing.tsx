import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { atlasMeta } from "@/content/atlas";
import { siteConfig } from "@/content/site";

export function AtlasClosing() {
  return (
    <section
      aria-labelledby="closing-heading"
      className="section-y bg-dark text-light"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <h2 id="closing-heading" className="sr-only">
          Next steps
        </h2>

        <div className="flex flex-col gap-10 border-b border-light/15 pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-light/55">
              Case / {atlasMeta.caseNumber}
            </p>
            <p className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-medium tracking-[-0.03em]">
              {atlasMeta.title}
            </p>
          </div>

          <Link
            href="/#work"
            data-cursor="next"
            data-cursor-label="NEXT"
            className="text-[clamp(1.25rem,3vw,1.75rem)] font-medium tracking-[-0.02em] text-light link-underline decoration-light/30 hover:text-accent hover:decoration-accent"
          >
            Next System
            <br />
            MarginAI →
          </Link>
        </div>

        <div className="mt-12 flex flex-col gap-8 md:mt-16 md:flex-row md:items-center md:justify-between">
          <Link
            href="/#work"
            data-cursor="back"
            className="text-[11px] uppercase tracking-[0.18em] text-light/65 transition-colors hover:text-light"
          >
            ← Back to Selected Systems
          </Link>

          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-light/55">
              Have a reason to talk?
            </p>
            <Magnetic maxOffset={5}>
              <a
                href={`mailto:${siteConfig.email}`}
                data-cursor="talk"
                className="mt-3 inline-flex min-h-12 items-center text-lg text-light link-underline decoration-light/30 hover:text-accent hover:decoration-accent"
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
