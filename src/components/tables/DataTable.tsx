import type { ReactNode } from "react";

/**
 * Renders a shared, border-light data table with sticky first column support.
 */
export function DataTable(props: {
  caption?: string;
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-[24px] border border-zinc-200 bg-white shadow-sm">
      <table className="min-w-full border-collapse text-left">
        {props.caption ? <caption className="sr-only">{props.caption}</caption> : null}
        <thead className="sticky top-0 bg-zinc-50">
          <tr>
            {props.headers.map((header) => (
              <th
                key={header}
                className="px-4 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`} className={rowIndex % 2 === 0 ? "bg-white" : "bg-zinc-50/70"}>
              {row.map((cell, cellIndex) => (
                <td
                  key={`cell-${rowIndex}-${cellIndex}`}
                  className={
                    cellIndex === 0
                      ? "sticky left-0 bg-inherit px-4 py-4 align-top font-semibold text-zinc-950"
                      : "px-4 py-4 align-top text-sm leading-7 text-zinc-600"
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
