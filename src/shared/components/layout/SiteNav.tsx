import Link from "next/link";
import { ButtonLink } from "@/shared/components/ui/ButtonLink";
import { Logo } from "@/shared/components/ui/Logo";
import { ThemeToggle } from "@/shared/components/ui/ThemeToggle";
import { site } from "@/shared/lib/site";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";

const links = [
  { label: "Features", href: "/#features" },
  { label: "Docs", href: site.docsUrl },
  { label: "Changelog", href: "/changelog" },
];

export function SiteNav() {
  return (
    <header className="relative z-40 border-b border-zinc-200">
      <Container className="flex items-center justify-between py-[18px]">
        <Logo />
        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <ButtonLink href={site.signInUrl} variant="ghost" className="max-md:hidden">
            Sign in
          </ButtonLink>
          <ButtonLink href={site.signUpUrl} className="max-sm:hidden">
            Start free
          </ButtonLink>
          <MobileNav links={links} />
        </div>
      </Container>
    </header>
  );
}
