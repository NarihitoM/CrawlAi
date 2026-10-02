import Link from "next/link";
import { Logo } from "@/shared/components/ui/Logo";
import { site } from "@/shared/lib/site";
import { Container } from "./Container";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Gateway", href: "/#features" },
      { label: "Tracing", href: "/#features" },
      { label: "Prompts", href: "/#features" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "Documentation", href: site.docsUrl },
      { label: "SDK reference", href: `${site.docsUrl}/sdk` },
      { label: "GitHub", href: site.githubUrl },
    ],
  },
];

const linkClass = "text-zinc-500 transition-colors hover:text-zinc-950";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 pb-8 pt-12">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div className="flex max-w-[280px] flex-col gap-3">
            <Logo />
            <p className="text-sm text-zinc-500">
              The AI gateway and monitoring layer for LLM apps.
            </p>
          </div>
          <div className="flex gap-20 text-[13px]">
            {columns.map((column) => (
              <div key={column.heading} className="flex flex-col gap-3">
                <h3 className="font-semibold">{column.heading}</h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-zinc-200 pt-6 text-[13px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CrawlAi. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className={linkClass}>
              Terms
            </Link>
            <Link href="/privacy" className={linkClass}>
              Privacy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
