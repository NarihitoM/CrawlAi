import { Container } from "@/shared/components/layout/Container";
import { Icon, type IconName } from "@/shared/components/ui/Icon";

type Feature = {
  icon: IconName;
  title: string;
  endpoint: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "waypoints",
    title: "Unified gateway",
    endpoint: "crawl.chat()",
    description:
      "One key for every provider. Route by model, fall back on errors, retry with backoff, and cache identical calls.",
  },
  {
    icon: "listTree",
    title: "Tracing",
    endpoint: "crawl.trace()",
    description:
      "Every LLM call, tool call and agent step becomes a span with inputs, outputs, tokens, cost and latency.",
  },
  {
    icon: "messageSquareText",
    title: "Prompt management",
    endpoint: "crawl.prompts.get()",
    description:
      "Write system prompts in the dashboard or set them in code. Publish versions and roll back without a deploy.",
  },
  {
    icon: "chartColumn",
    title: "Cost analytics",
    endpoint: "dashboard",
    description:
      "Spend per model, project and user. See which agent step burns tokens before the invoice does.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-8 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex max-w-[620px] flex-col gap-3">
            <p className="font-mono text-xs font-semibold tracking-[0.1em] text-lime-900">
              PLATFORM
            </p>
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[40px]">
              Gateway, tracing and prompts in one SDK.
            </h2>
          </div>
          <p className="max-w-[400px] leading-[1.55] text-zinc-600">
            One client for every provider. Call crawl.chat with any model and CrawlAi handles
            routing, fallbacks, traces and versioned prompts.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 md:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.title} className="flex flex-col gap-4 bg-white p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-lg bg-lime-100 text-lime-900">
                  <Icon name={feature.icon} size={20} />
                </span>
                <code className="rounded-md bg-zinc-100 px-2 py-[3px] font-mono text-xs font-medium text-zinc-600">
                  {feature.endpoint}
                </code>
              </div>
              <h3 className="text-[22px] font-semibold tracking-[-0.018em]">{feature.title}</h3>
              <p className="text-[15px] leading-[1.55] text-zinc-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
