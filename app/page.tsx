import { About } from "@/components/home/About";
import { AtlasFeature } from "@/components/home/AtlasFeature";
import { Capabilities } from "@/components/home/Capabilities";
import { Experience } from "@/components/home/Experience";
import { FinalContact } from "@/components/home/FinalContact";
import { Hero } from "@/components/home/Hero";
import { ProfessionalSnapshot } from "@/components/home/ProfessionalSnapshot";
import { SelectedWork } from "@/components/home/SelectedWork";
import { SocialProof } from "@/components/home/SocialProof";
import {
  ArchitectureStatement,
  ReproducibilityStatement,
} from "@/components/home/Statements";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <SelectedWork />
      <AtlasFeature />
      <ReproducibilityStatement />
      <ProfessionalSnapshot />
      <Experience />
      <ArchitectureStatement />
      <Capabilities />
      <About />
      <SocialProof />
      <FinalContact />
    </main>
  );
}
