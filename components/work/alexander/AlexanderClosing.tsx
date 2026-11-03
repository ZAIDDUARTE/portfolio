import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { alexanderMeta } from "@/content/alexander";
import { satoriProject } from "@/content/projects";
import { isConfiguredUrl, siteConfig } from "@/content/site";

export function AlexanderClosing() {
  return (
    <section
      aria-labelledby="alexander-closing-heading"
      className="section-y bg-dark text-light"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <h2 id="alexander-closing-heading" className="sr-only">
          Next steps
        </h2>

        <div className="flex flex-col gap-10 border-b border-light/15 pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-light/55">
              Case / {alexanderMeta.caseNumber}
            </p>
            <p className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-medium tracking-[-0.03em]">
              {alexanderMeta.title}
            </p>
            <a
              href={alexanderMeta.website}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="visit"
              className="mt-5 inline-flex min-h-12 items-center text-base text-light/80 link-underline decoration-light/30 hover:text-accent hover:decoration-accent"
            >
              Visit {alexanderMeta.websiteLabel} ↗
            </a>
          </div>

          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.16em] text-light/45">
              Case Study {satoriProject.caseNumber}
            </p>
            <Link
              href={satoriProject.href}
              data-cursor="next"
              data-cursor-label="NEXT"
              className="text-[clamp(1.25rem,3vw,1.75rem)] font-medium tracking-[-0.02em] text-light link-underline decoration-light/30 hover:text-accent hover:decoration-accent"
            >
              Next case study
              <br />
              {satoriProject.title} →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-8 md:mt-16 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <Link
              href="/#work"
              data-cursor="back"
              className="text-[11px] uppercase tracking-[0.18em] text-light/65 transition-colors hover:text-light"
            >
              ← Back to Featured Work
            </Link>
            <Link
              href="/connect"
              className="text-[11px] uppercase tracking-[0.18em] text-light/65 transition-colors hover:text-light"
            >
              Contact Me →
            </Link>
            {isConfiguredUrl(siteConfig.upwork) ? (
              <a
                href={siteConfig.upwork}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="visit"
                className="text-[11px] uppercase tracking-[0.18em] text-light/65 transition-colors hover:text-light"
              >
                Hire on Upwork ↗
              </a>
            ) : null}
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-light/55">
              Discuss a similar AI SaaS build?
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
