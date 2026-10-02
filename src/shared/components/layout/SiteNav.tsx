import Link from "next/link";
import { ButtonLink } from "@/shared/components/ui/ButtonLink";
import { Logo } from "@/shared/components/ui/Logo";
import { site } from "@/shared/lib/site";
import { Container } from "./Container";

const links = [
  { label: "Features", href: "/#features" },
  { label: "Docs", href: site.docsUrl },
  { label: "Changelog", href: "/changelog" },
];

export function SiteNav() {
  return (
    <header className="border-b border-zinc-200">
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
        <div className="flex items-center gap-2">
          <ButtonLink href={site.signInUrl} variant="ghost" className="hidden sm:inline-flex">
            Sign in
          </ButtonLink>
          <ButtonLink href={site.signUpUrl}>Start free</ButtonLink>
        </div>
      </Container>
    </header>
  );
}
