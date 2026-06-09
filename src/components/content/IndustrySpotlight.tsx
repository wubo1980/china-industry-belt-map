import type { IndustryHighlight } from "@/src/types/content";

/**
 * Renders a single industry highlight block with multi-paragraph summary.
 */
export function IndustrySpotlight(props: { highlight: IndustryHighlight }) {
  return (
    <article className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm">
      <h3 className="font-serif text-2xl font-semibold text-zinc-950">
        {props.highlight.title}
      </h3>
      <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
        {props.highlight.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
