import type { Metadata } from "next";
import {
  ConnectCaseStudyLinks,
  ConnectConversationTopics,
  ConnectHero,
  ConnectPortrait,
  ConnectPrimaryGrid,
  ConnectQrSection,
  ConnectSecondaryNav,
} from "@/components/connect/ConnectHub";
import { VisitorNoteForm } from "@/components/connect/VisitorNoteForm";
import { connectAssets } from "@/content/connect";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: siteConfig.connectTitle,
  description: siteConfig.connectDescription,
  alternates: {
    canonical: "/connect",
  },
  openGraph: {
    title: siteConfig.connectTitle,
    description: siteConfig.connectDescription,
    url: `${siteConfig.url}/connect`,
    images: [
      {
        url: connectAssets.og,
        width: connectAssets.ogWidth,
        height: connectAssets.ogHeight,
        alt: "Connect with Zaid Duartee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.connectTitle,
    description: siteConfig.connectDescription,
    images: [connectAssets.og],
  },
};

export default function ConnectPage() {
  return (
    <main
      id="main-content"
      className="section-pad mx-auto min-h-[calc(100svh-3.5rem)] max-w-[1400px] pb-16 pt-20 md:min-h-[calc(100svh-4rem)] md:pb-24 md:pt-24"
    >
      <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] xl:items-start xl:gap-20">
        <div className="flex items-start gap-10">
          <ConnectPortrait />
          <div className="min-w-0 flex-1">
            <ConnectHero />
            <div className="mt-10 md:mt-12">
              <ConnectPrimaryGrid />
            </div>
            <ConnectConversationTopics />
            <ConnectCaseStudyLinks />
          </div>
        </div>

        <aside className="mt-12 xl:mt-0">
          <ConnectSecondaryNav />
          <ConnectQrSection />
        </aside>
      </div>

      <VisitorNoteForm />

      <footer className="mt-16 border-t border-border pt-8 md:mt-24">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
          {siteConfig.name.toUpperCase()} / {siteConfig.year}
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          data-cursor="talk"
          className="mt-3 inline-block text-sm text-muted link-underline"
        >
          {siteConfig.email}
        </a>
      </footer>
    </main>
  );
}
