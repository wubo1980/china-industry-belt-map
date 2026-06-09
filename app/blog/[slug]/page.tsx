import { notFound } from "next/navigation";

import { RelatedLinks } from "@/src/components/content/RelatedLinks";
import { PageHero } from "@/src/components/sections/PageHero";
import { UnifiedCta } from "@/src/components/sections/UnifiedCta";
import { blogPosts } from "@/src/data/blog";
import { getBlogPostBySlug } from "@/src/lib/content";
import { buildPageMetadata } from "@/src/lib/metadata";
import type { BlogSlug } from "@/src/types/content";

export const dynamicParams = false;

/**
 * Enumerates all blog pages for static export.
 */
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

/**
 * Builds SEO metadata for a specific blog post page.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: BlogSlug }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return buildPageMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    pathname: `/blog/${post.slug}`,
  });
}

/**
 * Renders a single blog article page.
 */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: BlogSlug }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedPostSlugs
    .map((relatedSlug) => getBlogPostBySlug(relatedSlug))
    .filter((value): value is NonNullable<typeof value> => Boolean(value))
    .map((item) => ({
      href: `/blog/${item.slug}`,
      label: item.title,
      description: item.excerpt,
    }));

  return (
    <div className="report-shell py-10 sm:py-14">
      <div className="space-y-10">
        <PageHero
          eyebrow={post.heroKicker}
          title={post.title}
          description={post.excerpt}
          tags={[post.category, post.publishedAt, post.readingTime]}
        />

        <article className="rounded-[32px] border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-8">
          <div className="space-y-8">
            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="font-serif text-3xl font-semibold text-zinc-950">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-sm leading-8 text-zinc-600">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>

        <RelatedLinks title="Related articles" items={relatedPosts} />

        <UnifiedCta
          title="Need a topic-specific sourcing brief?"
          description="Request updates by email or continue into another article to compare market, region, and risk-control angles."
        />
      </div>
    </div>
  );
}
