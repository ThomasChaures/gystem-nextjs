import React from "react";

import ClientesSinRutina from "../molecules/ClientesSinRutina";
import Toogle from "../atoms/Toogle";

const ClientesDashboard = () => {
  return (
    <>
      <div className="w-full h-40">
        <div className="flex max-sm:flex-col max-sm:items-start gap-y-4 items-center w-full justify-between pb-4">
          <h2 className="text-2xl font-semibold ">Clientes</h2>

          <div className="space-x-2.5 flex items-center">
            <Toogle active name="Sin rutina" />
            <Toogle name="Adeudados" />
          </div>
        </div>

        <ClientesSinRutina />
      </div>
    </>
  );
};

export default ClientesDashboard;
