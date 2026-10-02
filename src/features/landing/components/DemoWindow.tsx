import type { CodeLine } from "../types/types";
import { CodeLines, keyword, plain, string } from "./CodeLines";
import { TracePreview } from "./TracePreview";

const request: CodeLine[] = [
  [keyword("import"), plain(" { CrawlAi } "), keyword("from"), string(' "@crawlai/sdk"')],
  [],
  [keyword("const"), plain(" crawl = "), keyword("new"), plain(" CrawlAi({ key: env.CRAWLAI_KEY })")],
  [],
  [keyword("const"), plain(" res = "), keyword("await"), plain(" crawl.chat({")],
  [plain("  agent: "), string('"support-agent"'), plain(",")],
  [plain("  model: "), string('"gpt-5"'), plain(",")],
  [plain("  messages,")],
  [plain("  fallback: ["), string('"claude-sonnet-5"'), plain("],")],
  [plain("})")],
];

export function DemoWindow() {
  return (
    <div className="w-full overflow-hidden rounded-t-[14px] border border-b-0 border-zinc-200 bg-white">
      <div className="flex items-center gap-4 border-b border-zinc-200 bg-zinc-50 px-5 py-3">
        <div className="flex gap-2">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className="size-2.5 rounded-full bg-zinc-400" />
          ))}
        </div>
        <div className="flex gap-1 font-mono text-[13px]">
          <span className="rounded-md border border-zinc-200 bg-white px-3 py-[5px] font-medium">
            agent.ts
          </span>
          <span className="px-3 py-[5px] text-zinc-600">trace_8f2a</span>
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="overflow-x-auto border-b border-zinc-200 px-6 py-7 sm:px-8 lg:border-b-0 lg:border-r">
          <CodeLines lines={request} className="text-sm leading-7" />
        </div>
        <div className="overflow-x-auto">
          <TracePreview />
        </div>
      </div>
    </div>
  );
}
