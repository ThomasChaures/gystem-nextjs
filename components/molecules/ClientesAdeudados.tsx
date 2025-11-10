import React, { useEffect, useState } from "react";
import Card from "../atoms/Card";
import useClientes from "@/hooks/useClientes";
import Button from "../atoms/Button";
import { MessageCircle } from "lucide-react";
import type { Cliente } from "@/types/user.types";
import Image from "next/image";


const ClientesAdeudados = () => {
  const { clientes } = useClientes();

  const [adeudados ,setAdeudados] = useState<Cliente[]>([]);

  const filterClientes = () => {
    const clients = clientes.filter((c) => c.adeudado === true);
    setAdeudados(clients)
  }

  useEffect(() => {
      filterClientes();
  }, [clientes])

  return (
    <>
      <div className="space-y-2.5">
        {adeudados &&
          adeudados.map((c) => (
            <>
              <Card className="w-full flex p-3! max-sm:p-2! items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <div className=" h-10 w-10 rounded-xl flex items-center justify-center">
                    <Image
                      src="/user.png"
                      alt="User avatar"
                      width={40}
                      height={40}
                      className="rounded-xl"
                    />
                  </div>
                  {c.nombre} {c.apellido}
                </div>

                <Button variant="link" className="max-sm:p-2 text-[14px]">
                  <MessageCircle size={20} />
                  <span className="max-sm:hidden">Notificar</span>
                </Button>
              </Card>
            </>
          ))}
      </div>
    </>
  );
};

export default ClientesAdeudados;
