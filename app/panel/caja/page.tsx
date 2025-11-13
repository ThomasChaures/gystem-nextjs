"use client";
import Link from "next/link";
import { useState } from "react";
import { Plus, Search } from "lucide-react";
import Card from "@/components/atoms/Card";
import DropdownFilter from "@/components/atoms/DropdownFilter";
import CajaTable from "@/components/organisms/CajaTable";
export default function Home() {
  const [tipoSelected, setTipoSelected] = useState("Todos");
  const [categoriaSelected, setCategoriaSelected] = useState("Todos");
  const [metodoSelected, setMetodoSelected] = useState("Todos");
  return (
    <>
      <section>
        <div className="flex mb-8 items-center justify-between">
          <h1 className="text-3xl font-semibold">Caja</h1>
          <Link
            className="bg-black text-white py-2 rounded-xl flex items-center gap-x-3 px-5"
            href="/panel/rutinas/agregar"
          >
            <Plus />
            Agregar movimiento
          </Link>
        </div>

        <div className="flex max-lg:flex-col gap-4 items-center gap-x-4 mb-8 w-full justify-between">
          <div className="flex max-sm:flex-col gap-4 items-center gap-x-4 justify-between w-full">
            <Card className="w-full flex  justify-between items-center h-40">
              {/* Título */}
              <div className="w-full">
                <p className="text-sm mb-8 text-gray-500 font-semibold">
                  Ingresos del mes
                </p>
                <p className="text-4xl font-semibold text-gray-900 tracking-tight">
                  $800.000
                </p>
              </div>

              {/* Línea inferior o descripción opcional */}
            </Card>
            <Card className="w-full flex  justify-between items-center h-40">
              {/* Título */}
              <div>
                <p className="text-sm mb-8 text-gray-500 font-semibold">
                  Egresos del mes
                </p>
                <p className="text-4xl font-semibold text-gray-900 tracking-tight">
                  $100.000
                </p>
              </div>

              {/* Métrica principal */}

              {/* Línea inferior o descripción opcional */}
            </Card>
          </div>
          <div className="flex max-sm:flex-col gap-4 items-center gap-x-4 justify-between w-full">
            <Card className="w-full flex bg-black/80! text-white! justify-between items-center h-40">
              {/* Título */}
              <div>
                <p className="text-sm mb-8  font-semibold">
                  Global del mes
                </p>
                <p className="text-4xl font-semibold tracking-tight">
                  $700.000
                  <span className="text-lg font-normal ml-1"></span>
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="flex items-end mb-4 mt-14 justify-between">
          <div className="relative">
            <Search className="absolute top-1/2 transform  -translate-y-1/2 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Busca por cliente"
              className="border border-[#d1d1d1] pl-11 px-2  bg-white  py-2 w-80 rounded-xl"
            />
          </div>
          <div className="flex flex-wrap gap-4 ">
            <DropdownFilter
              label="Tipo"
              options={["Todos", "Ingreso", "Egreso"]}
              selected={tipoSelected}
              onChange={setTipoSelected}
            />
            <DropdownFilter
              label="Categoría"
              options={["Todos", "Plan", "Mantenimiento", "Compras", "Ventas"]}
              selected={categoriaSelected}
              onChange={setCategoriaSelected}
            />
            <DropdownFilter
              label="Metodo"
              options={[
                "Todos",
                "Efectivo",
                "Transferencia",
                "Crédito",
                "Débito",
              ]}
              selected={metodoSelected}
              onChange={setMetodoSelected}
            />
          </div>
        </div>

        <CajaTable />
      </section>
    </>
  );
}
