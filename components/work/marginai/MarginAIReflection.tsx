import { Reveal } from "@/components/ui/Reveal";
import { marginaiReflection } from "@/content/marginai";

export function MarginAIReflection() {
  return (
    <section
      id="reflection"
      aria-labelledby="reflection-heading"
      className="section-y bg-border-subtle"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">
          15 / Reflection
        </p>

        <h2 id="reflection-heading" className="sr-only">
          Technical reflection
        </h2>

        <blockquote className="mt-10 max-w-4xl font-serif text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.2] tracking-[-0.015em]">
          &ldquo;{marginaiReflection}&rdquo;
        </blockquote>

        <p className="mt-8 text-sm uppercase tracking-[0.14em] text-muted">
          — Zaid Duartee
        </p>
      </Reveal>
    </section>
  );
}
