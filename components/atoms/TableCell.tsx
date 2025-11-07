"use client";

import { ReactNode } from "react";

export default function TableCell({
  children,
  className = "",
  align = "left",
  rounded = false,
  first = false,
  last = false,
}: {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  rounded?: boolean;
  first?: boolean;
  last?: boolean;
}) {
  const alignment =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  const radius =
    rounded && first
      ? "rounded-l-lg"
      : rounded && last
      ? "rounded-r-lg"
      : "";

  return (
    <td className={`p-3 bg-white ${alignment} ${radius} ${className}`}>
      {children}
    </td>
  );
}
