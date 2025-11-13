"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkSidebarDashboardProps {
  icon: React.ElementType;
  route: string;
  name: string;
}

const LinkSidebar2 = ({ icon: Icon, route, name }: LinkSidebarDashboardProps) => {
  const pathname = usePathname();
  const isActive = pathname === route;

  return (
    <li>
      <Link
        href={route}
        aria-current={isActive ? "page" : undefined}
        className={`group flex items-center gap-x-3.5 rounded-lg py-3 px-3 transition-all duration-300 ease-in-out
          ${isActive ? "bg-[#F3F3FB] text-[#000201]" : "text-[#000201]/60 hover:opacity-100 opacity-40 hover:bg-[#F3F3FB]"}
        `}
      >
        <Icon
          size={22}
          stroke={1.8}
          className={`transition-all duration-300 
            ${isActive ? "fill-[#000201] " : "fill-[#000201] group-hover:fill-[#000201] stroke-[#000201]"}
          `}
        />
        <span
          className={`text-sm  transition-colors duration-300
            ${isActive ? "text-[#000201]" : "text-[#000201]   group-hover:text-[#000201]"}
          `}
        >
          {name}
        </span>
      </Link>
    </li>
  );
};

export default LinkSidebar2;
