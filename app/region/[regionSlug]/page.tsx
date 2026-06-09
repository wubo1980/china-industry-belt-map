import { notFound } from "next/navigation";

import { IndustrySpotlight } from "@/src/components/content/IndustrySpotlight";
import { RelatedLinks } from "@/src/components/content/RelatedLinks";
import { SourceBadgeList } from "@/src/components/content/SourceBadgeList";
import { PageHero } from "@/src/components/sections/PageHero";
import { UnifiedCta } from "@/src/components/sections/UnifiedCta";
import { DataTable } from "@/src/components/tables/DataTable";
import { industries } from "@/src/data/industries";
import { regionSlugs, regions } from "@/src/data/regions";
import { getRegionBySlug } from "@/src/lib/content";
import { buildPageMetadata } from "@/src/lib/metadata";
import type { RegionSlug } from "@/src/types/content";

export const dynamicParams = false;

/**
 * Enumerates all region pages for static export.
 */
export function generateStaticParams() {
  return regionSlugs.map((regionSlug) => ({ regionSlug }));
}

/**
 * Builds SEO metadata for a specific region page.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ regionSlug: RegionSlug }>;
}) {
  const { regionSlug } = await params;
  const region = getRegionBySlug(regionSlug);

  if (!region) {
    notFound();
  }

  return buildPageMetadata({
    title: region.seoTitle,
    description: region.seoDescription,
    pathname: `/region/${region.slug}`,
  });
}

/**
 * Renders a single region details page.
 */
export default async function RegionPage({
  params,
}: {
  params: Promise<{ regionSlug: RegionSlug }>;
}) {
  const { regionSlug } = await params;
  const region = getRegionBySlug(regionSlug);

  if (!region) {
    notFound();
  }

  const relatedRegions = region.relatedRegionSlugs.map((slug) => ({
    href: `/region/${slug}`,
    label: regions[slug].name,
    description: regions[slug].tagline,
  }));

  const relatedIndustries = region.relatedIndustrySlugs.map((slug) => ({
    href: `/industry/${slug}`,
    label: industries[slug].name,
    description: industries[slug].tagline,
  }));

  return (
    <div className="report-shell py-10 sm:py-14">
      <div className="space-y-10">
        <PageHero
          eyebrow="Region dossier"
          title={region.name}
          description={region.heroSummary}
          tags={region.tags}
          stats={region.heroStats}
        />

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-3xl font-semibold text-zinc-950">Regional overview</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-zinc-600">
              {region.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <div className="space-y-6">
            {region.practicalInfo.slice(0, 2).map((group) => (
              <SourceBadgeList key={group.title} title={group.title} items={group.items} />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-zinc-950">
            Core cities
          </h2>
          <DataTable
            caption={`${region.name} city comparison`}
            headers={["City", "Key industries", "Anchors", "Buyer angle"]}
            rows={region.cities.map((city) => [
              city.name,
              city.industries,
              city.anchors,
              city.sourcingEdge,
            ])}
          />
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-zinc-950">
            Industry highlights
          </h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {region.industryHighlights.map((highlight) => (
              <IndustrySpotlight key={highlight.title} highlight={highlight} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {region.practicalInfo.slice(2).map((group) => (
            <SourceBadgeList key={group.title} title={group.title} items={group.items} />
          ))}
        </section>

        <RelatedLinks title="Related regions" items={relatedRegions} />
        <RelatedLinks title="Related industries" items={relatedIndustries} />

        <UnifiedCta
          title={`Need the ${region.name} supplier route mapped to your category?`}
          description="Use this page as a first-pass corridor brief, then continue into the related industry pages to compare fit, limits, and next-step questions."
        />
      </div>
    </div>
  );
}
