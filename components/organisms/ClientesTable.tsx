"use client";

import Table from "../atoms/Table";
import TableRow from "../atoms/TableRow";
import TableCell from "../atoms/TableCell";
import Button from "../atoms/Button";
import useClientes from "@/hooks/useClientes";
import {
  Eye,
  Pencil,
  Trash2,
  Plus,
  CircleX,
  CircleCheck,
  EllipsisVertical,
} from "lucide-react";
import { IconCircleXFilled } from "@tabler/icons-react";

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
      headers={["Nombre", "DNI", "Telefono", "Rutina", "Estado", "Sede", ""]}
      data={clientes}
      renderRow={(user) => (
        <TableRow key={user.id}>
          <TableCell first>{user.name}</TableCell>
          <TableCell>{user.dni}</TableCell>
          <TableCell>{user.phone}</TableCell>
          <TableCell>
            {user.has_routine ? (
              <CircleCheck />
            ) : (
              <IconCircleXFilled color="red" />
            )}
          </TableCell>
          <TableCell>
            {user.status === "active" && (
              <span className="text-green-600 font-medium">Activo</span>
            )}

            {user.status === "inactive" && (
              <span className="text-gray-500 font-medium">Inactivo</span>
            )}

            {user.status === "overdue" && (
              <span className="text-red-600 font-medium">Adeudado</span>
            )}
          </TableCell>

          <TableCell>
            {user.gym}
          </TableCell>

          <TableCell last align="left">
            <div className="w-full flex items-center justify-end">
              <div className="h-10 w-10 bg-gray-300/20 rounded-xl flex items-center justify-center">
                <EllipsisVertical size={20} />
              </div>
            </div>
            {/* <div className="w-full flex items-center gap-x-3">
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
            */}
          </TableCell>
        </TableRow>
      )}
    />
  );
}
