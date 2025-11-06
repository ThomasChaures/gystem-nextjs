"use client";

import { useContext } from "react";
import { LayoutContext } from "@/contexts/DashboardLayoutContext";

const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout se debe usar dentro de un LayoutProvider");
  }
  return context;
};

export default useLayout;
