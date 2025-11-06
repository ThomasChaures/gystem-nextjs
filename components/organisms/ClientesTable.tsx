"use client";

import Table from "../atoms/Table";
import TableRow from "../atoms/TableRow";
import TableCell from "../atoms/TableCell";
import Button from "../atoms/Button";
import useClientes from "@/hooks/useClientes";

const users = [
  { id: 1, nombre: "Juan Pérez", dni: "40123456", rutina: true, adeudado: false },
  { id: 2, nombre: "Lucía Gómez", dni: "39222111", rutina: false, adeudado: true },
];

export default function ClientesTable() {
    const {clientes} = useClientes();
  return (
    <Table
      headers={["Nombre", "DNI", "Rutina", "Estado", "Acciones"]}
      data={clientes}
      renderRow={(user) => (
        <TableRow key={user.id}>
          <TableCell rounded first>{user.nombre} {user.apellido}</TableCell>
          <TableCell>{user.dni}</TableCell>
          <TableCell>{user.rutina ? "✅" : "❌"}</TableCell>
          <TableCell>
            {user.adeudado ? (
              <span className="text-red-600 font-medium">Adeudado</span>
            ) : (
              <span className="text-green-600 font-medium">Al día</span>
            )}
          </TableCell>
          <TableCell rounded last align="center">
            {user.rutina ? (
              <Button variant="link">Ver rutina</Button>
            ) : (
              <Button variant="link" className="text-green-600">
                Agregar rutina
              </Button>
            )}
          </TableCell>
        </TableRow>
      )}
    />
  );
}
