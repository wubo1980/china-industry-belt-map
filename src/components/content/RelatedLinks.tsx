import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Renders linked cards for related regions, industries, or articles.
 */
export function RelatedLinks(props: {
  title: string;
  items: Array<{ href: string; label: string; description: string }>;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-zinc-950">
        {props.title}
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {props.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-[24px] border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-zinc-950">{item.label}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-600">{item.description}</p>
              </div>
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-zinc-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
