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
      {/* 👇 Cambiamos a table-fixed y border-collapse para evitar espacios raros */}
      <table className="w-full table-fixed border-collaps  border-separate border-spacing-y-3">
        <thead>
          <tr className="bg-[#000201] text-white border-gray-400/20 border ">
            {headers.map((header, i) => (
              <th
                key={header}
                className={`p-3 font-semibold ${
                  i === 0 ? "rounded-l-lg text-left" : ""
                } ${
                  i === headers.length - 1
                    ? "rounded-r-lg text-left"
                    : "text-left"
                }`}
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
