import { Reveal } from "@/components/ui/Reveal";
import { alexanderProblems } from "@/content/alexander";

export function AlexanderProblem() {
  return (
    <section
      id="problem"
      aria-labelledby="alexander-problem-heading"
      className="section-y editorial-rule"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <p className="type-eyebrow text-muted">01 / Challenge</p>
        <h2
          id="alexander-problem-heading"
          className="mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Plumbing businesses need a receptionist that knows their rules — not a
          generic answering bot
        </h2>
        <p className="type-prose mt-6 max-w-3xl text-base text-muted md:text-lg">
          Missed calls, unsafe improvisation, and unstructured transcripts create
          operational risk. Alexander was designed so the AI can only act within
          verified company policy and confirmed system capability.
        </p>

        <ol className="mt-12 grid gap-0 border-t border-border md:grid-cols-2 lg:grid-cols-3">
          {alexanderProblems.map((problem, index) => (
            <li
              key={problem.title}
              className="border-b border-border py-8 pr-0 md:border-r md:px-6 md:odd:pl-0 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n+1)]:pl-0"
            >
              <p className="type-meta text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-medium tracking-[-0.02em] text-ink md:text-xl">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {problem.body}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
