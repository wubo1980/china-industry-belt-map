import type { Metadata } from "next";

const siteUrl = "https://china-industry-belt-map.vercel.app";
const siteName = "China Industry Belt Map";

/**
 * Builds consistent page-level metadata with canonical URLs and social copy.
 */
export function buildPageMetadata(input: {
  title: string;
  description: string;
  pathname: string;
}): Metadata {
  return {
    title: {
      absolute: input.title,
    },
    description: input.description,
    alternates: {
      canonical: input.pathname,
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url: `${siteUrl}${input.pathname}`,
      siteName,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  };
}
