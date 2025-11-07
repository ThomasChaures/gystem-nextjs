"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "link";
  className?: string;
  href?: string;
}

export default function Button({
  children,
  onClick,
  variant = "default",
  className = "",
  href = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-x-2 px-5 py-2.5 rounded-md font-medium text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300";

  if (variant === "link") {
    return (
      <Link
        href={href || "#"}
        onClick={onClick}
        className={`${baseStyles} bg-amber-300 hover:bg-amber-500 ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} bg-amber-400 hover:bg-amber-500 ${className}`}
    >
      {children}
    </button>
  );
}
