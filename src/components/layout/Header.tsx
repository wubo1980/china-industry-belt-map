import Link from "next/link";

import { navigationItems, siteName } from "@/src/data/site";

/**
 * Renders the global site header and top navigation.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/92 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-xl font-semibold tracking-tight text-zinc-950">
            {siteName}
          </span>
          <span className="text-xs text-zinc-500">
            Where China&apos;s sourcing corridors actually connect
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/blog"
          className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-100"
        >
          Latest insights
        </Link>
      </div>
    </header>
  );
}
