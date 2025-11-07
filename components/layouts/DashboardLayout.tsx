"use client";

import { ReactNode } from "react";
import useLayout from "@/hooks/useLayout";
import DashboardSidebar from "../organisms/DashboardSidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { openLayout } = useLayout();

  return (
    <>
      <DashboardSidebar />
      <main
        className={`
          bg-[#FAFAFA] h-screen rounded-xl p-10 transition-[margin,width] duration-500 ease-in-out
          ${openLayout ? "ml-[340px] w-[calc(100%-360px)]" : "ml-[120px] w-[calc(100%-140px)]"}
        `}
      >
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
