"use client";

import Table from "../atoms/Table";
import TableRow from "../atoms/TableRow";
import TableCell from "../atoms/TableCell";
import Button from "../atoms/Button";
import useClientes from "@/hooks/useClientes";
import { Eye, Pencil, Trash2, Plus, CircleX, CircleCheck } from "lucide-react";

const users = [
  {
    id: 1,
    nombre: "Juan Pérez",
    dni: "40123456",
    rutina: true,
    adeudado: false,
  },
  {
    id: 2,
    nombre: "Lucía Gómez",
    dni: "39222111",
    rutina: false,
    adeudado: true,
  },
];

export default function ClientesTable() {
  const { clientes } = useClientes();
  return (
    <Table
      headers={["Nombre", "DNI", "Rutina", "Estado", "Acciones"]}
      data={clientes}
      renderRow={(user) => (
        <TableRow key={user.id}>
          <TableCell rounded first>
            {user.nombre} {user.apellido}
          </TableCell>
          <TableCell>{user.dni}</TableCell>
          <TableCell>{user.rutina ? <CircleCheck /> : <CircleX />}</TableCell>
          <TableCell>
            {user.adeudado ? (
              <span className="text-red-600 font-medium"><CircleX /></span>
            ) : (
              <span className="text-green-600 font-medium"><CircleCheck /></span>
            )}
          </TableCell>
          <TableCell rounded last align="left">
            <div className="w-full flex items-center gap-x-3">
              {user.rutina ? (
              <></>
            ) : (
              <Button variant="link" className="text-white p-2! rounded-full! text-sm!">
                <Plus />
              </Button>
            )}
            <Button variant="link" className="bg-blue-500 hover:bg-blue-700 text-white p-2! rounded-full! text-sm!">
              <Eye size={20} />
            </Button>
            <Button variant="link" className="text-white bg-violet-500 hover:bg-violet-700 p-2! rounded-full! text-sm!">
              <Pencil size={20} />
            </Button>
            <Button variant="link" className="text-white bg-red-500 hover:bg-red-700 p-2! rounded-full! text-sm!">
              <Trash2 size={20} />
            </Button>
            </div>
          </TableCell>
        </TableRow>
      )}
    />
  );
}
