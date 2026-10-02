import { Container } from "@/shared/components/layout/Container";
import { SiteFooter } from "@/shared/components/layout/SiteFooter";
import { SiteNav } from "@/shared/components/layout/SiteNav";
import { ButtonLink } from "@/shared/components/ui/ButtonLink";
import { FadeIn } from "@/shared/components/ui/FadeIn";
import { Icon } from "@/shared/components/ui/Icon";
import { site } from "@/shared/lib/site";

export function ComingSoonPage() {
  return (
    <>
      <SiteNav />
      <main className="relative isolate flex flex-1 items-center overflow-hidden py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(var(--zinc-200)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        />
        <Container>
          <FadeIn className="mx-auto flex max-w-[560px] flex-col items-center gap-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-100 bg-lime-50 px-3 py-1 text-[13px] font-medium text-lime-900">
              <span className="size-1.5 animate-pulse rounded-full bg-lime-500" />
              Coming soon
            </span>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-balance sm:text-5xl">
              We are still building this page
            </h1>
            <p className="text-base leading-[1.55] text-zinc-600 sm:text-lg">
              This part of CrawlAi is not ready yet. Check back soon, or follow along on GitHub
              while we ship it.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <ButtonLink href="/" size="lg">
                Back to home
                <Icon name="arrowRight" size={16} />
              </ButtonLink>
              <ButtonLink href={site.githubUrl} variant="secondary" size="lg">
                View on GitHub
              </ButtonLink>
            </div>
          </FadeIn>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
