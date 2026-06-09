import { PageHero } from "@/src/components/sections/PageHero";
import { UnifiedCta } from "@/src/components/sections/UnifiedCta";
import { buildPageMetadata } from "@/src/lib/metadata";
import { sisterSites } from "@/src/data/site";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "Learn why China Industry Belt Map exists, how the data is framed, and where the research inputs come from.",
  pathname: "/about",
});

/**
 * Renders the about page with methodology, source framing, and contact details.
 */
export default function AboutPage() {
  return (
    <div className="report-shell py-10 sm:py-14">
      <div className="space-y-10">
        <PageHero
          eyebrow="About"
          title="Built to answer a simple sourcing question: where in China should a buyer actually go first?"
          description="China Industry Belt Map focuses on manufacturing geography. It is designed to help importers, procurement teams, and supply-chain operators understand the regional logic behind supplier selection."
          tags={["Research-led", "English-first", "Cross-linked content"]}
        />

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-zinc-950">Why this site exists</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
              <p>
                Most sourcing content explains process: vet factories, negotiate terms,
                run inspections, control quality. This site complements that logic by
                answering the earlier geography question: which manufacturing corridor
                should a buyer investigate for a specific product family?
              </p>
              <p>
                The goal is not to claim one region is always best. The goal is to make
                the regional trade-offs visible so buyers can build better shortlists.
              </p>
            </div>
          </article>

          <article className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-zinc-950">How data is framed</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
              <p>
                Content is structured around manufacturing clusters, port access, trade
                shows, city-level specialization, and buyer-relevant interpretation.
              </p>
              <p>
                Figures on export share or category weight are directional research inputs
                derived from customs data, municipal reports, trade fair materials, and
                industry publications. They are used to help buyers compare regions, not
                to present audited investment advice.
              </p>
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-zinc-950">Indicative source types</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-600">
              <li>General Administration of Customs of China</li>
              <li>Provincial and municipal industry or investment reports</li>
              <li>Trade show organizers and official event publications</li>
              <li>Industry association reports and category summaries</li>
              <li>Desk research synthesized into procurement-facing language</li>
            </ul>
          </article>

          <article className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-zinc-950">Contact and feedback</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
              <p>
                Have a correction, a new export trend worth covering, or a suggestion for
                another region page? Send a note and include the product category or city
                you want reviewed.
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@china-industry-belt-map.com"
                  className="font-semibold text-blue-600"
                >
                  hello@china-industry-belt-map.com
                </a>
              </p>
            </div>
          </article>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-zinc-950">
            Sister sites
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {sisterSites.map((site) => (
              <a
                key={site.href}
                href={site.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[24px] border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-zinc-950">{site.label}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-600">{site.description}</p>
              </a>
            ))}
          </div>
        </section>

        <UnifiedCta
          title="Want the next industry or region update?"
          description="Email us with the product category or sourcing corridor you want covered next."
        />
      </div>
    </div>
  );
}
