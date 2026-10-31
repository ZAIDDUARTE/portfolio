import Image from "next/image";
import Link from "next/link";
import { MetaCluster, SectionLabel } from "@/components/layout/SectionLabel";
import { ClipReveal } from "@/components/ui/ClipReveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { alexanderAssets, alexanderMeta } from "@/content/alexander";
import { alexanderProject } from "@/content/projects";

/**
 * Flagship homepage spotlight for Alexander — uses the real branded dashboard.
 */
export function AlexanderFeature() {
  return (
    <section
      aria-labelledby="alexander-feature-heading"
      className="section-y bg-dark text-light"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <SectionLabel number="01" title="Alexander" tone="light" />

        <h2
          id="alexander-feature-heading"
          className="type-display-serif mt-10 max-w-3xl text-[clamp(2rem,5.5vw,4rem)] leading-[1.02] text-light"
        >
          AI Receptionist & Business Automation SaaS
        </h2>

        <MetaCluster
          tone="light"
          className="mt-8"
          items={[
            { label: "Case", value: alexanderProject.caseNumber },
            { label: "Role", value: "CTO / Lead Full-Stack" },
            { label: "Domain", value: alexanderProject.domain },
          ]}
        />

        <p className="type-prose-lg mt-10 text-base text-light/80 md:text-lg">
          {alexanderProject.hook}
        </p>

        <figure className="mt-12 md:mt-16">
          <ClipReveal>
            <div
              className="group relative aspect-[16/10] w-full overflow-hidden border border-light/10 bg-[#0f1114] md:aspect-[16/9]"
              data-cursor="explore"
            >
              <Image
                src={alexanderAssets.dashboard}
                alt={alexanderAssets.dashboardAlt}
                width={alexanderAssets.dashboardWidth}
                height={alexanderAssets.dashboardHeight}
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out motion-reduce:transition-none [@media(pointer:fine)]:group-hover:scale-[1.015]"
                sizes="(max-width: 1024px) 100vw, 1400px"
                priority={false}
              />
            </div>
          </ClipReveal>

          <figcaption className="mt-5 flex flex-col gap-3 text-[10px] uppercase tracking-[0.16em] text-light/55 md:flex-row md:items-baseline md:justify-between">
            <span>Fig. 01 — Alexander customer dashboard (illustrative data)</span>
            <span className="text-light/70">
              Next.js · Voice AI · AWS · Stripe · Trillet
            </span>
          </figcaption>
        </figure>

        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10 md:mt-16">
          <Magnetic maxOffset={7}>
            <Link
              href={alexanderProject.href}
              data-cursor="view"
              data-cursor-label="VIEW 01"
              className="tap-active inline-flex min-h-12 items-center text-[clamp(1rem,2vw,1.25rem)] font-medium uppercase tracking-[0.08em] text-light link-underline decoration-light/30 hover:text-accent hover:decoration-accent"
            >
              Explore Case Study ↗
            </Link>
          </Magnetic>
          <a
            href={alexanderMeta.website}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="visit"
            className="tap-active inline-flex min-h-12 items-center text-sm uppercase tracking-[0.12em] text-light/70 link-underline decoration-light/25 hover:text-light"
          >
            {alexanderMeta.websiteLabel} ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}
