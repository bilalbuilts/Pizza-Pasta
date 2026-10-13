"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-yellow-400/30 bg-page/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <Link
          href="/"
          aria-label="Pizza Pasta House home"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Pizza Pasta House"
            width={900}
            height={773}
            priority
            className="h-16 w-auto sm:h-[72px]"
          />
        </Link>
        <nav className="hidden gap-8 font-sans text-sm font-semibold uppercase leading-5 tracking-wide text-ink sm:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "text-accent" : "hover:text-accent"}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`tel:${site.phoneLink}`}
            className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-neutral-950 hover:bg-yellow-300"
          >
            Call to order
          </a>
        </div>
      </div>
      <nav className="flex justify-around border-t border-line py-2.5 font-sans text-sm font-semibold uppercase leading-5 tracking-wide text-ink sm:hidden">
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={pathname === l.href ? "text-accent" : ""}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
