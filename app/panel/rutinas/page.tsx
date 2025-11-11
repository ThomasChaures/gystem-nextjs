"use client";
import Link from "next/link";
import { Plus, Search } from "lucide-react";
import RutinasTable from "@/components/organisms/RutinasTable";

import { useState } from "react";
export default function Home() {

  return (
    <>
      <section>
        <div className="flex mb-8 items-center justify-between">
          <h1 className="text-3xl font-semibold">Rutinas</h1>
          <Link
            className="bg-black text-white py-2 rounded-xl flex items-center gap-x-3 px-5"
            href="/panel/rutinas/agregar"
          >
            <Plus />
            Agregar rutina
          </Link>
        </div>

        <div className="flex items-end mb-4 justify-between">
          <div className="relative">
            <Search className="absolute top-1/2 transform  -translate-y-1/2 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Busca por nombre y apellido"
              className="border px-2 bg-white pl-10 py-2 w-80 rounded-xl"
            />
          </div>
       
        </div>

        <RutinasTable />
      </section>
    </>
  );
}
