import { notFound } from "next/navigation";

import { RelatedLinks } from "@/src/components/content/RelatedLinks";
import { SourceBadgeList } from "@/src/components/content/SourceBadgeList";
import { PageHero } from "@/src/components/sections/PageHero";
import { UnifiedCta } from "@/src/components/sections/UnifiedCta";
import { DataTable } from "@/src/components/tables/DataTable";
import { blogPosts } from "@/src/data/blog";
import { industrySlugs } from "@/src/data/industries";
import { regions } from "@/src/data/regions";
import { getIndustryBySlug } from "@/src/lib/content";
import { buildPageMetadata } from "@/src/lib/metadata";
import type { IndustrySlug } from "@/src/types/content";

export const dynamicParams = false;

/**
 * Enumerates all industry pages for static export.
 */
export function generateStaticParams() {
  return industrySlugs.map((industrySlug) => ({ industrySlug }));
}

/**
 * Builds SEO metadata for a specific industry page.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ industrySlug: IndustrySlug }>;
}) {
  const { industrySlug } = await params;
  const industry = getIndustryBySlug(industrySlug);

  if (!industry) {
    notFound();
  }

  return buildPageMetadata({
    title: industry.seoTitle,
    description: industry.seoDescription,
    pathname: `/industry/${industry.slug}`,
  });
}

/**
 * Renders a single industry details page.
 */
export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industrySlug: IndustrySlug }>;
}) {
  const { industrySlug } = await params;
  const industry = getIndustryBySlug(industrySlug);

  if (!industry) {
    notFound();
  }

  const relatedRegions = industry.relatedRegionSlugs.map((slug) => ({
    href: `/region/${slug}`,
    label: regions[slug].name,
    description: regions[slug].tagline,
  }));

  const relatedArticles = industry.relatedBlogSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((value): value is NonNullable<typeof value> => Boolean(value))
    .map((post) => ({
      href: `/blog/${post.slug}`,
      label: post.title,
      description: post.excerpt,
    }));

  return (
    <div className="report-shell py-10 sm:py-14">
      <div className="space-y-10">
        <PageHero
          eyebrow="Industry lens"
          title={industry.name}
          description={industry.heroSummary}
          stats={industry.heroStats}
        />

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-3xl font-semibold text-zinc-950">Supply-chain map</h2>
            <div className="mt-5 space-y-4">
              {industry.coverage.map((item) => (
                <div key={item.label} className="rounded-2xl bg-zinc-50 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-zinc-950">{item.label}</h3>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {regions[item.regionSlug].name}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">{item.note}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="space-y-6">
            <SourceBadgeList title="Sourcing guide" items={industry.sourcingTips} />
            <SourceBadgeList title="Indicative sources" items={industry.sources} />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-zinc-950">
            Regional comparison
          </h2>
          <DataTable
            caption={`${industry.name} regional comparison`}
            headers={["Region", "Strengths", "Limits", "Best fit"]}
            rows={industry.comparisonRows.map((row) => [
              regions[row.regionSlug].name,
              row.strengths,
              row.limits,
              row.fit,
            ])}
          />
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-zinc-950">
            Trend notes
          </h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {industry.trendItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-zinc-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <RelatedLinks title="Related regions" items={relatedRegions} />
        <RelatedLinks title="Related articles" items={relatedArticles} />

        <UnifiedCta
          title={`Use the ${industry.name} page as a region shortlisting tool`}
          description="Compare the role of each corridor, then move into the region pages to assess cities, markets, and logistics in more detail."
        />
      </div>
    </div>
  );
}
