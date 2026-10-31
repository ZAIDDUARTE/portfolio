"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ProjectVideo } from "@/components/ui/ProjectVideo";
import { atlasAssets } from "@/content/atlas";

export function AtlasDemo() {
  return (
    <section
      id="demo"
      aria-labelledby="demo-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">
          11 / Demo
        </p>

        <h2
          id="demo-heading"
          className="mt-8 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Atlas in motion
        </h2>

        <ProjectVideo
          className="mt-12 md:mt-16"
          src={atlasAssets.demoVideo}
          poster={atlasAssets.demoPoster}
          title="ATLAS product demonstration"
          caption="Fig. 05 — Product demonstration"
        />
      </Reveal>
    </section>
  );
}
