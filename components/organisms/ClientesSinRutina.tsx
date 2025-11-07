import React from "react";
import Card from "../atoms/Card";
import useClientes from "@/hooks/useClientes";
import Button from "../atoms/Button";
import { Plus, User } from "lucide-react";

const ClientesSinRutina = () => {
  const { clientes } = useClientes();
  return (
    <>
      <div className="w-full">
        <h2 className="text-2xl font-semibold pb-2">Clientes sin rutinas</h2>
        <div className="space-y-2.5">
            {clientes &&
          clientes.map((c) => (
            <>
              <Card className="w-full flex p-5! items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <div className="bg-[#333] h-10 w-10 rounded-xl flex items-center justify-center">
                    <User color="transparent" fill="white" size={30} />
                  </div>
                  {c.nombre} {c.apellido}
                </div>

                <Button variant="link">
                  <Plus />
                  Agregar rutina
                </Button>
              </Card>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClientesSinRutina;
