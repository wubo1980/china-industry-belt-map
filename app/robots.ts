import type { MetadataRoute } from "next";

import { siteUrl } from "@/src/data/site";

export const dynamic = "force-static";

/**
 * Generates the robots.txt rules for the static site.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
