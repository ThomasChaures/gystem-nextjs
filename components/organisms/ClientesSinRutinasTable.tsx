"use client";

import Table from "../atoms/Table";
import TableRow from "../atoms/TableRow";
import { Plus } from "lucide-react";
import TableCell from "../atoms/TableCell";
import Button from "../atoms/Button";
import useClientes from "@/hooks/useClientes";


export default function ClientesSinRutinasTable() {
  const { clientes } = useClientes();
  return (
    <Table
      headers={["Nombre", "DNI", ""]}
      data={clientes}
      renderRow={(user) => (
        <TableRow key={user.id}>
          <TableCell rounded first>
            {user.nombre} {user.apellido}
          </TableCell>
          <TableCell>{user.dni}</TableCell>
          <TableCell rounded last align="center">
            <Button variant="link">
             <Plus />  Agregar rutina
            </Button>
          </TableCell>
        </TableRow>
      )}
    />
  );
}
