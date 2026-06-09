import { describe, expect, it } from "vitest";

import { getBlogPostBySlug, getIndustryBySlug, getRegionBySlug } from "@/src/lib/content";
import { buildPageMetadata } from "@/src/lib/metadata";

describe("content lookup helpers", () => {
  it("returns the featured region content", () => {
    const region = getRegionBySlug("pearl-river-delta");

    expect(region?.name).toBe("Pearl River Delta");
    expect(region?.cities.length).toBeGreaterThan(3);
  });

  it("returns the featured industry content", () => {
    const industry = getIndustryBySlug("electronics");

    expect(industry?.coverage.length).toBeGreaterThan(2);
    expect(industry?.comparisonRows[0]?.regionSlug).toBe("pearl-river-delta");
  });

  it("returns a blog post by slug", () => {
    const post = getBlogPostBySlug("china-inland-manufacturing-shift-2026");

    expect(post?.title).toContain("Inland Manufacturing Shift");
  });
});

describe("metadata builder", () => {
  it("creates canonical and social metadata", () => {
    const metadata = buildPageMetadata({
      title: "Example title",
      description: "Example description",
      pathname: "/example",
    });

    expect(metadata.title).toEqual({ absolute: "Example title" });
    expect(metadata.alternates?.canonical).toBe("/example");
    expect(metadata.openGraph?.url).toBe(
      "https://china-industry-belt-map.vercel.app/example",
    );
  });
});
