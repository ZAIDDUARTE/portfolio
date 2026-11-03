import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import type { ServicePageContent } from "@/content/service-pages";
import { isConfiguredUrl, siteConfig } from "@/content/site";

type Props = {
  service: ServicePageContent;
};

export function ServicePageView({ service }: Props) {
  const upworkHref =
    service.secondaryCta.href === "upwork" ? siteConfig.upwork : service.secondaryCta.href;
  const showUpwork =
    service.secondaryCta.href === "upwork"
      ? isConfiguredUrl(siteConfig.upwork)
      : Boolean(upworkHref);

  return (
    <main
      id="main-content"
      className="section-pad mx-auto min-h-[calc(100svh-3.5rem)] max-w-[1400px] pb-16 pt-20 md:min-h-[calc(100svh-4rem)] md:pb-24 md:pt-24"
    >
      <Reveal>
        <p className="type-eyebrow text-muted">{service.eyebrow}</p>
        <h1 className="mt-5 text-[clamp(2.25rem,7vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
          {service.title}
        </h1>
        <p className="type-prose mt-6 max-w-2xl text-base text-muted md:text-lg">
          {service.summary}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Magnetic>
            <Link
              href={service.primaryCta.href}
              className="tap-active inline-flex min-h-12 items-center text-base font-medium text-accent link-underline"
            >
              {service.primaryCta.label} →
            </Link>
          </Magnetic>
          {showUpwork && upworkHref ? (
            <a
              href={upworkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-active inline-flex min-h-12 items-center text-base text-ink link-underline"
            >
              {service.secondaryCta.label} ↗
            </a>
          ) : null}
        </div>
      </Reveal>

      <Reveal className="mt-16 grid gap-12 border-t border-border pt-12 md:mt-20 md:grid-cols-2 md:gap-16 md:pt-16">
        <section aria-labelledby="problems-heading">
          <h2
            id="problems-heading"
            className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted"
          >
            Problems this covers
          </h2>
          <ul className="mt-5 space-y-4">
            {service.problems.map((item) => (
              <li key={item} className="text-base leading-relaxed text-ink">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="capabilities-heading">
          <h2
            id="capabilities-heading"
            className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted"
          >
            Capabilities
          </h2>
          <ul className="mt-5 space-y-4">
            {service.capabilities.map((item) => (
              <li key={item} className="text-base leading-relaxed text-ink">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal className="mt-12 grid gap-12 border-t border-border pt-12 md:grid-cols-2 md:gap-16 md:pt-16">
        <section aria-labelledby="scope-heading">
          <h2
            id="scope-heading"
            className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted"
          >
            Clear scope
          </h2>
          <ul className="mt-5 space-y-4">
            {service.scopeNotes.map((item) => (
              <li key={item} className="text-base leading-relaxed text-muted">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="out-of-scope-heading">
          <h2
            id="out-of-scope-heading"
            className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted"
          >
            Out of scope
          </h2>
          <ul className="mt-5 space-y-4">
            {service.outOfScope.map((item) => (
              <li key={item} className="text-base leading-relaxed text-muted">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal className="mt-12 border-t border-border pt-12 md:pt-16">
        <section aria-labelledby="case-studies-heading">
          <h2
            id="case-studies-heading"
            className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted"
          >
            Relevant case studies
          </h2>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {service.caseStudies.map((study) => (
              <li key={study.id} className="py-6">
                <Link
                  href={study.href}
                  className="group block"
                  data-cursor="view"
                >
                  <p className="text-lg font-medium tracking-[-0.02em] text-ink group-hover:text-accent">
                    {study.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">{study.subtitle}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                    {study.relevance}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal className="mt-16 flex flex-col gap-6 border-t border-border pt-10 md:mt-20 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl text-base text-muted">
          Ready to discuss fit? Send a project inquiry or hire on Upwork at{" "}
          {siteConfig.rateLabel}.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href={service.primaryCta.href}
            className="tap-active inline-flex min-h-12 items-center justify-center border border-ink bg-ink px-6 text-sm font-medium tracking-[0.04em] text-light transition-colors hover:border-accent hover:bg-accent"
          >
            {service.primaryCta.label}
          </Link>
          <Link
            href="/#services"
            className="tap-active inline-flex min-h-12 items-center text-sm text-muted link-underline"
          >
            ← All services
          </Link>
        </div>
      </Reveal>
    </main>
  );
}
