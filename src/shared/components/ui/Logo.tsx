import Link from "next/link";
import { Icon } from "./Icon";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="grid size-7 place-items-center rounded-[7px] bg-lime-500 text-ink">
        <Icon name="activity" size={16} />
      </span>
      <span className="text-lg font-semibold tracking-[-0.022em]">CrawlAi</span>
    </Link>
  );
}
