"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/shared/components/ui/ButtonLink";
import { Icon } from "@/shared/components/ui/Icon";
import { site } from "@/shared/lib/site";
import { Container } from "./Container";

type NavLink = {
  label: string;
  href: string;
};

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="grid size-10 place-items-center rounded-lg text-zinc-950 transition-colors hover:bg-zinc-100"
      >
        <Icon name={open ? "x" : "menu"} size={20} />
      </button>
      {open && (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-50 border-b border-zinc-200 bg-white shadow-lg shadow-black/5"
        >
          <Container className="flex flex-col py-3">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={close}
                className="py-3 text-[15px] text-zinc-600 transition-colors hover:text-zinc-950"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-3 border-t border-zinc-200 pt-4 pb-2">
              <ButtonLink
                href={site.signInUrl}
                variant="secondary"
                onClick={close}
                className="flex-1"
              >
                Sign in
              </ButtonLink>
              <ButtonLink href={site.signUpUrl} onClick={close} className="flex-1">
                Start free
              </ButtonLink>
            </div>
          </Container>
        </nav>
      )}
    </div>
  );
}
