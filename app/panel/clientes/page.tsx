"use client";

import ClientesTable from "@/components/organisms/ClientesTable";

export default function Home() {
  return (
    <section>
      <h1 className="text-3xl mb-8 font-semibold">Clientes</h1>
      <ClientesTable></ClientesTable>
    </section>
  );
} 