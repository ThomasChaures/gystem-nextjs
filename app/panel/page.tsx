"use client";
import Card from "@/components/atoms/Card";
import MonthlyChart from "@/components/organisms/charts/MonthlyChart";
import ClientesSinRutina from "@/components/organisms/ClientesSinRutina";

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
            <p className="text-sm mb-8 text-gray-500 font-semibold">Rutinas</p>
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

      <div className="flex w-full items-start gap-x-4">
        <ClientesSinRutina/>
        <Card className="max-w-[600px]">
          <MonthlyChart />
        </Card>
      </div>
    </section>
  );
}
