import Image from "next/image";
import { ClipReveal } from "@/components/ui/ClipReveal";
import { Reveal } from "@/components/ui/Reveal";
import { atlasAssets, atlasResolutionCopy } from "@/content/atlas";

export function AtlasResolution() {
  return (
    <section
      id="resolution"
      aria-labelledby="resolution-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          07 / Resolution
        </p>

        <h2
          id="resolution-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          {atlasResolutionCopy.headline}
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-[1.7] text-ink md:text-lg">
          {atlasResolutionCopy.body}
        </p>

        <div
          aria-hidden="true"
          className="mt-14 flex flex-wrap items-end justify-between gap-4 md:mt-16 md:gap-8"
        >
          {atlasResolutionCopy.contexts.map((label, index) => {
            const size = 56 + index * 28;
            return (
              <div key={label} className="flex flex-col items-center gap-3">
                <div
                  className="border border-accent/50 bg-accent/[0.06]"
                  style={{ width: size, height: size }}
                />
                <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
                  {label}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-[11px] uppercase tracking-[0.16em] text-muted">
          {atlasResolutionCopy.contexts.join("  ·  ")}
        </p>

        <figure className="mt-16 md:mt-24">
          <ClipReveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-dark md:aspect-[16/9]">
              <Image
                src={atlasAssets.resolution}
                alt="Abstract multi-context environmental intelligence field over an urban area"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1400px"
              />
            </div>
          </ClipReveal>
          <figcaption className="mt-4 text-[10px] uppercase tracking-[0.16em] text-muted">
            Fig. 04 — Multi-context environmental field
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
