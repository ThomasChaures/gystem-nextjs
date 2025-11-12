"use client";
import Card from "@/components/atoms/Card";
import MonthlyChart from "@/components/organisms/charts/MonthlyChart";
import ClientesDashboard from "@/components/organisms/ClientesDashboard";

import LastTransactions from "@/components/organisms/LastTransaction";
import { Maximize } from "lucide-react";
import { useModal } from "@/hooks/useModal";

export default function Home() {
  const { openModal, closeModal } = useModal();

  const handleClientes = () => {
    openModal(
      "Clientes totales",
      <>
        <div className="w-full"></div>
      </>
    );
  };

    const handleClientesNuevos = () => {
    openModal(
      "Clientes Nuevos",
      <>
        <div className="w-full"></div>
      </>
    );
  };

  return (
    <>
      <section className="w-full">
        <h1 className="text-3xl mb-8 font-semibold">Panel</h1>

        <div className="flex  max-xl:flex-col gap-4 items-center gap-x-4 mb-4 w-full justify-between">
          <div className="flex max-sm:flex-col gap-4 items-center gap-x-4 h-full justify-between w-full">
            <Card className=" flex  justify-between items-start  h-40">
              <div className="">
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
              <div
                onClick={handleClientes}
                className="bg-gray-300/20 h-7 w-7  cursor-pointer flex items-center justify-center rounded-lg"
              >
                <Maximize size={17} />
              </div>
            </Card>
            <Card className="w-full flex  justify-between items-start h-40">
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
              <div onClick={handleClientesNuevos} className="bg-gray-300/20 cursor-pointer h-7 w-7 flex items-center justify-center rounded-lg">
                <Maximize size={17} />
              </div>
            </Card>
          </div>
          <div className="flex max-sm:flex-col gap-4 items-center gap-x-4 justify-between w-full">
            <Card className="w-full flex  justify-between items-start h-40">
              <div>
                <p className="text-sm mb-8 text-gray-500 font-semibold">
                  Rutinas
                </p>
                <p className="text-4xl font-semibold text-gray-900 tracking-tight">
                  48
                  <span className="text-lg text-gray-500 font-normal ml-1"></span>
                </p>
              </div>
            </Card>
            <Card className="w-full flex  justify-between items-start h-40">
              <div>
                <p className="text-sm mb-8 text-gray-500 font-semibold">
                  Ingresos de este mes
                </p>
                <p className="text-4xl font-semibold text-gray-900 tracking-tight">
                  $700.000
                  <span className="text-lg text-gray-500 font-normal ml-1"></span>
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="flex-col  mt-8">
          <div className="w-full mb-8  max-[1530px]:flex-col flex items-center gap-6">
            <Card className="h-105 max-w-[600px] max-[1530px]:max-w-full w-full">
              <MonthlyChart />
            </Card>

            <LastTransactions />
          </div>
          {/* <div className=" w-full">
            <Card className="h-full">
              <SubGymPrice />
            </Card>
          </div> */}
        </div>
      </section>

      <section className="mt-8 pb-8">
        <Card className="">
          <ClientesDashboard />
        </Card>
      </section>
    </>
  );
}
