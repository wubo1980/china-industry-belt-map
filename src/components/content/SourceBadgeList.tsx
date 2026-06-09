/**
 * Renders a compact list of sourcing bullets inside a shared card shell.
 */
export function SourceBadgeList(props: { title: string; items: string[] }) {
  return (
    <section className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm">
      <h3 className="font-serif text-2xl font-semibold text-zinc-950">{props.title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-600">
        {props.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
