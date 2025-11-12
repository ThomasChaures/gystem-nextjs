import React, { useState } from "react";

import ClientesSinRutina from "../molecules/ClientesSinRutina";
import ClientesAdeudados from "../molecules/ClientesAdeudados";
import useClientes from "@/hooks/useClientes";
import DropdownFilter from "../atoms/DropdownFilter";

const ClientesDashboard = () => {
  const [selected, setSelected] = useState<"Adeudados" | "Sin rutina">(
    "Sin rutina"
  );

  const { clientes } = useClientes();
  const adeudados = clientes.filter((c) => c.adeudado);
  const sinRutina = clientes.filter((c) => !c.rutina);

  return (
    <div className="w-full pb-8">
      <div className="flex max-sm:flex-col border-b-2 border-[#d1d1d1]/50 max-sm:items-start gap-y-4 items-center w-full justify-between pb-6">
        <h2 className="text-2xl font-semibold">Clientes</h2>

        <DropdownFilter
          label=""
          options={["Adeudados", "Sin rutina"]}
          selected={selected}
          onChange={(value) => setSelected(value as "Adeudados" | "Sin rutina")}
        />
      </div>

      <div className="w-full pt-6">
        {selected === "Sin rutina" ? (
          <ClientesSinRutina data={sinRutina} />
        ) : (
          <ClientesAdeudados data={adeudados} />
        )}
      </div>
    </div>
  );
};

export default ClientesDashboard;
