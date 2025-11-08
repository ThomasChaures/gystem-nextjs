"use client";

import { ReactNode } from "react";
import useLayout from "@/hooks/useLayout";
import DashboardSidebar from "../organisms/DashboardSidebar";
import HeaderDashboard from "../organisms/HeaderDashboard";
import DashboardSidebarMobile from "../organisms/DashboardSidebarMobile";


const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { openLayout } = useLayout();

  return (
    <>
      <DashboardSidebar />
      <DashboardSidebarMobile />
      <HeaderDashboard />
      <main
        className={`
          bg-[#FAFAFA] h-screen rounded-xl p-6 md:p-10 max-md:mt-10 transition-[margin,width] duration-500 ease-in-out
          ${openLayout ? "md:ml-[340px] md:w-[calc(100%-360px)]" : "md:ml-[120px] md:w-[calc(100%-140px)]"}
        `}
      >
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
