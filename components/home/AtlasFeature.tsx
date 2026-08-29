import Image from "next/image";
import Link from "next/link";
import { MetaCluster, SectionLabel } from "@/components/layout/SectionLabel";
import { ClipReveal } from "@/components/ui/ClipReveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { atlasLayers, atlasProject } from "@/content/projects";

/**
 * ATLAS is the visual peak of the homepage: the surface shifts from warm
 * off-white to graphite. The media container is art-directed only — it accepts
 * verified ATLAS assets later without structural change.
 */
export function AtlasFeature() {
  return (
    <section
      aria-labelledby="atlas-heading"
      className="section-y bg-dark text-light"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <SectionLabel number="01" title="Atlas" tone="light" />

        <h2
          id="atlas-heading"
          className="type-display-serif mt-10 max-w-3xl text-[clamp(2rem,5.5vw,4rem)] leading-[1.02] text-light"
        >
          Environmental Risk Intelligence
        </h2>

        <MetaCluster
          tone="light"
          className="mt-8"
          items={[
            { label: "Case", value: atlasProject.caseNumber },
            { label: "Role", value: atlasProject.role },
            { label: "Domain", value: atlasProject.domain },
          ]}
        />

        <p className="type-prose-lg mt-10 text-base text-light/80 md:text-lg">
          {atlasProject.hook}
        </p>

        <figure className="mt-12 md:mt-16">
          <ClipReveal>
            <div
              className="atlas-visual relative aspect-[4/3] w-full overflow-hidden bg-[#0f1114] md:aspect-[16/9]"
              data-cursor="explore"
            >
              {/* TODO: REPLACE WITH VERIFIED PROJECT ASSET */}
              <Image
                src={atlasProject.image}
                alt={atlasProject.imageAlt}
                width={atlasProject.imageWidth}
                height={atlasProject.imageHeight}
                className="h-full w-full object-cover transition-transform duration-700 ease-out motion-reduce:transition-none [@media(pointer:fine)]:hover:scale-[1.01]"
                sizes="(max-width: 1024px) 100vw, 1400px"
              />
              <div
                aria-hidden="true"
                className="atlas-sweep pointer-events-none absolute left-0 top-1/2 h-px w-full bg-accent opacity-0"
              />
            </div>
          </ClipReveal>

          <figcaption className="mt-5 flex flex-col gap-3 text-[10px] uppercase tracking-[0.16em] text-light/55 md:flex-row md:items-baseline md:justify-between">
            <span>Fig. 01 — Environmental intelligence system</span>
            <span className="text-light/70">
              {atlasLayers.join(" · ").toUpperCase()}
            </span>
          </figcaption>
        </figure>

        <Magnetic maxOffset={7}>
          <Link
            href={atlasProject.href}
            data-cursor="view"
            data-cursor-label="VIEW 01"
            className="tap-active mt-12 inline-flex min-h-12 items-center text-[clamp(1rem,2vw,1.25rem)] font-medium uppercase tracking-[0.08em] text-light link-underline decoration-light/30 hover:text-accent hover:decoration-accent md:mt-16"
          >
            Explore System ↗
          </Link>
        </Magnetic>
      </Reveal>
    </section>
  );
}
