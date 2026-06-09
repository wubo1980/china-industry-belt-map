"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import type { RegionSlug } from "@/src/types/content";
import { chinaProvinces, CHINA_VIEWBOX } from "@/src/data/china-provinces";
import { regions } from "@/src/data/regions";
import { cn } from "@/src/lib/utils";

/**
 * Chunky bezier fill for a polished map look.
 */
const densityStyle: Record<number, string> = {
  0: "fill-zinc-100 stroke-zinc-300 stroke-[1.2]",
  1: "fill-sky-100 stroke-blue-400 stroke-[1.2]",
  2: "fill-blue-200 stroke-blue-500 stroke-[1.2]",
  3: "fill-blue-400 stroke-blue-600 stroke-[1.2]",
  4: "fill-blue-600 stroke-blue-700 stroke-[1.2]",
};

const densityHover: Record<number, string> = {
  0: "hover:fill-zinc-200",
  1: "hover:fill-sky-200",
  2: "hover:fill-blue-300",
  3: "hover:fill-blue-500",
  4: "hover:fill-blue-700",
};

/**
 * Renders a real SVG-based interactive China province map for sourcing corridor
 * exploration.
 */
export function InteractiveChinaMap() {
  const router = useRouter();
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeProvince = useMemo(
    () => chinaProvinces.find((p) => p.id === activeId),
    [activeId],
  );

  const activeRegion = useMemo(
    () =>
      activeProvince && activeProvince.regionSlug !== "other"
        ? regions[activeProvince.regionSlug as RegionSlug]
        : undefined,
    [activeProvince],
  );

  return (
    <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      {/* ---- map ---- */}
      <div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
        <svg
          viewBox={CHINA_VIEWBOX}
          className="w-full"
          role="img"
          aria-label="Interactive map of China's manufacturing clusters"
        >
          {/* Background fill for missing provinces */}
          <rect
            x="0"
            y="0"
            width="774"
            height="569"
            className="fill-stone-50"
            rx="8"
          />

          {/* Province paths */}
          {chinaProvinces.map((province) => {
            const isActive = province.id === activeId;
            const density = province.density;

            return (
              <g key={province.id} className="transition-transform duration-150">
                <path
                  d={province.path}

                  tabIndex={0}
                  className={cn(
                    "cursor-pointer transition-all duration-150 focus:outline-hidden",
                    densityStyle[density],
                    densityHover[density],
                    isActive && "!fill-emerald-500 !stroke-emerald-600",
                  )}
                  onMouseEnter={() => setActiveId(province.id)}
                  onFocus={() => setActiveId(province.id)}
                  onClick={() => {
                    if (province.regionSlug !== "other") {
                      setActiveId(province.id);
                      router.push(`/region/${province.regionSlug}`);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (
                      (e.key === "Enter" || e.key === " ") &&
                      province.regionSlug !== "other"
                    ) {
                      e.preventDefault();
                      router.push(`/region/${province.regionSlug}`);
                    }
                  }}
                />
                {/* Province label */}
                <text
                  x={parseFloat(getPathCenter(province.path).x.toString())}
                  y={parseFloat(getPathCenter(province.path).y.toString())}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={cn(
                    "pointer-events-none text-[11px] font-semibold",
                    density >= 3
                      ? "fill-white"
                      : density > 0
                        ? "fill-zinc-800"
                        : "fill-zinc-400",
                  )}
                >
                  {province.name}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Density Legend */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-zinc-500">
          <span className="font-semibold uppercase tracking-[0.2em]">Factory density</span>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-sky-100" />
            Light
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-blue-300" />
            Medium
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-blue-600" />
            High
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-emerald-500" />
            Hovered / selected
          </div>
        </div>
      </div>

      {/* ---- info panel ---- */}
      <aside className="rounded-[32px] border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
          {activeProvince ? "Selected province" : "Hover a province"}
        </p>
        {activeProvince && activeRegion ? (
          <div className="mt-4 space-y-5">
            <div>
              <p className="text-sm font-medium text-zinc-500">{activeProvince.name}</p>
              <h2 className="mt-1 font-serif text-3xl font-semibold text-zinc-950">
                {activeRegion.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{activeRegion.tagline}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {activeRegion.heroStats.slice(0, 2).map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-zinc-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-zinc-950">{stat.value}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="text-sm font-semibold text-zinc-950">Key industries</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeProvince.industries.map((ind) => (
                  <span
                    key={ind}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => router.push(`/region/${activeRegion.slug}`)}
              className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Explore this region →
            </button>
          </div>
        ) : (
          <div className="mt-8 space-y-4 text-center text-sm text-zinc-400">
            <p>Move your cursor over a province</p>
            <p className="text-xs">to see which sourcing corridor it belongs to</p>
          </div>
        )}
      </aside>
    </section>
  );
}

/**
 * Crude bounding-box centroid from an SVG path `d` string.
 * Extracts the first few `m`/`M` coordinates.
 */
function getPathCenter(d: string): { x: number; y: number } {
  // Grab first coordinate pair after m/M
  const match = d.match(/[mM]\s*(-?\d+\.?\d*)\s*,?\s*(-?\d+\.?\d*)/);
  if (match) {
    return { x: parseFloat(match[1]) + 40, y: parseFloat(match[2]) + 20 };
  }
  return { x: 400, y: 280 };
}
