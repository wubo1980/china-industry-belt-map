import type { MetadataRoute } from "next";

import { getAllBlogPosts } from "@/src/data/blog";
import { industrySlugs } from "@/src/data/industries";
import { regionSlugs } from "@/src/data/regions";
import { siteUrl } from "@/src/data/site";

export const dynamic = "force-static";

/**
 * Generates the sitemap entries for all static routes.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/blog", "/about"];
  const regionRoutes = regionSlugs.map((slug) => `/region/${slug}`);
  const industryRoutes = industrySlugs.map((slug) => `/industry/${slug}`);
  const posts = await getAllBlogPosts();
  const blogRoutes = posts.map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...regionRoutes, ...industryRoutes, ...blogRoutes].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: "2026-06-09",
    })
  );
}
