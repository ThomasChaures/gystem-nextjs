import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google"; // 👈 importamos Outfit e Inter
import "./globals.css";
import { ReactNode } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { LayoutProvider } from "@/contexts/DashboardLayoutContext";
import { ClientesProvider } from "@/contexts/ClientesContext";

// 🧩 Definimos las fuentes
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="es">
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased`}
      >
        <ClientesProvider>
          <LayoutProvider>
            <DashboardLayout>{children}</DashboardLayout>
          </LayoutProvider>
        </ClientesProvider>
      </body>
    </html>
  );
}
