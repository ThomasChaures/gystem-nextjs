"use client";

import React from "react";
import { EllipsisVertical } from "lucide-react";
import Table from "../atoms/Table";
import TableRow from "../atoms/TableRow";
import TableCell from "../atoms/TableCell";

const RutinasTable = () => {
  const rutinas = [
    { id: 1, nombre: "", cliente: "María Gómez", fecha: "2025-11-07" },
    { id: 2, nombre: "", cliente: "Lucas Fernández", fecha: "2025-11-07" },
    { id: 3, nombre: "", cliente: "Sofía Martínez", fecha: "2025-11-07" },
    { id: 4, nombre: "", cliente: "Juan Pérez", fecha: "2025-11-07" },
    { id: 5, nombre: "", cliente: "Ana López", fecha: "2025-11-07" },
  ];
  return (
    <>
      <Table
        headers={["#", "Cliente", "Creación", ""]}
        data={rutinas}
        renderRow={(rutina) => (
          <TableRow key={rutina.id}>
            <TableCell first># {rutina.id}</TableCell>
            <TableCell>{rutina.cliente}</TableCell>
            <TableCell>{rutina.fecha}</TableCell>
            <TableCell last align="left">
              <div className="w-full flex items-center justify-end">
                <div className="h-10 w-10 bg-gray-300/20 rounded-xl flex items-center justify-center">
                  <EllipsisVertical size={20} />
                </div>
              </div>
            </TableCell>
          </TableRow>
        )}
      ></Table>
    </>
  );
};

export default RutinasTable;
