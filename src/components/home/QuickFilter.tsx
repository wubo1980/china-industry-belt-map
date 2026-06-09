import Link from "next/link";

import { quickFilters } from "@/src/data/site";

/**
 * Renders the homepage industry quick-filter buttons.
 */
export function QuickFilter() {
  return (
    <section id="industries" className="space-y-4">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
          Quick filter
        </p>
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-zinc-950">
          Jump straight to the industry lens that matches your sourcing brief
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {quickFilters.map((filter) => (
          <Link
            key={filter.slug}
            href={`/industry/${filter.slug}`}
            className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-sm font-semibold text-zinc-700 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-sm"
          >
            {filter.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
