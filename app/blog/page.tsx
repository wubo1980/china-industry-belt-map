import { ArticleCard } from "@/src/components/cards/ArticleCard";
import { PageHero } from "@/src/components/sections/PageHero";
import { UnifiedCta } from "@/src/components/sections/UnifiedCta";
import { getAllBlogPosts } from "@/src/lib/content";
import { buildPageMetadata } from "@/src/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Read sourcing trend articles, market-visit guides, and regional manufacturing analysis.",
  pathname: "/blog",
});

/**
 * Renders the blog index page.
 */
export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="report-shell py-10 sm:py-14">
      <div className="space-y-10">
        <PageHero
          eyebrow="Blog"
          title="Short, practical reads for importers tracking China's factory geography"
          description="A mix of trend analysis, market-visit guidance, and region-focused sourcing notes."
          tags={["Trend reports", "Buyer playbooks", "Regional focus"]}
        />

        <section className="grid gap-5 lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </section>

        <UnifiedCta
          title="Need the next research note in your inbox?"
          description="Ask for updates, suggest a topic, or jump into one of the sister sites for process-focused sourcing guidance."
        />
      </div>
    </div>
  );
}
