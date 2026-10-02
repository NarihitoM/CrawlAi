import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src="/img/logo-mark.png"
        alt=""
        width={32}
        height={32}
        loading="eager"
        className="size-8 rounded-lg"
      />
      <span className="text-lg font-semibold tracking-[-0.022em]">CrawlAi</span>
    </Link>
  );
}
