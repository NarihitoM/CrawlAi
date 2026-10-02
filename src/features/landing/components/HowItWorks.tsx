import { Container } from "@/shared/components/layout/Container";
import { CopyButton } from "@/shared/components/ui/CopyButton";
import { FadeIn } from "@/shared/components/ui/FadeIn";
import { Icon, type IconName } from "@/shared/components/ui/Icon";
import type { CodeLine } from "../types/types";
import { CodeLines, comment, keyword, plain, string, toText } from "./CodeLines";

const steps: { icon: IconName; text: string }[] = [
  { icon: "download", text: "Install the SDK with npm i @crawlai/sdk" },
  { icon: "keyRound", text: "Add your project key as CRAWLAI_KEY" },
  { icon: "activity", text: "Call any model with crawl.chat and watch traces arrive live" },
];

const quickstart: CodeLine[] = [
  [comment("# 1. install")],
  [keyword("npm"), plain(" i @crawlai/sdk")],
  [],
  [comment("# 2. connect your project")],
  [keyword("export"), plain(" CRAWLAI_KEY="), string("cai-live-8f2a...a3f9")],
  [],
  [comment("// 3. call any model through CrawlAi")],
  [
    keyword("const"),
    plain(" res = "),
    keyword("await"),
    plain(' crawl.chat({ model: "gpt-5", messages })'),
  ],
  [
    keyword("const"),
    plain(" prompt = "),
    keyword("await"),
    plain(" crawl.prompts.get("),
    string('"support-agent"'),
    plain(")"),
  ],
];

export function HowItWorks() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <FadeIn className="flex flex-1 flex-col gap-5">
          <p className="font-mono text-xs font-semibold tracking-[0.1em] text-lime-900">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[40px]">
            From npm install to full traces in three steps
          </h2>
          <p className="leading-[1.55] text-zinc-600">
            No collector to host and no proxy to run. The SDK sends traces in the background, so
            your requests never wait on CrawlAi.
          </p>
          <ul className="flex flex-col gap-3.5 pt-2">
            {steps.map((step) => (
              <li key={step.text} className="flex items-center gap-3 text-[15px]">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-lime-500 text-ink">
                  <Icon name={step.icon} size={12} />
                </span>
                {step.text}
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn
          delay={0.1}
          className="w-full overflow-hidden rounded-[10px] border border-zinc-200 bg-white lg:w-[600px] lg:shrink-0"
        >
          <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-2.5">
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((dot) => (
                <span key={dot} className="size-2 rounded-full bg-zinc-200" />
              ))}
              <span className="font-mono text-xs text-zinc-500">quickstart</span>
            </div>
            <CopyButton text={toText(quickstart)} />
          </div>
          <div className="overflow-x-auto p-5">
            <CodeLines lines={quickstart} className="text-[13px] leading-6" />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
