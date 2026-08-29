import Image from "next/image";
import Link from "next/link";
import { BookingExperience } from "@/components/connect/BookingExperience";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { connectAssets, conversationTopics, hasConnectQr } from "@/content/connect";
import { isConfiguredUrl, siteConfig } from "@/content/site";

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

        <div
          className={`mt-10 grid gap-12 lg:items-start lg:gap-16 ${
            hasConnectQr() ? "lg:grid-cols-[minmax(0,1fr)_220px]" : ""
          }`}
        >
          <div>
            <h2
              id="connect-heading"
              className="max-w-3xl text-[clamp(2rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.035em]"
            >
              Start with the right
              <br />
              conversation.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-light/75 md:text-lg">
              {siteConfig.positioning}
            </p>

            <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <BookingExperience label="Book a conversation" />
              </div>
              <a
                href={siteConfig.vcard}
                data-cursor="save"
                download
                className="tap-active inline-flex min-h-12 items-center justify-center border border-light/25 px-4 text-sm font-medium tracking-[0.04em] text-light transition-colors hover:border-light hover:bg-light hover:text-ink"
              >
                Save Contact
              </a>
              {isConfiguredUrl(siteConfig.whatsapp) ? (
                <a
                  href={siteConfig.whatsapp}
                  data-cursor="visit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-active inline-flex min-h-12 items-center justify-center border border-light/25 px-4 text-sm font-medium tracking-[0.04em] text-light transition-colors hover:border-light hover:bg-light hover:text-ink"
                >
                  WhatsApp
                </a>
              ) : (
                <span className="inline-flex min-h-12 items-center justify-center border border-light/15 px-4 text-sm tracking-[0.04em] text-light/45">
                  WhatsApp pending
                </span>
              )}
              <Magnetic maxOffset={5}>
                <a
                  href={`mailto:${siteConfig.email}`}
                  data-cursor="talk"
                  className="tap-active inline-flex min-h-12 w-full items-center justify-center border border-light/25 px-4 text-sm font-medium tracking-[0.04em] text-light transition-colors hover:border-light hover:bg-light hover:text-ink sm:col-span-2"
                >
                  {siteConfig.email}
                </a>
              </Magnetic>
              <Link
                href="/connect#leave-a-note"
                data-cursor="talk"
                className="tap-active inline-flex min-h-12 items-center justify-center border border-light/25 px-4 text-sm tracking-[0.04em] text-light/80 transition-colors hover:border-light hover:text-light sm:col-span-2"
              >
                Leave a private note →
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3">
              {conversationTopics.map((topic) => (
                <li
                  key={topic.id}
                  className="border border-light/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-light/70"
                >
                  {topic.label}
                </li>
              ))}
            </ul>

            <nav
              className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm md:text-base"
              aria-label="Contact links"
            >
              <Link
                href="/connect"
                data-cursor="view"
                className={secondaryLinkClass}
              >
                Open Connect page
              </Link>
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
            </nav>
          </div>

          {hasConnectQr() && connectAssets.qrPng ? (
            <div className="hidden lg:block">
              <p className="text-[10px] uppercase tracking-[0.16em] text-light/45">
                QR / Connect
              </p>
              <div className="mt-4 border border-light/15 bg-light/5 p-3">
                <Image
                  src={connectAssets.qrPng}
                  alt={connectAssets.qrAlt}
                  width={180}
                  height={180}
                  className="h-auto w-full"
                />
              </div>
              <Link
                href="/connect"
                className="mt-4 inline-flex text-[10px] uppercase tracking-[0.14em] text-light/60 transition-colors hover:text-light"
              >
                Connect page ↗
              </Link>
            </div>
          ) : null}
        </div>

        <footer className="mt-20 flex items-baseline justify-between gap-4 border-t border-light/15 pt-8 md:mt-24">
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
