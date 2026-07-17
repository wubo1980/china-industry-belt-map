/**
 * Blog data layer — reads from content/ JSON directory at build time.
 *
 * All functions are async so they work seamlessly with Next.js App Router pages.
 */
import { readAllBlogPosts, readBlogPostBySlug } from "@/src/lib/content-reader";
import type { BlogPostEntry, BlogSlug } from "@/src/types/content";

/**
 * Returns all blog posts in display order.
 */
export async function getAllBlogPosts(): Promise<BlogPostEntry[]> {
  return readAllBlogPosts();
}

/**
 * Returns a single blog post entry by slug.
 */
export async function getBlogPostBySlug(
  slug: BlogSlug
): Promise<BlogPostEntry | undefined> {
  return readBlogPostBySlug(slug);
}

/**
 * Returns all blog slugs for static param generation.
 */
export async function getAllBlogSlugs(): Promise<BlogSlug[]> {
  const posts = await getAllBlogPosts();
  return posts.map((p) => p.slug as BlogSlug);
}
