import Link from "next/link";
import { ArrowRight, Factory } from "lucide-react";

import type { RegionEntry } from "@/src/types/content";

/**
 * Renders a region summary card used on the homepage and related sections.
 */
export function RegionCard(props: { region: RegionEntry }) {
  const { region } = props;

  return (
    <Link
      href={`/region/${region.slug}`}
      className="group rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
          <Factory className="h-5 w-5" />
        </div>
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
          {region.shortLabel}
        </span>
      </div>

      <div className="mt-5 space-y-3">
        <h3 className="font-serif text-2xl font-semibold text-zinc-950">{region.name}</h3>
        <p className="text-sm font-medium text-zinc-500">{region.regionLine}</p>
        <p className="text-sm leading-7 text-zinc-600">{region.tagline}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {region.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
        Learn more
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
