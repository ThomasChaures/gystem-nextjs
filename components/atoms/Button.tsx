"use client";

import { ReactNode } from "react";

export default function Button({
  children,
  onClick,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "link";
  className?: string;
}) {
  if (variant === "link") {
    return (
      <button
        onClick={onClick}
        className={`text-blue-600 hover:underline transition ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
