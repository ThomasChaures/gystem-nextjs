import type { Metadata } from "next";
import "../globals.css";
import { ReactNode } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { LayoutProvider } from "@/contexts/DashboardLayoutContext";
import { ClientesProvider } from "@/contexts/ClientesContext";

// 🧠 Metadatos
export const metadata: Metadata = {
  title: "Gymstem | Panel de administración",
  description: "Panel",
};

// 🧱 RootLayout
export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <ClientesProvider>
      <LayoutProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </LayoutProvider>
    </ClientesProvider>
  );
}
