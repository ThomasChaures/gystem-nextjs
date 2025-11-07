"use client";

import Link from "next/link";
import { Plus, Search } from "lucide-react";
import { useState } from "react";
import ClientesTable from "@/components/organisms/ClientesTable";
import DropdownFilter from "@/components/atoms/DropdownFilter";

export default function ClientesPage() {
  const [selectedRoutine, setSelectedRoutine] = useState("Todos");
  const [selectedStatus, setSelectedStatus] = useState("Todos");

  return (
    <section>
      {/* Header */}
      <div className="flex mb-8 items-center justify-between">
        <h1 className="text-3xl font-semibold">Clientes</h1>
        <Link
          className="bg-black text-white py-2 rounded-xl flex items-center gap-x-3 px-5"
          href="/panel/clientes/agregar"
        >
          <Plus />
          Agregar cliente
        </Link>
      </div>

      {/* Buscador */}
      <div className="flex items-end mb-4 justify-between">
        <div className="relative">
          <Search className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Busca por nombre o DNI"
            className="border px-2 pl-10 py-2 w-80 rounded-xl"
          />
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-4 ">
          <DropdownFilter
            label="Rutina"
            options={["Todos", "Con rutina", "Sin rutina"]}
            selected={selectedRoutine}
            onChange={setSelectedRoutine}
          />
          <DropdownFilter
            label="Estado"
            options={["Todos", "Al día", "Adeudado"]}
            selected={selectedStatus}
            onChange={setSelectedStatus}
          />
        </div>
      </div>
      <ClientesTable />
    </section>
  );
}
