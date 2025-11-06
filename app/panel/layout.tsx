import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { LayoutProvider } from "@/contexts/DashboardLayoutContext";
import { ClientesProvider } from "@/contexts/ClientesContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gymstem | Panel de administración",
  description: "Panel",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
