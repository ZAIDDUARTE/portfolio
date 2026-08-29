import Link from "next/link";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site";

const secondaryLinkClass =
  "text-light link-underline decoration-light/30 transition-colors duration-200 hover:decoration-light focus-visible:decoration-light";

export function FinalContact() {
  return (
    <section
      id="connect"
      aria-labelledby="connect-heading"
      className="contact-surface section-y bg-dark text-light"
    >
      <Reveal className="section-pad mx-auto max-w-[1400px]">
        <SectionLabel number="06" title="Connect" tone="light" />

        <h2
          id="connect-heading"
          className="mt-10 text-[clamp(2.5rem,7.5vw,5rem)] font-medium leading-[1.02] tracking-[-0.035em]"
        >
          HAVE A REASON
          <br />
          TO TALK?
        </h2>

        <Magnetic maxOffset={7}>
          <a
            href={`mailto:${siteConfig.email}`}
            data-cursor="talk"
            className="contact-email tap-active mt-12 inline-flex min-h-12 items-center text-[clamp(1.25rem,3.2vw,2.25rem)] font-medium text-light link-underline decoration-light/40 hover:decoration-light focus-visible:decoration-light md:mt-16"
          >
            {siteConfig.email} ↗
          </a>
        </Magnetic>

        <nav
          className="mt-14 flex flex-wrap gap-x-8 gap-y-4 text-base md:mt-20 md:text-lg"
          aria-label="Contact links"
        >
          <a
            href={siteConfig.linkedin}
            data-cursor="visit"
            className={secondaryLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.github}
            data-cursor="visit"
            className={secondaryLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={siteConfig.cv}
            data-cursor="open"
            className={secondaryLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
          <a
            href={siteConfig.vcard}
            data-cursor="save"
            className={secondaryLinkClass}
            download
          >
            Save Contact
          </a>
        </nav>

        <footer className="mt-24 flex items-baseline justify-between gap-4 border-t border-light/15 pt-8 md:mt-32">
          <p className="text-[11px] uppercase tracking-[0.2em] text-light/75">
            ZD / {siteConfig.year}
          </p>
          <Link
            href="/connect"
            className="text-[10px] uppercase tracking-[0.16em] text-light/60 transition-colors duration-200 hover:text-light"
          >
            Connect Card ↗
          </Link>
        </footer>
      </Reveal>
    </section>
  );
}
