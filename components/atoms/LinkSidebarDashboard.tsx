"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useLayout from "@/hooks/useLayout";

interface LinkSidebarDashboardProps {
  icon: React.ElementType;
  route: string;
  name: string;
}

const LinkSidebarDashboard = ({
  icon: Icon,
  route,
  name,
}: LinkSidebarDashboardProps) => {
  const { openLayout } = useLayout();
  const pathname = usePathname();
  const isActive = pathname === route;

  return (
    <li className={`w-full ${openLayout ? "" : "px-4"}`}>
      <Link
        href={route}
        className={`
          group flex w-full items-center py-2 rounded-xl transition-all duration-300 ease-in-out
          ${openLayout ? "justify-start px-6 gap-4" : "justify-center px-4"}
          ${
            isActive
              ? "bg-white text-[#0046FB]"
              : "text-white hover:bg-white/20"
          }
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
        `}
        aria-current={isActive ? "page" : undefined}
      >
        <Icon
          size={22}
          stroke={1.8}
          className={`transition-all duration-300
            ${
              isActive
                ? "stroke-[#0046FB] fill-[#0046FB]"
                : "stroke-white group-hover:stroke-white"
            }
          `}
        />

        <span
          className={`
            text-base font-medium whitespace-nowrap
            transition-all duration-300 ease-in-out
            ${openLayout
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-2 w-0 overflow-hidden"}
          `}
        >
          {name}
        </span>
      </Link>
    </li>
  );
};

export default LinkSidebarDashboard;
