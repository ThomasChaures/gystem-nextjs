import React, { use, useState } from "react";

import ClientesSinRutina from "../molecules/ClientesSinRutina";
import ClientesAdeudados from "../molecules/ClientesAdeudados";
import useClientes from "@/hooks/useClientes";
import Toogle from "../atoms/Toogle";

const ClientesDashboard = () => {
  const [selected, setSelected] = useState<boolean>(false);
  const { clientes } = useClientes();

  const adeudados = clientes.filter((c) => c.adeudado);
  const sinRutina = clientes.filter((c) => !c.rutina);

  return (
    <div className="w-full pb-8">
      <div className="flex max-sm:flex-col max-sm:items-start gap-y-4 items-center w-full justify-between pb-4">
        <h2 className="text-2xl font-semibold">Clientes</h2>

        <div className="space-x-2.5 flex items-center">
          <Toogle
            active={!selected}
            click={() => setSelected(false)}
            name="Sin rutina"
          />
          <Toogle
            active={selected}
            click={() => setSelected(true)}
            name="Adeudados"
          />
        </div>
      </div>

      {selected ? <ClientesAdeudados data={adeudados} /> : <ClientesSinRutina data={sinRutina} />}
    </div>
  );
};

export default ClientesDashboard;
