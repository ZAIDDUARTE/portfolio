import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/content/experience";

/**
 * Editorial pull-quote interruptions — deliberately not testimonial cards.
 * The second quote is offset to break the left margin rhythm.
 */
export function SocialProof() {
  return (
    <section aria-labelledby="social-proof-heading" className="section-y">
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <h2 id="social-proof-heading" className="sr-only">
          Client feedback
        </h2>

        <div className="md:grid md:grid-cols-12">
          <figure className="md:col-span-7">
            <blockquote className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.2] tracking-[-0.015em] text-ink">
              &ldquo;{testimonials[1].quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-[11px] uppercase tracking-[0.18em] text-muted">
              — {testimonials[1].attribution}
            </figcaption>
          </figure>

          <figure className="mt-20 md:col-span-6 md:col-start-7 md:mt-32">
            <blockquote className="font-serif text-[clamp(1.25rem,2.6vw,1.875rem)] leading-[1.25] tracking-[-0.01em] text-ink">
              &ldquo;{testimonials[0].quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-[11px] uppercase tracking-[0.18em] text-muted">
              — {testimonials[0].attribution}
            </figcaption>
          </figure>
        </div>
      </Reveal>
    </section>
  );
}
