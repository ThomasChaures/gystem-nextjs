"use client";

import { ReactNode } from "react";

interface TableProps<T> {
  headers: string[];
  data: T[];
  renderRow: (item: T, index: number) => ReactNode;
  emptyMessage?: string;
}

export default function Table<T>({
  headers,
  data,
  renderRow,
  emptyMessage = "No hay datos disponibles",
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border-separate border-spacing-y-3">
        <thead>
          <tr className="bg-[#333] text-white">
            {headers.map((header, i) => (
              <th
                key={header}
                className={`p-3 font-semibold text-left ${
                  i === 0 ? "rounded-l-lg" : ""
                } ${i === headers.length - 1 ? "rounded-r-lg" : ""}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => renderRow(item, index))
          ) : (
            <tr>
              <td
                colSpan={headers.length}
                className="p-6 text-center text-gray-500"
              >
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
