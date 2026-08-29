import type { Metadata } from "next";
import { AtlasArchitecture } from "@/components/work/atlas/AtlasArchitecture";
import { AtlasClosing } from "@/components/work/atlas/AtlasClosing";
import { AtlasDemo } from "@/components/work/atlas/AtlasDemo";
import { AtlasExposureFlow } from "@/components/work/atlas/AtlasExposureFlow";
import { AtlasGovernance } from "@/components/work/atlas/AtlasGovernance";
import { AtlasHero } from "@/components/work/atlas/AtlasHero";
import { AtlasMicroExposure } from "@/components/work/atlas/AtlasMicroExposure";
import { AtlasProblem } from "@/components/work/atlas/AtlasProblem";
import { AtlasProduction } from "@/components/work/atlas/AtlasProduction";
import { AtlasProperty } from "@/components/work/atlas/AtlasProperty";
import { AtlasReflection } from "@/components/work/atlas/AtlasReflection";
import { AtlasResolution } from "@/components/work/atlas/AtlasResolution";
import { AtlasRole } from "@/components/work/atlas/AtlasRole";
import { AtlasStatus } from "@/components/work/atlas/AtlasStatus";
import { AtlasTechnology } from "@/components/work/atlas/AtlasTechnology";
import { AtlasTradeoffs } from "@/components/work/atlas/AtlasTradeoffs";
import { AtlasValidation } from "@/components/work/atlas/AtlasValidation";
import { AtlasWhatItIs } from "@/components/work/atlas/AtlasWhatItIs";
import { atlasAssets, atlasMeta } from "@/content/atlas";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "ATLAS — Environmental Risk Intelligence",
  description:
    "A technical case study on ATLAS: governed environmental and geospatial risk intelligence, reproducible validation, and honest reporting of positive and negative results for healthcare and insurance research.",
  alternates: {
    canonical: "/work/atlas",
  },
  openGraph: {
    title: "ATLAS — Environmental Risk Intelligence | Zaid Duartee",
    description:
      "Technical case study: governed environmental intelligence, reproducible validation, and national-scale execution for healthcare and insurance risk research.",
    url: `${siteConfig.url}/work/atlas`,
    images: [
      {
        url: atlasAssets.heroPoster,
        width: 1920,
        height: 1080,
        alt: "ATLAS environmental risk intelligence — opening field",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATLAS — Environmental Risk Intelligence | Zaid Duartee",
    description:
      "Technical case study on governed environmental risk intelligence for healthcare and insurance validation.",
    images: [atlasAssets.heroPoster],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "ATLAS — Environmental Risk Intelligence Platform",
  description: atlasMeta.oneLine,
  url: `${siteConfig.url}/work/atlas`,
  author: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: atlasMeta.role,
  },
  about: [
    "Environmental risk intelligence",
    "Geospatial systems",
    "Healthcare validation",
    "Insurance risk covariates",
  ],
  image: `${siteConfig.url}${atlasAssets.heroPoster}`,
};

export default function AtlasCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        <AtlasHero />
        <AtlasProblem />
        <AtlasWhatItIs />
        <AtlasRole />
        <AtlasArchitecture />
        <AtlasExposureFlow />
        <AtlasMicroExposure />
        <AtlasResolution />
        <AtlasProduction />
        <AtlasValidation />
        <AtlasProperty />
        <AtlasDemo />
        <AtlasGovernance />
        <AtlasTradeoffs />
        <AtlasStatus />
        <AtlasTechnology />
        <AtlasReflection />
        <AtlasClosing />
      </main>
    </>
  );
}
