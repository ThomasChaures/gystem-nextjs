"use client";
import Card from "@/components/atoms/Card";
import MonthlyChart from "@/components/organisms/charts/MonthlyChart";

export default function Home() {
  return (
    <section>
      <h1 className="text-3xl mt-8 mb-8 font-semibold">Dashboard</h1>

      <div className="flex items-center gap-x-4 mb-4 w-full justify-between">
        <Card className="w-full h-40">
          {/* Título */}
          <div>
            <p className="text-sm text-gray-500 font-semibold">
              Clientes actuales
            </p>
          </div>

          {/* Métrica principal */}
          <div className="flex items-start justify-between mt-3">
            <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
              60
              <span className="text-lg text-gray-500 font-normal ml-1">
                personas
              </span>
            </h2>

            {/* Variación */}
            <div className="flex items-center text-amber-500 bg-amber-50 px-2 py-1 rounded-full text-sm font-medium">
              +2%
            </div>
          </div>

          {/* Línea inferior o descripción opcional */}
          <p className="text-xs text-gray-400 mt-2">
            En comparación con el mes anterior
          </p>
        </Card>
        <Card className="w-full h-40">
          {/* Título */}
          <div>
            <p className="text-sm text-gray-500 font-semibold">
              Clientes nuevos
            </p>
          </div>

          {/* Métrica principal */}
          <div className="flex items-start justify-between mt-3">
            <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
              3
              <span className="text-lg text-gray-500 font-normal ml-1">
                personas
              </span>
            </h2>

            {/* Variación */}
            <div className="flex items-center text-amber-500 bg-amber-50 px-2 py-1 rounded-full text-sm font-medium">
              +1%
            </div>
          </div>

          {/* Línea inferior o descripción opcional */}
          <p className="text-xs text-gray-400 mt-2">
            En comparación con el mes anterior
          </p>
        </Card>
        <Card className="w-full h-40">
          {/* Título */}
          <div>
            <p className="text-sm text-gray-500 font-semibold">
              Rutinas activas
            </p>
          </div>

          {/* Métrica principal */}
          <div className="flex items-start justify-between mt-3">
            <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
              48
              <span className="text-lg text-gray-500 font-normal ml-1">
                rutinas
              </span>
            </h2>

          </div>


        </Card>
      </div>

      <Card className="max-w-[600px]">
        <MonthlyChart />
      </Card>
    </section>
  );
}
