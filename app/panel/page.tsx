"use client";
import Card from "@/components/atoms/Card";
import MonthlyChart from "@/components/organisms/charts/MonthlyChart";
import ClientesSinRutinasTable from "@/components/organisms/ClientesSinRutinasTable";
import SparklineChart from "@/components/organisms/charts/SparklineChart";

export default function Home() {
  const data = Array.from({ length: 30 }, () =>
    Math.floor(Math.random() * 100)
  );
  const data2 = Array.from({ length: 30 }, () =>
    Math.floor(Math.random() * 100)
  );
  return (
    <section>
      <h1 className="text-3xl mt-8 mb-8 font-semibold">Dashboard</h1>

      <div className="flex items-center gap-x-4 mb-4 w-full justify-between">
        <Card className="w-full flex  justify-between items-center h-40">
          {/* Título */}
          <div>
            <p className="text-sm mb-8 text-gray-500 font-semibold">
              Clientes actuales
            </p>
             <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
                60
                <span className="text-lg text-gray-500 font-normal ml-1">
                  personas
                </span>
              </h2>
          </div>

          {/* Métrica principal */}
         
           <div className="flex items-center h-full">
              <SparklineChart data={data} />
            </div>

          {/* Línea inferior o descripción opcional */}
        </Card>
        <Card className="w-full flex  justify-between items-center h-40">
          {/* Título */}
          <div>
            <p className="text-sm mb-8 text-gray-500 font-semibold">
              Clientes nuevos
            </p>
             <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
                3
                <span className="text-lg text-gray-500 font-normal ml-1">
                  personas
                </span>
              </h2>
          </div>

          {/* Métrica principal */}
         
           <div className="flex items-center h-full">
              <SparklineChart data={data2} />
            </div>

          {/* Línea inferior o descripción opcional */}
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

      <div className="flex w-full items-start gap-x-4">
        <div className="w-full">
          <h2 className="text-2xl font-semibold pb-2">Clientes sin rutinas</h2>
          <ClientesSinRutinasTable />
        </div>
        <Card className="max-w-[600px]">
          <MonthlyChart />
        </Card>
      </div>
    </section>
  );
}
