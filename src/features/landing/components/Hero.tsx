import Link from "next/link";
import { Container } from "@/shared/components/layout/Container";
import { ButtonLink } from "@/shared/components/ui/ButtonLink";
import { FadeIn } from "@/shared/components/ui/FadeIn";
import { Icon } from "@/shared/components/ui/Icon";
import { site } from "@/shared/lib/site";
import { DemoWindow } from "./DemoWindow";
import { HorizonBackground } from "./HorizonBackground";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16 sm:pt-24">
      <HorizonBackground />
      <Container className="flex flex-col items-center gap-14">
        <FadeIn className="flex max-w-[880px] flex-col items-center gap-6 text-center">
          <Link
            href="/#features"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 py-1 pl-1 pr-3 text-[13px] text-zinc-600 transition-colors hover:text-zinc-950"
          >
            <span className="rounded-full bg-lime-100 px-2 py-0.5 text-xs font-semibold text-lime-900">
              New
            </span>
            Prompt management is now in beta
            <Icon name="arrowRight" size={14} className="text-zinc-400" />
          </Link>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.034em] sm:text-5xl lg:text-[64px]">
            One SDK for every model.
            <br className="hidden sm:block" /> Full visibility into every call.
          </h1>
          <p className="max-w-[640px] text-base leading-[1.55] text-zinc-600 sm:text-lg">
            Install @crawlai/sdk, route every LLM call through one gateway, and trace each model
            call, tool call and agent step in your dashboard. Built for chatbots and AI agents.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <ButtonLink href={site.signUpUrl} size="lg">
              Get started free
            </ButtonLink>
            <ButtonLink href={site.docsUrl} variant="secondary" size="lg">
              Read the docs
            </ButtonLink>
          </div>
        </FadeIn>
        <FadeIn delay={0.15} className="w-full">
          <DemoWindow />
        </FadeIn>
      </Container>
    </section>
  );
}
