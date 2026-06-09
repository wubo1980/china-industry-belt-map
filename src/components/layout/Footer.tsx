import Link from "next/link";

import { navigationItems, sisterSites } from "@/src/data/site";

/**
 * Renders the global footer with navigation and sister-site links.
 */
export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto grid w-full max-w-[1300px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
            China Industry Belt Map
          </p>
          <h2 className="max-w-xl font-serif text-2xl font-semibold text-zinc-950">
            A sourcing research site for buyers who need to decide where to go before
            deciding who to contact.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-zinc-600">
            Built as a companion to process-oriented sourcing guides, this site focuses on
            the manufacturing geography behind supplier selection.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-zinc-950">Navigation</h3>
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-zinc-600 transition hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-zinc-950">Sister sites</h3>
            {sisterSites.map((site) => (
              <a
                key={site.href}
                href={site.href}
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-zinc-600 transition hover:text-blue-600"
              >
                {site.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
