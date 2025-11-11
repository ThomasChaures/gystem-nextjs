"use client";
import Card from "@/components/atoms/Card";
import MonthlyChart from "@/components/organisms/charts/MonthlyChart";
import ClientesDashboard from "@/components/organisms/ClientesDashboard";
import LastTransactions from "@/components/organisms/LastTransaction";
import SubGymPrice from "@/components/organisms/SubGymPrice";

export default function Home() {
  return (
    <>
      <section className="w-full">
        <h1 className="text-3xl mt-8 mb-8 font-semibold">Panel</h1>

        <div className="flex max-lg:flex-col gap-4 items-center gap-x-4 mb-4 w-full justify-between">
          <div className="flex max-sm:flex-col gap-4 items-center gap-x-4 justify-between w-full">
            <Card className="w-full flex  justify-between items-center h-40">
              {/* Título */}
              <div className="w-full">
                <p className="text-sm mb-8 text-gray-500 font-semibold">
                  Clientes actuales
                </p>
                <p className="text-4xl font-semibold text-gray-900 tracking-tight">
                  60
                  <span className="text-lg text-gray-500 font-normal ml-1">
                    personas
                  </span>
                </p>
              </div>

              {/* Línea inferior o descripción opcional */}
            </Card>
            <Card className="w-full flex  justify-between items-center h-40">
              {/* Título */}
              <div>
                <p className="text-sm mb-8 text-gray-500 font-semibold">
                  Clientes nuevos
                </p>
                <p className="text-4xl font-semibold text-gray-900 tracking-tight">
                  3
                  <span className="text-lg text-gray-500 font-normal ml-1">
                    personas
                  </span>
                </p>
              </div>

              {/* Métrica principal */}

              {/* Línea inferior o descripción opcional */}
            </Card>
          </div>
          <div className="flex max-sm:flex-col gap-4 items-center gap-x-4 justify-between w-full">
            <Card className="w-full flex  justify-between items-center h-40">
              {/* Título */}
              <div>
                <p className="text-sm mb-8 text-gray-500 font-semibold">
                  Rutinas
                </p>
                <p className="text-4xl font-semibold text-gray-900 tracking-tight">
                  48
                  <span className="text-lg text-gray-500 font-normal ml-1"></span>
                </p>
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
                <p className="text-4xl font-semibold text-gray-900 tracking-tight">
                  $700.000
                  <span className="text-lg text-gray-500 font-normal ml-1"></span>
                </p>
              </div>

              {/* Métrica principal */}

              {/* Línea inferior o descripción opcional */}
            </Card>
          </div>
        </div>

        <div className="flex-col  mt-8">
          <div className="w-full mb-8  max-xl:flex-col flex items-center gap-6">

            <Card className="h-105 xl:max-w-[600px]">
              <MonthlyChart />
            </Card>
            <Card className="h-105 w-full">
              <LastTransactions />
            </Card>
          </div>
          <div className=" w-full">
            <Card className="h-full">
              <SubGymPrice />
            </Card>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <ClientesDashboard />
      </section>
    </>
  );
}
