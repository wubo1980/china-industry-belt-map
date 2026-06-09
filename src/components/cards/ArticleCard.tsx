import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { BlogPostEntry } from "@/src/types/content";

/**
 * Renders a blog article card with metadata and summary copy.
 */
export function ArticleCard(props: { post: BlogPostEntry }) {
  const { post } = props;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
    >
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">{post.category}</span>
        <span>{post.publishedAt}</span>
        <span>{post.readingTime}</span>
      </div>

      <h3 className="mt-5 font-serif text-2xl font-semibold text-zinc-950">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-600">{post.excerpt}</p>

      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
        Read article
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
