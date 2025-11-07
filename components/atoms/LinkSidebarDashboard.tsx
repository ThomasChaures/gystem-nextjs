import React, { ReactNode } from "react";
import useLayout from "@/hooks/useLayout";

const LinkSidebarDashboard = ({
  children,
  route,
  name,
}: {
  children: ReactNode;
  route: string;
  name: string;
}) => {
  const { openLayout } = useLayout();
  return (
    <li className="w-full">
      <a
        className={`w-full px-2 transition-all flex gap-4 rounded-xl ${
          openLayout ? "" : "items-center justify-center"
        } hover:bg-white py-2 hover:text-black`}
        href={route}
      >
        {children}
        <p className={`text-base ${openLayout ? "" : "hidden"}`}>{name}</p>
      </a>
    </li>
  );
};

export default LinkSidebarDashboard;
