import { Icon, type IconName } from "@/shared/components/ui/Icon";

type Span = {
  icon: IconName;
  iconClass: string;
  label: string;
  meta?: string;
  metaClass?: string;
  barClass: string;
  left: number;
  width: number;
  duration: string;
  nested: boolean;
};

const spans: Span[] = [
  {
    icon: "bot",
    iconClass: "text-zinc-600",
    label: "agent.run",
    barClass: "bg-zinc-400",
    left: 0,
    width: 100,
    duration: "2.84s",
    nested: false,
  },
  {
    icon: "sparkles",
    iconClass: "text-lime-900",
    label: "llm",
    meta: "gpt-5",
    barClass: "bg-lime-500",
    left: 1.1,
    width: 34.8,
    duration: "0.98s",
    nested: true,
  },
  {
    icon: "wrench",
    iconClass: "text-zinc-600",
    label: "tool",
    meta: "web_search",
    barClass: "bg-zinc-600",
    left: 37.1,
    width: 23.1,
    duration: "0.64s",
    nested: true,
  },
  {
    icon: "sparkles",
    iconClass: "text-red-600",
    label: "llm",
    meta: "gpt-5  429",
    metaClass: "text-red-600",
    barClass: "bg-red-600",
    left: 61,
    width: 4.9,
    duration: "0.14s",
    nested: true,
  },
  {
    icon: "sparkles",
    iconClass: "text-lime-900",
    label: "llm",
    meta: "claude-sonnet-5",
    barClass: "bg-lime-500",
    left: 67,
    width: 31.8,
    duration: "0.92s",
    nested: true,
  },
];

const stats = [
  { key: "tokens", value: "3,412", valueClass: "text-zinc-950" },
  { key: "cost", value: "$0.0142", valueClass: "text-zinc-950" },
  { key: "route", value: "fallback", valueClass: "text-lime-900" },
  { key: "cache", value: "miss", valueClass: "text-zinc-950" },
];

export function TracePreview() {
  return (
    <div className="flex flex-col gap-3.5 px-6 py-7 font-mono sm:px-8">
      <div className="flex items-center justify-between border-b border-zinc-200 pb-2.5">
        <div className="flex gap-2.5 text-[13px]">
          <span>trace_8f2a</span>
          <span className="text-zinc-500">support-agent</span>
        </div>
        <span className="whitespace-pre text-xs text-zinc-500">2.84s  ·  $0.0142</span>
      </div>
      <ul className="flex flex-col gap-3.5 text-xs">
        {spans.map((span, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="flex w-[210px] shrink-0 items-center gap-2">
              {span.nested && <span className="w-3.5 shrink-0" />}
              <span className="grid size-[18px] shrink-0 place-items-center rounded bg-zinc-100">
                <Icon name={span.icon} size={11} className={span.iconClass} />
              </span>
              <span>{span.label}</span>
              {span.meta && (
                <span className={`whitespace-pre ${span.metaClass ?? "text-zinc-500"}`}>
                  {span.meta}
                </span>
              )}
            </div>
            <div className="relative h-2 min-w-0 flex-1 rounded-sm bg-zinc-100">
              <span
                className={`absolute inset-y-0 rounded-sm ${span.barClass}`}
                style={{ left: `${span.left}%`, width: `${span.width}%` }}
              />
            </div>
            <span className="w-10 shrink-0 text-right text-zinc-500">{span.duration}</span>
          </li>
        ))}
      </ul>
      <dl className="flex flex-wrap gap-4 border-t border-zinc-200 pt-2.5 text-xs">
        {stats.map((stat) => (
          <div key={stat.key} className="flex gap-1.5">
            <dt className="text-zinc-500">{stat.key}</dt>
            <dd className={stat.valueClass}>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
