"use client";

import { ReactNode } from "react";
import HeaderDashboard from "../organisms/HeaderDashboard";
import Sidebar from "../organisms/navigations/Sidebar";


const DashboardLayout = ({ children }: { children: ReactNode }) => {

  return (
    <>
      <Sidebar />
      <HeaderDashboard />
      <main
        className={`
          bg-[#F4F4F6] h-screen rounded-xl p-6  md:p-10 max-md:mt-10 transition-[margin,width] duration-500 ease-in-out md:ml-[280px] md:w-[calc(100%-280px)]`}
        
      >
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
