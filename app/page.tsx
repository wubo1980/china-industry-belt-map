import Link from "next/link";
import { ArrowDownRight, ArrowRight, ChartColumn, Ship, Waypoints } from "lucide-react";

import { RegionCard } from "@/src/components/cards/RegionCard";
import { InteractiveChinaMap } from "@/src/components/home/InteractiveChinaMap";
import { QuickFilter } from "@/src/components/home/QuickFilter";
import { UnifiedCta } from "@/src/components/sections/UnifiedCta";
import { getAllRegions } from "@/src/lib/content";

/**
 * Renders the homepage with the interactive map, quick filters, and region cards.
 */
export default function Home() {
  const regions = getAllRegions();

  return (
    <div className="report-shell py-10 sm:py-14">
      <div className="space-y-10">
        <section className="overflow-hidden rounded-[36px] border border-zinc-200 bg-linear-to-br from-white via-blue-50 to-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-600">
                Interactive map view
              </p>
              <div className="space-y-4">
                <h1 className="max-w-3xl font-serif text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
                  Where Should You Source From China?
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-zinc-600">
                  Interactive Map of China&apos;s Manufacturing Clusters. Find the right
                  factory corridor for your product in about three minutes.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/80 p-4">
                  <ChartColumn className="h-5 w-5 text-blue-600" />
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Compare clusters
                  </p>
                  <p className="mt-2 text-sm font-semibold text-zinc-950">
                    See where each product family is strongest.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/80 p-4">
                  <Ship className="h-5 w-5 text-blue-600" />
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Match logistics
                  </p>
                  <p className="mt-2 text-sm font-semibold text-zinc-950">
                    Factor ports, rail links, and airport access into sourcing.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/80 p-4">
                  <Waypoints className="h-5 w-5 text-blue-600" />
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Link by industry
                  </p>
                  <p className="mt-2 text-sm font-semibold text-zinc-950">
                    Move between regions and product categories quickly.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#regions"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Explore by Region
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/industry/electronics"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700"
                >
                  Start with Electronics
                  <ArrowDownRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <InteractiveChinaMap />
          </div>
        </section>

        <QuickFilter />

        <section id="regions" className="space-y-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Six major belts
            </p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-zinc-950">
              Start with the corridor that best matches your product, lead time, and
              supplier-management style
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {regions.map((region) => (
              <RegionCard key={region.slug} region={region} />
            ))}
          </div>
        </section>

        <UnifiedCta />
      </div>
    </div>
  );
}
