import { Container } from "@/shared/components/layout/Container";
import { ButtonLink } from "@/shared/components/ui/ButtonLink";
import { site } from "@/shared/lib/site";

export function CtaBand() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="flex flex-col gap-8 rounded-2xl border border-lime-100 bg-lime-50 px-8 py-12 sm:px-16 sm:py-14 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2.5">
            <h2 className="text-[28px] font-semibold tracking-[-0.028em] sm:text-[32px]">
              See every call your agent makes
            </h2>
            <p className="text-zinc-600">
              Free for every developer. No credit card, no request limits.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={site.signUpUrl} size="lg">
              Start free
            </ButtonLink>
            <ButtonLink href={site.docsUrl} variant="secondary" size="lg">
              Read the docs
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
