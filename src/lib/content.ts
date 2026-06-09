import { blogPosts } from "@/src/data/blog";
import { industries, industrySlugs } from "@/src/data/industries";
import { regionSlugs, regions } from "@/src/data/regions";
import type {
  BlogPostEntry,
  BlogSlug,
  IndustryEntry,
  IndustrySlug,
  RegionEntry,
  RegionSlug,
} from "@/src/types/content";

/**
 * Returns all region entries in display order.
 */
export function getAllRegions(): RegionEntry[] {
  return regionSlugs.map((slug) => regions[slug]);
}

/**
 * Returns a single region entry by slug.
 */
export function getRegionBySlug(slug: RegionSlug): RegionEntry | undefined {
  return regions[slug];
}

/**
 * Returns all industry entries in display order.
 */
export function getAllIndustries(): IndustryEntry[] {
  return industrySlugs.map((slug) => industries[slug]);
}

/**
 * Returns a single industry entry by slug.
 */
export function getIndustryBySlug(slug: IndustrySlug): IndustryEntry | undefined {
  return industries[slug];
}

/**
 * Returns all blog posts in display order.
 */
export function getAllBlogPosts(): BlogPostEntry[] {
  return blogPosts;
}

/**
 * Returns a single blog post entry by slug.
 */
export function getBlogPostBySlug(slug: BlogSlug): BlogPostEntry | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
