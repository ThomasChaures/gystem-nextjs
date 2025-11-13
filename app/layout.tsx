import type { Metadata } from "next";
import { Jost, Inter } from "next/font/google";
import "./globals.css";

// 🧩 Fuentes
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gymstem | Panel",
  description: "Panel de administración",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
