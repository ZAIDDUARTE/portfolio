import Link from "next/link";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { credibilityPoints, services } from "@/content/services";
import { isConfiguredUrl, siteConfig } from "@/content/site";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <SectionLabel number="03" title="Services" />

        <div className="mt-10 md:grid md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <h2
              id="services-heading"
              className="text-[clamp(1.875rem,4vw,3rem)] font-medium leading-[1.05] tracking-[-0.03em]"
            >
              Practical delivery for SaaS founders and growing businesses
            </h2>
            <p className="type-prose mt-5 max-w-md text-base text-muted md:text-lg">
              Available for React/Next.js builds, WordPress work, API
              integrations, AI-assisted product features, and debugging existing
              applications — at {siteConfig.rateLabel}.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6">
              {credibilityPoints.map((point) => (
                <div key={point.label}>
                  <dt className="type-eyebrow text-muted">{point.label}</dt>
                  <dd className="mt-2 text-lg font-medium tracking-[-0.02em] text-ink">
                    {point.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Magnetic>
                <Link
                  href="/connect"
                  className="tap-active inline-flex min-h-12 items-center text-base font-medium text-accent link-underline"
                >
                  Contact Me →
                </Link>
              </Magnetic>
              {isConfiguredUrl(siteConfig.upwork) ? (
                <a
                  href={siteConfig.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-active inline-flex min-h-12 items-center text-base text-ink link-underline"
                >
                  Hire Me on Upwork ↗
                </a>
              ) : null}
            </div>
          </div>

          <ul className="mt-12 grid gap-0 border-t border-border md:col-span-7 md:mt-0">
            {services.map((service, index) => (
              <li
                key={service.id}
                className="grid gap-2 border-b border-border py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-8"
              >
                <p className="text-sm text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-lg font-medium tracking-[-0.02em] text-ink md:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
