/**
 * Content reader that reads blog post data from JSON files on disk.
 * Works at build time for Next.js static generation.
 */
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import type { BlogPostEntry, BlogSlug } from "@/src/types/content";

const CONTENT_DIR = join(process.cwd(), "content");
const ARTICLES_DIR = join(CONTENT_DIR, "articles");

interface IndexEntry {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  seoTitle: string;
  seoDescription: string;
  heroKicker: string;
  relatedPostSlugs: string[];
}

/**
 * Returns all blog posts in display order, reading from JSON files.
 */
export function readAllBlogPosts(): BlogPostEntry[] {
  const indexPath = join(CONTENT_DIR, "index.json");
  if (!existsSync(indexPath)) {
    return [];
  }

  const index: IndexEntry[] = JSON.parse(readFileSync(indexPath, "utf-8"));
  return index.map((entry) => {
    const articlePath = join(ARTICLES_DIR, `${entry.slug}.json`);
    if (!existsSync(articlePath)) {
      throw new Error(`Article file not found: ${entry.slug}.json`);
    }
    return JSON.parse(readFileSync(articlePath, "utf-8")) as BlogPostEntry;
  });
}

/**
 * Returns a single blog post by slug, reading from JSON file.
 */
export function readBlogPostBySlug(slug: BlogSlug): BlogPostEntry | undefined {
  const articlePath = join(ARTICLES_DIR, `${slug}.json`);
  if (!existsSync(articlePath)) {
    return undefined;
  }
  return JSON.parse(readFileSync(articlePath, "utf-8")) as BlogPostEntry;
}
