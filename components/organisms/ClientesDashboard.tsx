import React from "react";

import ClientesSinRutina from "../molecules/ClientesSinRutina";
import Toogle from "../atoms/Toogle";

const ClientesDashboard = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center w-full justify-between pb-2">
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
