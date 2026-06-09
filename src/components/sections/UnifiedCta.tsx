import { ArrowRight, Mail } from "lucide-react";

import { sisterSites } from "@/src/data/site";

/**
 * Renders the shared subscription and sister-site CTA block.
 */
export function UnifiedCta(props: { title?: string; description?: string }) {
  const title = props.title ?? "Turn your sourcing research into a short list";
  const description =
    props.description ??
    "Request updates, ask for the next regional PDF outline, or continue your research with our sister sites.";

  return (
    <section className="rounded-[32px] border border-blue-200 bg-linear-to-br from-blue-50 via-white to-emerald-50 p-6 shadow-sm sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Stay updated
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-zinc-950">
            {title}
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-zinc-600">{description}</p>

          <a
            href="mailto:hello@china-industry-belt-map.com?subject=China%20Industry%20Belt%20Map%20Update"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            <Mail className="h-4 w-4" />
            Request updates by email
          </a>
        </div>

        <div className="space-y-3 rounded-[24px] bg-white/80 p-5">
          <p className="text-sm font-semibold text-zinc-950">Recommended next reads</p>
          {sisterSites.map((site) => (
            <a
              key={site.href}
              href={site.href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-zinc-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-zinc-950">{site.label}</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">{site.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-zinc-400 transition group-hover:text-blue-600" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
