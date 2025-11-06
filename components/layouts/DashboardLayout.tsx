"use client";

import { ReactNode } from "react"
import useLayout from "@/hooks/useLayout"
import DashboardSidebar from "../organisms/DashboardSidebar"

const DashboardLayout = ({children}:{children: ReactNode}) => {
    const {openLayout} = useLayout();
  return (
    <>
        <DashboardSidebar />
        <main className={`bg-white ${openLayout ? 'ml-[300px]' : 'ml-20'} mr-5 p-10 my-4 transition-all border rounded-xl border-[#D1D1D1] min-h-[95.5vh]`}>
            {children}
        </main>
    </>
  )
}

export default DashboardLayout