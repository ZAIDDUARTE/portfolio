import Image from "next/image";
import Link from "next/link";
import { alexanderAssets, alexanderMeta } from "@/content/alexander";

export function AlexanderHero() {
  return (
    <section
      aria-labelledby="alexander-case-heading"
      className="section-pad mx-auto max-w-[1400px] pb-12 pt-24 md:pb-16 md:pt-32"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <Link
          href="/#work"
          data-cursor="back"
          className="type-meta text-muted transition-colors hover:text-ink"
        >
          ← Featured Case Studies
        </Link>
        <p className="type-meta text-muted">Case / {alexanderMeta.caseNumber}</p>
      </div>

      <div className="mt-10 md:grid md:grid-cols-12 md:gap-10 lg:gap-16">
        <div className="md:col-span-7">
          <p className="type-eyebrow text-accent">Flagship case study</p>
          <h1
            id="alexander-case-heading"
            className="mt-4 text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-ink"
          >
            {alexanderMeta.title}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.12em] text-muted md:text-base">
            {alexanderMeta.subtitle}
          </p>
          <p className="mt-8 max-w-2xl text-[clamp(1.25rem,2.8vw,1.75rem)] leading-[1.2] tracking-[-0.02em] text-ink">
            {alexanderMeta.statement}
          </p>

          <dl className="mt-10 grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="type-eyebrow text-muted">Role</dt>
              <dd className="mt-2 text-base text-ink">{alexanderMeta.role}</dd>
            </div>
            <div>
              <dt className="type-eyebrow text-muted">Industry</dt>
              <dd className="mt-2 text-base text-ink">{alexanderMeta.industry}</dd>
            </div>
            <div>
              <dt className="type-eyebrow text-muted">Domain</dt>
              <dd className="mt-2 text-base text-ink">{alexanderMeta.domain}</dd>
            </div>
            <div>
              <dt className="type-eyebrow text-muted">Website</dt>
              <dd className="mt-2">
                <a
                  href={alexanderMeta.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-accent link-underline"
                  data-cursor="visit"
                >
                  {alexanderMeta.websiteLabel} ↗
                </a>
              </dd>
            </div>
          </dl>

          <p className="mt-8 max-w-2xl type-meta leading-relaxed text-muted normal-case tracking-normal">
            {alexanderMeta.scopeNote}
          </p>
        </div>

        <aside className="mt-12 md:col-span-5 md:mt-0 md:self-end">
          <blockquote className="border-l border-accent pl-5">
            <p className="type-display-serif text-[clamp(1.25rem,2.4vw,1.625rem)] leading-snug text-ink">
              {alexanderMeta.pullQuote}
            </p>
          </blockquote>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#dashboard"
              className="tap-active inline-flex min-h-12 items-center text-sm font-medium text-accent link-underline"
            >
              View dashboard →
            </a>
            <a
              href={alexanderMeta.website}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-active inline-flex min-h-12 items-center text-sm text-ink link-underline"
            >
              Visit product site
            </a>
          </div>
        </aside>
      </div>

      <figure id="dashboard" className="mt-14 scroll-mt-28 md:mt-20">
        <div className="group relative overflow-hidden border border-border bg-dark shadow-[0_24px_80px_-40px_rgba(23,23,23,0.55)]">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={alexanderAssets.dashboard}
              alt={alexanderAssets.dashboardAlt}
              width={alexanderAssets.dashboardWidth}
              height={alexanderAssets.dashboardHeight}
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out motion-reduce:transition-none [@media(pointer:fine)]:group-hover:scale-[1.015]"
            />
          </div>
        </div>
        <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-3 text-[10px] uppercase tracking-[0.16em] text-muted">
          <span>Fig. 01 — Branded customer dashboard (illustrative data)</span>
          <span>Next.js Image · WebP optimized</span>
        </figcaption>
      </figure>
    </section>
  );
}
