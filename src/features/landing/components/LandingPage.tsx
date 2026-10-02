import { SiteFooter } from "@/shared/components/layout/SiteFooter";
import { SiteNav } from "@/shared/components/layout/SiteNav";
import { CtaBand } from "./CtaBand";
import { Features } from "./Features";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { ProviderStrip } from "./ProviderStrip";

export function LandingPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <ProviderStrip />
        <Features />
        <HowItWorks />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
