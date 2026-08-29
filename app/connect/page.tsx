import type { Metadata } from "next";
import {
  ConnectActions,
  ConnectFooter,
  ConnectIdentity,
  ConnectPortrait,
} from "@/components/connect/ConnectContent";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Connect",
  description: siteConfig.connectDescription,
  alternates: {
    canonical: "/connect",
  },
  openGraph: {
    title: `Connect — ${siteConfig.name}`,
    description: siteConfig.connectDescription,
    url: `${siteConfig.url}/connect`,
  },
};

export default function ConnectPage() {
  return (
    <main
      id="main-content"
      className="section-pad mx-auto min-h-[calc(100svh-3.5rem)] max-w-[1400px] pb-12 pt-20 md:min-h-[calc(100svh-4rem)] md:pb-16 md:pt-24"
    >
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(320px,480px)] lg:items-start lg:gap-20 xl:grid-cols-[minmax(0,1.1fr)_minmax(360px,520px)] xl:gap-28">
        <div className="flex items-start gap-10">
          <ConnectPortrait />
          <ConnectIdentity />
        </div>

        <div className="mt-6 lg:mt-0 lg:pt-2">
          <ConnectActions />
        </div>
      </div>

      <p className="mt-8 text-[10px] uppercase tracking-[0.18em] text-muted md:hidden">
        {siteConfig.location.toUpperCase()}
        <span className="mx-2 text-border">/</span>
        {siteConfig.year}
      </p>

      <ConnectFooter />
    </main>
  );
}
