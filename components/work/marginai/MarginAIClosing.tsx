import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { marginaiMeta } from "@/content/marginai";
import { noesisProject } from "@/content/projects";
import { siteConfig } from "@/content/site";

export function MarginAIClosing() {
  return (
    <section
      aria-labelledby="closing-heading"
      className="section-y bg-[#12141a] text-light"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <h2 id="closing-heading" className="sr-only">
          Closing
        </h2>

        <p className="max-w-3xl font-serif text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.25] tracking-[-0.015em] text-light/90">
          Inference optimization only matters if engineers trust the path their
          requests take. MarginAI was architected around that trust first — cost
          efficiency second.
        </p>

        <div className="mt-16 flex flex-col gap-10 border-t border-light/15 pt-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-light/55">
              Case / {marginaiMeta.caseNumber}
            </p>
            <p className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-medium tracking-[-0.03em]">
              {marginaiMeta.title}
            </p>
          </div>

          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.16em] text-light/45">
              Case Study {noesisProject.caseNumber}
            </p>
            <Link
              href={noesisProject.href}
              data-cursor="back"
              data-cursor-label="PREV"
              className="text-[clamp(1.25rem,3vw,1.75rem)] font-medium tracking-[-0.02em] text-light link-underline decoration-light/30 hover:text-accent hover:decoration-accent"
            >
              Previous System
              <br />
              {noesisProject.title} →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-8 md:mt-16 md:flex-row md:items-center md:justify-between">
          <Link
            href="/#work"
            data-cursor="back"
            className="text-[11px] uppercase tracking-[0.18em] text-light/65 transition-colors hover:text-light"
          >
            ← Back to Selected Systems
          </Link>

          <Link
            href="/connect"
            data-cursor="view"
            className="text-[11px] uppercase tracking-[0.18em] text-light/65 transition-colors hover:text-light"
          >
            Connect ↗
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
