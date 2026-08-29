"use client";

import { useEffect, useRef, useState } from "react";
import { atlasArchitectureLayers } from "@/content/atlas";

/**
 * Abstract architecture narrative — four public layers only.
 * No computation-order recipe or internal transformation steps.
 */
export function AtlasArchitecture() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visible.length) return;
        const index = Number(visible[0].target.getAttribute("data-step"));
        if (!Number.isNaN(index)) setActive(index);
      },
      { threshold: [0.35, 0.55, 0.75], rootMargin: "-20% 0px -35% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="architecture"
      aria-labelledby="architecture-heading"
      className="bg-dark text-light"
    >
      <div className="section-pad mx-auto max-w-[1400px] py-16 md:py-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-light/55">
          04 / System Architecture
        </p>
        <h2
          id="architecture-heading"
          className="mt-8 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Four layers.
          <br />
          One governed system.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-light/70 md:text-lg">
          ATLAS separates scientific evidence, governed intelligence, contextual
          evaluation, and validation delivery — without exposing the proprietary
          transformation recipe between them.
        </p>
      </div>

      <div className="section-pad mx-auto hidden max-w-[1400px] lg:grid lg:grid-cols-12 lg:gap-16 lg:pb-32">
        <aside className="lg:col-span-5">
          <div className="sticky top-28">
            <p className="text-[10px] uppercase tracking-[0.18em] text-light/45">
              System Layers
            </p>
            <ol className="mt-8 space-y-0" aria-hidden="true">
              {atlasArchitectureLayers.map((layer, index) => {
                const isActive = index === active;
                const isPast = index < active;
                return (
                  <li
                    key={layer.id}
                    className={`relative flex items-start gap-4 border-l py-4 pl-6 transition-colors duration-300 ${
                      isActive
                        ? "border-accent text-light"
                        : isPast
                          ? "border-accent/40 text-light/70"
                          : "border-light/15 text-light/35"
                    }`}
                  >
                    <span
                      className={`absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                        isActive
                          ? "bg-accent"
                          : isPast
                            ? "bg-accent/50"
                            : "bg-light/20"
                      }`}
                    />
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.16em] opacity-70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p
                        className={`mt-1 text-sm uppercase tracking-[0.08em] md:text-[15px] ${
                          isActive ? "font-medium" : ""
                        }`}
                      >
                        {layer.label}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </aside>

        <div className="lg:col-span-7">
          {atlasArchitectureLayers.map((layer, index) => (
            <article
              key={layer.id}
              data-step={index}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className="flex min-h-[50vh] flex-col justify-center border-t border-light/10 py-16 first:border-t-0 first:pt-0"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-accent">
                Layer {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-[clamp(1.5rem,3vw,2.25rem)] font-medium tracking-[-0.02em]">
                {layer.label}
              </h3>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-light/70">
                {layer.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="section-pad mx-auto max-w-[1400px] pb-20 lg:hidden">
        <ol className="mt-4 space-y-0 border-t border-light/10">
          {atlasArchitectureLayers.map((layer, index) => (
            <li key={layer.id} className="border-b border-light/10 py-8">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-medium tracking-[-0.02em]">
                {layer.label}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-light/70">
                {layer.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
