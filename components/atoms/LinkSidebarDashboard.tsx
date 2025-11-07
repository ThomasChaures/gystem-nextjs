"use client";
import React from "react";
import { usePathname } from "next/navigation";
import useLayout from "@/hooks/useLayout";

interface LinkSidebarDashboardProps {
  icon: React.ElementType;
  route: string;
  name: string;
}

const LinkSidebarDashboard = ({ icon: Icon, route, name }: LinkSidebarDashboardProps) => {
  const { openLayout } = useLayout();
  const pathname = usePathname();
  const isActive = pathname === route;

  return (
    <li className={`w-full ${openLayout ? "" : "px-4"}`}>
      <a
        href={route}
        className={`
          group flex w-full items-center py-2 rounded-xl transition-all duration-300 ease-in-out
          ${openLayout ? "justify-start px-6 gap-4" : "justify-center px-4 gap-0"}
          ${
            isActive
              ? "bg-[#333] text-white"
              : "text-[#333] hover:bg-[#333] hover:text-white"
          }
        `}
      >
        <Icon
          size={22}
          stroke={1.6}
          className={`
            transition-all duration-300
            ${isActive ? "stroke-white fill-white" : "stroke-[#333]"}
            group-hover:stroke-white
          `}
        />

        <p
          className={`
            text-base whitespace-nowrap
            transition-all duration-300 ease-in-out
            ${openLayout
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-2 w-0 overflow-hidden"}
          `}
        >
          {name}
        </p>
      </a>
    </li>
  );
};

export default LinkSidebarDashboard;
