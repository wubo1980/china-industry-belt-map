import type { StatItem } from "@/src/types/content";

/**
 * Renders the shared hero section used across content pages.
 */
export function PageHero(props: {
  eyebrow: string;
  title: string;
  description: string;
  tags?: string[];
  stats?: StatItem[];
}) {
  return (
    <section className="rounded-[32px] border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
          {props.eyebrow}
        </p>
        <h1 className="max-w-4xl font-serif text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          {props.title}
        </h1>
        <p className="max-w-3xl text-base leading-8 text-zinc-600">{props.description}</p>
      </div>

      {props.tags && props.tags.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {props.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-700"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      {props.stats && props.stats.length > 0 ? (
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {props.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-zinc-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{stat.label}</p>
              <p className="mt-2 text-lg font-semibold text-zinc-950">{stat.value}</p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
