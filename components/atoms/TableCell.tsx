"use client";

import { ReactNode } from "react";

interface TableCellProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  first?: boolean;
  last?: boolean;
}

export default function TableCell({
  children,
  className = "",
  align = "left",
  first = false,
  last = false,
}: TableCellProps) {
  const alignment =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  const radius =
    first ? "rounded-l-lg" : last ? "rounded-r-lg" : "";

  return (
    <td
      className={`
        p-3 py-5 bg-white ${alignment} ${radius} ${className}
        ${first ? "" : ""}
        ${last ? "" : ""}
        ${!first && !last ? "" : ""}
      `}
    >
      {children}
    </td>
  );
}
