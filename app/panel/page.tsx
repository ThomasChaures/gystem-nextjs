"use client";
import Card from "@/components/atoms/Card";
import MonthlyChart from "@/components/organisms/charts/MonthlyChart";
import ClientesDashboard from "@/components/organisms/ClientesDashboard";
import LastTransactions from "@/components/organisms/LastTransaction";

export default function Home() {
  const data = Array.from({ length: 30 }, () =>
    Math.floor(Math.random() * 100)
  );
  const data2 = Array.from({ length: 30 }, () =>
    Math.floor(Math.random() * 100)
  );
  return (
    <>
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

            {/* Línea inferior o descripción opcional */}
          </Card>
          <Card className="w-full flex  justify-between items-center h-40">
            {/* Título */}
            <div>
              <p className="text-sm mb-8 text-gray-500 font-semibold">
                Rutinas
              </p>
              <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
                48
                <span className="text-lg text-gray-500 font-normal ml-1"></span>
              </h2>
            </div>

            {/* Métrica principal */}

            {/* Línea inferior o descripción opcional */}
          </Card>
          <Card className="w-full flex  justify-between items-center h-40">
            {/* Título */}
            <div>
              <p className="text-sm mb-8 text-gray-500 font-semibold">
                Ingresos de este mes
              </p>
              <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
                $700.000
                <span className="text-lg text-gray-500 font-normal ml-1"></span>
              </h2>
            </div>

            {/* Métrica principal */}

            {/* Línea inferior o descripción opcional */}
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Card className="h-full">
            <MonthlyChart />
          </Card>
          <Card className="h-full">
            <LastTransactions />
          </Card>
        </div>
      </section>

      <section className="mt-8">
        <ClientesDashboard />
      </section>
    </>
  );
}
